import { createEffect, createSignal, Setter } from "solid-js"
import "./Popup.scss"
import "./Button.scss"

export default function Popup(props: {
    color: string,
    time: number,
    text: string | Element,
    setClosed: Setter<boolean>
}) {
    const [time, setTime] = createSignal(props.time)
    const countDown = setInterval(() => setTime(time() - 1),1000)
    createEffect(() => {
        if (time() == 0) clearInterval(countDown)
    })
    
    return (
        <div class="popup" style={{"background-color": props.color}}>
            {props.text}
            <form method="dialog">
                <input type="submit" onClick={() => props.setClosed(true)} disabled={time() != 0} 
                style={{"opacity": 1-(time()/props.time)}}
                value={`I have read this message in it's entirety and I am not evil (${time()})`} />
            </form>
        </div>
    )
}