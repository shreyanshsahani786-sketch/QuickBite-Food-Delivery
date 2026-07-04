import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useSelector } from "react-redux";

import { HiOutlineUser } from "react-icons/hi2";

import navigation from "@/shared/constants/navigation";

import {
  selectIsAuthenticated,
} from "@/features/auth/selectors";

import NavItem from "./NavItem";

function MobileNav({
  open,
  onClose,
}) {
  const isAuthenticated = useSelector(
    selectIsAuthenticated
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.25,
          }}
          className="fixed right-0 top-0 z-50 h-screen w-72 bg-white p-8 shadow-2xl lg:hidden"
        >
          <div className="mt-16 space-y-3">

            {navigation.map((item) => (
              <div
                key={item.path}
                onClick={onClose}
              >
                <NavItem
                  to={item.path}
                  icon={item.icon}
                >
                  {item.label}
                </NavItem>
              </div>
            ))}

            <div onClick={onClose}>
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
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;