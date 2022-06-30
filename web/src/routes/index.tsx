import { ErrorBoundary } from "solid-start/error-boundary";
import Left from "~/components/Main/l/Left";
import Right from "~/components/Main/r/Right";
import { CollectionProvider } from "~/components/Main/shared/collection";
import "./index.css";

export default function Home() {
  return (
    <main>
      <CollectionProvider collection={false}>
        <ErrorBoundary>
          <Left/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Right/>
        </ErrorBoundary>
      </CollectionProvider>
    </main>
  );
}
