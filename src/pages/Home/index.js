import { useState, useEffect } from "react";
import "./style.css";
import CheckList from "../checkList"

export default function Home() {

    const [todos, setTodos] = useState([]);
    const [addItem, setAddItem] = useState("");
    
    return (
        <div style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div className="todo-container">
                <h1>Todo List</h1>
                <CheckList />
            </div>
        </div>
    );
}