import * as React from "react";
import styled from "styled-components";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

import { List, Header, Input } from "ui/atoms";

import {
  setSearch,
  addTodo,
  deleteTodo,
  setSearchResult,
  operationsHeader,
} from "./model";
import { useSearch } from "./hooks";
import { Operation } from "./types";

export const MainPage: React.FC = () => {
  return <OperationSearch />;
};

const operationsExamples = ["рукав", "накладной карман", "пуговицы"];

const OperationSearch = () => {
  const {
    //
    searchQuery,
    searchResultGrouped,
    todoGrouped,
  } = useSearch();

  return (
    <>
      <Search
        onMouseLeave={() => {
          setSearchResult([]);
        }}
      >
        <SearchInput value={searchQuery} onChange={setSearch} />
        <SearchResults>
          {searchResultGrouped.map((operation) => (
            <Row
              key={operation.name}
              operation={operation}
              isExist={todoGrouped
                .map(({ name }) => name)
                .includes(operation.name)}
            />
          ))}
        </SearchResults>
        <SearchExamples>
          {operationsExamples.map((operation, key) => (
            <SearchRequest
              key={key}
              onClick={() => {
                setSearch(operation);
              }}
            >
              {operation}
            </SearchRequest>
          ))}
        </SearchExamples>
      </Search>
      <ResultHeader>Технологическая карта</ResultHeader>
      <List<Operation>
        data={[operationsHeader, ...todoGrouped]}
        render={(operation) => {
          return (
            <Row
              operation={operation}
              isExist={todoGrouped
                .map(({ name }) => name)
                .includes(operation.name)}
              a={"list"}
            />
          );
        }}
      />
    </>
  );
};

type RowProps = {
  operation: Operation;
  isExist: boolean;
  a?: "list";
};

const Row: React.FC<RowProps> = ({ operation, isExist, a }) => {
  const {
    //
    queue,
    name,
    activity,
    scope,
    executionTime,
    equipment,
  } = operation;

  return (
    <ResultOption
      onClick={() => {
        if (!isExist) {
          if (operation.type === "category") {
          }

          if (operation.type === "row") {
            addTodo(operation);
          }
        }
        if (isExist) deleteTodo(operation);
      }}
      isExist={isExist}
      type={operation.type}
      a={a}
    >
      <ResultCell>
        {operation.type !== "category" && <ResultCount>{queue}</ResultCount>}
      </ResultCell>
      <ResultCell>
        <ResultName>{name}</ResultName>
      </ResultCell>
      <ResultCell>{activity}</ResultCell>
      <ResultCell>{scope}</ResultCell>
      <ResultCell>{executionTime}</ResultCell>
      <ResultCell>{equipment}</ResultCell>
      <ResultCell>
        {operation.type !== "head" && (
          <>
            {isExist && <MinusCircleOutlined color="red" />}
            {!isExist && <PlusCircleOutlined color="green" />}
          </>
        )}
      </ResultCell>
    </ResultOption>
  );
};

const Search = styled.div``;

const SearchExamples = styled.div`
  display: flex;
  padding: 4px 12px;
`;

const SearchInput = styled(Input)`
  position: relative;
  z-index: 100;
`;

const SearchResults = styled.div`
  margin-top: -1px;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;

  & > div:last-child {
    margin-bottom: 4px;
  }
`;

const SearchRequest = styled.div`
  color: #909090;
  border-bottom: 1px dashed;
  margin-right: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

const ResultOption = styled.div<{
  isExist: boolean;
  type: "head" | "row" | "category";
  a?: "list";
}>`
  display: flex;
  align-items: center;
  height: ${(p) => (p.type === "head" ? "32px" : "36px")};
  padding: 0 12px;
  margin-bottom: ${(p) => (p.type === "head" ? "4px" : "0")};
  cursor: pointer;
  border-bottom: 1px solid
    ${(p) => (p.type === "category" ? "rgba(0,0,0,0.05)" : "transparent")};
  background-color: ${(p) => {
    if (p.isExist) {
      if (p.a === "list") {
        return "transparent";
      }
      return "#e6f7ff";
    }
    if (p.type === "head") return "#f8f8f8";
    return "transparent";
  }};

  color: ${(p) =>
    ["category", "head"].includes(p.type) ? "rgba(0, 0, 0, 0.4)" : ""};
  font-size: ${(p) =>
    ["category", "head"].includes(p.type) ? "12px" : "14px"};

  &:hover {
    background-color: ${(p) => {
      if (p.type === "head") return "#f8f8f8";
      return "#f8f8f8";
    }};
  }

  & > div:nth-child(1) {
    width: 40px;
  }

  & > div:nth-child(2) {
    width: 600px;
  }

  & > div:nth-child(3) {
    width: 80px;
  }

  & > div:nth-child(4) {
    width: 80px;
  }

  & > div:nth-child(5) {
    width: 80px;
  }

  & > div:last-child {
    margin-left: auto;
  }
`;

const ResultCount = styled.div`
  background-color: #f5f5f5;
  color: #000;
  padding: 0 8px;
  height: 18px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.5px;
  font-size: 7px;
  margin-right: 12px;
  text-transform: uppercase;
`;

const ResultName = styled.div``;

const ResultCell = styled.div`
  white-space: pre-wrap;
  line-height: 1.2;
  display: flex;
`;

const ResultHeader = styled(Header)`
  margin-top: 24px;
  margin-bottom: 9px;
`;
