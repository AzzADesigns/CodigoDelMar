import { useState, useEffect } from "react";

export const useIsXL = () => {
    const [isXL, setIsXL] = useState(false); 

    useEffect(() => {
        const checkIsXL = () => setIsXL(window.innerWidth >= 1280);
        checkIsXL(); 

        window.addEventListener("resize", checkIsXL);
        return () => window.removeEventListener("resize", checkIsXL);
    }, []);

    return isXL;
};
