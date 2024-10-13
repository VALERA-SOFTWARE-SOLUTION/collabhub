"use client";
import React from "react";
import { useLoading } from "@/context/LoadingContext";
import Loading from "@/components/Loading";

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
};

export default LoadingWrapper;
