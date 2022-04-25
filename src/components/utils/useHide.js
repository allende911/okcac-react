import { useState } from 'react';

export const useHide = () => {
  const [hide, setHide] = useState(false);
  const handleHide = () => setHide(!hide);
};
