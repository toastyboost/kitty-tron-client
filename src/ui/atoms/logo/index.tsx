import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type LogoProps = {
  to: string;
  icon?: React.ReactNode;
};

export const Logo: React.FC<LogoProps> = ({ to, icon }) => {
  return (
    <LogoContanter to={to}>
      {icon} ERS <LogoSuper>1.0</LogoSuper>
    </LogoContanter>
  );
};

const LogoContanter = styled(Link)`
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  color: #000;
  font-size: 21px;
`;

const LogoSuper = styled.sup`
  font-size: 10px;
  font-weight: 300;
  letter-spacing: -1px;
  top: -1.1em;
`;
