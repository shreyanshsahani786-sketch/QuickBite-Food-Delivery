import { useSelector } from "react-redux";
import { HiOutlineUser } from "react-icons/hi2";

import navigation from "@/shared/constants/navigation";

import {
  selectIsAuthenticated,
} from "@/features/auth/selectors";

import NavItem from "./NavItem";

function DesktopNav() {
  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navigation.map((item) => (
        <NavItem
          key={item.path}
          to={item.path}
          icon={item.icon}
        >
          {item.label}
        </NavItem>
      ))}

      <NavItem
        to={
          isAuthenticated
            ? "/profile"
            : "/login"
        }
        icon={HiOutlineUser}
      >
        {isAuthenticated
          ? "Profile"
          : "Login"}
      </NavItem>
    </nav>
  );
}

export default DesktopNav;