import "./Left.scss"
import "../../Button.scss"
import ListItem from "~/components/Main/l/ListItem";
import { For, Show } from "solid-js";
import { createServerResource } from 'solid-start/server'
import knex from "../../../../../db/knex" 


export default function Left(props) {
    const data = createServerResource(async () => {
        const collections = await knex('collection').select().then(collections => {
            return collections || []
        })

        return collections
    })

    return (
    <div id="l">
        <div class="lToolbar">
            <button class="but">📁</button>
            <button class="but">➕</button>
        </div>
        <Show when={data()}>
            <For each={data()}>
                {collection => <ListItem title={collection.name}></ListItem>}
            </For>
        </Show>
    </div>
    )
}