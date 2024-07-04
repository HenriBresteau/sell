import FeatureIcon from "./FeatureIcon";
import save from "../assets/save.svg";
import more from "../assets/more.svg";
import popular from "../assets/popular.svg";
import globe from "../assets/globe.svg";

export const Features = () => {
    return (
        <div className="mt-16 relative max-w-[822px] mx-auto">
            <h2 className="font-Dela text-4xl text-black w-fit mx-auto md:mx-0  ">
                Features
            </h2>
            <div className="mt-6 md:mt-16">
                <div className="flex flex-col flex-wrap gap-y-8 md:gap-y-[57px] md:max-w-[604px] mt-[26px]">
                    <div className="flex flex-wrap justify-center md:justify-start gap-y-8 md:gap-y-0 md:gap-x-[68px]">
                        <FeatureIcon
                            title="Save time & Reduce cost"
                            icon={save}
                            block="max-w-[300px] md:max-w-[259px]"
                        >
                            Building your own online store, shopping cart,
                            checkout, and licensing is time-consuming
                        </FeatureIcon>
                        <FeatureIcon
                            title="More features"
                            icon={more}
                            block="max-w-[300px] md:max-w-[254px]"
                        >
                            We simplify all that by combining all of the
                            features and solutions you need to sell
                        </FeatureIcon>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-y-8 md:gap-y-0 md:gap-x-[81px]">
                        <FeatureIcon
                            title="Sell your popular product more"
                            icon={popular}
                            block="max-w-[300px] md:max-w-[249px] "
                        >
                            Designed from the ground up to be easy to use and
                            quick to set up for sellers
                        </FeatureIcon>
                        <FeatureIcon
                            title="Sell it across the Globe"
                            icon={globe}
                            block="max-w-[300px] md:max-w-[274px]"
                        >
                            Expand into new global markets with ease when you
                            automatically display popular pricing
                        </FeatureIcon>
                    </div>
                </div>
                <div className="relative mt-12 lg:mt-0 lg:absolute lg:top-[80px] lg:right-[-100px] flex flex-col gap-10 max-w-[292px] mx-auto md:mx-0">
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
                            <button className=" bg-[#314EE7] hover:bg-[#2235d3] w-[58px] h-[58px] rounded-full flex flex-col justify-center items-center">
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
                </div>
            </div>
        </div>
    );
};
