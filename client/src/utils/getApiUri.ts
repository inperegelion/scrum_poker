export function getApiUrlFromLocation(location: Location): string {
  return `${location.protocol}//${location.hostname}/api`;
}
