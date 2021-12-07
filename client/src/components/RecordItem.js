import React from "react";


const RecordItem = (props) => {
    const { start_date, end_date, description } = props.data;
    const index = props.index;
    return (
        <tr>
            <td>{index}</td>
            <td>{start_date}</td>
            <td>{end_date}</td>
            <td>{description}</td>
        </tr>
    )
}

export default RecordItem;