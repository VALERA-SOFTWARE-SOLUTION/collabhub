"use client";
import React, { useEffect, useState } from "react";
import LoadingWrapper from "@/components/LoadingWrapper";
import { useLoading } from "@/context/LoadingContext";
import { showToast } from "@/components/ToastProvider";
import Link from "next/link";
import isEmailValid from "@/utils/isEmailValid";


const Register: React.FC = () => {
  const { setGlobalLoading } = useLoading();
  const [loading, setIsLoading] = useState(true);
  const [emailToRegister, setEmailToRegister] = useState("");

  useEffect(() => {
    window.document.title = "CollabHub | Register";
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

  const handleEmailSignup = () => {
    const [isValid, message] = isEmailValid(emailToRegister);
    if (isValid) {
      setIsLoading(true);
      // Async operation here
      if (!loading) {
        window.location.href = "/register/emailverification";
      }
    } else {
      switch (emailToRegister) {
        case "":
          showToast(message, "error");
          break;
        default:
          showToast(message, "error");
          break;
      }
    }
  };

  return (
    <LoadingWrapper>
      <main className="flex flex-col items-center justify-center min-h-screen text-black">
        <h1 className="text-3xl font-bold text-center mt-8">
          Create your account
        </h1>
        <hr className="w-1/6 mx-auto my-5 border-t-2 border-orange-500" />
        <div className="text-center">
          <p className="mb-4">Social Sign-up</p>
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
          <p className="mb-4">Sign-up with email</p>
          <input
            type="text"
            placeholder="Personal/work email"
            className="text-black py-2 px-4 rounded mb-2"
            value={emailToRegister}
            onChange={(e) => setEmailToRegister(e.target.value)}
          />
          <button
            className="bg-orange-500 mx-2 text-white py-2 px-4 rounded mb-2"
            onClick={handleEmailSignup}
          >
            Register
          </button>
        </div>
        <hr className="w-1/6 mx-auto my-5 border-t-2 border-orange-500" />
        <Link href="/login" className="text-orange-500 mt-4">
          Already have an account? Login
        </Link>
      </main>
    </LoadingWrapper>
  );
};

export default Register;
