import s from "./NavigationItem.styles.module.css";
import { NavLink } from "react-router-dom";
export default function Navigationlink({ to, text, icon }) {
  return (
    <li className={s.item} activeClassName={s.active}>
      <NavLink to={to} className={s.link}>
        {icon}
        {text}
      </NavLink>
    </li>
  );
}
