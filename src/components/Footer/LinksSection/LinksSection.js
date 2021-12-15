import React from "react";
import { Link } from "@ds/react";
import * as S from "./LinksSection.style";

const LinksSection = () => {
  return (
    <S.Items>
      <S.Item data-label="footer cnp link">
        <Link variant="primary-sm-02-inverse" href="#" target="_blank">
          A CNP Seguros Holding Brasil
        </Link>
      </S.Item>
      <S.Item data-label="footer cnp link">
        <Link variant="primary-sm-02-inverse" href="#" target="_blank">
          Produtos
        </Link>
      </S.Item>
      <S.Item data-label="footer cnp link">
        <Link variant="primary-sm-02-inverse" href="#" target="_blank">
          Para empresas
        </Link>
      </S.Item>
      <S.Item data-label="footer cnp link">
        <Link variant="primary-sm-02-inverse" href="#" target="_blank">
          Atendimento
        </Link>
      </S.Item>
      <S.Item data-label="footer privacidade link">
        <Link variant="primary-sm-02-inverse" href="#" target="_blank">
          Política de Privacidade
        </Link>
      </S.Item>
    </S.Items>
  );
};

export default LinksSection;
