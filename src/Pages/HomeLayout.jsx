import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import Grocries from "./Grocries";
import FreshFruits from "./FreshFruits";
import DeliveryBoy from "./DeliveryBoy";
import OrderSummary from "../Cards/OrderSummary";
const API = "https://fruitapi-mf2v.onrender.com/data";


export default function HomeLayout() {
     const [users, setUsers] = useState([]);

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


     // delete Todo

     const [todos, setTodos] = useState([]);

     const deleteTodo = (id) => {
       setTodos(todos.filter((item) => item.id !== id));
     };
  return (
    <div>
      <Navbar />
      <Home />
      <Grocries />
      <FreshFruits users={users} />
      <DeliveryBoy />
    </div>
  );
}
