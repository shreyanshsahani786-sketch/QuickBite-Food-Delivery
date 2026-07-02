import { NavLink } from "react-router-dom";

function NavItem({
  to,
  icon: Icon,
  children,
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-lg px-4 py-2 transition ${
          isActive
            ? "bg-orange-100 text-orange-600"
            : "hover:bg-gray-100"
        }`
      }
    >
      <Icon size={20} />

      <span>{children}</span>
    </NavLink>
  );
}

export default NavItem;