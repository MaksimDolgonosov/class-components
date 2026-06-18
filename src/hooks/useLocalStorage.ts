import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      setValue(item);
    }
  }, [key]);

  const setStoredValue = (action: string) => {
    if (action === value) {
      return;
    }
    localStorage.setItem(key, action);
    setValue(action);
  };

  return { pokemon: value, setPokemon: setStoredValue };
};

export default useLocalStorage;
