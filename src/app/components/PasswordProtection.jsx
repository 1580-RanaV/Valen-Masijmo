"use client";

import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

// ======================
// 1. PASSWORD CONTEXT
// ======================
const PasswordContext = createContext(null);

export function PasswordProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [onSuccessCallback, setOnSuccessCallback] = useState(null);

  const CORRECT_PASSWORD = "SECRET";

  const requestAccess = (onSuccess) => {
    if (isAuthenticated) {
      onSuccess?.();
    } else {
      setShowModal(true);
      setOnSuccessCallback(() => onSuccess || null);
    }
  };

  const verifyPassword = (password) => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setShowModal(false);
      onSuccessCallback?.();
      return true;
    }
    return false;
  };

  const closeModal = () => setShowModal(false);

  return (
    <PasswordContext.Provider
      value={{ isAuthenticated, showModal, requestAccess, verifyPassword, closeModal }}
    >
      {children}
    </PasswordContext.Provider>
  );
}

export const usePassword = () => useContext(PasswordContext);

// ======================
// 2. PASSWORD MODAL (Red & Black)
// ======================
export function PasswordModal() {
  const { showModal, verifyPassword, closeModal } = usePassword();
  const [password, setPassword] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure we're on the client side
  useState(() => {
    setMounted(true);
  }, []);

  if (!showModal || !mounted) return null;

  const tryVerify = (candidate) => {
    const isValid = verifyPassword(candidate);
    if (!isValid) {
      setError(true);
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setPassword(["", "", "", "", "", ""]);
        document.getElementById("pwd-input-0")?.focus();
      }, 500);
    }
  };

  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    const newPassword = [...password];
    newPassword[index] = value.toUpperCase();
    setPassword(newPassword);
    setError(false);

    if (value && index < 5) {
      document.getElementById(`pwd-input-${index + 1}`)?.focus();
    }

    if (index === 5 && value) {
      const fullPassword = [...newPassword.slice(0, 5), value.toUpperCase()].join("");
      setTimeout(() => tryVerify(fullPassword), 120);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !password[index] && index > 0) {
      document.getElementById(`pwd-input-${index - 1}`)?.focus();
    }
    if (e.key === "Enter") {
      const full = password.join("");
      if (full.length === 6) tryVerify(full);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").toUpperCase().slice(0, 6);
    const newPassword = pasted.split("").concat(["", "", "", "", "", ""]).slice(0, 6);
    setPassword(newPassword);

    if (pasted.length === 6) setTimeout(() => tryVerify(pasted), 100);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ position: 'fixed' }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeModal}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full max-w-md sm:max-w-lg bg-neutral-900
          shadow-2xl
          text-white p-8 sm:p-12
          ${shake ? "shake" : ""}
        `}
      >
        <style jsx>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-12px); }
            75% { transform: translateX(12px); }
          }
          .shake {
            animation: shake 0.3s ease-in-out;
          }
        `}</style>

        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-red-800 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-widest mb-4 text-neutral-700">
            VALEN MASIJMO
          </h2>
          <div className="w-16 h-0.5 bg-red-800 mx-auto mb-4"></div>
          <p className="text-neutral-400 font-bold text-sm tracking-wide">
            ENTER ACCESS CODE
          </p>
        </div>

        {/* Inputs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6">
          {password.map((digit, index) => (
            <input
              key={index}
              id={`pwd-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              autoFocus={index === 0}
              className={`
                text-center text-white font-bold bg-black border-2
                w-12 h-14 sm:w-14 sm:h-16 text-xl sm:text-2xl
                focus:outline-none transition-colors
                ${error 
                  ? "border-red-800 text-red-800" 
                  : "border-white focus:border-red-800"
                }
              `}
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <div className="text-center text-red-800 font-bold text-xs sm:text-sm mb-4 tracking-wide">
            INVALID CODE. TRY AGAIN.
          </div>
        )}

        {/* Info */}
        <div className="text-center text-neutral-600 text-xs font-bold tracking-widest">
          RESTRICTED ACCESS
        </div>
      </div>
    </div>
  );

  // Render modal as a portal directly in document.body
  return createPortal(modalContent, document.body);
}