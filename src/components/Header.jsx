import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import NavItems from "./NavItems";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="fixed z-50 top-0 bg-white  w-full">
      <div className="navbar w-11/12 mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-3 dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-6 w-36 p-4 shadow"
            >
              <NavItems></NavItems>
            </ul>
          </div>
          <h2 className="font-bold text-xl md:text-3xl text-purple-800">
            Flower Luxe
          </h2>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex mr-3">
            <ul className="menu menu-horizontal gap-6 md:text-base font-semibold">
              <NavItems></NavItems>
            </ul>
          </div>
          {!user ? (
            <>
              <LoginLink className="border rounded-lg font-semibold md:px-4 md:py-2 py-2 px-3 text-sm md:text-base bg-purple-800 hover:bg-purple-700 text-white">
                Login
              </LoginLink>
              <RegisterLink className="border rounded-lg font-semibold md:px-4 md:py-2 py-2 px-3 text-sm md:text-base bg-purple-800 hover:bg-purple-700 text-white">
                Register
              </RegisterLink>
            </>
          ) : (
            <LogoutLink className="border rounded-lg font-semibold md:px-4 md:py-2 py-2 px-3 text-sm md:text-base bg-purple-800 hover:bg-purple-700 text-white">
              Logout
            </LogoutLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
