import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ConfettiEffect() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            setInit(true);
        }).catch(console.error);
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                zIndex: 1000,
            },
            particles: {
                color: {
                    value: [
                        "#FFB6C1", // Soft Pink
                        "#A8E6CF", // Mint Green
                        "#E6A7FF", // Lavender
                        "#FFF9A6", // Pale Yellow
                        "#A9D8E6", // Sky Blue
                        "#FFCCB6", // Peach
                        "#FF6F61", // Light Coral
                    ],
                },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    size: true,
                    speed: {
                        min: 1,
                        max: 5,
                    },
                },
                number: {
                    value: 500,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                opacity: {
                    value: 1,
                    animation: {
                        enable: false,
                        startValue: "max",
                        destroy: "min",
                        speed: 0.3,
                        sync: true,
                    },
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360,
                    },
                    direction: "random",
                    move: true,
                    animation: {
                        enable: true,
                        speed: 60,
                    },
                },
                tilt: {
                    direction: "random",
                    enable: true,
                    move: true,
                    value: {
                        min: 0,
                        max: 360,
                    },
                    animation: {
                        enable: true,
                        speed: 60,
                    },
                },
                shape: {
                    type: ["circle", "square", "polygon", "emoji"],
                    options: {
                        polygon: [
                            {
                                sides: 5,
                            },
                            {
                                sides: 6,
                            },
                        ],
                        emoji: {
                            particles: {
                                size: {
                                    value: 8,
                                },
                            },
                            value: [
                                "💻",
                                "📃",
                                "🍀",
                                "✨",
                                "🦄",
                                "⭐️",
                                "🎉",
                                "🥳",
                            ],
                        },
                    },
                },
                size: {
                    value: {
                        min: 2,
                        max: 4,
                    },
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 30,
                    },
                    enlighten: {
                        enable: true,
                        value: 30,
                    },
                    enable: true,
                    speed: {
                        min: 15,
                        max: 25,
                    },
                },
                wobble: {
                    distance: 30,
                    enable: true,
                    move: true,
                    speed: {
                        min: -15,
                        max: 15,
                    },
                },
            },
        }),
        []
    );

    if (init) {
        return <Particles id="tsparticles" options={options} />;
    }

    return <></>;
}
