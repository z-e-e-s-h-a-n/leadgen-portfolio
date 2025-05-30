"use client";

import React from "react";
import ThemeProvider from "@/providers/theme";

function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Provider;
