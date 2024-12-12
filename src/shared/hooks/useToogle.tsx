'use client';

import { useState } from 'react';

export const useToggle = (initialValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const openHandler = () => {
    setIsOpen(true);
  };

  return { isOpen, toggleHandler, closeHandler, openHandler };
};
