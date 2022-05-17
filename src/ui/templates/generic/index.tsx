import * as React from "react";
import styled from "styled-components";
import { Layout } from "antd";

import { Header, Main } from "ui/organisms";

export const GenericTemplate: React.FC = ({ children }) => {
  return (
    <LayoutCounter>
      <Header />
      <Layout>
        <Main>{children}</Main>
      </Layout>
    </LayoutCounter>
  );
};

const LayoutCounter = styled(Layout)`
  background: transparent;
`;
