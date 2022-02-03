import { ButtonHTMLAttributes, ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.container}>
      {children} <FiArrowRight size="1.125rem" color="var(--white)" />
    </button>
  );
}
