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
                cx(
                    "z-10 block w-full rounded-md px-3 py-2 hover:bg-orange-600 hover:text-white md:w-auto",
                    isActive && "text-orange-500",
                    isActive && link.to === "/booking" && "bg-red-500 text-white",
                    link.to === "/booking" && "text-red-500 border border-red-500",
                )
            }
        >
            <p className="text-lg font-semibold">{link.text}</p>
        </NavLink>
    );
}

NavbarLinks.propTypes = {
    link: PropTypes.object,
};

export default NavbarLinks;
