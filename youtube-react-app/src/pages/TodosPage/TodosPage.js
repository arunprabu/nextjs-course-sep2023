import { useReducer, useRef } from "react";
import todoReducer from "../../reducers/todoReducer";

const TodosPage = () => {
  // Internal CSS -- NOT RECOMMENDED OFTEN
  // go for component specific CSS or global css
  const myStyles = {
    headingStyle: {
      color: "green",
    },
    todoListStyle: {
      fontWeight: "bold",
    },
  };

  const todoInput = useRef("");

  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState); // undefined;

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
    todoDispatch({
      type: "ADD_TODO",
      payload: {
        id: new Date().getTime(),
        title: todoInput.current.value,
        status: "incomplete",
      },
    });
  };

  // const handleDelete = (id) => {
  //   console.log(id);
  // }

  return (
    <div>
      <h1 style={myStyles.headingStyle}>
        Todos App with useReducer, useRef, Styling
      </h1>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="What do you want to do Today?"
            ref={todoInput}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      {/* Inline CSS -- NEVER EVER TRY THIS IN LISTS / Loops */}
      <div
        className="row mt-4"
        style={{
          backgroundColor: "lightyellow",
          padding: "40px 50px",
          borderRadius: "10px",
          border: "dotted 5px red",
        }}
      >
        <div className="col-md-6">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoState?.map((todo) => {
                return (
                  <li
                    className="list-group-item"
                    style={myStyles.todoListStyle}
                    key={todo.id}
                  >
                    {todo.title} | {todo.status}
                    <button
                      className="btn btn-danger btn-sm float-end"
                      // onClick={() => {
                      //   handleDelete(todo.id);
                      // }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
