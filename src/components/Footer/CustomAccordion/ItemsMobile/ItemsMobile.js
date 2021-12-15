import React from "react";
import { Display } from "@ds/react";
import { items } from "./../../../../mocks/items";

const ItemsMobile = () => {
  return (
    <>
      {items.map((item) => (
        <Display
          leftProps={{
            subtitle: item.subtitle,
            title: item.title || "",
            description: item.description || "",
            section: item.section || "",
          }}
          divider={item.divider}
        />
      ))}
    </>
  );
};

export default ItemsMobile;
