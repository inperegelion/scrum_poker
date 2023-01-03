export const API_PORT = "3002"; // todo: will be replaced once upon deploy

export function getApiUrlFromLocation(location: Location): string {
  return `${location.protocol}//${location.hostname}:${API_PORT}`;
}
