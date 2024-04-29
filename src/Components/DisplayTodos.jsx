/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addToDo,
  completedToDo,
  removeToDo,
  updateToDo,
} from "../Redux/reducer";

import ToDoitems from "./ToDoitems";

import { MdDeleteForever } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { BiCheckDouble } from "react-icons/bi";

import { motion } from "framer-motion";

const MapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addToDo: (todo) => dispatch(addToDo(todo)),
    removeToDo: (id) => dispatch(removeToDo(id)),
    updateToDo: (todo) => dispatch(updateToDo(todo)),
    completedToDo: (todo) => dispatch(completedToDo(todo)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");

  return (
    <React.Fragment>
      <div className="flex flex-row justify-center items-center gap-10 my-6">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 rounded-xl text-xl bg-purple-400 hover:bg-blue-500"
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 rounded-xl text-xl bg-purple-400 hover:bg-blue-500"
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 rounded-xl text-xl bg-purple-400 hover:bg-blue-500"
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>

      <div className="flex flex-col gap-1 sm:flex-row justify-center items-center sm:gap-10 my-10 text-center">
        <div className="flex flex-row gap-1">
          <h1>Delete:</h1>
          <span>
            <MdDeleteForever size={24} />
          </span>
        </div>

        <div className="flex flex-row gap-1">
          <h1>Edit: </h1>
          <span>
            <RiEditFill size={24} />
          </span>
          {`(After Edit Hit Enter Button to save)`}
        </div>

        <div className="flex flex-row gap-1">
          <h1>Completed: </h1>
          <span>
            <BiCheckDouble size={24} />
          </span>
        </div>
      </div>

      <ul className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
        {props.todos
          .filter((todo) => {
            if (sort === "active") {
              return !todo.completed; // Show only active (not completed)
            }
            if (sort === "completed") {
              return todo.completed; // Show only completed
            }
            return true; // Show all when sort is 'all'
          })
          .map((todo) => (
            <li key={todo.id} className="mb-3">
              <ToDoitems
                todo={todo}
                removeToDo={props.removeToDo}
                updateToDo={props.updateToDo}
                completedToDo={props.completedToDo}
              />
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default connect(MapStateToProps, MapDispatchToProps)(DisplayTodos);

/* <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.completed === false && (
                    <ToDoitems
                      key={todo.id}
                      todo={todo}
                      removeToDo={props.removeToDo}
                      updateToDo={props.updateToDo}
                      completedToDo={props.completedToDo}
                    />
                  )}
                </li>
              );
            })
          : null}

        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.completed === false && (
                    <ToDoitems
                      key={todo.id}
                      todo={todo}
                      removeToDo={props.removeToDo}
                      updateToDo={props.updateToDo}
                      completedToDo={props.completedToDo}
                    />
                  )}
                </li>
              );
            })
          : null}

        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.completed === false && (
                    <ToDoitems
                      key={todo.id}
                      todo={todo}
                      removeToDo={props.removeToDo}
                      updateToDo={props.updateToDo}
                      completedToDo={props.completedToDo}
                    />
                  )}
                </li>
              );
            })
          : null}
      </ul> */
