import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export default function MainUserCard({ userName, userId }) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Link to={`/${userId}`} className={classes.linkStyle}>
        <Card className={classes.cardStyle} variant="outlined">
          <Typography variant="body1">{userName}</Typography>
        </Card>
      </Link>
    </Container>
  );
}

const useStyles = makeStyles({
  cardStyle: {
    maxWidth: 350,
    margin: "15px 0 15px 0",
    padding: "10px 0 10px 10px",
  },
  linkStyle: {
    textDecoration: "none",
  },
});
