// Builds the logic-tier API base URL from the Codespaces environment.
// VITE_CODESPACE_NAME must be set (e.g. in .env.local) or this falls back to localhost.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api';

export function getEndpointUrl(resource) {
  return `${API_BASE_URL}/${resource}/`;
}

// Supports both plain array responses and paginated { results: [...] } responses.
export async function fetchResource(resource) {
  const response = await fetch(getEndpointUrl(resource));
  if (!response.ok) {
    throw new Error(`Failed to fetch ${resource}: ${response.status}`);
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
