import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";
import queryString from "query-string";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,

      title: "Eat",
      status: "new",
    },
    {
      id: 2,

      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,

      title: "Code",
      status: "new",
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    // location.search là params URL
    console.log("location search " + location.search);
    console.log(params);
    return params.status || "all";
  });
  const handleTotoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || "all");
  }, [location.search]);
  const handdleShowAllClick = () => {
    // setFilterStatus("all");
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handdleShowCompletedClick = () => {
    // setFilterStatus("completed");
    console.log(match.path);
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handdleShowNewClick = () => {
    // setFilterStatus("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filterStatus === "all" || filterStatus === todo.status
    );
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (value) => {
    console.log(value);
    const newTodo = {
      id: todoList.length + 1,
      title: value.title,
      status: "new",
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3> Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTotoClick} />
      <div>
        <button onClick={handdleShowAllClick}>Show all</button>
        <button onClick={handdleShowCompletedClick}>Show Completed</button>
        <button onClick={handdleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
