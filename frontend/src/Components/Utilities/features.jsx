import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({imgsrc,name,Link}) {
  return (
    <Card className='featuresCard' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          className='cardImg'
          component="img"
          height="140"
          image={imgsrc}
          link={Link}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='cardName'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}