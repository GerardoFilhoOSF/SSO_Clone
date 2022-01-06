import React from "react";
import { Text } from "@ds/react";
import * as S from "./SocialStoresSection.style";

import { ReactComponent as InstagramIcon } from "shared/react/assets/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "shared/react/assets/icons/twitter.svg";
import { ReactComponent as LinkedInIcon } from "shared/react/assets/icons/linkedin.svg";

import { ReactComponent as AppStoreIcon } from "shared/react/assets/icons/app-store.svg";
import { ReactComponent as GooglePlayIcon } from "shared/react/assets/icons/google-play.svg";

const SocialStoresSection = () => {
  return (
    <S.Container>
      <S.SocialSection>
        <Text variant="caption-01">Redes sociais</Text>
        <S.IconsSection>
          <S.LinkIcon href="#" target="_blank">
            <InstagramIcon />
          </S.LinkIcon>
          <S.LinkIcon>
            <TwitterIcon />
          </S.LinkIcon>
          <S.LinkIcon>
            <LinkedInIcon />
          </S.LinkIcon>
        </S.IconsSection>
      </S.SocialSection>
      <S.StoresSection>
        <Text variant="caption-01">Aplicativo</Text>
        <S.IconsSection>
          <S.IconsSection>
            <S.LinkIcon href="#" target="_blank">
              <AppStoreIcon />
            </S.LinkIcon>
            <S.LinkIcon>
              <GooglePlayIcon />
            </S.LinkIcon>
          </S.IconsSection>
        </S.IconsSection>
      </S.StoresSection>
    </S.Container>
  );
};

export default SocialStoresSection;
