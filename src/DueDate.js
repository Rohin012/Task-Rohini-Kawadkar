import React, { useState } from "react";

const TaskDueDate = () => {
    const [currentDate] = useState(new Date());
    const [dueDate, setDueDate] = useState("");

    const maxDate = () => {
        // Calculate maximum date (e.g., 7 days from the current date)
        const maxDate = new Date(currentDate);
        maxDate.setDate(maxDate.getDate() + 7); // Example: set maximum date to 7 days from the current date
        return maxDate.toISOString().split("T")[0]; // Convert to string in the format yyyy-mm-dd
    };

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Due Date:", dueDate);
        // You can perform further actions here, such as storing the selected due date in your application state.
    };

    return (
        <div>
            <h2>Set Due Date</h2>
            <p>Current Date: {currentDate.toDateString()}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dueDate">Due Date:</label>
                <input type="date" id="dueDate" value={dueDate} onChange={handleDateChange} max={maxDate()} />
                <button type="submit">Set Due Date</button>
            </form>
        </div>
    );
};

export default TaskDueDate;
