import React, { useState, forwardRef } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../pages/admin/Dashboard/dashboard.css"


export default function DateSelect() {
    const [dateRange, setDateRange] = useState([new Date(), null]);
    const [startDate, endDate] = dateRange;
    
  return (
      <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
              setDateRange(update);
          }}
          customInput={<CustomInput />}
      />
  )
}

const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));