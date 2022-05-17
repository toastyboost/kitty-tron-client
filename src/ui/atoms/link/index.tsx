import * as React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  children?: React.ReactNode | null;
  onClick?: () => void;
  className?: string;
  to: string;
};

export const Link: React.FC<LinkProps> = ({
  className,
  children,
  to,
  onClick,
}) => {
  return (
    <LinkWrap className={className} to={to} onClick={onClick}>
      {children}
    </LinkWrap>
  );
};

export const LinkWrap = styled(RouterLink)`
  color: var(--blue);

  &:hover {
    color: green;
  }
`;
