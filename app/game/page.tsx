"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeftFromLine } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import Question from "@/components/modules/Question";

const Game = () => {
    const { minutes, seconds, running, ended, start, pause, restart, reset } =
        useCountdownTimer(5); // set 5 minutes timer
    const [showBridge, setShowBridge] = useState(0);

    const addBridge = () => {
        if (showBridge === 7) return;
        setShowBridge((prev) => prev + 1);
    };

    const resetGame = () => {
        setShowBridge(0);
        reset();
    };

    const handleRestart = () => {
        setShowBridge(0);
        restart();
    };

    return (
        <main>
            <header className="p-6 ">
                <Link href={"/"}>
                    <Button
                        variant={"ghost"}
                        className="text-blue-500 cursor-pointer flex items-center"
                    >
                        <ArrowLeftFromLine /> Home
                    </Button>
                </Link>
                <h1 className="text-5xl font-bold text-center font-bitcount-grid-double">
                    Game Console
                </h1>
                <div className="timer">
                    <h2 className="text-2xl font-bold text-center font-bitcount-grid-double text-red-400">
                        00:{minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </h2>
                </div>
            </header>

            {/* question component */}
            <section className="questions-control mt-[3rem] w-[90%] md:w-[70%] mx-auto">
                <div className="question">
                    <Question
                        reset={resetGame}
                        addBridge={addBridge}
                        running={running}
                        start={start}
                        restart={handleRestart}
                        ended={ended}
                    />
                </div>
            </section>

            {/* game canvas */}
            <section className="game-canvas grid grid-cols-[20%_60%_20%] mt-[3rem]">
                {/* player */}
                <div className="left h-[12rem] ">
                    <img
                        src="/wall-texture.jpg"
                        alt="wall texture"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* bridge and water */}
                <div className="center h-[12rem] ">
                    {/* bridge */}
                    <div className="bridge-container h-[40%] relative">
                        <div className="bridge grid grid-cols-[5%_90%_5%] h-[2rem] absolute w-full top-0">
                            <div className="ledge h-[2rem]">
                                <img
                                    src="/wall-texture.jpg"
                                    alt="wall texture"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            {/* bridge */}
                            <div className="bridge grid grid-cols-7">
                                {showBridge >= 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bridge-1 bg-slate-300 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] border-4 border-slate-500"
                                    ></motion.div>
                                ) : (
                                    <div className="bridge-transparent bg-transparent"></div>
                                )}
                                {showBridge >= 2 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bridge-1 bg-slate-300 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] border-4 border-slate-500"
                                    ></motion.div>
                                ) : (
                                    <div className="bridge-transparent bg-transparent"></div>
                                )}
                                {showBridge >= 3 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bridge-1 bg-slate-300 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] border-4 border-slate-500"
                                    ></motion.div>
                                ) : (
                                    <div className="bridge-transparent bg-transparent"></div>
                                )}
                                {showBridge >= 4 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bridge-1 bg-slate-300 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] border-4 border-slate-500"
                                    ></motion.div>
                                ) : (
                                    <div className="bridge-transparent bg-transparent"></div>
                                )}
                                {showBridge >= 5 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bridge-1 bg-slate-300 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] border-4 border-slate-500"
                                    ></motion.div>
                                ) : (
                                    <div className="bridge-transparent bg-transparent"></div>
                                )}
                                {showBridge >= 6 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bridge-1 bg-slate-300 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] border-4 border-slate-500"
                                    ></motion.div>
                                ) : (
                                    <div className="bridge-transparent bg-transparent"></div>
                                )}
                                {showBridge >= 7 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bridge-1 bg-slate-300 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] border-4 border-slate-500"
                                    ></motion.div>
                                ) : (
                                    <div className="bridge-transparent bg-transparent"></div>
                                )}
                            </div>
                            <div className="ledge h-[2rem]">
                                <img
                                    src="/wall-texture.jpg"
                                    alt="wall texture"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                    {/* water */}
                    <motion.div
                        style={{
                            backgroundImage: "url(/main-water-wave1.png)",
                            backgroundRepeat: "repeat-x",
                        }}
                        animate={{
                            backgroundPositionX: ["0%", "100%"],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="water h-[60%] w-full"
                    ></motion.div>
                </div>
                {/* damn */}
                <div className="right h-[12rem] bg-gray-400">
                    <img
                        src="/wall-texture.jpg"
                        alt="wall texture"
                        className="object-cover w-full h-full"
                    />
                </div>
            </section>
            <div className="floor w-full h-[3rem] bg-slate-400 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        </main>
    );
};

export default Game;
