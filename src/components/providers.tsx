"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const NextTheme = ({ children, ...rest }: ThemeProviderProps) => {
  return <ThemeProvider {...rest}>{children}</ThemeProvider>;
};
