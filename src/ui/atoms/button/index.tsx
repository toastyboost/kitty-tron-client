import * as React from "react";
import * as UI from "antd";

type ButtonProps = {
  onClick: () => void;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return <UI.Button {...props} />;
};
