"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import Link from "next/link";
import Image from "next/image";

interface GeometryProblem {
    type: string;
    question: string;
    shape: {
        type: string;
        dimensions: { [key: string]: number };
    };
    answer: number;
    formula: string;
    hint: string;
    showHint: boolean;
    attempts: number;
    userAnswer: string;
}

// type QuestionProps = {
//     problemType: ProblemType;
// };

export type ProblemType =
    | "rectangle-area"
    | "triangle-area"
    | "circle-circumference"
    | "pythagorean-theorem"
    | "angle-calculation"
    | "right-triangle-angles"
    | "composite-shape"
    | "trapezoid-area";

type NewProblemType = {
    type: ProblemType;
    problem: GeometryProblem;
};

type ProblemMap = {
    [K in ProblemType]: GeometryProblem;
};

type QuestionProps = {
    reset: () => void;
    addBridge: () => void;
    running: boolean;
    start: () => void;
    restart: () => void;
    ended: boolean;
};

const Question = ({
    reset,
    addBridge,
    running,
    start,
    restart,
    ended,
}: QuestionProps) => {
    // const [problem, setProblem] = useState<GeometryProblem | null>(null);
    const problemTypes: ProblemType[] = [
        "rectangle-area",
        "triangle-area",
        "circle-circumference",
        "pythagorean-theorem",
        "angle-calculation",
        "right-triangle-angles",
        "composite-shape",
        "trapezoid-area",
    ];
    const [currentProblemType, setCurrentProblemType] =
        useState<ProblemType>("rectangle-area");
    const [promblemTypeIndex, setProblemTypeIndex] = useState(0);

    // const [userAnswer, setUserAnswer] = useState("");
    // const [attempts, setAttempts] = useState(0);
    // const [showHint, setShowHint] = useState(false);
    // const [feedback, setFeedback] = useState("");
    const [questions, setQuestions] = useState<ProblemMap>();
    const [gameOverOpen, setGameOverOpen] = useState(false);
    const [completedOpen, setCompletedOpen] = useState(false);
    const [score, setScore] = useState<number>(0);

    // useEffect(() => {
    //     setProblem(generateProblem(problemType));
    // }, [problemType]);

    useEffect(() => {
        setQuestions(generateAllProblems());
    }, []);

    useEffect(() => {
        if (ended) {
            if (score === 7) {
                setCompletedOpen(true);
                return;
            }
            setGameOverOpen(true);
        }

        if (score === 7) {
            setCompletedOpen(true);
        }
    }, [ended, score]);

    const generateProblem = (type: ProblemType): GeometryProblem => {
        switch (type) {
            case "rectangle-area":
                const width = Math.floor(Math.random() * 8) + 8;
                const height = Math.floor(Math.random() * 7) + 6;
                const rectangleAreaQuestion = {
                    type: "rectangle-area",
                    question:
                        "Calculate the area of this rectangular bridge panel to determine the required materials.",
                    shape: { type: "rectangle", dimensions: { width, height } },
                    answer: width * height,
                    formula: "A = w × h",
                    hint: "Multiply the width by the height to get the area.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };

                return rectangleAreaQuestion;

            case "triangle-area":
                const base = Math.floor(Math.random() * 9) + 10;
                const triHeight = Math.floor(Math.random() * 7) + 8;
                const triangleAreaQuestion = {
                    type: "triangle-area",
                    question:
                        "Calculate the area of this triangular support beam cross-section.",
                    shape: {
                        type: "triangle",
                        dimensions: { base, height: triHeight },
                    },
                    answer: (base * triHeight) / 2,
                    formula: "A = (b × h) ÷ 2",
                    hint: "Multiply base by height, then divide by 2.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };

                return triangleAreaQuestion;

            case "circle-circumference":
                const radius = Math.floor(Math.random() * 8) + 5;
                const circumference =
                    Math.round(2 * Math.PI * radius * 100) / 100;
                const circleCircumferenceQuestion = {
                    type: "circle-circumference",
                    question:
                        "Calculate the circumference of this circular gear mechanism (round to 2 decimal places).",
                    shape: { type: "circle", dimensions: { radius } },
                    answer: circumference,
                    formula: "C = 2πr",
                    hint: "Use π ≈ 3.14159. Multiply 2 × π × radius.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };

                return circleCircumferenceQuestion;

            case "pythagorean-theorem":
                const sideA = Math.floor(Math.random() * 8) + 6;
                const sideB = Math.floor(Math.random() * 8) + 8;
                const hypotenuse =
                    Math.round(Math.sqrt(sideA * sideA + sideB * sideB) * 100) /
                    100;
                const pythagoreanTheoremQuestion = {
                    type: "pythagorean-theorem",
                    question:
                        "Calculate the length of the diagonal support beam (hypotenuse) for this right triangle framework.",
                    shape: {
                        type: "right-triangle",
                        dimensions: { sideA, sideB, hypotenuse },
                    },
                    answer: hypotenuse,
                    formula: "c = √(a² + b²)",
                    hint: "Square both sides, add them together, then take the square root.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };

                return pythagoreanTheoremQuestion;

            case "angle-calculation":
                const adjacent = Math.floor(Math.random() * 10) + 8;
                const opposite = Math.floor(Math.random() * 8) + 6;
                const angleRadians = Math.atan(opposite / adjacent);
                const angleDegrees =
                    Math.round(((angleRadians * 180) / Math.PI) * 100) / 100;
                const angleCalculationQuestion = {
                    type: "angle-calculation",
                    question:
                        "Calculate the angle θ (theta) in degrees for this support beam connection (round to 2 decimal places).",
                    shape: {
                        type: "angle-triangle",
                        dimensions: { adjacent, opposite, angle: angleDegrees },
                    },
                    answer: angleDegrees,
                    formula: "θ = arctan(opposite/adjacent)",
                    hint: "Use the inverse tangent function: θ = arctan(opposite ÷ adjacent), then convert to degrees.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };
                return angleCalculationQuestion;

            case "right-triangle-angles":
                const knownAngle = Math.floor(Math.random() * 50) + 25; // 25-75 degrees
                const complementaryAngle = 90 - knownAngle;
                const rightTriangleAnglesQuestion = {
                    type: "right-triangle-angles",
                    question: `One angle in this right triangle is ${knownAngle}°. What is the measure of the other acute angle?`,
                    shape: {
                        type: "angle-problem",
                        dimensions: {
                            knownAngle,
                            unknownAngle: complementaryAngle,
                        },
                    },
                    answer: complementaryAngle,
                    formula: "Sum of angles in triangle = 180°",
                    hint: "In a right triangle, the two acute angles must add up to 90°.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };

                return rightTriangleAnglesQuestion;

            case "composite-shape":
                const rectWidth = Math.floor(Math.random() * 6) + 10;
                const rectHeight = Math.floor(Math.random() * 5) + 8;
                const triangleBase = rectWidth;
                const triangleHeight = Math.floor(Math.random() * 4) + 4;
                const totalArea =
                    rectWidth * rectHeight +
                    (triangleBase * triangleHeight) / 2;
                const compositeShapeQuestion = {
                    type: "composite-shape",
                    question:
                        "Calculate the total area of this composite bridge section (rectangle + triangle on top).",
                    shape: {
                        type: "composite",
                        dimensions: {
                            rectWidth,
                            rectHeight,
                            triangleBase,
                            triangleHeight,
                        },
                    },
                    answer: totalArea,
                    formula: "A = (w × h) + ((b × h) ÷ 2)",
                    hint: "Calculate rectangle area + triangle area separately, then add them.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };
                return compositeShapeQuestion;

            case "trapezoid-area":
                const base1 = Math.floor(Math.random() * 8) + 12;
                const base2 = Math.floor(Math.random() * 6) + 8;
                const trapHeight = Math.floor(Math.random() * 5) + 6;
                const trapezoidAreaQuestion = {
                    type: "trapezoid-area",
                    question:
                        "Calculate the area of this trapezoidal bridge section.",
                    shape: {
                        type: "trapezoid",
                        dimensions: { base1, base2, height: trapHeight },
                    },
                    answer: ((base1 + base2) * trapHeight) / 2,
                    formula: "A = ((a + b) × h) ÷ 2",
                    hint: "Add the two parallel sides, multiply by height, then divide by 2.",
                    showHint: false,
                    attempts: 0,
                    userAnswer: "",
                };
                return trapezoidAreaQuestion;

            default:
                return generateProblem("rectangle-area");
        }
    };

    const generateAllProblems = (): ProblemMap => {
        const problems: ProblemMap = {
            "rectangle-area": generateProblem("rectangle-area"),
            "triangle-area": generateProblem("triangle-area"),
            "circle-circumference": generateProblem("circle-circumference"),
            "pythagorean-theorem": generateProblem("pythagorean-theorem"),
            "angle-calculation": generateProblem("angle-calculation"),
            "right-triangle-angles": generateProblem("right-triangle-angles"),
            "composite-shape": generateProblem("composite-shape"),
            "trapezoid-area": generateProblem("trapezoid-area"),
        };

        return problems;
    };

    const handleSubmit = () => {
        if (!questions) return;

        const answer = Number.parseFloat(
            questions[currentProblemType].userAnswer
        );
        const tolerance = 0.01;

        if (
            Math.abs(answer - questions[currentProblemType].answer) <= tolerance
        ) {
            toast.success("Correct! Bridge section repaired!");
            addBridge();
            handleNext();
            setScore((prev) => prev + 1);
            // setTimeout(() => onComplete(true), 1500);
        } else {
            increaseAttempts();
            if (questions[currentProblemType].attempts >= 2) {
                toast.warning(
                    `Incorrect. The answer was ${questions[currentProblemType].answer}`
                );
                // setTimeout(() => onComplete(false), 2000);
            } else {
                toast.warning(
                    `Incorrect. Try again! You have ${
                        2 - questions[currentProblemType].attempts
                    } attempts left.`
                );
                setUserAnswer("");
            }
        }
    };
    const renderShapeVisualization = (problem: GeometryProblem) => {
        if (!problem) return null;

        const { shape } = problem;
        const scale = 10;

        return (
            <div className="flex justify-center my-6">
                <svg
                    width="400"
                    height="250"
                    className="border border-blue-300 rounded bg-slate-50"
                >
                    {shape.type === "rectangle" && (
                        <>
                            <rect
                                x={200 - (shape.dimensions.width * scale) / 2}
                                y={125 - (shape.dimensions.height * scale) / 2}
                                width={shape.dimensions.width * scale}
                                height={shape.dimensions.height * scale}
                                fill="#1e40af"
                                fillOpacity="0.3"
                                stroke="#60a5fa"
                                strokeWidth="2"
                            />
                            <text
                                x={200}
                                y={
                                    125 -
                                    (shape.dimensions.height * scale) / 2 -
                                    10
                                }
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                {shape.dimensions.width}m
                            </text>
                            <text
                                x={
                                    200 -
                                    (shape.dimensions.width * scale) / 2 -
                                    25
                                }
                                y={125}
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                                transform={`rotate(-90, ${
                                    200 -
                                    (shape.dimensions.width * scale) / 2 -
                                    25
                                }, 125)`}
                            >
                                {shape.dimensions.height}m
                            </text>
                        </>
                    )}

                    {shape.type === "triangle" && (
                        <>
                            <polygon
                                points={`${
                                    200 - (shape.dimensions.base * scale) / 2
                                },${
                                    125 + (shape.dimensions.height * scale) / 2
                                } ${
                                    200 + (shape.dimensions.base * scale) / 2
                                },${
                                    125 + (shape.dimensions.height * scale) / 2
                                } ${200},${
                                    125 - (shape.dimensions.height * scale) / 2
                                }`}
                                fill="#1e40af"
                                fillOpacity="0.3"
                                stroke="#60a5fa"
                                strokeWidth="2"
                            />
                            <text
                                x={200}
                                y={
                                    125 +
                                    (shape.dimensions.height * scale) / 2 +
                                    20
                                }
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                base = {shape.dimensions.base}m
                            </text>
                            <text
                                x={200 + 40}
                                y={125}
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                h = {shape.dimensions.height}m
                            </text>
                        </>
                    )}

                    {shape.type === "circle" && (
                        <>
                            <circle
                                cx={200}
                                cy={125}
                                r={shape.dimensions.radius * scale}
                                fill="#1e40af"
                                fillOpacity="0.3"
                                stroke="#60a5fa"
                                strokeWidth="2"
                            />
                            <line
                                x1={200}
                                y1={125}
                                x2={200 + shape.dimensions.radius * scale}
                                y2={125}
                                stroke="#dc2626"
                                strokeWidth="2"
                            />
                            <text
                                x={200 + (shape.dimensions.radius * scale) / 2}
                                y={120}
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                r = {shape.dimensions.radius}m
                            </text>
                        </>
                    )}

                    {shape.type === "right-triangle" && (
                        <>
                            {/* Right triangle for Pythagorean theorem */}
                            <polygon
                                points={`50,200 ${
                                    50 + shape.dimensions.sideA * scale
                                },200 50,${
                                    200 - shape.dimensions.sideB * scale
                                }`}
                                fill="#1e40af"
                                fillOpacity="0.3"
                                stroke="#60a5fa"
                                strokeWidth="2"
                            />
                            {/* Right angle indicator */}
                            <rect
                                x={50}
                                y={190}
                                width={10}
                                height={10}
                                fill="none"
                                stroke="#60a5fa"
                                strokeWidth="1"
                            />

                            {/* Labels */}
                            <text
                                x={50 + (shape.dimensions.sideA * scale) / 2}
                                y={215}
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                a = {shape.dimensions.sideA}m
                            </text>
                            <text
                                x={35}
                                y={200 - (shape.dimensions.sideB * scale) / 2}
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                                transform={`rotate(-90, 35, ${
                                    200 - (shape.dimensions.sideB * scale) / 2
                                })`}
                            >
                                b = {shape.dimensions.sideB}m
                            </text>
                            <text
                                x={
                                    50 +
                                    (shape.dimensions.sideA * scale) / 2 +
                                    15
                                }
                                y={
                                    200 -
                                    (shape.dimensions.sideB * scale) / 2 -
                                    10
                                }
                                textAnchor="middle"
                                fill="#16a34a"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                c = ?
                            </text>

                            {/* Hypotenuse line with dashed style */}
                            <line
                                x1={50}
                                y1={200 - shape.dimensions.sideB * scale}
                                x2={50 + shape.dimensions.sideA * scale}
                                y2={200}
                                stroke="#16a34a"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                            />
                        </>
                    )}

                    {shape.type === "angle-triangle" && (
                        <>
                            {/* Right triangle for angle calculation */}
                            <polygon
                                points={`50,200 ${
                                    50 + shape.dimensions.adjacent * scale
                                },200 50,${
                                    200 - shape.dimensions.opposite * scale
                                }`}
                                fill="#1e40af"
                                fillOpacity="0.3"
                                stroke="#60a5fa"
                                strokeWidth="2"
                            />
                            {/* Right angle indicator */}
                            <rect
                                x={50}
                                y={190}
                                width={10}
                                height={10}
                                fill="none"
                                stroke="#60a5fa"
                                strokeWidth="1"
                            />

                            {/* Angle arc */}
                            <path
                                d={`M ${50 + 25} 200 A 25 25 0 0 0 50 ${
                                    200 - 25
                                }`}
                                fill="none"
                                stroke="#dc2626"
                                strokeWidth="2"
                            />
                            <text
                                x={75}
                                y={185}
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                θ
                            </text>

                            {/* Labels */}
                            <text
                                x={50 + (shape.dimensions.adjacent * scale) / 2}
                                y={215}
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                adjacent = {shape.dimensions.adjacent}m
                            </text>
                            <text
                                x={25}
                                y={
                                    200 -
                                    (shape.dimensions.opposite * scale) / 2
                                }
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                                transform={`rotate(-90, 25, ${
                                    200 -
                                    (shape.dimensions.opposite * scale) / 2
                                })`}
                            >
                                opposite = {shape.dimensions.opposite}m
                            </text>
                        </>
                    )}

                    {shape.type === "angle-problem" && (
                        <>
                            {/* Right triangle showing known angle */}
                            <polygon
                                points="50,200 200,200 50,100"
                                fill="#1e40af"
                                fillOpacity="0.3"
                                stroke="#60a5fa"
                                strokeWidth="2"
                            />
                            {/* Right angle indicator */}
                            <rect
                                x={50}
                                y={190}
                                width={10}
                                height={10}
                                fill="none"
                                stroke="#60a5fa"
                                strokeWidth="1"
                            />

                            {/* Known angle arc */}
                            <path
                                d="M 200 200 A 30 30 0 0 0 180 170"
                                fill="none"
                                stroke="#dc2626"
                                strokeWidth="2"
                            />
                            <text
                                x={175}
                                y={185}
                                fill="#dc2626"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                {shape.dimensions.knownAngle}°
                            </text>

                            {/* Unknown angle arc */}
                            <path
                                d="M 75 200 A 25 25 0 0 0 50 175"
                                fill="none"
                                stroke="#16a34a"
                                strokeWidth="2"
                            />
                            <text
                                x={65}
                                y={180}
                                fill="#16a34a"
                                fontSize="14"
                                fontWeight="bold"
                            >
                                ?
                            </text>

                            {/* Right angle label */}
                            <text
                                x={60}
                                y={195}
                                fill="#60a5fa"
                                fontSize="12"
                                fontWeight="bold"
                            >
                                90°
                            </text>
                        </>
                    )}

                    {shape.type === "composite" && (
                        <>
                            {/* Rectangle */}
                            <rect
                                x={150}
                                y={150}
                                width={shape.dimensions.rectWidth * scale}
                                height={shape.dimensions.rectHeight * scale}
                                fill="#1e40af"
                                fillOpacity="0.3"
                                stroke="#60a5fa"
                                strokeWidth="2"
                            />
                            {/* Triangle on top */}
                            <polygon
                                points={`150,150 ${
                                    150 + shape.dimensions.triangleBase * scale
                                },150 ${
                                    150 +
                                    (shape.dimensions.triangleBase * scale) / 2
                                },${
                                    150 -
                                    shape.dimensions.triangleHeight * scale
                                }`}
                                fill="#16a34a"
                                fillOpacity="0.3"
                                stroke="#22c55e"
                                strokeWidth="2"
                            />

                            {/* Labels */}
                            <text
                                x={
                                    150 +
                                    (shape.dimensions.rectWidth * scale) / 2
                                }
                                y={170}
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="12"
                                fontWeight="bold"
                            >
                                {shape.dimensions.rectWidth}m
                            </text>
                            <text
                                x={135}
                                y={
                                    150 +
                                    (shape.dimensions.rectHeight * scale) / 2
                                }
                                textAnchor="middle"
                                fill="#dc2626"
                                fontSize="12"
                                fontWeight="bold"
                                transform={`rotate(-90, 135, ${
                                    150 +
                                    (shape.dimensions.rectHeight * scale) / 2
                                })`}
                            >
                                {shape.dimensions.rectHeight}m
                            </text>
                            <text
                                x={
                                    150 +
                                    (shape.dimensions.triangleBase * scale) / 2
                                }
                                y={145}
                                textAnchor="middle"
                                fill="#16a34a"
                                fontSize="12"
                                fontWeight="bold"
                            >
                                {shape.dimensions.triangleBase}m
                            </text>
                            <text
                                x={
                                    150 +
                                    shape.dimensions.triangleBase * scale +
                                    15
                                }
                                y={
                                    150 -
                                    (shape.dimensions.triangleHeight * scale) /
                                        2
                                }
                                textAnchor="middle"
                                fill="#16a34a"
                                fontSize="12"
                                fontWeight="bold"
                            >
                                {shape.dimensions.triangleHeight}m
                            </text>
                        </>
                    )}
                </svg>
            </div>
        );
    };

    const handlePrevious = () => {
        if (promblemTypeIndex > 0) {
            console.log("problemTypeIndex", promblemTypeIndex);
            setProblemTypeIndex((prev) => prev - 1);
            console.log("problemTypeIndex after decrement", promblemTypeIndex);
            setCurrentProblemType(problemTypes[promblemTypeIndex - 1]);
        }
    };

    const handleNext = () => {
        if (promblemTypeIndex < problemTypes.length - 2) {
            console.log("problemTypeIndex", promblemTypeIndex);
            setProblemTypeIndex((prev) => prev + 1);
            console.log("problemTypeIndex after increment", promblemTypeIndex);
            setCurrentProblemType(problemTypes[promblemTypeIndex + 1]);
        }
    };

    const setUserAnswer = (answer: string) => {
        setQuestions(
            (prev) =>
                ({
                    ...prev,
                    [currentProblemType]: {
                        ...(prev as ProblemMap)[currentProblemType],
                        userAnswer: answer,
                    },
                } as ProblemMap)
        );
    };

    const showHint = () => {
        setQuestions(
            (prev) =>
                ({
                    ...prev,
                    [currentProblemType]: {
                        ...(prev as ProblemMap)[currentProblemType],
                        showHint: true,
                    },
                } as ProblemMap)
        );
    };

    const increaseAttempts = () => {
        setQuestions(
            (prev) =>
                ({
                    ...prev,
                    [currentProblemType]: {
                        ...(prev as ProblemMap)[currentProblemType],
                        attempts:
                            (prev as ProblemMap)[currentProblemType].attempts +
                            1,
                    },
                } as ProblemMap)
        );
    };

    const handleRestart = () => {
        setGameOverOpen(false);
        setQuestions(generateAllProblems());
        setProblemTypeIndex(0);
        setCurrentProblemType(problemTypes[0]);
        setScore(0);
        restart();
    };

    return (
        <div className="max-w-6xl mx-auto mt-[2rem]">
            <div className="controls w-max mx-auto">
                {!running && !ended && (
                    <div>
                        <Button
                            onClick={() => start()}
                            className="bg-green-600 hover:bg-green-500 cursor-pointer"
                        >
                            Start Game
                        </Button>
                    </div>
                )}
                {ended && !running && (
                    <div>
                        <Button
                            onClick={() => handleRestart()}
                            className="bg-orange-600 hover:bg-orange-500 cursor-pointer"
                        >
                            Restart Game
                        </Button>
                    </div>
                )}
            </div>
            {/* question card display */}
            {running && (
                <div>
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle className="text-center text-blue-600">
                                Trivia
                            </CardTitle>
                        </CardHeader>
                        {questions && (
                            <CardContent className="space-y-4">
                                <p className="text-center text-lg">
                                    {questions[currentProblemType].question}
                                </p>

                                <div className="flex flex-col md:flex-row gap-4">
                                    {renderShapeVisualization(
                                        questions[currentProblemType]
                                    )}
                                    <div className="text-center">
                                        {/* <p className="text-sm text-gray-600 mb-2">
                                            Formula:{" "}
                                            {
                                                questions[currentProblemType]
                                                    .formula
                                            }
                                        </p> */}

                                        {questions[currentProblemType]
                                            .attempts >= 3 ? (
                                            <div>
                                                You cannot attempt this question
                                                again
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="flex items-center justify-center gap-4 my-4">
                                                    <Label
                                                        htmlFor="answer"
                                                        className="text-lg font-medium"
                                                    >
                                                        Enter your answer:
                                                    </Label>
                                                    <Input
                                                        id="answer"
                                                        type="number"
                                                        step="0.01"
                                                        value={
                                                            questions[
                                                                currentProblemType
                                                            ].userAnswer
                                                        }
                                                        onChange={(e) =>
                                                            setUserAnswer(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-32 px-3 py-2 border border-gray-300 rounded-md text-center text-lg"
                                                        onKeyDown={(e) =>
                                                            e.key === "Enter" &&
                                                            handleSubmit()
                                                        }
                                                        autoFocus
                                                    />
                                                </div>

                                                <div className="flex justify-center gap-4">
                                                    <Button
                                                        onClick={handleSubmit}
                                                        className="bg-green-600 hover:bg-green-700"
                                                    >
                                                        Submit
                                                    </Button>
                                                    <Button
                                                        onClick={() =>
                                                            showHint()
                                                        }
                                                        variant="outline"
                                                        className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                                                    >
                                                        Hint
                                                    </Button>
                                                </div>

                                                {questions[currentProblemType]
                                                    .showHint && (
                                                    <p className="mt-4 text-sm text-yellow-600 bg-yellow-50 p-3 rounded">
                                                        {
                                                            questions[
                                                                currentProblemType
                                                            ].hint
                                                        }
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        <p className="text-sm text-gray-500 mt-2">
                                            Attempts remaining:{" "}
                                            {3 -
                                                questions[currentProblemType]
                                                    .attempts}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        )}
                    </Card>
                    <div className="controls flex items-center gap-4 justify-end mt-4">
                        <Button onClick={handlePrevious}>Previous</Button>
                        <Button onClick={handleNext}>Next</Button>
                    </div>
                </div>
            )}
            {/* game over popup */}
            <Dialog open={gameOverOpen} onOpenChange={setGameOverOpen}>
                {/* <DialogTrigger>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger> */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className="">
                        <DialogTitle className="font-bitcount-grid-double text-center font-bold text-3xl text-red-600">
                            Game Over
                        </DialogTitle>
                        <DialogDescription className="text-center">
                            You failed to repair the damn on time.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-bitcount-grid-double text-7xl my-6">
                            {((score / 7) * 100).toFixed(2)} %
                        </span>
                        {/* <span className="font-bitcount-grid-double text-9xl w-full h-2 bg-blue-500"></span>
                        <span className="font-bitcount-grid-double text-9xl">
                            7
                        </span> */}
                    </div>
                    <div className="story">
                        <p className="text-center">
                            To restore the <b>Bridge of Whispers</b> and unlock
                            access to the <b>Mighty Aether Dam</b>, you must
                            solve all the challenges before time runs out or the
                            people of <b>Aether</b> will be lost forever.
                        </p>
                    </div>
                    <DialogFooter className="w-max mx-auto">
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                onClick={handleRestart}
                                className="bg-green-500 hover:bg-green-600 text-white hover:text-white"
                            >
                                Try again
                            </Button>
                        </DialogClose>
                        <Link href={"/"}>
                            <Button
                                type="submit"
                                onClick={() => setGameOverOpen(false)}
                            >
                                Go Back Home
                            </Button>
                        </Link>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {/* congrats popup */}
            <Dialog open={completedOpen} onOpenChange={setCompletedOpen}>
                {/* <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger> */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className="">
                        <DialogTitle className="font-bitcount-grid-double text-center font-bold text-3xl text-green-600">
                            Congratulations
                        </DialogTitle>
                        <DialogDescription className="text-center">
                            You completed the game.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src={"/confetti.png"}
                            alt="confetti"
                            width={200}
                            height={200}
                            className="w-full"
                        />
                    </div>
                    <div className="story">
                        <p className="text-center">
                            You have restored the <b>Bridge of Whispers</b> and
                            repaired the <b>Mighty Aether Dam</b>, safeguarding
                            the people of <b>Aether</b>. Their future shines
                            brighter because of your geometry prowess.
                        </p>
                    </div>
                    <DialogFooter className="w-max mx-auto">
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                onClick={handleRestart}
                                className="bg-green-500 hover:bg-green-600 text-white hover:text-white"
                            >
                                Play again
                            </Button>
                        </DialogClose>
                        <Link href={"/"}>
                            <Button
                                type="submit"
                                onClick={() => setCompletedOpen(false)}
                            >
                                Go Back Home
                            </Button>
                        </Link>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Question;
