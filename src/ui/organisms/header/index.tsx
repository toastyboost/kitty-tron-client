import * as React from "react";
import * as UI from "antd";
import styled from "styled-components";
import { ForkOutlined } from "@ant-design/icons";
import { useStore } from "effector-react";
import { Nav } from "ui/molecules";
import { Logo, Button } from "ui/atoms";

import { exportOperations } from "./model";

const data = [
  {
    path: "/recommendations",
    title: "Рекомендации",
  },
  {
    path: "/operations",
    title: "Операции",
  },
  {
    path: "/learning",
    title: "Обучение",
  },
];

export const Header: React.FC = () => {
  const loading = useStore(exportOperations.pending);
  return (
    <HeaderContainer>
      <Logo icon={<LogoIcon />} to="/" />
      <Nav data={data} />
      <HeaderButton
        //
        onClick={() => exportOperations()}
        loading={loading}
      >
        Экспортировать данные
      </HeaderButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(UI.Layout.Header)`
  display: flex;
  align-items: center;
  background: transparent;
  border-bottom: 1px solid #f0f0f0;
`;

const HeaderButton = styled(Button)`
  margin-left: auto;
`;

const LogoIcon = styled(ForkOutlined)`
  margin-right: 6px;
  transform: translateY(1px);
`;
