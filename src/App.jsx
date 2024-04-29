import React from "react";

import DisplayTodos from "./Components/DisplayTodos";
import Navbar from "./Components/NavBar";
import Todos from "./Components/ToDo";

import { motion } from "framer-motion";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <React.Fragment>
      <SnackbarProvider>
        <Navbar />
        <div className="font-rocknroll h-[100vh] w-[100vw] overflow-auto bg-main-color">
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            whileHover={{ scale: 1.1 }}
            className="text-center text-white text-shadow font-bold text-4xl py-10"
            style={{ textShadow: "0 0 5px #433aa8, 3px -1px 5px #271c6c" }}
          >
            Welcome To ToDo App
          </motion.h1>

          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 5 }}
          >
            <Todos />
            <DisplayTodos />
          </motion.div>
        </div>
      </SnackbarProvider>
    </React.Fragment>
  );
};

export default App;
