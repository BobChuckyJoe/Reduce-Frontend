import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import cx from "classnames";

const Bar = () => <div className="w-10 h-2 bg-white" />;

const PAGE_DATA = {
  "/stats": "My Stats",
  "/group": "My Group",
};

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname: currPath } = useLocation();
  const pageTitle = PAGE_DATA[currPath as keyof typeof PAGE_DATA];
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="z-20 sticky top-0 bg-blue w-full h-20 flex flex-row justify-between items-center px-5"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((isOpen) => !isOpen);
          }}
          className="flex flex-col justify-between space-y-2"
        >
          <Bar /> <Bar /> <Bar />
        </button>
        <h2 className="text-white font-extrabold text-3xl">{pageTitle}</h2>
      </div>
      <Modal
        isOpen={isOpen}
        className="absolute z-10 top-0 bottom-auto left-0 right-0 bg-[#f6f6f6] transition-all"
        overlayClassName="absolute top-20 bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.75)]"
        shouldCloseOnOverlayClick
        onRequestClose={() => setIsOpen(false)}
        appElement={document.getElementById("root") as HTMLElement}
      >
        {Object.entries(PAGE_DATA).map(([pathname, title]) => (
          <button
            key={`page-${pathname}`}
            onClick={() => {
              setIsOpen(false);
              navigate(pathname);
            }}
            className={cx(
              "py-4 text-center w-screen",
              pathname === currPath && "bg-white font-semibold"
            )}
          >
            <h4 className="text-lg">{title}</h4>
          </button>
        ))}
      </Modal>
    </>
  );
};

export default Navbar;
