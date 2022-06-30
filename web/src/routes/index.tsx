import "./index.css";
import "~/components/Main/l/Left.scss"
import "~/components/Button.scss"
import "~/components/Form.scss"
import Right from "~/components/Main/r/Right";
import ListItem from "~/components/Main/l/ListItem";
import { CollectionProvider } from "~/components/Main/shared/collection";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerResource } from 'solid-start/server'
import { createSignal, For, Match, Show, Switch } from "solid-js";
import knex from "../../../db/knex"

export default function Home() {
  const data = createServerResource(async () => {
    const collections = await knex('collection').select().then(collections => {
      return collections || []
    })

    return collections
  })
  const [mode, setMode] = createSignal<"main" | "create">("main")

  return (
    <main>
      <CollectionProvider collection={false}>
        <ErrorBoundary>
          <div id="l">
            <Switch>
              <Match when={mode() == "create"}>
                <div class="lToolbar">
                  <button class="but" onClick={() => setMode("main")}>❌</button>
                </div>
                <form>
                  <select name="collector" id="collector">
                    <option value="" disabled selected>Choose your collector</option>
                  </select>
                  <input type="text" name="name" autocomplete="off" autocapitalize="words" id="collectionName" placeholder="Name your new collection"/>
                  <div class="lToolbar">
                    <input type="submit" value="✅" onClick={() => setMode("main")}/>
                  </div>
                </form>
              </Match>
              <Match when={mode() == "main"}>
                <div class="lToolbar">
                  <button class="but">📁</button>
                  <button class="but" onClick={() => setMode("create")}>➕</button>
                </div>
                <Show when={data()}>
                  <For each={data()}>
                    {collection => <ListItem title={collection.name}></ListItem>}
                  </For>
                </Show>
              </Match>
            </Switch>
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <Right />
        </ErrorBoundary>
      </CollectionProvider>
    </main>
  );
}
