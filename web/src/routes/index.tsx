import ListItem from "~/components/l/ListItem";
import "./index.css";

export default function Home() {
  return (
    <main>
      <div id="l">
        <h1>Hello</h1>
        <ListItem title="Bunch O' Grapes"></ListItem>
        <ListItem title="Donald Trump Titter"></ListItem>
      </div>
      <div id="r">
        <h1>Hello</h1>
      </div>
    </main>
  );
}
