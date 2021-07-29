
import React,{ useState } from 'react';
import DatePicker from 'react-datepicker';

export default function ReactDatePicker() {
  
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        );
    
    }