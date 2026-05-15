import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ?? initialValue;
  });

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValue(item);
      setStoredValue(item);
    }
  }, []);

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
