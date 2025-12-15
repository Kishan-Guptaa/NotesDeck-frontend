"use client";

import { useEffect, type ReactNode } from "react";

export default function NoCopyZone({ children }: { children: ReactNode }) {
  useEffect(() => {
    function prevent(e: Event) {
      e.preventDefault();
    }

    function blockKeys(e: KeyboardEvent) {
      const meta = e.ctrlKey || e.metaKey;
      if (!meta) return;
      const blocked = ["c", "u", "s", "a", "x", "p"];
      if (blocked.includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }

    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("contextmenu", prevent);
    document.addEventListener("dragstart", prevent);
    document.addEventListener("selectstart", prevent);
    document.addEventListener("keydown", blockKeys, { capture: true });

    return () => {
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("dragstart", prevent);
      document.removeEventListener("selectstart", prevent);
      document.removeEventListener("keydown", blockKeys, { capture: true });
    };
  }, []);

  return <div className="select-none">{children}</div>;
}
