import React, { useEffect, useState } from "react";
import Footer from "./Pages/Footer";
import CardItemsFruit from "./Cards/CardItemsFruit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./Pages/HomeLayout";
import CartItem from "./Cards/CartItem";
import Frutis from "./Pages/Frutis";
import { Toaster } from "react-hot-toast";
const API = "https://fruitapi-mf2v.onrender.com/data";

const App = () => {
  // FOR SEARCH IMPLEMENT

  const [query, setQuery] = useState("");

  const [users, setUsers] = useState([]);

  // delete Todo

  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // FETCH THE DATA

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route
            path="/carditemsfruit"
            element={
              <CardItemsFruit
                query={query}
                setQuery={setQuery}
                users={users}
                key={users}
              />
            }
          />
          <Route
            path="cartItem"
            element={<CartItem deleteTodo={deleteTodo} todos={todos} />}
          />
          <Route
            path="fruits"
            element={
              <Frutis
                query={query}
                setQuery={setQuery}
                users={users}
                key={users}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
      <Toaster />{" "}
    </>
  );
};

export default App;
