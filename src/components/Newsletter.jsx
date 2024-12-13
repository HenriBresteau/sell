import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "motion/react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://api.brevo.com/v3/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": apiKey,
                },
                body: JSON.stringify({
                    email: email,
                    listIds: [3],
                    updateEnabled: true,
                }),
            });

            if (response.ok) {
                toast.success("Inscription réussie ! 🎉");
                setEmail("");
            } else {
                toast.error("Une erreur est survenue.");
            }
        } catch (error) {
            toast.error("Erreur réseau. Veuillez réessayer plus tard.");
        }
    };

    return (
        <div
            className="max-w-[822px] mt-20 mx-auto  bg-white rounded-[25px] py-8 md:py-14 px-6 "
            id="newsletter"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                    },
                }}
                className=" font-Dela text-[#0A071B] text-xl md:text-3xl text-center"
            >
                Be the first to know about new features, special offers, and
                more.
            </motion.h2>
            <form
                className="mt-4 md:mt-7 flex flex-wrap gap-3 justify-center"
                onSubmit={handleSubmit}
            >
                <motion.input
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full md:w-fit bg-[#F7F7F7] py-[15px] pl-[20px] pr-[73px] rounded-lg font-DM500 text-sm leading-[20.3px] text-black placeholder:text-[#00000080] placeholder:w-[166px]"
                    placeholder="Your best email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    className=" bg-[#314EE7] py-[15px] px-[42px] rounded-lg font-DM700 text-sm leading-[20.3px] text-white cursor-pointer w-full md:w-fit transition-colors hover:bg-[#2235d3]"
                    type="submit"
                >
                    Join waitlist
                </motion.button>
            </form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Newsletter;
