import { animateEnter, animateExit } from "@otonashixav/solid-flip";

export const layoutAnimation = {
    enter: animateEnter(
        {
            keyframes: [
                {
                    transform: "translateY(15px)",
                    composite: "add",
                    offset: 0,
                },
                {
                    opacity: 0,
                    offset: 0,
                },
            ],
            options: {
                duration: 1000,
                delay: 500
            },
        },
        { reverseExit: true, unabsolute: true }
    ),
    exit: animateExit(
        {
            keyframes: [
                {
                    transform: "translateY(-15px)",
                    composite: "add",
                    offset: 1,
                },
                {
                    opacity: 0,
                    offset: 1,
                }
            ],
            options: {
                duration: 800
            },
        },
        { absolute: true, reverseEnter: true }
    )
}