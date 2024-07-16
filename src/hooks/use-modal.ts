import { useState } from 'react';

interface IUseModalReturnType {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useModal(initialState = false): IUseModalReturnType {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  function handleCloseModal(): void {
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    handleCloseModal,
    setIsModalOpen,
  };
}
