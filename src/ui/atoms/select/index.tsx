import * as React from "react";
import * as UI from "antd";
import styled from "styled-components";

type SelectProps = {
  className?: string;
  value?: any;
  placeholder?: string;
  loading?: boolean;
  withSearch?: boolean;
  withOptions?: boolean;
  withArrow?: boolean;
  mode?: "tags" | "multiple";
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLElement>;
};

export const Select: React.FC<SelectProps> = ({
  className,
  value,
  placeholder,
  withSearch = false,
  withOptions,
  withArrow = false,
  children,
  loading = false,
  mode = "tags",
  onChange,
  onSearch,
  onBlur,
}) => {
  return (
    <SelectContainer className={className}>
      <UI.Select
        size="large"
        placeholder={placeholder}
        value={value}
        showSearch={withSearch}
        onChange={onChange}
        onSearch={onSearch}
        onBlur={onBlur}
        open={withOptions}
        loading={loading}
        showArrow={withArrow}
        mode={mode}
        tagRender={() => <></>}
      >
        {children}
      </UI.Select>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  .ant-select-selector {
    height: 0;
    border: 0 !important;
  }
`;

type OptionProps = {
  value: string;
};

export const Option: React.FC<OptionProps> = (props) => (
  <OptionContainer {...props} />
);

const OptionContainer = styled(UI.Select.Option)``;

export const GroupOption: React.FC = (props) => (
  <GroupOptionContainer {...props} />
);

const GroupOptionContainer = styled(UI.Select.OptGroup)``;
