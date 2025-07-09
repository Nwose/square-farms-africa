import { useState } from "react";
import { Menu } from "lucide-react";
import { NavbarMenu } from "./MockData/data";
import ResponsiveMenu from "./ResponsiveMenu";
import squarefarmlogo from "../assets/squarefarmlogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDesktopClick = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between py-4 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold uppercase text-[#3f6f30]">
            <img
              src={squarefarmlogo}
              alt="Square Farms Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex flex-wrap items-center gap-x-4 md:gap-x-6 text-gray-600 capitalize">
            {NavbarMenu.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={(e) => handleDesktopClick(e, item.link)}
                className="inline-block py-1 px-2 hover:text-green font-semibold"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="hover:bg-white bg-[#3f6f30] text-white font-semibold hover:text-[#3f6f30] rounded-md border-2 border-[#3f6f30] px-5 py-2 text-sm md:text-base duration-200 whitespace-nowrap">
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="text-3xl text-[#3f6f30]" />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
