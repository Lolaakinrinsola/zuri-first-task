import { Footer } from "./Footer";
import './Contact.scss';
import {useState} from 'react';
export function Contact(){
    const [checked, setChecked]=useState(false);
    const [enteredCheckedIsValid, setEnteredCheckedIsValid]= useState(false);

    const [enteredFirstname, setEnteredFirstname]= useState('');
    const [enteredFirstnameIsValid, setEnteredFirstnameIsValid]= useState(false);
    const [enteredtextTouched, setEnteredtextTouched]= useState(false);

    const [enteredLastname, setEnteredLastname]= useState('');
    const [enteredLastIsValid, setEnteredLastnameIsValid]= useState(false);

    const [enteredEmail, setEnteredEmail]= useState('');
    const [enteredEmailIsValid, setEnteredEmailIsValid]= useState(false);

    const [enteredMessage, setEnteredMessage]= useState('');
    const [enteredMessageIsValid, setEnteredMessageIsValid]= useState(false);


    const firstNameChangeHandler=event=>{
        setEnteredFirstname(event.target.value)
    };
    const lastNameChangeHandler=event=>{
        setEnteredLastname(event.target.value)
    };
    const emailChangeHandler=event=>{
        setEnteredEmail(event.target.value)
    };
    const messageChangeHandler=event=>{
        setEnteredMessage(event.target.value)
    };
    const checkedChangeHandler=event=>{
        setChecked(event.target.value)
    };
    const formSubmissionHandler=event=>{
        event.preventDefault();
        setEnteredtextTouched(true);
        if(enteredFirstname.trim()==''){
            setEnteredFirstnameIsValid(false)
        }else{
            setEnteredFirstnameIsValid(true)
        }
        if(enteredLastname.trim()==''){
            setEnteredLastnameIsValid(false)
        }else{
            setEnteredLastnameIsValid(true)
        }
        if(enteredMessage.trim()==''){
            setEnteredMessageIsValid(false)
        }else{
            setEnteredMessageIsValid(true)
        }
        if(enteredEmail.trim()==''){
            setEnteredEmailIsValid(false)
        }else{
            setEnteredEmailIsValid(true)
        }
        if(checked==false){
            setEnteredCheckedIsValid(false)
        }else{
            setEnteredCheckedIsValid(true)
        }
        return
    };

    const firstNameisInvalid=!enteredFirstnameIsValid && enteredtextTouched;
    const lastNameisInvalid=!enteredLastIsValid && enteredtextTouched;
    const messageInvalid=!enteredMessageIsValid && enteredtextTouched;
    const emailInvalid=!enteredEmailIsValid && enteredtextTouched;




    const errorClasses = !firstNameisInvalid|!lastNameisInvalid|!messageInvalid|emailInvalid? 'contact_input':'contact_input errorDiv'
    const errorBtn= checked?'':'true';

    return(
        <>
        <body className="contactBody">
        <div className="body">

        <div className="header">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask  me about
                anything you have in mind.
            </p>
        </div>
        <form onSubmit={formSubmissionHandler}>
            <div className="names">

            <div className={errorClasses}>
                <label htmlFor="first_name" required >First name</label>
                <input type="text" placeholder="Enter your first name" name="first_name" id="first_name" onChange={firstNameChangeHandler} />
                {firstNameisInvalid &&<p className="errorText">please enter your First name</p>}
            </div>
            <div className={errorClasses}>
                <label htmlFor="last_name">Last name</label>
                <input type="text" placeholder="Enter your last name" name="last_name" id="last_name" onChange={lastNameChangeHandler}/>
                {lastNameisInvalid &&<p className="errorText">please enter your Last name</p>}

            </div>
            </div>
            <div className={errorClasses}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="yourname@email.com" name="email" id="email" onChange={emailChangeHandler}/>
                {emailInvalid &&<p className="errorText">please enter your email</p>}
            </div>
            <div className={errorClasses}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="5" 
                    placeholder="Send me a message and I'll reply you as soon as possible..." onChange={messageChangeHandler}>
                </textarea>
                {messageInvalid &&<p className="errorText">please enter a message</p>}

            </div>


            <div className="checkbox">
                <input type="checkbox" value={checked} onChange={checkedChangeHandler}/>
                <p>You agree to providing your data to Ololade who may contact you</p>
            </div>
        <button id="btn__submit" type="submit" disabled={errorBtn}>Send message</button>
        </form>
        </div>

        </body>
        <footer>
            <Footer/>
        </footer>
        </>


    )
}