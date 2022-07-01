import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return (
        <div>
                <h1 className='text-2xl font-bold text-center'>Calender</h1>
                <div className="items-center ">
                    <DayPicker></DayPicker>
                </div>
        </div>
    );
};

export default Calender;