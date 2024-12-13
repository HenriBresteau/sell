import FeatureIcon from "./FeatureIcon";
import save from "../assets/save.svg";
import more from "../assets/more.svg";
import popular from "../assets/popular.svg";
import globe from "../assets/globe.svg";
import { TryToFree } from "./TryToFree";
import ServiceManage from "./ServiceManage";
import { motion } from "motion/react";

export const Features = () => {
    return (
        <div className="mt-16 relative max-w-[822px] mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -200 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                className="font-Dela text-4xl text-black w-fit mx-auto md:mx-0  "
            >
                Features
            </motion.h2>
            <div className="mt-6 md:mt-16">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    className="flex flex-col flex-wrap gap-y-8 md:gap-y-[57px] md:max-w-[604px] mt-[26px]"
                >
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
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    className="relative mt-12 lg:mt-0 lg:absolute lg:top-[80px] lg:right-[-100px] flex flex-col gap-10 max-w-[292px] mx-auto md:mx-0"
                >
                    <TryToFree />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    className="relative mt-12 lg:mt-0 lg:absolute lg:top-[250px] lg:right-[-200px] flex flex-col gap-10 max-w-[292px] mx-auto md:mx-0"
                >
                    <ServiceManage hovered />
                </motion.div>
            </div>
        </div>
    );
};
