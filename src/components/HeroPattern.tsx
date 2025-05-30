"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export function HeroPattern() {
  const { resolvedTheme } = useTheme();
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    if (resolvedTheme) {
      setBgImage(
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${
          resolvedTheme === "dark"
            ? "rgb(255 255 255 / 0.08)"
            : "rgb(15 23 42 / 0.04)"
        }'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`
      );
    }
  }, [resolvedTheme]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      {bgImage && (
        <div
          className="absolute inset-0 bg-[size:30px_30px]"
          style={{ backgroundImage: bgImage }}
        />
      )}
    </div>
  );
}
