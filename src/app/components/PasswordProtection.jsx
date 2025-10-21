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

  const verifyPassword = async (password) => {
    if (password === CORRECT_PASSWORD) {
      return true;
    }
    return false;
  };

  const closeModal = () => setShowModal(false);

  const completeAuth = () => {
    setIsAuthenticated(true);
    setShowModal(false);
    onSuccessCallback?.();
  };

  return (
    <PasswordContext.Provider
      value={{ isAuthenticated, showModal, requestAccess, verifyPassword, closeModal, completeAuth }}
    >
      {children}
    </PasswordContext.Provider>
  );
}

export const usePassword = () => useContext(PasswordContext);

// ======================
// 2. PASSWORD MODAL (White Themed)
// ======================
export function PasswordModal() {
  const { showModal, verifyPassword, closeModal, completeAuth } = usePassword();
  const [password, setPassword] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useState(() => {
    setMounted(true);
  }, []);

  if (!showModal || !mounted) return null;

  const fetchShopPage = async () => {
    // Simulate fetching the /shop page
    // Replace this with your actual page navigation logic
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // Simulate network delay
    });
  };

  const tryVerify = async (candidate) => {
    const isValid = await verifyPassword(candidate);
    if (isValid) {
      setIsSuccess(true);
      setIsLoading(true);
      
      try {
        await fetchShopPage();
        // Once page is fetched, complete authentication
        completeAuth();
        // Redirect to /shop or trigger navigation
        // window.location.href = '/shop';
      } catch (err) {
        console.error('Failed to load shop page:', err);
        setIsLoading(false);
        setIsSuccess(false);
        setError(true);
      }
    } else {
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
    if (value.length > 1 || isLoading) return;
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
    if (isLoading) return;
    if (e.key === "Backspace" && !password[index] && index > 0) {
      document.getElementById(`pwd-input-${index - 1}`)?.focus();
    }
    if (e.key === "Enter") {
      const full = password.join("");
      if (full.length === 6) tryVerify(full);
    }
  };

  const handlePaste = (e) => {
    if (isLoading) return;
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
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={isLoading ? undefined : closeModal}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full max-w-md sm:max-w-lg bg-gray-50
          border border-gray-200 shadow-2xl
          text-neutral-900 p-8 sm:p-12
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
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .spinner {
            animation: spin 1s linear infinite;
          }
        `}</style>

        {/* Close */}
        {!isLoading && (
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-neutral-900 transition-colors"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-widest mb-6 text-neutral-900">
            VALEN MASIJMO
          </h2>
          <div className="w-16 h-px bg-neutral-300 mx-auto mb-3"></div>
          <p className="text-gray-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
            {isLoading ? "Standby..." : "Enter Access Code"}
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
              disabled={isLoading}
              className={`
                text-center text-neutral-900 font-medium bg-white border
                w-12 h-14 sm:w-14 sm:h-16 text-xl sm:text-2xl
                focus:outline-none transition-all
                ${isLoading ? "cursor-not-allowed opacity-50" : ""}
                ${error 
                  ? "border-red-400 text-red-500 bg-red-50" 
                  : isSuccess
                  ? "border-green-500 text-green-600 bg-green-50"
                  : "border-gray-300 focus:border-neutral-900 focus:shadow-sm"
                }
              `}
            />
          ))}
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center mb-6">
            <div className="spinner w-8 h-8 border-3 border-gray-200 border-t-neutral-900 rounded-full"></div>
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div className="text-center uppercase font-bold text-red-800 text-xs sm:text-sm mb-4 tracking-wide">
            Invalid code. Please try again.
          </div>
        )}

        {/* Loading Text */}
        {isLoading && (
          <div className="text-center uppercase font-bold text-neutral-900 text-xs sm:text-sm mb-4 tracking-wide">
            Checking password...
          </div>
        )}

        {/* Info */}
        {!isLoading && (
          <div className="text-center text-gray-400 text-xs font-bold tracking-widest uppercase">
            Restricted Access
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

// ======================
// 3. DEMO COMPONENT
// ======================
export default function Demo() {
  return (
    <PasswordProvider>
      <DemoContent />
    </PasswordProvider>
  );
}

function DemoContent() {
  const { requestAccess, isAuthenticated } = usePassword();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-wider text-neutral-900 mb-8">
          Password Modal Demo
        </h1>
        <button
          onClick={() => requestAccess(() => alert("Access granted! Redirecting to shop..."))}
          className="px-8 py-3 bg-neutral-900 text-white text-sm font-bold tracking-widest uppercase hover:bg-neutral-700 transition-colors"
        >
          {isAuthenticated ? "Already Authenticated" : "Request Access"}
        </button>
        <p className="mt-6 text-sm text-gray-600 font-bold tracking-wide">
          Password: <span className="font-medium">SECRET</span>
        </p>
      </div>
      <PasswordModal />
    </div>
  );
}