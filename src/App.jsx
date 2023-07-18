import React, {useState} from 'react';
import milligram from 'milligram';
import {unstable_renderSubtreeIntoContainer} from "react-dom";

const App = () => {
    const [FormObj , SetFormObj] = useState({
        name: '',
        email: '',
        city: '',
        gender: '',
    });

    const ChangeInput = (Property,value) => {
        SetFormObj(prevObj => ({
            ...prevObj,
            [Property]: value,

        }))

    }
    const SubmitForm = (e) => {
        e.preventDefault();
        console.log(FormObj);

    }

    return (
        <div className='container'>

            <form onSubmit={SubmitForm}>
                <input onChange={(e) => {ChangeInput('name',e.target.value)}} value={FormObj.name} type="text" placeholder="Enter your name" />
                <input onChange={(e) => {ChangeInput('email',e.target.value)}} value={FormObj.email} type="email" placeholder="Enter your email" />
                <select onChange={(e) => {ChangeInput('city',e.target.value)}} value={FormObj.city}>
                    <option  value=''>Choose City</option>
                    <option value='Dhaka'>Dhaka</option>
                    <option value='Chittagong'>Chittagong</option>
                </select>
                <br/>
                   <input onChange={() => {ChangeInput('gender','Male')}} checked={FormObj.gender==='Male'} type='radio' name='gender'/> Male
                    <input onChange={() => {ChangeInput('gender','Female')}} checked={FormObj.gender==='Female'} type='radio' name='gender'/> Female
                <br/>

                <button type='submit'>Submit</button>

            </form>

        </div>
    );
};

export default App;
