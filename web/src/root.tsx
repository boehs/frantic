// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createSignal, Show, Suspense } from "solid-js";
import Popup from "~/components/Popup";
import Header from "./components/Header";
import "./root.css"
import { TransitionGroup, animateEnter, animateExit } from "@otonashixav/solid-flip";

export default function Root() {
  const franticString = <p>frantic is designed to protect and preserve things at risk, be that you, someone you care about, or important information. <strong>Using it for stalking, abuse, or harassment is despicable. You have been warned.</strong></p>
  let [closed, setClosed] = createSignal(false)

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorBoundary>
          <Suspense>
            <Header></Header>
            <TransitionGroup enter={animateEnter(
              {
                keyframes: [
                  {
                    transform: "translateY(30px)",
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
            )}
              exit={animateExit(
                {
                  keyframes: [
                    {
                      opacity: 0,
                      offset: 1,
                    }
                  ],
                  options: {
                    duration: 1000
                  },
                },
                { absolute: true, reverseEnter: true }
              )}>
              <Show when={closed() == true} fallback={
                <Popup setClosed={setClosed} text={franticString} color="rgb(243, 232, 150)" time={5}></Popup>
              }>
                <Routes />
              </Show>
            </TransitionGroup>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
