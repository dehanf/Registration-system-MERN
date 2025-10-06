import React from "react";
import axios from "axios";

export default function AddSpeaker() {

    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [organisation, setOrganisation] = React.useState('');
    const [designation, setDesignation] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [Number, setNumber] = React.useState('');


    function sendData(e){
        e.preventDefault();

        const newSpeaker = {
            firstname,
            lastname,
            organisation,
            designation,
            email,
            Number
        }
                axios.post("http://localhost:8000/api/speaker/create", newSpeaker)
        .then(() => {
            alert("Speaker Added");
        })
        .catch((err) => {
            // Check if the error response indicates a duplicate speaker
            if (err.response && err.response.status === 409) {
            alert("Ss");
            } else if (err.response && err.response.data && err.response.data.message) {
            alert("Speaker already added");
            } else {
            alert("An error occurred while adding the speaker");
            }
        });
    }

    return (   
        <div className="container mt-4">
            <form onSubmit={sendData}>
            <div class="speakers">
                <label for="firstname">First Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your first name" onChange={(e) =>{
                    setFirstName(e.target.value)
                }}/>
            </div>

            <div className="speakers">
                <label for="lastname">Last Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your last name"onChange={(e) =>{
                    setLastName(e.target.value)
                }}/>
            </div>

            <div className="speakers">
                <label for="organization">Organization</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your Organization"onChange={(e) =>{
                    setOrganisation(e.target.value)
                }}/>
            </div>

            <div className="speakers">
                <label for="designation">Designation</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your designation"onChange={(e) =>{
                    setDesignation(e.target.value)
                }}/>
            </div>

            <div className="speakers">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" id="name" placeholder="Enter your email"onChange={(e) =>{
                    setEmail(e.target.value)
                }}/>
            </div>

            <div className="speakers">
                <label for="Number">Phone Number</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your Number"onChange={(e) =>{
                    setNumber(e.target.value)
                }}/>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
        
    )
}