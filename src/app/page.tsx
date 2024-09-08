"use client"

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { GenerateTodosForm } from "./_components/generate-todos-form";
import { FaClipboardList } from "react-icons/fa"; // Importing FontAwesome ToDo list icon

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-start">
      {/* Shimmering Welcome Text at the Top */}
      <h1 className="text-4xl font-extrabold text-gray-900 mt-8 shimmer-animation">
        Welcome to ToDo App
      </h1>

      {/* Wave SVG */}
      <div className="absolute bottom-0 w-full">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a0d7ff"
            fillOpacity="1"
            d="M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,186.7C672,160,768,160,864,176C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-md mx-auto p-8 space-y-6 text-center">
        {/* Authenticated View */}
        <Authenticated>
          <div className="bg-white p-6 shadow-lg rounded-lg space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Your ToDo List
            </h1>
            <UserButton />
            <div className="flex items-center space-x-3">
              {/* ToDo Icon */}
              <FaClipboardList className="text-blue-600" size={40} />
              <ToDoList />
            </div>
            <GenerateTodosForm />
            <NewToDoForm />
          </div>
        </Authenticated>

        {/* Unauthenticated View */}
        <Unauthenticated>
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Welcome to ToDo App
            </h1>
            <p className="text-gray-700 text-lg">
              Please sign in to continue
            </p>
            <SignInButton>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Sign In
              </button>
            </SignInButton>
          </div>
        </Unauthenticated>

        {/* Loading View */}
        <AuthLoading>
          <div className="flex justify-center items-center">
            <p className="text-lg text-blue-600 animate-pulse">
              Loading... Please Wait!
            </p>
          </div>
        </AuthLoading>
      </div>
    </div>
  );
}
