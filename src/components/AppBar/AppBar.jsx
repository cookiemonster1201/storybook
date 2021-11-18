import { useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Toggle from "../Toggle/Toggle";
import s from "./AppBar.module.css";

export default function AppBar({ navItems, logoImg, minimized = false }) {
  const [isMinimized, setIsMinimized] = useState(minimized);
  const toggle = () => {
    setIsMinimized((state) => !state);
  };
  return (
    <div className={`${s.container} ${isMinimized ? s.minimized : ""}`}>
      <div className={s.logoThumb}>
        <Logo imageUrl={logoImg} />
      </div>
      <div className={s.content}>
        <Toggle reversed={isMinimized} onClick={toggle} />
        <Navigation items={navItems} />
      </div>
    </div>
  );
}
