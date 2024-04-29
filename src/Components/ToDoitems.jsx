import React, { useRef } from "react";

import { MdDeleteForever } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { BiCheckDouble } from "react-icons/bi";

import { motion } from "framer-motion";

const ToDoitems = (props) => {
  const { todo, updateToDo, removeToDo, completedToDo } = props;

  const inputRef = useRef(true);

  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const handleUpdate = (id, value, event) => {
    if (event.which === 13) {
      //13 is code for enter
      updateToDo({ id, item: value });
      inputRef.current.disabled = true;
      inputRef.current.blur();
    }
  };

  console.group("props from store:", props, todo);

  return (
    <React.Fragment>
      <motion.div
        initial={{ x: "-150vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        whileHover={{
          scale: 0.9,
          transition: { type: "spring", duration: 0.5 },
        }}
        className="flex justify-center items-center h-full w-full"
      >
        <div
          className="bg-white/20
          backdrop-blur-md
          shadow-lg
          rounded-lg
          p-6
          flex
          flex-col
          gap-4
          text-center
          w-[350px]
          h-[200px]"
        >
          <li
            key={todo.id}
            className="text-xl flex flex-col justify-center items-center gap-4"
          >
            <textarea
              ref={inputRef}
              disabled={inputRef}
              defaultValue={todo.item}
              onKeyPress={(event) =>
                handleUpdate(todo.id, inputRef.current.value, event)
              }
              className="text-center pt-6 bg-transparent w-full rounded-xl px-2 py-1 h-auto text-xl border-none outline-none resize-none"
            />{" "}
            <div className="flex items-center gap-4">
              {todo.completed && (
                <span className="text-sm bg-black p-1 rounded-xl text-white">
                  Selected ToDo is Done
                </span>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeToDo(todo.id)}
                className="p-4 rounded-full bg-blue-500 hover:bg-blue-700 flex flex-row gap-2"
              >
                <MdDeleteForever className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-blue-500 hover:bg-blue-700"
                onClick={() => handleFocus()}
              >
                <RiEditFill className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-blue-500 hover:bg-blue-700"
                onClick={() => completedToDo(todo.id)}
              >
                <BiCheckDouble className="text-xl" />
              </motion.button>
            </div>
          </li>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default ToDoitems;
