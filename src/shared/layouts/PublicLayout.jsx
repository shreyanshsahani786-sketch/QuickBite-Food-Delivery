import { Outlet } from "react-router-dom";

import Header from "@/shared/layouts/Header";

function PublicLayout() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default PublicLayout;