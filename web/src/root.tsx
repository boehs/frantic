// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Suspense } from "solid-js";
import Popup from "~/components/Popup";
import Header from "./components/Header";
import "./root.css"

export default function Root() {
  const franticString = <p>frantic is designed to protect and preserve things at risk, be that you, someone you care about, or important information. <strong>Using it for stalking, harassment, or any other unjustified actions that harm other people is despicable. You have been warned.</strong></p>
  
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
            <Popup text={franticString} color="rgb(243, 232, 150)" time={10}></Popup>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
