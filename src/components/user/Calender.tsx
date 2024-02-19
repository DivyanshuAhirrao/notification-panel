import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calender = () => {
  return (
    <div id="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
