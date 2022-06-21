import ListItem from "~/components/Main/l/ListItem";
import Right from "~/components/Main/r/Right";
import { CollectionProvider } from "~/components/Main/shared/collection";
import "./index.css";

export default function Home() {
  return (
    <main>
      <CollectionProvider collection="E">
        <div id="l">
          <h1>Hello</h1>
          <ListItem title="Bunch O' Grapes"></ListItem>
          <ListItem title="Donald Trump Titter"></ListItem>
        </div>
        <Right/>
      </CollectionProvider>
    </main>
  );
}
