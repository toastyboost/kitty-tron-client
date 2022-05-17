import {
  sample,
  combine,
  restore,
  createStore,
  createEvent,
  createEffect,
} from "effector";

import { request } from "libs/request";

import { groupOperations } from "./mappings";
import { Operation, Accordance } from "./types";

export const getAccordances = createEffect(async () =>
  request<Accordance[]>({ url: `/kitty-tron/us-central1/accordances` })
);

const $accordances = restore(getAccordances.doneData, []);

// todo

export const operationsHeader: Operation = {
  id: "",
  name: "Операция",
  activity: "Вид",
  scope: "Разряд",
  executionTime: "Время",
  equipment: "Оборудование",
  queue: "#",
  type: "head",
};

export const addTodo = createEvent<Operation>();
export const deleteTodo = createEvent<Operation>();

const $todo = createStore<Operation[]>([]);

$todo
  .on(addTodo, (operations, operation) => [...operations, operation])
  .on(deleteTodo, (operations, operation) => {
    return operations.filter(({ name }) => name !== operation.name);
  });

// autocomplete

export const setSearch = createEvent<string>();
export const $searchQuery = restore<string>(setSearch, "");

export const getOperations = createEffect(async (keyword: string) =>
  request<Operation[]>({
    url: `/kitty-tron/us-central1/operations?find=${keyword}`,
  })
);

sample({
  clock: setSearch,
  filter: Boolean,
  target: getOperations,
});

export const setSearchResult = createEvent<Operation[]>();
const $searchResult = createStore<Operation[]>([]).on(
  setSearchResult,
  (_, payload) => payload
);

$searchResult.on(getOperations.doneData, (_, operations) => {
  if (operations.length) {
    return [operationsHeader, ...operations];
  }
  return operations;
});

export const $searchResultGrouped = sample({
  source: combine($searchResult, $accordances),
  fn: ([operations, accordances]) => groupOperations(operations, accordances),
});

export const $todoGrouped = sample({
  source: combine($todo, $accordances),
  fn: ([operations, accordances]) => groupOperations(operations, accordances),
});
