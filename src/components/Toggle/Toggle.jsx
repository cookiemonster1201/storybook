import { HiArrowSmLeft } from "react-icons/hi";
import s from "./Toggle.module.css";
export default function Toggle({ reversed = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${s.button} ${reversed ? s.reversed : ""}`}
    >
      <HiArrowSmLeft size="24" />
    </button>
  );
}
