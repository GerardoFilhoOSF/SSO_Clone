import * as S from "./Register.style";

import { useState } from "react";
import { ReactComponent as Password } from "assets/icons/password.svg";
import { ReactComponent as Warning } from "assets/icons/warningg.svg";

import {
  Text,
  Divider,
  TextField,
  FullDoubleButton,
  Feedback,
  Button,
  Recaptcha,
  Link,
} from "@ds/react";

const Register = ({ ...args }) => {
  const [show, setShow] = useState(false);
  const onToggleShow = () => setShow((prev) => !prev);

  return (
    <S.Register>
      <S.RegisterContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <S.AlignItems>
              <Text variant="Headline-04">Cadastre-se agora</Text>
              <Text variant="body-02-lg">
                Seus dados serão utilizados e armazenados para a sua segurança e
                autenticação em nosso site. Podemos utilizar para outros fins,
                que estão detalhados em nossa Política de Privacidade.
              </Text>
              <Link variant="primary-md-02">&#8249; Voltar</Link>
            </S.AlignItems>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="Headline-07">Dados pessoais</Text>
              <TextField
                label="Qual seu nome completo?"
                description="Sem usar abreviações, ok?"
              />

              <TextField
                className="FormInput"
                label="E o seu CPF?"
                placeholder="Apenas números"
              />
              <TextField
                className="FormInput"
                label="Data de nascimento"
                placeholder="Apenas números"
              />
              <TextField
                label="Nome completo da mãe"
                description="Sem abreviações também"
              />

              <Divider />

              <Text variant="Headline-07">Contato</Text>
              <TextField
                className="FormInput"
                label="Celular"
                placeholder="Apenas números"
              />
              <TextField label="E-mail" />
              <Text variant="body-02-sm">
                Sempre que houver novidades, ofertas e promoções de nossos
                serviços, sejam das empresas do nosso grupo ou de parceiros,
                gostaríamos de te avisar através dos seus contatos cadastrados.
                Assim, você não perde nenhuma oportunidade. Deseja receber?
              </Text>

              <FullDoubleButton
                variant="primary-01"
                primaryProps={{
                  children: "Sim",
                  onClick: () => {
                    console.log("Action");
                  },
                }}
                secondaryProps={{
                  children: "Não",
                  onClick: () => {
                    console.log("Action");
                  },
                }}
              />

              <Divider />

              <Text variant="Headline-07">Senha de acesso</Text>
              <Text variant="caption-01">Sua senha deve conter:</Text>

              <Feedback
                icon={<Warning />}
                color="#7F9398"
                text="No mínimo 8 caracteres;"
              />
              <Feedback
                icon={<Warning />}
                color="#7F9398"
                text="Pelo menos uma letra MAIÚSCULA e uma minúscula;"
              />
              <Feedback
                icon={<Warning />}
                color="#7F9398"
                text="Pelo menos um número;"
              />
              <Feedback
                icon={<Warning />}
                color="#7F9398"
                text="Pelo menos um caractere especial."
              />

              <TextField
                {...args}
                type={show ? "text" : "password"}
                label="Informe sua senha"
                progressValue={20}
                iconLeft={<Password />}
                iconRight={
                  show ? (
                    <Link variant="primary-sm-02"> Ocultar senha </Link>
                  ) : (
                    <Link variant="primary-sm-02"> Mostrar senha </Link>
                  )
                }
                placeholder="Informe sua senha"
                onClickIconRight={onToggleShow}
              />
              <TextField
                label="Informe sua senha"
                iconLeft={<Password />}
                placeholder="Informe sua senha"
              />
              <Recaptcha sitekey={"6LdSLSQcAAAAAKrR_GxG_y8JJK4b1lVCiiALBYaA"} />
              <Button className="FormButton" variant="primary-01-md">
                Criar meu cadastro
              </Button>
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.RegisterContent>
    </S.Register>
  );
};

export default Register;
