import React from "react";
import { Link } from "@ds/react";
import * as S from "./LinksSection.style";
import { ReactComponent as Logo } from "assets/images/Logo-Footer.svg";

const LinksSection = () => {
  return (
    <>
      <S.Items>
        <S.Item data-label="footer cnp link">
          <Logo data-label="footer logo" />
        </S.Item>
      </S.Items>
      <S.Items>
        <S.Item data-label="cnp consorcio link">
          <Link variant="primary-sm-02-inverse" href="#" target="_blank">
            A CNP Consórcio
          </Link>
        </S.Item>
        <S.Item data-label="cookies link">
          <Link variant="primary-sm-02-inverse" href="#" target="_blank">
            Cookies
          </Link>
        </S.Item>
        <S.Item data-label="footer privacidade link">
          <Link
            variant="primary-sm-02-inverse"
            href="https://portalprivacidade.cnpbrasil.com.br/s/"
            target="_blank"
          >
            Política de Privacidade
          </Link>
        </S.Item>
      </S.Items>
    </>
  );
};

export default LinksSection;
