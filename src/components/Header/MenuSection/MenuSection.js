import React from "react";
import { Text } from "@ds/react";
import { ReactComponent as ArrowIcon } from "shared/react/assets/icons/arrow-down.svg";

import * as S from "./MenuSection.style";

const MenuSection = () => {
  return (
    <S.Items>
      <S.Item data-label="header home link">
        <S.HeaderLink href="/">
          <Text variant="button-02-sm">Página inicial</Text>
        </S.HeaderLink>
      </S.Item>
      <S.Item data-label="header produtos link">
        <S.HeaderLink href="#">
          <Text variant="button-02-sm">Produtos</Text>
          <S.Icon>
            <ArrowIcon />
          </S.Icon>
        </S.HeaderLink>
      </S.Item>
      <S.Item data-label="header empresas link">
        <S.HeaderLink href="#">
          <Text variant="button-02-sm">Para empresas</Text>
          <S.Icon>
            <ArrowIcon />
          </S.Icon>
        </S.HeaderLink>
      </S.Item>
      <S.Item data-label="header atendimento link">
        <S.HeaderLink href="#">
          <Text variant="button-02-sm">Atendimento</Text>
        </S.HeaderLink>
      </S.Item>
    </S.Items>
  );
};

export default MenuSection;
