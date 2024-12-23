import ServiceAvatar from "./ServiceAvatar";
import ServiceGraph from "./ServiceGraph";
import ServiceManage from "./ServiceManage";
import Marquee from "./ui/marquee";

const Services = () => {
    return (
        <div className="mx-auto max-w-[822px] relative mt-[108px] ">
            <div className="w-11/12 h-[270px] rounded-[25px] bg-[#FFFFFFCC] absolute top-[-15px] left-1/2 -translate-x-1/2 "></div>
            <div className="w-10/12 h-[270px] rounded-[25px] bg-[#FFFFFF80] absolute top-[-30px]   left-1/2 -translate-x-1/2  "></div>
            <div className="w-9/12 h-[270px] rounded-[25px] bg-[#FFFFFF33] absolute top-[-43px]  left-1/2 -translate-x-1/2 "></div>
            <div className="max-w-[822px] rounded-[25px] bg-gradient-to-r from-[#314EE7] to-[#FE9C9C] pl-4 py-4 md:pl-8 md:py-6 relative">
                {/* <div className="flex gap-10 scroll py-2 pr-4 md:py-4 md:pr-8">
                    <ServiceManage />
                    <ServiceAvatar />
                    <ServiceGraph />
                </div> */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent">
                    <Marquee
                        pauseOnHover
                        className="[--duration:20s] [--gap:2.5rem]"
                    >
                        <ServiceManage />
                        <ServiceAvatar />
                        <ServiceGraph />
                    </Marquee>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#314EE7] "></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#FE9C9C]"></div>
                </div>
            </div>
        </div>
    );
};

export default Services;
