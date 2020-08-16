import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { KeyboardDatePicker } from "@material-ui/pickers";
import TimePicker from "react-time-picker";

export default function WorkDayComponent({ workData }) {
  const [dayWorkData, setDayWorkData] = useState(workData);
  console.log("useState", dayWorkData);

  const handleEditWorkDayData = (target, newValue) => {
    setDayWorkData((previousState) => ({
      ...previousState,
      [target]: newValue,
    }));
  };

  const [detailsVisibility, setDetailsVisibility] = useState(true);
  const handleDetailsVisibility = () => {
    detailsVisibility === false
      ? setDetailsVisibility(true)
      : setDetailsVisibility(false);
  };

  return (
    <Card>
      <Box>
        <button onClick={() => console.log(dayWorkData)}>LOG STTAE</button>
        <KeyboardDatePicker
          clearable
          value={dayWorkData.date}
          onChange={(date) => console.log("teste")}
          format="dd/MM/yyyy"
        />
        <Typography variant="subtitle1" gutterBottom>
          Total Work Hours: Xh
        </Typography>
      </Box>
      {detailsVisibility === false ? (
        <></>
      ) : (
        <Box>
          <Typography variant="body1">Start Shift:</Typography>
          <TimePicker
            amPmAriaLabel={"Select AM/PM"}
            disableClock={true}
            clearIcon={null}
            clockIcon={null}
            format={"HH:mm"}
            value={dayWorkData.shiftStart}
            onChange={(value) => handleEditWorkDayData('shiftStart',value)}
          />
          <Typography variant="body1">EndShift:</Typography>
          <TimePicker
            format={"HH:mm"}
            disableClock={true}
            clearIcon={null}
            clockIcon={null}
            value={dayWorkData.shiftEnd}
            onChange={(value) => handleEditWorkDayData('shiftEnd',value)}
          />
          <Typography variant="body1">Total BreakTime:</Typography>
          <TimePicker
            format={"HH:mm"}
            disableClock={true}
            clearIcon={null}
            clockIcon={null}
            value={dayWorkData.totalBreakHours}
            onChange={(value) => handleEditWorkDayData('totalBreakHours',value)}
          />
        </Box>
      )}
      <Button onClick={() => handleDetailsVisibility()}>Open Details</Button>
    </Card>
  );
}
