import "./index.css";
import "~/components/Main/l/Left.scss"
import "~/components/Button.scss"
import Right from "~/components/Main/r/Right";
import ListItem from "~/components/Main/l/ListItem";
import { CollectionProvider } from "~/components/Main/shared/collection";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerResource } from 'solid-start/server'
import { For, Show } from "solid-js";
import knex from "../../../db/knex"

export default function Home() {
  const data = createServerResource(async () => {
    const collections = await knex('collection').select().then(collections => {
      return collections || []
    })

    return collections
  })

  return (
    <main>
      <CollectionProvider collection={false}>
        <ErrorBoundary>
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
        </ErrorBoundary>
        <ErrorBoundary>
          <Right />
        </ErrorBoundary>
      </CollectionProvider>
    </main>
  );
}
