import React from 'react'

export default function Email(props) {

    return (
        <div className="">
            <p>Get weekly weather updates</p>

            <input type="email" className="subscribeinput" placeholder="Your Email.." />
            <input type="text" className="subscribeinput" placeholder="Preferred location.." />

            <button>Subscribe Now</button>
        </div>
    )
}

