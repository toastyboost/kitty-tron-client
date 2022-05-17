import * as React from "react";
import * as UI from "antd";
import styled from "styled-components";

type ListProps<T> = {
  className?: string;
  data?: T[];
  header?: React.ReactNode;
  withBorders?: boolean;
  size?: "small";
  render?: (item: T) => React.ReactNode;
};

export const List = <T extends any>({
  className,
  data = [],
  header = "",
  size = "small",
  withBorders = true,
  render,
}: ListProps<T>) => {
  return (
    <ListContainer className={className}>
      <UI.List
        header={header}
        size={size}
        dataSource={data}
        bordered={withBorders}
        renderItem={render}
      />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  .ant-list-bordered.ant-list-sm .ant-list-header,
  .ant-list-bordered.ant-list-sm .ant-list-footer {
    padding: 8px 12px;
  }
`;
