"use client";
import React, { useEffect, useState } from "react";
import LoadingWrapper from "@/components/LoadingWrapper";
import { useLoading } from "@/context/LoadingContext";
import Link from "next/link";

const Login: React.FC = () => {
  const { setGlobalLoading } = useLoading();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    window.document.title = "CollabHub | Login";
    if (loading) {
      setGlobalLoading(true);
    } else {
      setGlobalLoading(false);
    }
    // Simulate an async operation
    // This could be an API call or any async operation
    // NOTE: Don't remove the setTimeout, it's for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [setGlobalLoading, loading]);

  return (
    <LoadingWrapper>
      <main className="flex flex-col items-center justify-center min-h-screen text-black">
        <h1 className="text-3xl font-bold text-center mt-8">
          Welcome back to CollabHub
        </h1>
        <hr className="w-1/6 mx-auto my-5 border-t-2 border-orange-500" />
        <div className="text-center">
          <p className="mb-4">Social Login</p>
          <button className="bg-orange-500 text-white mx-1 py-2 px-4 rounded mb-2">
            Facebook
          </button>
          <button className="bg-orange-500 text-white mx-1 py-2 px-4 rounded mb-2">
            Google
          </button>
          <button className="bg-orange-500 text-white mx-1 py-2 px-4 rounded mb-2">
            Github
          </button>
        </div>
        <hr className="w-1/6 mx-auto my-5 border-t-2 border-orange-500" />
        <div className="text-center">
          <p className="mb-4">Login with email</p>
          <div className="flex items-center justify-center mb-2">
            <label htmlFor="email" className="mr-2 w-24 text-right">Email</label>
            <input
              type="text"
              placeholder="Personal/work email"
              className="text-black py-2 px-4 rounded flex-1"
            />
          </div>
          <div className="flex items-center justify-center mb-2">
            <label htmlFor="password" className="mr-2 w-24 text-right">Password</label>
            <input
              type="password"
              className="text-black py-2 px-4 rounded flex-1"
            />
          </div>
          <button className="bg-orange-500 text-white mx-1 py-2 px-4 rounded mb-2">
            Login
          </button>
        </div>
        <hr className="w-1/6 mx-auto my-5 border-t-2 border-orange-500" />
        <Link href="/register" className="text-orange-500 mt-4">
          Don&apos;t have an account yet? Register.
        </Link>
      </main>
    </LoadingWrapper>
  );
};

export default Login;
