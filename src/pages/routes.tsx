import * as React from "react";
import { Navigate } from "react-router-dom";

import { MainPage } from "./main";

const path = {
  recommends: () => "/recommends",
};

export const ROUTES = [
  {
    path: path.recommends(),
    element: <MainPage />,
  },
  {
    element: <Navigate to={path.recommends()} />,
    path: "*",
  },
];
