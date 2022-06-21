import '~/components/Main/l/ListItem.scss'
import { useCollection } from '../shared/collection'

export interface ListItemProps {
    title: string
    children?: ListItemProps[]
}

export default function ListItem(props: ListItemProps) {
    const [_,{ setCollection }] = useCollection()
    return <li class="list-item">
       <button on:click={() => setCollection(props.title)}>{props.title}</button>
    </li>
}