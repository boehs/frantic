import { JSX } from "solid-js";
import { createSignal, createContext, useContext } from "solid-js";

const CollectionContext = createContext();

export function CollectionProvider(props: {
  collection?: string,
  children: JSX.Element[];
}) {
  const [collection, setCollectionInternal] = createSignal(props.collection || ""),
    store = [
      collection,
      {
        setCollection(newCollection: string) {
          setCollectionInternal(newCollection);
        }
      }
    ];

  return (
    <CollectionContext.Provider value={store}>
      {props.children}
    </CollectionContext.Provider>
  );
}

export function useCollection() { return useContext(CollectionContext); }