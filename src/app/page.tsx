import Image from "next/image";
import Navigation from "@/components/layouts/Navigation";
import MobileMenuBar from "@/components/layouts/MobileMenuBar";
import SidebarProfile from "@/components/layouts/SidebarProfile";

export default function Home() {
  return (
    <div className="relative pt-10 minfo__app max-xl:pt-20">
      <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100"></div>
      <div className="max-lg:px-4">
        <MobileMenuBar />
        <SidebarProfile />
        <Navigation />
      </div>
    </div>
  );
}
