import * as React from "react";
import styled from "styled-components";
import { Layout } from "antd";

import { Container } from "ui/atoms";

type MainProps = {
  children: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({ children }) => (
  <MainContainer>
    <Container>{children}</Container>
  </MainContainer>
);

const { Content } = Layout;

export const MainContainer = styled(Content)`
  background-color: #fff;
  padding: 24px;
  min-height: calc(100vh - 128px);
`;
