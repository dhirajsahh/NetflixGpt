import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utlis/FireBase";
import { addUser, removeUser } from "../Redux/userSlice";
import { useEffect } from "react";
import { logo } from "../utlis/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-full flex items-center justify-between z-50 md:px-8 md:py-2 bg-gradient-to-b from-black">
      <img className="w-32 md:w-44 " src={logo} alt="logo" />
      <div>
        {user && (
          <div className="flex flex-wrap gap-3">
            <img
              className="w-8 h-8 rounded-full"
              src={user?.photoURL}
              alt="PP"
            />
            <p className="">{user?.displayName}</p>
            <button
              className="bg-red-700 px-3 py-1 hover:opacity-80 text-white rounded-md"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
