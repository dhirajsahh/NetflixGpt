import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utlis/FireBase";
import { removeUser } from "../Redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div className="absolute w-full flex items-center justify-between z-50 md:px-8 md:py-2 bg-gradient-to-b from-black">
      <img
        className="w-32 md:w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div>
        {user ? (
          <div className="flex flex-wrap gap-3">
            <img
              className="w-8 h-8 rounded-full"
              src={user?.photoURL}
              alt="PP"
            />
            <p>{user?.displayName}</p>
            <button
              className="bg-red-700 px-3 py-1 hover:opacity-80 text-white rounded-md"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-red-700 px-3 py-1 hover:opacity-80 text-white rounded-md">
              SignIn
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
