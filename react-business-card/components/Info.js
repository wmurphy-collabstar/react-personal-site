import React from "react"

export default function Info () {
    return (
        <header>
            <img alt="Winona's profile pic" src="./my_face.jpeg"/>
            <h1 className="name">Winona Murphy</h1>
            <h4 className="job-title">Aspiring Frontend Developer</h4>
            <p>No website yet</p>
            <div className="buttons">
                <button className="mail-btn">
                    <img src="../icons/Mail.png" alt="Email icon"/>
                    Email
                </button>
                <button className="linkedin-btn">
                    <img src="../icons/linkedin.png" alt="LinkedIn icon"/>
                    LinkedIn
                </button>
            </div>
        </header>
    )
}