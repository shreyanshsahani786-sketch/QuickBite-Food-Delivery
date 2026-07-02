import { useState } from "react";
import {
  HiBars3,
  HiXMark,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectCartQuantity } from "@/features/cart/selectors";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Header() {
  const [open, setOpen] = useState(false);

  const cartCount =
    useAppSelector(selectCartQuantity);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md">

        <div className="container flex h-20 items-center justify-between">

          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-4">

            <button className="relative">

              <HiOutlineShoppingCart size={28} />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                  {cartCount}
                </span>
              )}

            </button>

            <button
              onClick={() =>
                setOpen(!open)
              }
              className="lg:hidden"
            >
              {open ? (
                <HiXMark size={30} />
              ) : (
                <HiBars3 size={30} />
              )}
            </button>

          </div>

        </div>

      </header>

      <MobileNav
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  );
}

export default Header;