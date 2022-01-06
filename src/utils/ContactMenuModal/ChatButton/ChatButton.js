import { Text } from "@ds/react";
import * as S from "./ChatButton.style";

const ChatButton = ({ title, icon, onClick }) => {
  return (
    <S.ChatButton onClick={onClick}>
      {icon && <S.LeadingIcon>{icon}</S.LeadingIcon>}
      <Text variant="body-01-md">{title}</Text>
    </S.ChatButton>
  );
};

export default ChatButton;
