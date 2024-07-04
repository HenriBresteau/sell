const Newsletter = () => {
    return (
        <div className="max-w-[822px] mt-20 mx-auto  bg-white rounded-[25px] py-8 md:py-14 px-6 ">
            <h2 className=" font-Dela text-[#0A071B] text-xl md:text-3xl text-center">
                Be the first to know about new features, special offers, and
                more.
            </h2>
            <form className="mt-4 md:mt-7 flex flex-wrap gap-3 justify-center ">
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full md:w-fit bg-[#F7F7F7] py-[15px] pl-[20px] pr-[73px] rounded-lg font-DM500 text-sm leading-[20.3px] text-black placeholder:text-[#00000080] placeholder:w-[166px]"
                    placeholder="Your best email address"
                />
                <button className=" bg-[#314EE7] py-[15px] px-[42px] rounded-lg font-DM700 text-sm leading-[20.3px] text-white cursor-pointer w-full md:w-fit transition-colors hover:bg-[#2235d3]">
                    Join waitlist
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
