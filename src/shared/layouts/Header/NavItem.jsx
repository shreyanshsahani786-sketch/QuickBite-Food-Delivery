import PropTypes from "prop-types";

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
        [
          "flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition",
          isActive
            ? "bg-orange-50 text-orange-500"
            : "text-gray-700 hover:bg-gray-100 hover:text-orange-500",
        ].join(" ")
      }
    >
      {Icon && (
        <Icon className="h-5 w-5 shrink-0" />
      )}

      <span className="whitespace-nowrap">
        {children}
      </span>
    </NavLink>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

export default NavItem;