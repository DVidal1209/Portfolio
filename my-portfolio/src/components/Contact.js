import React, { useState } from "react"


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setErrorMessage('Email is invalid');
            console.log(errorMessage)
            return;
        }

        if (message.length < 1){
            setErrorMessage('A message needs to be entered');
            return;
        }

        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
    }

    return (
        <div className='container' style={{ whiteSpace: 'pre-wrap' }}>
            <h2>Contact Me</h2>
            <p style = {{ color: "red" }}>{errorMessage}</p>
            <form style = {{ display: "flex", flexWrap: "wrap", width: "40%"}} className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    style = {{ marginBottom: "16px", width: "60%" }}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="input"
                    placeholder="Email"
                    style = {{ marginBottom: "16px", width: "60%" }}
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                    style = {{ marginBottom: "16px", width: "100%" }}
                />
                {"\n"}
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Contact