import React from "react";
import { Text, Link } from "@ds/react";
import * as S from "./ItemContent.style";
import { phoneToHref, smsToHref } from "./../../../../utils/string";

const ItemContent = () => {
  return (
    <S.Container>
      <S.Message variant="body-02-md">
        Sempre que precisar, fale com a gente!
      </S.Message>
      <S.Section>
        <S.Item>
          <S.Divider orientation="vertical" />
          <S.Content>
            <S.Block>
              <S.Title variant="headline-07">Central de Relacionamento</S.Title>
              <Text variant="caption-02">
                Informações sobre o seu título, pagamento, resgate e outras
                dúvidas.
              </Text>
            </S.Block>
            <S.Block>
              <Link variant="primary-lg-01" href={phoneToHref("0800 272 2021")}>
                0800 272 2021
              </Link>
              <Text variant="caption-02">
                Das 8h às 21h, de segunda a sexta, exceto em feriados nacionais.
              </Text>
            </S.Block>
          </S.Content>
        </S.Item>
        <S.Item>
          <S.Divider orientation="vertical" />
          <S.Content>
            <S.Block>
              <S.Title variant="headline-07">Atendimento ao surdo</S.Title>
            </S.Block>
            <S.Block>
              <Text variant="body-01-sm">
                <span>
                  Envie um{" "}
                  <Link
                    variant="primary-sm-01"
                    href={smsToHref("29734", "CSSAC")}
                  >
                    SMS para 29734
                  </Link>{" "}
                  com a palavra “CSSAC”
                </span>
              </Text>
            </S.Block>
            <S.Block>
              <Text variant="caption-02">
                ou ligue para 0800 702 4260 usando um aparelho adaptado com
                teclado alfanumérico.
              </Text>
            </S.Block>
          </S.Content>
        </S.Item>
        <S.Item>
          <S.Divider orientation="vertical" />
          <S.Content>
            <S.Block>
              <S.Title variant="headline-07">SAC</S.Title>
            </S.Block>
            <S.Block>
              <Text variant="caption-02">
                Atendimento ao público 24h para informações gerais do seu
                produto, dúvidas, sugestões ou reclamações.
              </Text>
            </S.Block>
            <S.Block>
              <Link variant="primary-lg-01" href={phoneToHref("0800 702 4280")}>
                0800 702 4280
              </Link>
            </S.Block>
          </S.Content>
        </S.Item>
      </S.Section>
      <S.Section>
        <S.Item>
          <S.Divider orientation="vertical" />
          <S.Content>
            <S.Block>
              <S.Title variant="headline-07">
                Acionamento do Seguro de Acidentes Pessoais
              </S.Title>
              <Text variant="caption-02">
                Para comunicar ou acompanhar o sinistro do seu seguro de
                acidentes pessoais – Vida, ligue: 0800 722 2492 – Opções 4 - 2.
              </Text>
            </S.Block>
            <S.Block>
              <Link variant="primary-lg-01" href={phoneToHref("0800 722 2492")}>
                0800 722 2492
              </Link>
            </S.Block>
          </S.Content>
        </S.Item>
        <S.Item>
          <S.Divider orientation="vertical" />
          <S.Content>
            <S.Block>
              <S.Title variant="headline-07">Ouvidoria</S.Title>
              <Text variant="caption-02">
                Já entrou em contato conosco pelos nossos canais de atendimento
                e não resolveu o que precisava? Contate a nossa Ouvidoria.
              </Text>
            </S.Block>
            <S.Block>
              <Link variant="primary-lg-01" href={phoneToHref("0800 702 4240")}>
                0800 702 4240
              </Link>
              <span>
                <Text variant="caption-02">
                  De segunda a sexta, das 8h às 18h, exceto em feriados
                  nacionais.
                </Text>
              </span>
            </S.Block>
          </S.Content>
        </S.Item>
      </S.Section>
    </S.Container>
  );
};

export default ItemContent;
