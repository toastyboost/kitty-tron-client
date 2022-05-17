import { Operation, Accordance } from "./types";

export function groupOperations(operations: Operation[], accordances: Accordance[]) {
  const groups = operations.reduce<Record<string, Operation[]>>((acc, item) => {
    let estKey = item["id"];
    (acc[estKey] ? acc[estKey] : (acc[estKey] = null || [])).push(item);
    return acc;
  }, {});

  const groupIDs = Object.keys(groups).filter((id) => id !== "");

  const optionsGroups: Operation[] = [];

  for (const id of groupIDs) {
    const name =
      accordances.filter((accordance) => accordance.output === id)[0]?.input ||
      id;


    const groupRow: Operation = {
      name,
      id: "",
      activity: "",
      scope: "",
      executionTime: "",
      equipment: "",
      queue: "",
      type: "category",
    };

    optionsGroups.push(groupRow);
    groups[id].map((operation) => optionsGroups.push(operation));
  }

  return optionsGroups;
}
