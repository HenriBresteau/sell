import locker from "../assets/locker.svg";
import arrow from "../assets/arrow-down.svg";
import user1 from "../assets/user_1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";

const ServiceAvatar = () => {
    return (
        <div className="flex-none max-w-[302px] bg-white px-[21px] pt-[16px] pb-[19px] rounded-[10px] flex flex-col gap-[60px]">
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
                    <img src={arrow} />
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
