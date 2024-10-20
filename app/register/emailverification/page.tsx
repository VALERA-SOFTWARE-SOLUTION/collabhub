"use client";
import React, { useEffect, useState } from "react";

const EmailVerification = () => {
  const [canResendEmail, setCanResendEmail] = useState(true);
  const [timeBeforeResend, setTimeBeforeResend] = useState(10);

  useEffect(() => {
    window.document.title = "CollabHub | Email Verification";

    let timer: NodeJS.Timeout;
    if (!canResendEmail) {
      timer = setInterval(() => {
        setTimeBeforeResend((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setCanResendEmail(true);
            return 10;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [canResendEmail]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">A verification link has been sent to your email</h1>
      <button
        className={`bg-orange-500 text-white py-2 px-4 rounded ${!canResendEmail && "opacity-50 cursor-not-allowed"}`}
        onClick={() => {
          if (canResendEmail) {
            setCanResendEmail(false);
            setTimeBeforeResend(10);
          }
        }}
        disabled={!canResendEmail}
      >
        {canResendEmail
          ? `Resend email link`
          : `Resend email link after ${timeBeforeResend} second(s)`}
      </button>
    </main>
  );
};

export default EmailVerification;
