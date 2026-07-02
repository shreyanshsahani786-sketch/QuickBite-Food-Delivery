import { Outlet } from "react-router-dom";

import Header from "@/shared/layout/Header";

function PublicLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PublicLayout;