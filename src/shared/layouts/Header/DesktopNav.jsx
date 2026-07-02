import navigation from "@/shared/constants/navigation";
import NavItem from "./NavItem";

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-3 lg:flex">
      {navigation.map((item) => (
        <NavItem
          key={item.path}
          to={item.path}
          icon={item.icon}
        >
          {item.label}
        </NavItem>
      ))}
    </nav>
  );
}

export default DesktopNav;