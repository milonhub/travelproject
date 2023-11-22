import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h2 className="text-xl text-semibold italic">When</h2>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="py-2 px-3 text-2xl outline-none border-2 border-current rounded-lg" />
    </div>
  );
};

export default Calendar;