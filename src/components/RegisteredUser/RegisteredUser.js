import * as S from "./RegisteredUser.style";

import { useState } from "react";
import { ReactComponent as Password } from "assets/icons/password.svg";
import { ReactComponent as Person } from "assets/icons/person.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/call.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chatlink.svg";

import { Text, Divider, TextField, Button, Link } from "@ds/react";
import ChatButton from "utils/ContactMenuModal/ChatButton";
import PhoneButton from "utils/ContactMenuModal/PhoneButton";

const RegisteredUser = ({}) => {
  const [show, setShow] = useState(false);
  const onToggleShow = () => setShow((prev) => !prev);

  return (
    <S.Register>
      <S.RegisterContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <S.AlignItems>
              <Text variant="Headline-04" className="Title">
                Eba, você já tem um cadastro com a gente!
              </Text>

              <Link variant="primary-md-02" className="Link">
                &#8249; Voltar
              </Link>
            </S.AlignItems>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-02-lg">
                Se quiser, pode mudar a senha, realizar o login ou entrar em
                contato.
              </Text>
              <Text variant="Headline-07">Mudar a senha</Text>
              <Text variant="body-02-sm" className="FormText">
                Para cadastrar uma nova senha você pode solicitar um link por
                e-mail ou um código via SMS.
              </Text>

              <TextField
                className="FormInput"
                label="Informe seu CPF"
                mask="cpf-cnpj"
                placeholder="Apenas números"
              />
              <Text variant="body-02-sm">
                Por onde você prefere recuperar sua senha?
              </Text>
              <S.Button>
                <Button variant="secondary-md">E-mail</Button>

                <Button variant="secondary-md">SMS</Button>
              </S.Button>
              <Button variant="primary-01-md" className="FormButton">
                Enviar
              </Button>

              <Divider />
              <Text variant="Headline-07">Fazer o login</Text>

              <TextField
                className="FormInput"
                mask="cpf-cnpj"
                label="CPF"
                iconLeft={<Person />}
                placeholder="Apenas números"
              />
              <S.AlignInput>
                <TextField
                  type={show ? "text" : "password"}
                  label="Senha"
                  iconLeft={<Password />}
                  iconRight={
                    show ? (
                      <Link variant="primary-sm-02" className="FormLink">
                        {" "}
                        Ocultar senha{" "}
                      </Link>
                    ) : (
                      <Link variant="primary-sm-02" className="FormLink">
                        {" "}
                        Mostrar senha{" "}
                      </Link>
                    )
                  }
                  placeholder="Senha"
                  onClickIconRight={onToggleShow}
                />
              </S.AlignInput>
              <Button className="FormButton" variant="primary-01-md">
                Fazer o login
              </Button>
              <Divider />
              <Text variant="Headline-07">Fale com a nossa Central</Text>
              <Text variant="body-02-sm">Por telefone, ligue para</Text>
              <PhoneButton
                className="Phone"
                icon={<PhoneIcon />}
                number="0800 702 4280"
                subtitle="Atendimento 24h, todos os dias."
              />
              <Text variant="body-02-sm">
                Se preferir, fale no chat de segunda à sexta, das 8h às 21h e
                aos sábados, das 9h às 16h (horário de Brasília), exceto em
                feriados nacionais.
              </Text>
              <ChatButton
                icon={<ChatIcon />}
                title="Abrir o Chat"
                onClick={() => window.open("Chat", "height=600,width=500")}
              />
            </S.AlignItems>
          </S.Grid.Item>
        </S.Grid>
      </S.RegisterContent>
    </S.Register>
  );
};

export default RegisteredUser;
