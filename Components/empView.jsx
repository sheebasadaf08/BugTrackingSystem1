import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import * as React from 'react';

const bull = (
  <Box
    component="textPath"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 10 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Employee Id
        </Typography>
        <Typography variant="h5" component="div">
         {/* // be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          BugId
        </Typography>
        <Typography variant="body2">
          Inprogress
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
     
    </Card>
    
  );
}