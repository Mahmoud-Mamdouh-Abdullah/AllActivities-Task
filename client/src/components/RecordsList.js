import React, { useEffect, useState } from "react";
import RecordItem from "./RecordItem";
import { getRecords } from "../api/API";

const RecordsList = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getRecords().then(result => {
            setData(result.records);
        })
    },[])


    return (
        <div className="records-list">
            <span>All Events Records</span>
            <table className="table table-hover table-striped table-dark mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Description Date</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((record, index) => (
                        <RecordItem key={record.id} index={index} data={record} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecordsList;