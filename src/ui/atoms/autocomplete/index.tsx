import * as React from "react";
import * as UI from "antd";
import styled from "styled-components";

type CompleteOption = {
  label: React.ReactNode;
};

type SelectProps = {
  className?: string;
  value?: string;
  options: CompleteOption[];
  placeholder?: string;
  loading?: boolean;
  withSearch?: boolean;
  withArrow?: boolean;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  onSelect?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLElement> | undefined;
};

export const Autocomplete: React.FC<SelectProps> = ({
  className,
  value,
  placeholder,
  options,
  withSearch = false,
  withArrow = true,
  onChange,
  onSearch,
  onBlur,
  onSelect,
  children,
}) => {
  return (
    <SelectContainer className={className}>
      <UI.AutoComplete
        options={options}
        placeholder={placeholder}
        value={value}
        showSearch={withSearch}
        open={Boolean(options.length) || Boolean(value?.length)}
        onChange={onChange}
        onSearch={onSearch}
        onSelect={onSelect}
        onBlur={onBlur}
        size="large"
        showArrow={withArrow}
        allowClear={true}
      >
        {children}
      </UI.AutoComplete>
    </SelectContainer>
  );
};

const SelectContainer = styled.div``;
