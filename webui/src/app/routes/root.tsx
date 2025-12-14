import { Navbar } from "@/components/layout/navbar.tsx";
import { Outlet } from "react-router";
import { useSidebar } from "@/components/ui/sidebar.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Menu } from "lucide-react";
import { NavSidebar } from "@/components/layout/nav-sidebar.tsx";

export const Root = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-screen h-screen max-md:pt-12">
      <Button
        className="hidden max-md:block fixed bottom-8 right-8"
        onClick={toggleSidebar}
      >
        <Menu />
      </Button>
      <Navbar />
      <NavSidebar />
      <Outlet />
    </div>
  );
};
