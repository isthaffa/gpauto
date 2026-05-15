/**
 * This script updates all JSX files to use assetPath() for /assets/ references.
 * Run with: node scripts/fix-asset-paths.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');

// All files that need updating with their relative import paths
const files = {
  // Category 1 & 2: JSX files with src="/assets/" and/or data arrays
  'layout/Footer/Footer.jsx': '../../helper/assetPath',
  'components/Sliders/HeroSlider.jsx': '../../helper/assetPath',
  'components/Nav/NavMenu.jsx': '../../helper/assetPath',
  'components/Button/Button.jsx': '../../helper/assetPath',
  'components/ChooseUs/ChooseUs.jsx': '../../helper/assetPath',
  'components/Testimonial/Testimonial.jsx': '../../helper/assetPath',
  'components/AppointmentForm/AppointmentForm.jsx': '../../helper/assetPath',
  'components/FrequentlyQuestions/FrequentlyQuestions.jsx': '../../helper/assetPath',
  'components/Team/TeamDetailsSlider.jsx': '../../helper/assetPath',
  'components/Team/TeamCard.jsx': '../../helper/assetPath',
  'components/Team/SingleTeamMemberDetails.jsx': '../../helper/assetPath',
  'components/Team/MemberCard.jsx': '../../helper/assetPath',
  'components/Team/Teams.jsx': '../../helper/assetPath',
  'components/Team/SpecialistTeamMembers.jsx': '../../helper/assetPath',
  'components/Team/PersonDetails.jsx': '../../helper/assetPath',
  'components/Blog/BlogPost.jsx': '../../helper/assetPath',
  'components/Blog/Blogs.jsx': '../../helper/assetPath',
  'components/Blog/BlogFeature.jsx': '../../helper/assetPath',
  'components/ContactUs/ContactInfo.jsx': '../../helper/assetPath',
  'components/TrustedClient/TrustedClient.jsx': '../../helper/assetPath',
  'components/ServiceProgres/ServiceProgres.jsx': '../../helper/assetPath',
  'components/Pricing/PricingCard.jsx': '../../helper/assetPath',
  'components/Services/ServicesDetailContent.jsx': '../../helper/assetPath',
  'pages/Gallery.jsx': '../helper/assetPath',
};

// Category 3: Files that import JSON and need withBase
const jsonConsumers = {
  'pages/Blog.jsx': '../helper/assetPath',
  'pages/SingleBlog.jsx': '../helper/assetPath',
  'pages/Gallery.jsx': '../helper/assetPath',
  'pages/SingleService.jsx': '../helper/assetPath',
  'pages/Team.jsx': '../helper/assetPath',
  'pages/TeamMemberDetails.jsx': '../helper/assetPath',
  'components/Services/ServicesSection.jsx': '../../helper/assetPath',
  'components/Services/ServicesSectionTwo.jsx': '../../helper/assetPath',
};

let totalChanges = 0;

for (const [relPath, importPath] of Object.entries(files)) {
  const filePath = path.join(srcDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${relPath} (not found)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;

  // Add import if not already present
  if (!content.includes('assetPath')) {
    // Find the last import line
    const lines = content.split('\n');
    let lastImportIdx = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) lastImportIdx = i;
    }
    if (lastImportIdx >= 0) {
      lines.splice(lastImportIdx + 1, 0, `import { assetPath } from "${importPath}";`);
      content = lines.join('\n');
      changes++;
    }
  }

  // Replace src="/assets/..." with src={assetPath("/assets/...")}
  content = content.replace(/src="(\/assets\/[^"]+)"/g, (match, p1) => {
    changes++;
    return `src={assetPath("${p1}")}`;
  });

  // Replace standalone string values in data objects: "/assets/..." -> assetPath("/assets/...")
  // Match patterns like: key: "/assets/...", or "/assets/...",
  content = content.replace(/(:\s*)"(\/assets\/[^"]+)"/g, (match, prefix, p1) => {
    changes++;
    return `${prefix}assetPath("${p1}")`;
  });

  // Match array elements: "/assets/...",
  content = content.replace(/^(\s*)"(\/assets\/[^"]+)"(,?)$/gm, (match, indent, p1, comma) => {
    changes++;
    return `${indent}assetPath("${p1}")${comma}`;
  });

  if (changes > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`UPDATED: ${relPath} (${changes} changes)`);
    totalChanges += changes;
  }
}

// Handle JSON consumers - add withBase import and wrap JSON data
for (const [relPath, importPath] of Object.entries(jsonConsumers)) {
  const filePath = path.join(srcDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP JSON consumer: ${relPath} (not found)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;

  // Add withBase import
  if (!content.includes('withBase')) {
    if (content.includes('assetPath')) {
      // Already has assetPath import, add withBase
      content = content.replace(
        /import \{ assetPath \} from/,
        'import { assetPath, withBase } from'
      );
    } else {
      const lines = content.split('\n');
      let lastImportIdx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) lastImportIdx = i;
      }
      if (lastImportIdx >= 0) {
        lines.splice(lastImportIdx + 1, 0, `import { withBase } from "${importPath}";`);
        content = lines.join('\n');
      }
    }
    changes++;
  }

  // Find JSON imports and wrap with withBase
  // Pattern: import varName from "...Data.json" or "...data.json"
  content = content.replace(
    /import (\w+) from ["']([^"']*\.json)["'];/g,
    (match, varName, jsonPath) => {
      if (!content.includes(`withBase(${varName})`)) {
        changes++;
        return `import ${varName}Raw from "${jsonPath}";\nconst ${varName} = withBase(${varName}Raw);`;
      }
      return match;
    }
  );

  if (changes > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`UPDATED JSON consumer: ${relPath} (${changes} changes)`);
    totalChanges += changes;
  }
}

console.log(`\nTotal: ${totalChanges} changes across all files`);
