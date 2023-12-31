import React from "react"

export default function Info () {
    return (
        <header>
            <img alt="Winona's profile pic" src="./my_face.jpeg"/>
            <h1 className="name">Winona Murphy</h1>
            <h4 className="job-title">Aspiring Frontend Developer</h4>
            <a href="https://wmurphy-collabstar.github.io/personal-portfolio/">wmurphy-collabstar.github.io/personal-portfolio/</a>
            <div className="buttons">
                <button className="mail-btn" onClick="location.href='mailto:wviolinm@gmail.com'">
                    <img src="../icons/Mail.png" alt="Email icon"/>
                    Email
                </button>
                <button className="linkedin-btn" onClick="location.href='www.linkedin.com/in/winona-murphy-840048170/'">
                    <img src="../icons/linkedin.png" alt="LinkedIn icon"/>
                    LinkedIn
                </button>
            </div>
        </header>
    )
}
