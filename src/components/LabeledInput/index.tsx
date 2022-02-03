import { InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface LabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function LabeledInput({ label, ...rest }: LabeledInputProps) {
  return (
    <div className={styles.container}>
      <p>{label}</p>
      <input {...rest} />
    </div>
  );
}
