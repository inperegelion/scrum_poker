export const useLocalStorage = (
  storageKey: LocalStorageKeys
): [string | null, (arg: string) => void] => {
  const value = localStorage.getItem(storageKey);
  const setValue = (newValue: string) =>
    localStorage.setItem(storageKey, newValue);

  return [value, setValue];
};

export type LocalStorageKeys = "roomId" | "userId" | "username";
