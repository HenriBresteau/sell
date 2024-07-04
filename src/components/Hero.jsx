import user1 from "../assets/user_1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";

const Hero = () => {
    return (
        <div className="mt-10 flex flex-col items-center text-center relative">
            <div className="rounded-full px-2 md:px-4 py-2 font-DM700  text-xs text-white bg-gradient-to-r from-[#E693A5] to-[#3951E5] w-fit ">
                Introducing a new online selling platform 🎉
            </div>
            <h1 className="max-w-[633px] mt-11 font-Dela text-3xl md:text-5xl leading-12 ">
                Best way to sell <br />
                your digital product
            </h1>
            <p className="max-w-[480px] mt-5 font-DM500 text-base md:text-lg text-[#626262]">
                Go from Zero to Hero with simple platform that helps creators
                like you sell their digital products online.
            </p>
            <form className="mt-8 md:mt-6 flex flex-wrap gap-3 ">
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full md:w-fit bg-[#F7F7F7] py-[15px] pl-[20px] pr-[73px] rounded-lg font-DM500 text-sm leading-[20.3px] text-black placeholder:text-[#00000080] placeholder:w-[166px]"
                    placeholder="Your best email address"
                />
                <button className=" bg-[#314EE7] py-[15px] px-[42px] rounded-lg font-DM700 text-sm leading-[20.3px] text-white cursor-pointer w-full md:w-fit transition-colors hover:bg-[#2235d3]">
                    Try it out
                </button>
            </form>
            <div className="mt-8 sm:mt-5 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex -space-x-3 ">
                    <img
                        src={user1}
                        className="w-8 h-8 object-cover bg-[#F9CF7F] rounded-full inline-block outline outline-2 outline-white"
                    />
                    <img
                        src={user2}
                        className="w-8 h-8 rounded-full inline-block  outline outline-2 outline-white"
                    />
                    <img
                        src={user3}
                        className="w-8 h-8 rounded-full  inline-block outline outline-2 outline-white"
                    />
                    <img
                        src={user4}
                        className="w-8 h-8 rounded-full inline-block outline outline-2 outline-white"
                    />
                    <div className="min-w-8 h-8 outline outline-2 outline-white rounded-full flex flex-col justify-center items-center  bg-[#E7EAFF]  ">
                        <p className="font-Inter700 text-xs text-center text-[#314EE7]">
                            100+
                        </p>
                    </div>
                </div>
                <div className="max-w-[280px] font-DM500 text-sm leading-4 text-[#00000080] text-center sm:text-left">
                    <span className="font-DM700 text-black">
                        More than 100+
                    </span>{" "}
                    users are selling their products online with simple & easy
                    ways
                </div>
            </div>
        </div>
    );
};

export default Hero;
