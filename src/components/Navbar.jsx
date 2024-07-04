import logo from "../assets/logo.svg";
import twitter from "../assets/twitter.svg";

const Navbar = () => {
    return (
        <nav className="mx-auto max-w-[606px] rounded-[10px] bg-[#282828] text-white flex justify-between py-[6px] px-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
            <img src={logo} />
            <div className="flex gap-[6px] px-3 py-[6px] items-center cursor-pointer hover:text-blue-300 twitter transition-all">
                <img src={twitter} className="w-6" />
                <p className="font-Inter600 text-xs">Follow us on Twitter</p>
            </div>
        </nav>
    );
};

export default Navbar;
