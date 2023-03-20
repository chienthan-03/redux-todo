import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
// import { addTodo } from "../../redux/action";
import { todosRemainingSelector } from "../../redux/selector";
import { addNewTodo } from "./todoList.slice";
export default function TodoList() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTodoList = () => {
    // dispatch(
    //   TodoSlice.actions.addTodo({
    //     id: uuidv4(),
    //     name: name,
    //     priority: priority,
    //     completed: false,
    //   })
    // );
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: name,
        priority: priority,
        completed: false,
      })
    );
    setName("");
    setPriority("Medium");
  };

  const todoList = useSelector(todosRemainingSelector);
  // const searchText = useSelector(searchTextSelector);
  // console.log(todoList)
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList ? (
          todoList.map((todo) => (
            <Todo
              key={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          ))
        ) : (
          <div>"no results"</div>
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
          <Select
            style={{ width: "190px" }}
            defaultValue="Medium"
            value={priority}
            onChange={(value) => setPriority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodoList}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
