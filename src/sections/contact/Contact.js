import React from 'react'
import './Contact.css'
import tele from '../../assets/telephone.jpeg'
 
export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <div className="sectionHeader">
                    Contact me
                </div>
                <div className="sectionBody">
                    <div className="column left">
                        <img src={tele} />
                        {/* <div className="helloImg"></div> */}
                    </div>
                    <div className="column right">
                        <form action="">
                            <div className="formTitle">
                                Send me a message!
                            </div>
                            <div className="formRow">
                                <input type="text" placeholder="Name" required></input>
                                <input type="email" placeholder="Email" required></input>
                            </div>
                            <div className="formRow">
                                <input type="text" placeholder="Subject" required></input>
                            </div>
                            <div className="formRow textArea">
                                <textarea cols="30" rows="5" placeholder="your message" required></textarea>
                            </div>
                            <button type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                
            </div>
        </section>
    )
}
