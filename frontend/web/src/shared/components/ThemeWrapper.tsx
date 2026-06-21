"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = useThemeStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    if (useThemeStore.persist.hasHydrated()) {
      setHydrated(true);
    }
    return unsub;
  }, []);

  useEffect(() => {
    if (hydrated) {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme, hydrated]);

  return <>{children}</>;
}
