import React from "react";

export const TryToFree = () => {
    const scrollToNewsletter = () => {
        const target = document.getElementById("newsletter");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="bg-[#FDFDFD] border border-[#0000000D] shadow-[0_3.25px_6.5px_0_#00000012] transition-shadow hover:transition-shadow hover:shadow-[0_4px_8px_0_#00000040] rounded-lg px-7 py-5 ">
            <div className="flex gap-3 justify-between items-center">
                <div className="flex flex-col ">
                    <div className="text-[#314EE7] font-DM700 text-lg tracking-[-1px]">
                        Try for free
                    </div>
                    <div className="text-[#242424] font-DM500 text-xs md:text-sm">
                        *No credit card required
                    </div>
                </div>
                <button
                    className=" bg-[#314EE7] hover:bg-[#2235d3] w-[58px] h-[58px] rounded-full flex flex-col justify-center items-center"
                    onClick={scrollToNewsletter}
                >
                    <svg
                        width="18"
                        height="11"
                        viewBox="0 0 18 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.926392 6.57024H14.1615L11.0125 9.67222L12.3488 11L17.9264 5.50572L12.3488 0L11.0125 1.32778L14.1499 4.40687H0.926392V6.57024Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
