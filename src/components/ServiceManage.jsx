import locker from "../assets/locker.svg";
import percent from "../assets/90percent.svg";
import cart from "../assets/cart.svg";
import quizepercent from "../assets/15percent.svg";

const ServiceManage = () => {
    return (
        <div className="flex-none max-w-[302px] bg-white px-6 pt-4 pb-5 rounded-lg">
            <div className=" text-[#0A071B] font-Inter500 text-base text-center">
                Manage your store
            </div>
            <div className="mt-[14px] flex gap-[26.76px] ">
                <div className="flex gap-[10px] items-center ">
                    <div className="w-[50px] h-[50px] bg-[#ec9c4017] rounded-full flex items-center justify-center flex-col ">
                        <img src={locker} className=" " />
                    </div>
                    <div className="flex flex-col gap-[14px] ">
                        <div className="bg-[#0A071BB2] w-[123px] h-[10px] rounded-full opacity-10 "></div>
                        <div className="bg-[#0A071BB2] w-[68px] h-[10px] rounded-full opacity-10"></div>
                    </div>
                </div>
                <img src={percent} className="w-[48px] h-[48px] " />
            </div>
            <div className="mt-[14px] flex gap-[26.76px] ">
                <div className="flex gap-[10px] items-center ">
                    <div className="w-[50px] h-[50px] bg-[#FD8B8B17] rounded-full flex items-center justify-center flex-col ">
                        <img src={cart} className=" " />
                    </div>
                    <div className="flex flex-col gap-[14px] ">
                        <div className="bg-[#0A071BB2] w-[123px] h-[10px] rounded-full opacity-10 "></div>
                        <div className="bg-[#0A071BB2] w-[68px] h-[10px] rounded-full opacity-10"></div>
                    </div>
                </div>
                <img src={quizepercent} className="w-[48px] h-[48px] " />
            </div>
        </div>
    );
};

export default ServiceManage;
