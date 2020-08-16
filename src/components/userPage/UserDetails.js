import React, { useState, useEffect } from "react";
import { getUserWorkData } from "../../dataRequests/dataRequests";
import { getSingleUserData } from "../../dataRequests/dataRequests";
import {calculateNetHours} from "../../logic/calculateNetHours"
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import WorkDayComponent from "./WorkDayComponent"

import Loading from "../utilities/Loading";


export default function UserDetails() {
  let { id } = useParams();
  const [userPersonalData, setUserPersonalData] = useState([]);
  const [userWorkData, setUserWorkData] = useState([]);

  async function handleUserPersonalData(userId) {
    let userPersonalDataFromServer = await getSingleUserData(userId);
    setUserPersonalData(userPersonalDataFromServer);
  }

  async function handleUserWorkData(userId) {
    let workDataFromServer = await getUserWorkData(userId);
    setUserWorkData(workDataFromServer);
  }

  useEffect(() => {
    handleUserWorkData(id);
    handleUserPersonalData(id);
  }, [id]);

  return (
    <div>
      <button onClick={() => console.log(userPersonalData)}>BUTTON A</button>
      <button onClick={() => console.log(userWorkData)}>BUTTON B</button>
      
      <Container maxWidth="sm">
        {userWorkData.length === 0 ? (
          <Loading />
        ) : (
          <>
            <Typography>{userPersonalData.userName}</Typography>
            <Typography>
              Expected hours per day: {userPersonalData.userExpectedHoursPerDay}
            </Typography>
            <Typography>Net Hours: </Typography>
            <button onClick={()=> calculateNetHours(userPersonalData.userExpectedHoursPerDay, userWorkData)}>CALCULATE</button>

            {userWorkData.map(workData => <WorkDayComponent key={workData.id} workData={workData}/>)}
          </>
        )}
      </Container>
    </div>
  );
}
