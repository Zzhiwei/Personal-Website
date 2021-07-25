import React, {useState} from 'react'
import './Contact.css'
import tele from '../../assets/telephone.jpeg'
import { db } from '../../firebase'
import firebase from 'firebase'

 
export default function Contact() {
    const defaultMessage = {
        name: "",
        email: "",
        subject: "",
        message: "",
        time: null
    }

    /*  
        0 - empty
        1 - loading
        2 - success
        3 - error
    */
    
    const [buttonSideState, setButtonSideState] = useState(0)
    const [messageObj, setMessageObj] = useState(defaultMessage)

    function handleChange(e, target) {
        if (buttonSideState === 2) {
            setButtonSideState(0)
        }


        switch (target) {
            case 0: 
              setMessageObj({
                  ...messageObj,
                  name: e.target.value
              })
              break;
            case 1: 
              setMessageObj({
                  ...messageObj,
                  email: e.target.value
              })
              break;
            case 2: 
              setMessageObj({
                  ...messageObj,
                  subject: e.target.value
              })
              break;
            case 3: 
              setMessageObj({
                  ...messageObj,
                  message: e.target.value
              })
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        setButtonSideState(1)
        async function uploadMessage() {
            try {
                await db.collection("messages").add({
                    ...messageObj,
                    time: firebase.firestore.FieldValue.serverTimestamp()
                })
                setMessageObj(defaultMessage)
                setButtonSideState(2)
                
            } catch (e) {
                setButtonSideState(3)
            }
        }

        setTimeout(uploadMessage, 2000)
    }

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <div className="sectionHeader">
                    Contact me
                </div>
                <div className="sectionBody">
                    <div className="column left">
                        <img src={tele} />
                    </div>
                    <div className="column right">
                        <form action="" onSubmit={handleSubmit}>
                            <div className="formTitle">
                                Send me a message!
                            </div>
                            <div className="formRow">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    required
                                    value={messageObj.name}
                                    onChange={e => handleChange(e, 0)}
                                ></input>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={messageObj.email}
                                    required
                                    onChange={e => handleChange(e, 1)}
                                ></input>
                            </div>
                            <div className="formRow">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    required
                                    value={messageObj.subject}
                                    onChange={e => handleChange(e, 2)}
                                ></input>
                            </div>
                            <div className="formRow textArea">
                                <textarea
                                    cols="30"
                                    rows="5"
                                    placeholder="your message"
                                    required
                                    value={messageObj.message}
                                    onChange={e => handleChange(e, 3)}
                                ></textarea>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                height: "51px"
                            }}>
                                <button type="submit" disabled={buttonSideState === 1} >
                                    Send
                                </button>

                            {
                                buttonSideState === 1 && (
                                        <div className="bouncers">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                )
                            }

                            {
                                buttonSideState === 2 && (
                                    <div className="successText">
                                        Message sent!
                                    </div>
                                )
                            }

                            {
                                buttonSideState === 3 && (
                                    <div className="failure">
                                        Oops... An error has occurred!
                                    </div>
                                )
                            }
                            </div>
                            
                            

                            
                        </form>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
