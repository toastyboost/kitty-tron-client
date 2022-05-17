import * as React from "react";
import * as UI from "antd";
import styled from "styled-components";

type BadgeProps = {};

export const Badge: React.FC<BadgeProps> = (props) => {
  return <BadgeContanter {...props} />;
};

const BadgeContanter = styled(UI.Badge)``;
