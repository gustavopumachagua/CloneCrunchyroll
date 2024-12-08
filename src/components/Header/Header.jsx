import { useState, useEffect } from "react";
import { DesktopHeader } from "./HeaderDesktop/index";
import { MobileHeader } from "./HeaderMobile/index";

const Header = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    if (typeof window === "undefined") return; // Protección para entornos sin acceso a `window`.

    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150); // Debounce de 150ms para reducir llamadas innecesarias.
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
