// @refresh reload
import { Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createSignal, Show, Suspense } from "solid-js";
import Popup from "~/components/Popup";
import Header from "~/components/Layout/Header";
import "./root.css"
import { TransitionGroup } from "@otonashixav/solid-flip";
import { layoutAnimation } from "./animations";

export default function Root() {
  const franticString = <p>frantic is designed to protect and preserve things at risk, be that you, someone you care about, or important information. <strong>Using it for stalking, abuse, or harassment is despicable. You have been warned.</strong></p>
  let [closed, setClosed] = createSignal(true)

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
      </head>
      <body>
        <ErrorBoundary>
          <Suspense>
            <Header></Header>
            <ErrorBoundary>
              <TransitionGroup enter={layoutAnimation.enter} exit={layoutAnimation.exit}>
                <Show when={closed() == true} fallback={
                  <Popup setClosed={setClosed} text={franticString} color="rgb(243, 232, 150)" time={5}></Popup>
                }>
                  <Routes />
                </Show>
              </TransitionGroup>
            </ErrorBoundary>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
