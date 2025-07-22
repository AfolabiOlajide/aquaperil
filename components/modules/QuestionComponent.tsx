import { useState } from "react";
import { Button } from "../ui/button";
import Question, { ProblemType } from "./Question";

const QuestionComponent = ({
    reset,
    addBridge,
}: {
    reset: () => void;
    addBridge: () => void;
}) => {
    const resetGame = () => {
        reset();
    };

    return (
        <section>
            <Button onClick={addBridge} className="mt-[2rem]">
                Toggle Bridge
            </Button>
            <Button
                variant={"destructive"}
                onClick={resetGame}
                className="mt-[2rem]"
            >
                Reset game
            </Button>
            {/* <Question problemType={currentProblemType} /> */}
            <Question addBridge={addBridge} reset={resetGame} />
        </section>
    );
};

export default QuestionComponent;
