import { Text } from "@ds/react";
import * as S from "./PhoneButton.style";

const PhoneButton = ({ number, subtitle, icon }) => (
  <S.LinkCallPhone href={`tel:+55${number.replace(/\s/g, "")}`}>
    <S.PhoneButton>
      {icon && <S.LeadingIcon>{icon}</S.LeadingIcon>}
      <S.SectionTitle>
        <Text display="block" variant="body-01-md">
          {number}
        </Text>
        <Text display="block" variant="caption-02">
          {subtitle}
        </Text>
      </S.SectionTitle>
    </S.PhoneButton>
  </S.LinkCallPhone>
);

export default PhoneButton;
