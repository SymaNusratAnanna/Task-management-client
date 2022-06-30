import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return (
        <div>
                <h1>calender</h1>
                <div class="justify-center">
                    <DayPicker></DayPicker>
                </div>
        </div>
    );
};

export default Calender;