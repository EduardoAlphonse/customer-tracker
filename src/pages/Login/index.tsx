import { FormEvent, FormEventHandler } from "react";

import { FiLock } from "react-icons/fi";

import { LabeledInput } from "../../components/LabeledInput";
import { Button } from "../../components/Button";

import Logo from "../../assets/arca-data-logo-full.svg";

import styles from "./styles.module.scss";

export function Login() {
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <h2>
            Bem vindo ao
            <br />
            Customer Tracker
          </h2>

          <p>
            Para continuar,
            <br />
            insira seu ID e senha
          </p>

          <FiLock size="2.25rem" color="var(--text-light)" />

          <form onSubmit={handleLogin}>
            <LabeledInput
              label="ID de usuário"
              type="text"
              placeholder="jpqt8890"
            />
            <LabeledInput
              label="Senha"
              type="password"
              placeholder="**********"
            />

            <Button>Entrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
