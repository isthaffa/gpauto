/**
 * Prefixes public asset paths with Vite's base URL.
 * Usage: assetPath("/assets/img/icon/email.svg")
 */
const base = import.meta.env.BASE_URL;

export const assetPath = (path) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

/**
 * Deep-processes any data structure (object/array/string),
 * replacing all "/assets/" prefixed strings with base-prefixed versions.
 * Use for JSON data imports.
 * Usage: const data = withBase(rawJsonData);
 */
export const withBase = (data) => {
  if (typeof data === "string") {
    return data.startsWith("/assets/") ? assetPath(data) : data;
  }
  if (Array.isArray(data)) {
    return data.map(withBase);
  }
  if (data && typeof data === "object") {
    const result = {};
    for (const key in data) {
      result[key] = withBase(data[key]);
    }
    return result;
  }
  return data;
};
