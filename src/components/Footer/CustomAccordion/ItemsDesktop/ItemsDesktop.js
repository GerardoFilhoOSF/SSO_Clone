import React from "react";
import { Divider, Grid, Text } from "@ds/react";
import { items } from "./../../../../mocks/items";
import * as S from "./ItemsDesktop.style";

const ItemsDesktop = () => {
  return (
    <S.Items>
      {items.map((item, index) => (
        <S.Item key={index}>
          <Grid>
            <Grid.Item lg={1 / 2}>
              <S.Section>
                <Text variant="body-01-md">{item.subtitle}</Text>
              </S.Section>
            </Grid.Item>
            <Grid.Item lg={1 / 2}>
              <S.Section>
                <Text variant="caption-02">{item.title}</Text>
                <Text variant="caption-02">{item.description}</Text>
                <Text variant="caption-02">{item.section}</Text>
              </S.Section>
            </Grid.Item>
          </Grid>
          <Divider />
        </S.Item>
      ))}
    </S.Items>
  );
};

export default ItemsDesktop;
