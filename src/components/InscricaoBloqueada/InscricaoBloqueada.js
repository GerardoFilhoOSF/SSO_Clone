import * as S from "./InscricaoBloqueada.style";
import { Text } from "@ds/react";

import ChatButton from "utils/ContactMenuModal/ChatButton";
import PhoneButton from "utils/ContactMenuModal/PhoneButton";

import { ReactComponent as PhoneIcon } from "assets/icons/call.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chatlink.svg";

const InscricaoBloqueada = () => {
  return (
    <S.InscricaoBloqueada>
      <S.InscricaoBloqueadaContent>
        <S.Grid>
          <S.Grid.Item xs={1} lg={1 / 3}>
            <Text variant="Headline-04" className="title">
              Você precisa entrar em contato com a gente
            </Text>
          </S.Grid.Item>

          <S.Grid.Item xs={1} lg={1 / 2} className="FormSide">
            <S.AlignItems>
              <Text variant="body-02-lg">
                Por motivos de segurança, você deve entrar em contato com o
                Serviço de Atendimento ao Consumidor (SAC).
              </Text>
              <Text variant="body-02-sm">Por telefone, ligue para</Text>
              <PhoneButton
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
      </S.InscricaoBloqueadaContent>
    </S.InscricaoBloqueada>
  );
};

export default InscricaoBloqueada;
