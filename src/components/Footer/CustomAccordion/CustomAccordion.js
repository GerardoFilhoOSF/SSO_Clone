import React from "react";
import ItemContent from "./ItemContent";
import { ReactComponent as PhoneBookIcon } from "./../../../assets/icons/phone-book.svg";
import * as S from "./CustomAccordion.style";

const data = [
  {
    title: "Fale com a CNP",
    icon: <PhoneBookIcon />,
    body: <ItemContent />,
  },
];

const CustomAccordion = () => {
  return (
    <>
      <S.Container>
        <S.CustomAccordion items={data} />
      </S.Container>
      <S.FullDivider />
    </>
  );
};

export default CustomAccordion;
