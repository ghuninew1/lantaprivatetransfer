import { cx } from "#utils/utils";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


function NavbarLinks({ link, ...rest }) {
  return (
    <NavLink
      {...rest}
      to={link.to || "/"}
      end={link.to === "/" ? true : false}
      className={({ isActive }) =>
        cx("block rounded-md px-3 py-2 hover:bg-orange-600 w-full md:w-auto hover:text-white", isActive && "text-orange-500")
      }
    >
      <p className="font-semibold text-lg">{link.text}</p>
    </NavLink>
  );
}

NavbarLinks.propTypes = {
  link: PropTypes.object,
};

export default NavbarLinks;
