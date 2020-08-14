import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import {addUser} from '../../dataRequests/dataRequests'

export default function AddUser({handleUsersData}) {
  const [addUserVisibility, setAddUserVisibility] = useState(false);
  const [newUserName, setNewUserName] = useState("John Wick");
  const [newUserDesiredWorkHours, setNewUserDesiredWorkHours] = useState(8);

  const handleAddUserVisibility = () => {
    addUserVisibility === true
      ? setAddUserVisibility(false)
      : setAddUserVisibility(true);
  };

  const handleNewUserName = (e) => {
    let newUser = e.target.value;
    setNewUserName(newUser);
  };

  const handleNewUserDesiredWorkHours = (e) => {
    let newDesiredHours = e.target.value;
    setNewUserDesiredWorkHours(newDesiredHours);
  };

  return (
    <Container maxWidth="sm">
      <Button
        variant="contained"
        color={addUserVisibility === false ? "default" : "secondary"}
        onClick={() => handleAddUserVisibility()}
        size="small"
      >
        {addUserVisibility === false ? "Add new User" : "X"}
      </Button>
      {addUserVisibility === false ? (
        <></>
      ) : (
        <Container>
          <Box>
            <TextField
              label="New User Name"
              defaultValue={newUserName}
              onChange={(input) => handleNewUserName(input)}
              margin="dense"
            />
          </Box>
          <Box>
            <TextField
              type="number"
              label="Expected Hours"
              defaultValue={newUserDesiredWorkHours}
              onChange={(input) => handleNewUserDesiredWorkHours(input)}
              margin="dense"
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                await addUser(newUserName, newUserDesiredWorkHours)
                handleAddUserVisibility()  
                handleUsersData()        
              }}
              size="small"
            >
              Add New User
            </Button>
          </Box>
        </Container>
      )}
    </Container>
  );
}
