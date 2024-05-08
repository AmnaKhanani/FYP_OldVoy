import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
      </Typography>
      <Typography variant="h5" component="div">
        <strong>
            UpComing Activities
        </strong>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>

      <Typography variant="body2">
        No upcoming Activities
        <br /> 
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

export default function Activities() {
  return (
    <Box sx={{ 
      minWidth: 275,
      minHeight: 250,
      marginRight: 20,
      boxShadow: '2px 4px 6px rgba(0.1, 0.1, 0.1, 0.1)',

     }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
