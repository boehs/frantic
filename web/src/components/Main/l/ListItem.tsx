import '~/components/Main/l/ListItem.scss'

export interface ListItemProps {
    title: string
    children?: ListItemProps[]
    href: string
}

export default function ListItem(props: ListItemProps) {
    return <li class="list-item">
       <a href={props.href}>{props.title}</a>
    </li>
}