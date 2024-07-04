import logo from "../assets/logo-footer.svg";

const Footer = () => {
    return (
        <footer className="mt-12 md:mt-20 mb-6 md:mb-16 mx-auto max-w-[822px] rounded-[10px] text-[#0A071B] flex flex-wrap items-center gap-3 justify-between py-[5px] px-[15px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
            <img src={logo} className="w-14" />
            <div className="flex gap-2 md:gap-1 ">
                <p className="font-Inter600 text-sm  md:px-3 md:py-2 cursor-pointer hover:text-[#2235d3] ">
                    Home
                </p>
                <p className="font-Inter600 text-sm  md:px-3 md:py-2 cursor-pointer hover:text-[#2235d3]">
                    Agencies
                </p>
                <p className="font-Inter600 text-sm  md:px-3 md:py-2 cursor-pointer hover:text-[#2235d3]">
                    About
                </p>
                <p className="font-Inter600 text-sm  md:px-3 md:py-2 cursor-pointer hover:text-[#2235d3]">
                    My shortlist
                </p>
            </div>
        </footer>
    );
};

export default Footer;
