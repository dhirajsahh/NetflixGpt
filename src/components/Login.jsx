import { useRef, useState } from "react";
import Headers from "./Header";
import { checkValidData } from "../utlis/ValidateUser";
import { auth } from "../utlis/FireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../Redux/userSlice";
import { backgroundImage, dummyphotoURL } from "../utlis/Constant";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignForm] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };
  function handleButtonClick(e) {
    e.preventDefault();
    const message = checkValidData(
      emailRef?.current?.value,
      passwordRef?.current?.value
    );
    setErrorMessage(message);
    if (message) return null;
    if (!isSignInForm) {
      //signUp
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: dummyphotoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    }
  }
  return (
    <div>
      <Headers />
      <div className="absolute">
        <img src={backgroundImage} alt="BackgroundImage" />
      </div>
      <form className=" text-white absolute w-full h-full md:h-auto md:w-3/12 bg-black md:my-36 mx-auto right-0 left-0 flex flex-col gap-7 px-12 py-16 rounded-lg bg-opacity-90">
        <h1 className="font-semibold  text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Fulll Name"
            className="p-4 w-full bg-gray-700 rounded-lg focus:outline-none"
            ref={nameRef}
          />
        )}
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 w-full bg-gray-700 rounded-lg focus:outline-none"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full bg-gray-700 rounded-lg focus:outline-none"
          ref={passwordRef}
        />
        <button
          className="p-4 bg-red-600 w-full rounded-lg hover:opacity-90"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500">{errorMessage}</p>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
