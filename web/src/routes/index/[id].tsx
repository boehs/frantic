import { useParams } from "solid-app-router";

export default function Id() {
    return <div id="r"><p>{useParams().id}</p></div>
}