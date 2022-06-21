import { useCollection } from "../shared/collection"

export default function Right(props) {
    const [collection] = useCollection()
    return (<div id="r">
        <h1>{collection()}</h1>
  </div>)
}