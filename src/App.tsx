import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GenericTemplate } from "ui/templates";
import { ROUTES } from "pages";

export const App: React.FC = () => {
  return (
    <Router>
      <GenericTemplate>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </GenericTemplate>
    </Router>
  );
};
