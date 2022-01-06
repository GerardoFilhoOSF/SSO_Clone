import React, { useState } from "react";

import { Button, Link, Recaptcha, Text, TextField } from "@ds/react";

import { ReactComponent as Person } from "assets/icons/person.svg";
import { ReactComponent as Password } from "assets/icons/password.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chat-header.svg";
import { ReactComponent as AccessibilityIcon } from "assets/icons/signs-language.svg";
import { ReactComponent as Logo } from "assets/images/Logo-Footer.svg";

import * as S from "./Login.style";

const Login = () => {
  const [show, setShow] = useState(false);
  const onToggleShow = () => setShow((prev) => !prev);
  return (
    <S.Login>
      <S.LoginContent>
        <S.NewHeader>
          <Logo />
          <S.Container>
            <ChatIcon className="chatIcon" />
            <AccessibilityIcon />
          </S.Container>
        </S.NewHeader>
        <S.Grid className="teste">
          <S.Grid.Item xs={1} lg={1 / 2} className="titleSide">
            <Text variant="headline-04" className="title">
              Que bom te ver por aqui :)
            </Text>
            <Text variant="body-02-lg">
              Gerencie seus produtos em um só lugar
            </Text>
          </S.Grid.Item>
          <S.Grid.Item xs={1} lg={1 / 2} className="formSide">
            <TextField
              error={false}
              errorMessage="CPF/CNPJ ou senha inválida"
              label="Digite seu CPF ou CNPJ"
              iconLeft={<Person />}
              placeholder="Apenas números"
              mask="cpf-cnpj"
            />
            <TextField
              type={show ? "text" : "password"}
              label="Agora, digite sua senha"
              iconLeft={<Password />}
              iconRight={
                show ? (
                  <Link variant="primary-sm-02" className="showPassword">
                    Ocultar senha
                  </Link>
                ) : (
                  <Link variant="primary-sm-02" className="showPassword">
                    Mostrar senha
                  </Link>
                )
              }
              placeholder="Senha"
              onClickIconRight={onToggleShow}
            />
            <Link
              variant="primary-sm-02-icon"
              onClick={() => {}}
              className="forgot"
            >
              Esqueci minha senha
            </Link>
            <S.Recaptcha>
              <Recaptcha
                className="recaptcha"
                sitekey={"6LdSLSQcAAAAAKrR_GxG_y8JJK4b1lVCiiALBYaA"}
              />
            </S.Recaptcha>
            <S.Button>
              <Button variant="primary-01-md" className="primary">
                Acessar
              </Button>
            </S.Button>
            <S.Button>
              <Button variant="secondary-md" className="secondary">
                Fazer cadastro
              </Button>
            </S.Button>
          </S.Grid.Item>
        </S.Grid>
      </S.LoginContent>
    </S.Login>
  );
};

export default Login;
