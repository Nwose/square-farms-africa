import { AnimatePresence, motion } from "framer-motion";
import { NavbarMenu } from "./MockData/data";
import { X } from "lucide-react";
import { useEffect } from "react";

const ResponsiveMenu = ({ open, setOpen }) => {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      setTimeout(() => {
        const el = document.querySelector(link);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      setOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen bg-[#3f6f30] z-50 overflow-y-auto md:hidden"
          aria-modal="true"
          role="dialog"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="focus:outline-none"
            >
              <X className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="text-xl font-semibold uppercase text-white py-6 px-4 rounded-b-2xl">
            <ul className="flex flex-col justify-center items-center gap-8">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="w-full">
                  <a
                    href={item.link}
                    onClick={(e) => handleClick(e, item.link)}
                    className="block w-full text-center py-3 hover:underline focus:underline focus:outline-none"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => setOpen(false)}
                className="bg-white text-[#3f6f30] font-semibold px-8 py-3 rounded-md border-2 border-white hover:bg-gray-100 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
