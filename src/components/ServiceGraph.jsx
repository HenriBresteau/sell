import arrow from "../assets/arrow-down.svg";
import graph from "../assets/graph.svg";

const ServiceGraph = () => {
    return (
        <div className="flex-none max-w-[302px] bg-white px-[21px] pt-[16px] pb-[19px] rounded-[10px] flex flex-col gap-[30px] relative">
            <div className="flex gap-[26px] ">
                <div className="flex gap-1 items-center">
                    <div className="font-Inter700 text-[28px] text-[#0A071B]">
                        $ 7,283k
                    </div>
                    <img src={arrow} className="rotate-180" />
                </div>
            </div>
            <div className="absolute top-10 right-8 bg-[#EEEEEF] p-3 rounded-[10px] text-[#0A071B] font-DM500 text-base ">
                +10%
            </div>
            <div>
                <img src={graph} className="" />
            </div>
        </div>
    );
};

export default ServiceGraph;
