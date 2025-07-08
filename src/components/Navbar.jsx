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
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase text-[#3f6f30]">
            <img
              src={squarefarmlogo}
              alt="Square Farms Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600 capitalize">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={(e) => handleDesktopClick(e, item.link)}
                    className="inline-block py-1 px-3 hover:text-green font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <button className="hover:bg-white bg-[#3f6f30] text-white font-semibold hover:text-[#3f6f30] rounded-md border-2 border-[#3f6f30] px-6 py-2 duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
