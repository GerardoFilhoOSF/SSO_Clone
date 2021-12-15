import React from "react";
import { Text, Link } from "@ds/react";
import { phoneToHref } from "./../utils/phoneToHref";

export const items = [
  {
    subtitle: "Central de Serviços e Relacionamento",
    title: (
      <Link variant="primary-lg-01" href={phoneToHref("0800 702 4000")}>
        0800 702 4000
      </Link>
    ),
    description:
      "Das 8h às 21h, de segunda a sexta, exceto em feriados nacionais.",
  },
  {
    subtitle: "Whatsapp",
    title: (
      <Link variant="primary-lg-01" href={phoneToHref("61 2192 2020")}>
        61 2192 2020
      </Link>
    ),
    description:
      "Atendimento de segunda a sexta de 9h às 19h, pelo horário de Brasília. Não há atendimento em feriados nacionais.",
  },
  {
    subtitle: "Assistências 24h | Sinistros",
    title: (
      <Link variant="primary-lg-01" href={phoneToHref("0800 722 2492")}>
        0800 722 2492
      </Link>
    ),
    description:
      "Ligue a qualquer hora para comunicar algum incidente ou acionar suas assistências",
  },
  {
    subtitle: "SAC - Sugestões, dúvidas, reclamações e cancelamento",
    title: (
      <Link variant="primary-lg-01" href={phoneToHref("0800 702 4280")}>
        0800 702 4280
      </Link>
    ),
    description:
      "Informações, dúvidas, sugestões, reclamações e cancelamentos.",
  },
  {
    subtitle: "CAS - Canal de Atendimento ao Surdo",
    title: (
      <Link variant="primary-lg-01" href={phoneToHref("0800 702 4260")}>
        0800 702 4260
      </Link>
    ),
    description: (
      <div>
        <div>
          <Text variant="caption-02" margin>
            Faça a chamada a partir de um aparelho adaptado com teclado
            alfanumérico.
          </Text>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <Text variant="caption-02">
            Por SMS envie a palavra CSSAC para o número
          </Text>
        </div>
        <div>
          <Link variant="primary-lg-01" href={phoneToHref("29734")}>
            29734
          </Link>
        </div>
      </div>
    ),
  },
  {
    subtitle: "Ouvidoria",
    title: (
      <Link variant="primary-lg-01" href={phoneToHref("0800 702 4240")}>
        0800 702 4240
      </Link>
    ),
    description: (
      <>
        <div style={{ marginBottom: "12px" }}>
          <Text variant="caption-02">
            Sugestões, elogios, esclarecimentos e reclamações. De segunda a
            sexta, das 8h às 18h, exceto em feriados nacionais.
          </Text>
        </div>
      </>
    ),
    section: (
      <Link variant="primary-sm-02" href="#" target="_blank">
        Abrir ocorrência de Ouvidoria
      </Link>
    ),
  },
  {
    subtitle: "Clientes no exterior",
    description: (
      <div>
        <Text variant="caption-02">
          Para cada necessidade, um telefone. Clientes residentes no exterior,
          plano de saúde e odonto.
        </Text>{" "}
        <Link href="#" target="_blank">
          <Text variant="caption-02">Acesse aqui.</Text>
        </Link>
      </div>
    ),
    divider: false,
  },
];
