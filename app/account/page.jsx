"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast, { Toaster } from "react-hot-toast";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function AuthPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("/");
    }
  }, []);

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // The captcha was verified successfully
            // onSignUp();
          },
          "expired-callback": () => {},
        }
      );
    } else {
      window.recaptchaVerifier.render().then(function (widgetId) {
        grecaptcha.reset(widgetId);
      });
    }
  }

  async function onSignUp() {
    setLoading(true);
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPhone = "+" + phone;

    signInWithPhoneNumber(auth, formatPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error during sign-up:", error);
        toast.error(error.message);
      });
  }

  // async function onSignUp() {
  //   try {
  //     const numericPhone = phone.replace(/\D/g, ""); // Remove non-numeric characters
  //     const isValidPhone = numericPhone.length === 12 && !isNaN(numericPhone);

  //     if (!isValidPhone) {
  //       setError(true);
  //       setDisabled(true);
  //       return;
  //     }

  //     setLoading(true);
  //     onCaptchaVerify(); // Ensure this is not being called multiple times

  //     const appVerifier = window.recaptchaVerifier;
  //     const formatPhone = "+" + numericPhone;

  //     const confirmationResult = await signInWithPhoneNumber(
  //       auth,
  //       formatPhone,
  //       appVerifier
  //     );

  //     window.confirmationResult = confirmationResult;
  //     setLoading(false);
  //     setShowOtp(true);
  //     toast.success("OTP sent successfully!");
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("Error during sign-up:", error);
  //     toast.error(error.message);
  //   }
  // }

  function onOtpVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(res.user));
        router.push("/");
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber:", error);
        setLoading(false);
        toast.error("Unable to process the OTP");
      });
  }

  function handlePhoneInputChange(value) {
    setPhone(value);
    setError(false);
    if (value.length === 10) {
      setDisabled(false);
    }
  }

  return (
    <section className="mx-5 md:mx-36 xl:mx-80 flex items-center justify-center bg-emerald-600 h-96 styles.blinker rounded-lg">
      <div>
        <Toaster toastOptions={{ duration: 6000 }} />
        <div id="recaptcha-container"></div>
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center leading-normal text-white font-medium styles.blinker text-3xl mb-6">
            Welcome to your shopping app
          </h1>

          {showOtp ? (
            <>
              <div className="bg-white text-emerald-600 w-fit mx-auto p-4 rounded-full">
                <BsFillShieldLockFill size={30} />
              </div>
              <label
                htmlFor="otp"
                className="font-bold text-2xl text-white text-center"
              >
                Enter your OTP
              </label>
              <OtpInput
                containerStyle="flex gap-2 text-xl justify-center p-2"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType="tel"
                placeholder="XXXXXX"
                shouldAutoFocus
                renderInput={(props) => <input {...props} />}
              />

              <button
                onClick={onOtpVerify}
                className="bg-emerald-700 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
              >
                {loading && (
                  <CgSpinner
                    size={20}
                    className="mt-1 flex items-center animate-spin"
                  />
                )}
                <span>Verify OTP</span>
              </button>
            </>
          ) : (
            <>
              <div className="bg-white text-emerald-600 w-fit mx-auto p-4 rounded-full">
                <BsTelephoneFill size={30} />
              </div>
              <label
                htmlFor="phone"
                className="font-bold text-xl text-white text-center"
              >
                Verify your phone number
              </label>
              <PhoneInput
                className=""
                placeholder="phone number"
                country={"in"}
                value={phone}
                onChange={(value) => handlePhoneInputChange(value)}
                shouldAutoFocus
              />
              {error && (
                <p className="text-red-500">
                  Please enter a valid phone number
                </p>
              )}
              <button
                onClick={onSignUp}
                className="bg-emerald-700 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                disabled={disabled}
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Send code via SMS</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
