import { useEffect, useState } from "react";
export function Progress() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handler = () =>
      setValue(
        scrollY /
          Math.max(1, document.documentElement.scrollHeight - innerHeight),
      );
    addEventListener("scroll", handler, { passive: true });
    handler();
    return () => removeEventListener("scroll", handler);
  }, []);
  return (
    <aside className="progress" aria-label="Progreso de la historia">
      <i style={{ transform: `scaleY(${value})` }} />
    </aside>
  );
}
