import React, { useState } from "react";

const TaskDueDate = () => {
    const [currentDate] = useState(new Date()); // Current date and time
    const [dueDate] = useState(() => {
        // Due date and time set to seven days from current date and time
        const sevenDaysLater = new Date(currentDate);
        sevenDaysLater.setDate(currentDate.getDate() + 7);
        return sevenDaysLater;
    });

    // Function to format date and time
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        return date.toLocaleString(undefined, options);
    }

    return (
        <div>
            <h2>Set Due Date and Time</h2>
            <p>Current Date: {currentDate.toLocaleString()}</p>
            <p>Due Date: {formatDate(dueDate)}</p>
        </div>
    );
};

export default TaskDueDate;
