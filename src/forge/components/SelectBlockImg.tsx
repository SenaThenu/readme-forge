import { useMemo } from "react";

export default function SelectBlockImg() {
    const randomImagePath = useMemo(() => {
        const images: string[] = [];

        // there are 4 random images to pick from
        for (let i = 1; i <= 4; i++) {
            images.push(`/images/select-a-block/${i}.png`);
        }

        const randomImg = images[Math.floor(Math.random() * images.length)];

        return randomImg;
    }, []);

    return (
        <img
            src={randomImagePath}
            alt="Choose a block image"
            loading="eager"
            draggable={false}
        />
    );
}
