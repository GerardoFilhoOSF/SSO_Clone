import React from "react";
import { Text, Link } from "@ds/react";
import * as S from "./ItemContent.style";
import { phoneToHref } from "utils/string";
import { smsToHref } from "utils/string";

const ItemContent = () => {
  return (
    <S.Container>
      <S.Message variant="body-02-md"></S.Message>
      <S.Section>
        <S.Item>
          <S.Divider orientation="vertical" />
          <S.Content>
            <S.Block>
              <S.Title variant="headline-07">Central de relacionamento</S.Title>
              <Text variant="caption-02">
                Informações sobre o seu título, pagamento, resgate e outras
                dúvidas.
              </Text>
            </S.Block>
            <S.Block>
              <Link variant="primary-lg-01" href={phoneToHref("0800 702 4231")}>
                0800 702 4231
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
              <S.Title variant="headline-07">
                Para acionar ou <br></br>acompanhar o seguro
              </S.Title>
            </S.Block>
            <S.Block>
              <Link variant="primary-lg-01" href={phoneToHref("0800 722 2492")}>
                0800 722 2492
              </Link>
            </S.Block>
            <Text variant="caption-02">
              Estamos aqui pra você 24h, a qualquer hora é só ligar.
            </Text>
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
                Informações, dúvidas, sugestões, reclamações e cancelamentos.
              </Text>
            </S.Block>
            <S.Block>
              <Link variant="primary-lg-01" href={phoneToHref("0800 702 4280")}>
                0800 702 4280
              </Link>
              <span>
                <Text variant="caption-02">Atendimento 24h</Text>
              </span>
            </S.Block>
          </S.Content>
        </S.Item>
      </S.Section>
      <S.Section>
        <S.Item>
          <S.Divider orientation="vertical" />
          <S.Content>
            <S.Block>
              <S.Title variant="headline-07">Atendimento ao surdo</S.Title>
            </S.Block>
            <S.Block>
              <Link variant="primary-md-01">
                Converse em libras com um atendente
              </Link>
              <span>
                <Text variant="caption-02">
                  Serviço exclusivo para pessoas com deficiência auditiva ou de
                  fala.
                </Text>
              </span>
            </S.Block>
            <S.Block>
              <Text variant="body-01-sm">
                <span>
                  Se preferir, envie um{" "}
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
              <Link variant="primary-sm-01">Abrir ocorrência de Ouvidoria</Link>
            </S.Block>
          </S.Content>
        </S.Item>
      </S.Section>
    </S.Container>
  );
};

export default ItemContent;
