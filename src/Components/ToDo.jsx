/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { addToDo } from "../Redux/reducer";
import { connect } from "react-redux";

import { motion } from "framer-motion";
import { useSnackbar } from "notistack";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addToDo(todo)),
  };
};

const ToDos = (props) => {
  const [todos, setTodos] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleToDoInputChange = (event) => {
    setTodos(event.target.value);
  };

  const add = () => {
    if (todos === "") {
      enqueueSnackbar("Input is Empty, Please give input", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      });
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todos,
        completed: false,
      });
      setTodos("");
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-2 ">
        <input
          className="p-2 w-[60%] text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          onChange={(event) => handleToDoInputChange(event)}
          value={todos}
          type="text"
          placeholder="Add your To-Do"
          style={{ boxShadow: "2px 4px 10px #271c6c" }}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-xl text-xl bg-blue-500 hover:bg-blue-700 cursor-pointer"
          style={{ boxShadow: "2px 4px 10px #271c6c" }}
          onClick={() => add()}
        >
          Add
        </motion.button>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
