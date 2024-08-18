// import Link from "next/link";
import {Link, animateScroll as scroll} from 'react-scroll';
const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href.substring(1)}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer scroll-link"
      activeClass="active" 
      smooth={true} 
      offset={50} 
      duration={5} 
    >
      {title}
    </Link>
  );
};

export default NavLink;
