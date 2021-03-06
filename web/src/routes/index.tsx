import "./index.css";
import "~/components/Main/l/Left.scss"
import "~/components/Button.scss"
import "~/components/Form.scss"
import ListItem from "~/components/Main/l/ListItem";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerAction, createServerResource, redirect } from 'solid-start/server'
import { createSignal, For, Match, Show, Switch } from "solid-js";
import knex from "../../../db/knex"
import { TransitionGroup } from "@otonashixav/solid-flip";
import { layoutAnimation } from "~/animations";
import { Outlet } from "solid-app-router";

export default function Home() {
  const data = createServerResource(async () => {
    const collections = await knex('collection').select().then(collections => {
      return collections || []
    })

    return collections
  })
  const [mode, setMode] = createSignal<"main" | "create">("main")

  const makeCollection = createServerAction(async (form: FormData) => {
    const id = await knex('collection').insert({ name: form.get('name') })
    throw redirect(`/${id[0]}`)
  })

  return (
    <main>
      <ErrorBoundary>
        <div id="l">
          <TransitionGroup enter={layoutAnimation.enter} exit={layoutAnimation.exit}>
            <Switch>
              <Match when={mode() == "create"}>
                {/* reduce animation clunk with wrapper div */}
                <div>
                  <div class="lToolbar">
                    <button class="but" onClick={() => setMode("main")} style={{ "--hue": "160deg" }}>❌ Close</button>
                  </div>
                  <ErrorBoundary>
                    <makeCollection.Form method="post">
                      <select name="collector" id="collector">
                        <option value="" disabled selected>Choose your collector</option>
                      </select>
                      <input type="text" name="name" autocomplete="off" autocapitalize="words" id="collectionName" placeholder="Name your new collection" />
                      <div class="lToolbar">
                        <input type="submit" value="✅ Create!" onClick={() => setMode("main")} style={{ "--hue": "290deg" }} />
                      </div>
                    </makeCollection.Form>
                  </ErrorBoundary>
                </div>
              </Match>
              <Match when={mode() == "main"}>
                {/* reduce animation clunk with wrapper div */}
                <div>
                  <div class="lToolbar">
                    <button class="but">📁</button>
                    <button class="but" onClick={() => setMode("create")}>➕ New</button>
                  </div>
                  <ErrorBoundary>
                    <Show when={data()}>
                      <For each={data()}>
                        {collection => <ListItem title={collection.name} href={`/${collection.id}`}></ListItem>}
                      </For>
                    </Show>
                  </ErrorBoundary>
                </div>
              </Match>
            </Switch>
          </TransitionGroup>
        </div>
      </ErrorBoundary>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </main>
  );
}
