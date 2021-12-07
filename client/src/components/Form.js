import React, { useState } from "react";
import serializeForm from 'form-serialize';
import { insertRecord } from "../api/API";


const Form = (props) => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value);
        switch (e.target.name) {
            case 'start_date':
                setStartDate(e.target.value);
                break
            case 'end_date':
                setEndDate(e.target.value);
                break
            case 'description':
                setDescription(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = serializeForm(e.target, { hash: true });
        if (!data.start_date || !data.end_date || !data.description) {
            alert('Invalid or missing Data!!');
        } else {
            insertRecord(data).then(result => {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);
                setStartDate('');
                setEndDate('');
                setDescription('');
            }).catch(err => {
                alert(err);
            });
        }
    }

    return (
        <div className="form">
            {success && (
                <div class="alert alert-success p-1 mt-1" role="alert">
                    Record Saved Successfully
                </div>
            )}
            <span>Submit an Event Record Now</span>
            <form onSubmit={handleSubmit} className="main-form">
                <div className="date-div">
                    <label >Start Date</label>
                    <input
                        onChange={handleChange}
                        value={startDate}
                        className="form-control"
                        name="start_date"
                        type="date" />
                </div>

                <div className="date-div mt-3">
                    <label >End Date</label>
                    <input
                        onChange={handleChange}
                        value={endDate}
                        className="form-control"
                        name="end_date"
                        type="date" />
                </div>

                <textarea
                    onChange={handleChange}
                    value={description}
                    name="description"
                    className="form-control mt-3"
                    placeholder="Enter Description Here ..."
                    rows="7"></textarea>

                <button className="btn btn-success mt-5">Save Record</button>
            </form>
        </div>
    )
}

export default Form;