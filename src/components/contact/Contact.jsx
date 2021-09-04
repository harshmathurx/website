import { GitHub, LinkedIn, Twitter } from "@material-ui/icons"
import "./contact.scss"
function Contact() {

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>

            <div className="right">
                <h2>Contact Me</h2>
                <p>Feel free to drop a text or an email, I usually reply quick</p>
                <h3>harshmathurx@gmail.com</h3>
                <div className="icons">
                    <a href="https://github.com/harshmathurx"><GitHub className="icon"/></a>
                    <a href="https://www.linkedin.com/in/harshmathurx/"><LinkedIn className="icon"/></a>
                    <a href="https://twitter.com/harshmathurx"><Twitter className="icon"/></a>
                </div>
                <a href="https://drive.google.com/file/d/1gtG4t16urCb8B-ehjFVTOMPXh2QOrjkF/view?usp=sharing" target="_blank" className="resume">Check out my resume</a>
            </div>

        </div>
    )
}

export default Contact
