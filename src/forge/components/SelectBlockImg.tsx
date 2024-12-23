import { useState, useEffect } from "react";

// components
import CircularProgress from "@mui/material/CircularProgress";

const numberOfImages = 4;

function getRandomImageName() {
    return Math.ceil(Math.random() * numberOfImages);
}

export default function SelectBlockImg() {
    const [randomImageName, setRandomImageName] = useState<number>(
        getRandomImageName()
    );

    useEffect(() => {
        setRandomImageName(getRandomImageName);
    }, []);

    if (randomImageName) {
        return (
            <img
                src={`/select-a-block/${randomImageName}.webp`}
                alt="Choose a block image"
                loading="eager"
                draggable={false}
            />
        );
    } else {
        return <CircularProgress />;
    }
}
