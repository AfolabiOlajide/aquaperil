import { useCallback, useEffect, useRef, useState } from "react";

type CountdownState = {
    minutes: number;
    seconds: number;
    running: boolean;
    ended: boolean;
    start: () => void;
    pause: () => void;
    restart: () => void;
    reset: () => void;
};

/**
 * useCountdownTimer
 * @param startMinutes  number – initial countdown length in minutes
 */
export function useCountdownTimer(startMinutes: number): CountdownState {
    const [timeLeft, setTimeLeft] = useState(startMinutes * 60); // total seconds left
    const [running, setRunning] = useState(false);
    const [ended, setEnded] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    /** start = begin or resume */
    const start = useCallback(() => {
        if (running || ended || timeLeft <= 0) return;

        setRunning(true);

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current as NodeJS.Timeout);
                    setRunning(false);
                    setEnded(true);
                    setTimeLeft(startMinutes * 60);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [running, ended, timeLeft]);

    const restart = useCallback(() => {
        setRunning(true);
        setEnded(false);
        setTimeLeft(startMinutes * 60);
        // restart timer
        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current as NodeJS.Timeout);
                    setRunning(false);
                    setEnded(true);
                    setTimeLeft(startMinutes * 60);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }, [startMinutes]);

    const reset = useCallback(() => {
        setRunning(false);
        setEnded(false);
        setTimeLeft(startMinutes * 60);
        clearInterval(intervalRef.current as NodeJS.Timeout);
    }, [startMinutes]);

    /** pause the countdown */
    const pause = useCallback(() => {
        if (!running) return;
        clearInterval(intervalRef.current as NodeJS.Timeout);
        setRunning(false);
    }, [running]);

    // clear interval on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return { minutes, seconds, running, ended, start, pause, restart, reset };
}
