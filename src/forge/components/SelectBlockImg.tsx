import { useState, useEffect } from "react";

// components
import CircularProgress from "@mui/material/CircularProgress";

const images = import.meta.glob("/src/assets/images/select-a-block/*.webp");
const imagePaths = Object.keys(images);

export default function SelectBlockImg() {
    const [randomImagePath, setRandomImagePath] = useState<string>("");

    useEffect(() => {
        const randomImage =
            imagePaths[Math.floor(Math.random() * imagePaths.length)];

        setRandomImagePath(randomImage);
    }, []);

    if (randomImagePath) {
        return (
            <img
                src={randomImagePath}
                alt="Choose a block image"
                loading="eager"
                draggable={false}
            />
        );
    } else {
        return <CircularProgress />;
    }
}
