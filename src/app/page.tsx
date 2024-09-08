"use client"

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4">
      <Authenticated>
        <div className="div flex items-center justify-between">
          <h1 className="text-xl font-bold">Welcome to Todo List Application</h1>
          <UserButton/>
        </div>
        <ToDoList/>
        <NewToDoForm/>
      </Authenticated>

      <Unauthenticated>
        <p className="text-gray-700">Please Sign In to Continue</p>
        <SignInButton>
          <button className="p-1 bg-blue-600 text-white rounded">Sign In</button>
        </SignInButton>
      </Unauthenticated>
      
      <AuthLoading>
        <p>Loading... Wait One Second!</p>
      </AuthLoading>
     
    </div>
  );
}
