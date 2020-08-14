import React from "react";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';

export default function Header() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Oowlish Hours App
      </Typography>
    </Container>
  );
}
