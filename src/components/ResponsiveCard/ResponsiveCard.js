import * as S from "./ResponsiveCard.style";

const ResponsiveCard = ({
  title,
  caption,
  description,
  customSection,
  reverse,
}) => {
  return (
    <S.ResponsiveCard reverse={reverse}>
      <S.Item>{customSection}</S.Item>
      <S.Item className="content">
        <S.Title variant="headline-05">{title}</S.Title>
        {caption && <S.Caption variant={`caption-0`}>{caption}</S.Caption>}
        <S.Description variant="body02-md">{description}</S.Description>
      </S.Item>
    </S.ResponsiveCard>
  );
};

export default ResponsiveCard;
