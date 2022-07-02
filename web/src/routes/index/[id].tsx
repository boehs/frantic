import { useParams } from "solid-app-router";

export default function Id(e) {
    return <div id="r"><p>{useParams().id}</p></div>
}