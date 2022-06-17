import './ListItem.scss'

export interface ListItemProps {
    title: string
    type: string,
    children?: ListItemProps[]
}

export default function ListItem(props: ListItemProps) {    
    return <li class="list-item">
       <button>{props.title}</button>
    </li>
}