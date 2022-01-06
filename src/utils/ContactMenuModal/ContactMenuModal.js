import { GeneralModal } from "../GeneralModal/GeneralModal.style";

import ChatButton from "./ChatButton";
import PhoneButton from "./PhoneButton";

import { ReactComponent as ChatIcon } from "shared/react/assets/icons/chat.svg";
import { ReactComponent as PhoneIcon } from "shared/react/assets/icons/call.svg";
import useUserInfo from "shared/react/hooks/useUserInfo";

const ContactMenuModal = ({ closeActionText, ...props }) => {
  const user = useUserInfo();

  const getChatUrl = () => {
    const chatParams = `name=${user.name}&email=${user.email}&document=${user.cpf}`;
    return `${process.env.REACT_APP_CHAT}${chatParams}`;
  };

  return (
    <GeneralModal
      {...props}
      closeActionProps={{ text: closeActionText || "Entendi" }}
    >
      <ChatButton
        icon={<ChatIcon />}
        title="Abrir o Chat"
        onClick={() =>
          window.open(getChatUrl(), "Chat", "height=600,width=500")
        }
      />
      <PhoneButton
        icon={<PhoneIcon />}
        number="0800 272 2021"
        subtitle="Ligação gratuita"
        description="Central de atendimento"
      />
    </GeneralModal>
  );
};

export default ContactMenuModal;
