import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate ,Link} from 'react-router-dom';

export default function RepoCard(props) {
    // console.log(props.data);
    let navigate = useNavigate();
    function routeTo(){
        navigate('/repo-info', {state: props.data  })
    }
    return (
        
        <div onClick={routeTo}> 
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.data.owner.avatar_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <span>Repository:</span>{props.data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span>Name:</span>{props.data.full_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span>Language:</span>{props.data.full_name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
        
    );
}
