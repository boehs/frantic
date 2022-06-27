import { Show } from "solid-js"
import { useCollection } from "../shared/collection"
import "./Right.scss"

export default function Right(props) {
  const [collection] = useCollection()
  return (<div id="r">
    <Show when={collection()} fallback={<p class="light">grow a wonderful medow</p>}>
      <h1>{collection()}</h1>
    </Show>
  </div>)
}