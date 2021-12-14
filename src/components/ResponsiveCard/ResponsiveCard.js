import { Button, FullTextDoubleButton, useDeviceType } from "@ds/react";
import * as S from "./ResponsiveCard.style";

const renderActions = (actions, desktop) => {
  if (actions.length === 1 && !desktop) {
    const PrimaryIcon = actions[0].icon;
    const hasVariant = actions[0].variant;
    const variant = hasVariant || "full-text-single-md-icon";

    return (
      <Button
        variant={variant}
        onClick={actions[0].onClick}
        className={`action-buttons ${hasVariant && "main-button"}`}
        {...actions[0]}
      >
        {PrimaryIcon && <PrimaryIcon />}
        {actions[0].label}
      </Button>
    );
  }

  if (actions.length === 2 && !desktop) {
    const PrimaryIcon = actions[0].icon;
    const SecondaryIcon = actions[1].icon;

    return (
      <FullTextDoubleButton
        className="action-buttons"
        variant="double"
        primaryProps={{
          children: (
            <>
              {PrimaryIcon && <PrimaryIcon />}
              {actions[0].label}
            </>
          ),
          onClick: actions[0].onClick,
        }}
        secondaryProps={{
          children: (
            <>
              {SecondaryIcon && <SecondaryIcon />}
              {actions[1].label}
            </>
          ),
          onClick: actions[1].onClick,
        }}
      />
    );
  }

  return actions.map(({ label, onClick, ...props }, index) => (
    <Button
      {...props}
      key={index}
      variant={index > 0 ? "secondary-md" : "primary-01-md"}
      onClick={onClick}
    >
      {label}
    </Button>
  ));
};

const ResponsiveCard = ({
  lead,
  title,
  caption,
  description,
  customSection,
  actions,
  reverse,
}) => {
  const { lg } = useDeviceType();
  const reserveActions = !(lg && reverse);

  return (
    <S.ResponsiveCard reverse={reverse}>
      <S.Item>
        {customSection}
        {actions && (
          <>
            {reserveActions && (
              <S.Actions>{renderActions(actions, lg)}</S.Actions>
            )}
          </>
        )}
      </S.Item>
      <S.Item className="content">
        <S.Lead variant="lead-text">{lead}</S.Lead>
        <S.Title variant="headline-05">{title}</S.Title>
        {caption && <S.Caption variant={`caption-0`}>{caption}</S.Caption>}
        <S.Description variant="body02-md">{description}</S.Description>

        {actions && (
          <>
            {!reserveActions && (
              <S.Actions>{renderActions(actions, lg)}</S.Actions>
            )}
          </>
        )}
      </S.Item>
    </S.ResponsiveCard>
  );
};

export default ResponsiveCard;
