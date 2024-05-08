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

            <Typography variant="h6" component="div">
                <strong>
                    Medication
                </strong>
                <Button 
                variant="contained" 
                size="small"  
                color= "error"
                sx={{marginLeft: 38, fontWeight: 'bold'}} 
                >
                    Add
                </Button>

            </Typography>
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>

      <Typography variant="body2">

      </Typography> */}
        </CardContent>

    </React.Fragment>
);

  

export default function AddMedication() {
    return (
        <Box sx={{
            minWidth: 20,
            minHeight: 10,
            paddingRight: 70,
            marginBottom: 10

        }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );

}
