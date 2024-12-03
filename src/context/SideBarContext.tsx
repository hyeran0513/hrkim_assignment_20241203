'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";

// Context 생성
const SidebarContext = createContext<{
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}>({
  isOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});

// Provider 컴포넌트
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// 커스텀 Hook
export const useSidebar = () => useContext(SidebarContext);
