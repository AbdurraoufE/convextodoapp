"use client"

import {useState} from "react"
type TodoItem = {
  title: string;
  description: string;
  completed:boolean;

}

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([
    {title: "Example 1", description: "This is an example", completed: false}
  ]);
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-xl font-bold">
        Todo List
      </h1>
      <ul>
      {todos.map(({title, description, completed}, index) => (
        <li key={index}>
          <input 
          type="checkbox" 
          checked={completed} 
          onChange={e => setTodos(prev => {
            const newTodos = [...prev];
            newTodos[index].completed = e.target.checked;
            return newTodos;
        })}></input><span className="font-semibold">{title}</span>{description}</li>
      ))}
      </ul>
    </div>
  );
}
