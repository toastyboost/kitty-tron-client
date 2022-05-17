import * as React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";

import { Link } from "ui/atoms";

type MenuItem = {
  path: string;
  title: string;
};

type MenuData = {
  data: Array<MenuItem>;
};

export const Nav: React.FC<MenuData> = ({ data }) => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavMenu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        style={{ lineHeight: "64px" }}
      >
        {data.map(({ path, title }, key) => (
          <NavItem key={key}>
            <NavLink to={path}>{title}</NavLink>
          </NavItem>
        ))}
      </NavMenu>
    </NavContainer>
  );
};

export const NavContainer = styled.div`
  padding: 0 24px;
  width: 50%;
`;

export const NavLink = styled(Link)``;
export const NavMenu = styled(Menu)``;

export const NavItem = styled(Menu.Item)``;
