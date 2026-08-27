// Builds the logic-tier API base URL from the Codespaces environment.
// VITE_CODESPACE_NAME must be set (e.g. in .env.local) or this falls back to localhost.
export const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

// Supports both plain array responses and paginated { results: [...] } responses.
export async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  const data = await response.json();
  if (Array.isArray(data)) {
    return data;
  }
  if (data && Array.isArray(data.results)) {
    return data.results;
  }
  return [];
}
