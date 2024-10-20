/* eslint-disable @typescript-eslint/no-empty-object-type */
// components/ToastProvider.tsx
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export const showToast = (
  message: string,
  type: "info" | "success" | "error"
) => {
  switch (type) {
    case "info":
      toast.info(message);
      break;
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
  }
};
