import {Link} from "react-router-dom";

function Contact_link(props){
    return(
        <div>
            <button id={props.id}>
                <Link id="Link" to={props.link}>{props.title}</Link>
            </button>                     
        </div>
    )
}

export default Contact_link