import React from "react";
import { Link } from "@ds/react";
import * as S from "./LinksSection.style";

const LinksSection = () => {
  return (
    <S.Items>
      <S.Item data-label="footer cnp link">
        {/* <Logo data-label="footer logo" /> */}
      </S.Item>
      <S.Item data-label="footer cnp link">
        <Link variant="primary-sm-02-inverse" href="#" target="_blank">
          Sobre o Cap Vencedor
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
