import '~/components/Main/l/ListItem.scss'
import { useCollection } from '~/components/Main/shared/collection'

export interface ListItemProps {
    title: string
    children?: ListItemProps[]
    href: string
}

export default function ListItem(props: ListItemProps) {
    const [_,{ setCollection }] = useCollection()
    return <li class="list-item" onClick={() => setCollection(props.title)}>
       <a href={props.href}>{props.title}</a>
    </li>
}