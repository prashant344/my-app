import React from 'react';

const Task = ({ id, title, text }) => (
    <div>
        <div>{title}</div>
        <div>{text}</div>
    </div>
);

export default Task;
