import React, { createContext, useState, useContext, ReactNode } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/react';

export interface PanelOptions {
  title: string;
  size: 'sm' | 'md' | 'lg';
  render: (onSubmit: () => void, onCancel: () => void) => ReactNode;
}

export interface PanelProps extends PanelOptions {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

const PanelContext = createContext<(options: PanelOptions) => Promise<void>>(
  Promise.reject
);

export const usePanel = () => {
  const panelContext = useContext(PanelContext);
  return panelContext;
};

export const AppPanel: React.FC<PanelProps> = ({
  title,
  size = 'md',
  render,
  onSubmit,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const value = (options: any) => {
    return new Promise<void>((resolve) => {
      if (options.open) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
      resolve();
    });
  };
  return (
    <PanelContext.Provider value={value}>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} size={size}>
        <DrawerOverlay w={'full'} />
        <DrawerContent h={'100%'}>
          <DrawerCloseButton zIndex={5} color={'white'} />
          <DrawerHeader borderBottomWidth='1px'>{title}</DrawerHeader>

          <DrawerBody p={4}>{render && render(onSubmit, onClose)}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </PanelContext.Provider>
  );
};
