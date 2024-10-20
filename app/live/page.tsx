"use client";
import React, { useEffect } from "react";

const Live = () => {
  useEffect(() => {
    window.location.href = "/live/tasks";
  }, []);
  return <></>;
};
export default Live;
