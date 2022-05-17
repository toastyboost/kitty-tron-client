import * as React from "react";
import styled from "styled-components/macro";

import { Title } from "../title";

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <SectionHeaderContainer className={className}>
      <SectionHead level={1}>{children}</SectionHead>
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SectionHead = styled(Title)`
  display: flex;
  align-items: center;
`;
