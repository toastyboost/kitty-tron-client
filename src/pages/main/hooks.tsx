import * as React from "react";
import { useStore } from "effector-react";

import {
  $searchQuery,
  $searchResultGrouped,
  $todoGrouped,
  getOperations,
  getAccordances,
} from "./model";

export const useSearch = () => {
  const searchQuery = useStore($searchQuery);
  const searchResultGrouped = useStore($searchResultGrouped);
  const todoGrouped = useStore($todoGrouped);
  const loading = useStore(getOperations.pending);

  React.useEffect(() => {
    getAccordances();
  }, []);

  return {
    searchQuery,
    searchResultGrouped,

    todoGrouped,
    loading,
  };
};
