import "./style.css";
import { appleImg, bagImg, searchImg } from "../../utils";
import { navLists } from "../../constants";

function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="w-full flex screen-max-width">
        <a href="#">
          <img src={appleImg} alt="apple" width={14} height={18} />
        </a>
        <div className="flex justify-center flex-1 max-sm:hidden">
          <ul className="flex">
            {navLists.map((item, index) => (
              <li className="px-5" key={index}>
                <a
                  className="text-sm text-gray-default-200 hover:text-white transition-all duration-300"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-7 flex max-sm:justify-end items-baseline max-sm:flex-1">
          <div>
            <img src={searchImg} alt="search" height={18} width={18} />
          </div>
          <div>
            <img src={bagImg} alt="bag" height={18} width={18} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
