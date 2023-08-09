import { useState } from 'react';

function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  function switchToggleValue() {
    setValue(!value);
  }
  return {
    value,
    switchToggleValue,
  };
}

export default useToggle;
