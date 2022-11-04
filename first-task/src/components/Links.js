export function Links(props){
    return(
        <div id={props.id}>
            <button><a href={props.link}>{props.title}</a></button>
        </div>
    )
}