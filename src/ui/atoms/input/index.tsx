import * as React from "react";
import * as UI from "antd";
import styled from "styled-components";

type InputProps = {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  className,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <SelectContainer
      size="large"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const SelectContainer = styled(UI.Input.Search)``;
