import * as S from "./Register.style";

import { ReactComponent as Password } from "assets/icons/password.svg";

import {
  Text,
  Divider,
  TextField,
  FullDoubleButton,
  Feedback,
  Grid,
  Button,
  Link,
} from "@ds/react";

const Register = () => {
  return (
    <S.Register>
      <Grid>
        <Grid.Item xs={1} lg={1 / 2}>
          <S.AlignItems>
            <Text variant="Headline-04">Cadastre-se agora</Text>
            <Text variant="body-02-lg">
              Seus dados serão utilizados e armazenados para a sua segurança e
              autenticação em nosso site. Podemos utilizar para outros fins, que
              estão detalhados em nossa Política de Privacidade.
            </Text>
            <Link variant="primary-md-02">&#8249; Voltar</Link>
          </S.AlignItems>
        </Grid.Item>

        <Grid.Item xs={1} lg={1 / 2}>
          <S.AlignItems>
            <Text variant="Headline-07">Dados pessoais</Text>
            <TextField
              label="Qual seu nome completo?"
              description="Sem usar abreviações, ok?"
            />
            <TextField label="E o seu CPF?" placeholder="Apenas números" />
            <TextField
              label="Data de nascimento"
              placeholder="Apenas números"
            />
            <TextField
              label="Nome completo da mãe"
              description="Sem abreviações também"
            />
            <Divider />

            <Text variant="Headline-07">Contato</Text>
            <TextField label="Celular" placeholder="Apenas números" />
            <TextField label="E-mail" />
            <Text variant="body-02-sm">
              Sempre que houver novidades, ofertas e promoções de nossos
              serviços, sejam das empresas do nosso grupo ou de parceiros,
              gostaríamos de te avisar através dos seus contatos cadastrados.
              Assim, você não perde nenhuma oportunidade. Deseja receber?
            </Text>
            <S.AlignButton>
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
            </S.AlignButton>
            <Divider />

            <Text variant="Headline-07">Senha de acesso</Text>
            <Text variant="caption-01">Sua senha deve conter:</Text>
            <S.Teste>
              <Feedback text="No mínimo 8 caracteres;" />
              <Feedback text="Pelo menos uma letra MAIÚSCULA e uma minúscula;" />
              <Feedback text="Pelo menos um número;" />
              <Feedback text="Pelo menos um caractere especial." />
            </S.Teste>
            <TextField
              label="Informe sua senha"
              iconLeft={<Password />}
              placeholder="Informe sua senha"
            />
            <TextField
              label="Confirme a senha"
              iconLeft={<Password />}
              placeholder="Informe novamente"
            />
            {/* <Recaptcha sitekey={"6LdSLSQcAAAAAKrR_GxG_y8JJK4b1lVCiiALBYaA"} /> */}
          </S.AlignItems>
          <Button variant="primary-01-md">Criar meu cadastro</Button>
        </Grid.Item>
      </Grid>
    </S.Register>
  );
};

export default Register;
