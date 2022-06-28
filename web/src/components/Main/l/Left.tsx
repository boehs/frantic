import "./Left.scss"
import "../../Button.scss"
import ListItem from "~/components/Main/l/ListItem";

export default function Left(props) {
    return (
    <div id="l">
        <div class="lToolbar">
            <button class="but">📁</button>
            <button class="but">New Collection</button>
        </div>
        <ListItem title="Bunch O' Grapes"></ListItem>
        <ListItem title="Donald Trump Titter"></ListItem>
    </div>
    )
}