import Left from "~/components/Main/l/Left";
import Right from "~/components/Main/r/Right";
import { CollectionProvider } from "~/components/Main/shared/collection";
import "./index.css";

export default function Home() {
  return (
    <main>
      <CollectionProvider collection={false}>
        <Left/>
        <Right/>
      </CollectionProvider>
    </main>
  );
}
