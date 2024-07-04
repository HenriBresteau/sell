const FeatureIcon = ({ title, icon, children, block }) => {
    return (
        <div
            className={`flex flex-col justify-center items-center text-center md:items-start md:text-left gap-[8px] ${block} transition-all group hover:scale-105 hover:transition-all `}
        >
            <img
                src={icon}
                className="w-14 h-14 transition-all group-hover:rotate-3 group-hover:drop-shadow-lg group-hover:transition-all "
            />
            <div className="flex flex-col gap-[10px]">
                <h3 className="font-DM700 text-base  text-black ">{title}</h3>
                <p className="font-DM500 text-sm  text-[#626262]">{children}</p>
            </div>
        </div>
    );
};

export default FeatureIcon;
