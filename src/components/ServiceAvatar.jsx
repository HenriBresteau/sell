import locker from "../assets/locker.svg";
import arrow from "../assets/arrow-down.svg";
import user1 from "../assets/user1.svg";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import user4 from "../assets/user4.svg";

const ServiceAvatar = () => {
    return (
        <div className="flex-none max-w-[302px] bg-white px-5 py-4 rounded-lg flex flex-col gap-[60px] transition-colors hover:bg-zinc-100 ">
            <div className="flex gap-[26px] ">
                <div className="flex gap-[10px] items-center ">
                    <div className="w-[50px] h-[50px] bg-[#ec9c4017] rounded-full flex items-center justify-center flex-col ">
                        <img src={locker} className=" " />
                    </div>
                    <div className="flex flex-col gap-[14px] ">
                        <div className="bg-[#0A071BB2] w-[123px] h-[10px] rounded-full opacity-10 "></div>
                        <div className="bg-[#0A071BB2] w-[68px] h-[10px] rounded-full opacity-10"></div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="font-Inter700 text-2xl text-[#0A071B]">
                        27k
                    </div>
                    <img src={arrow} className="rotate-180" />
                </div>
            </div>
            <div className="flex gap-[14px]">
                <div className="flex gap-[14px]">
                    <img
                        src={user1}
                        className="w-[42px] h-[42px] object-cover bg-[#F9CF7F] rounded-full inline-block outline outline-2 outline-white pointer-events-none"
                    />
                    <img
                        src={user2}
                        className="w-[42px] h-[42px] rounded-full inline-block  outline outline-2 outline-white pointer-events-none"
                    />
                    <img
                        src={user3}
                        className="w-[42px] h-[42px] rounded-full  inline-block outline outline-2 outline-white pointer-events-none"
                    />
                    <img
                        src={user4}
                        className="w-[42px] h-[42px] rounded-full inline-block outline outline-2 outline-white pointer-events-none"
                    />
                    <div className="min-w-[42px] h-[42px] outline outline-2 outline-white rounded-full flex flex-col justify-center items-center  bg-[#E9EEF6]  ">
                        <p className="font-Inter500 text-sm text-center text-[#242424]">
                            12k+
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAvatar;
