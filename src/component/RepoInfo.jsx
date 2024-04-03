import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import './RepoInfo.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from "@mui/material";
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function RepoInfo(props) {
    const location = useLocation();
    const navigate= useNavigate();

    let repoData = location.state;
    console.log(repoData);

    function click(){
        navigate('/');
    }

    return (
        <div >
    <div className="parent" >
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={repoData.owner.avatar_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <span>Repository:</span>{repoData.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span>Name:</span>{repoData.full_name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        <span>Language:</span>{repoData.full_name}
                    </Typography> */}
                    <Typography variant="body2" color="text.secondary">
                        <span>owner:</span>{repoData.owner.login}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                        <span>description:</span>{repoData.description}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                        <span>fork count:</span>{repoData.forks_count}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span>git_url:</span><a href={repoData.git_url}>{repoData.git_url}</a>
                    </Typography>
                    {/* <Typography variant="body3" color="text.secondary">
                        <span>ssh_url:</span>{repoData.ssh_url}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                        <span>clone_url:</span>{repoData.clone_url}
                    </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
        <Button onClick={click}>Back</Button>
    </div>
   
    </div>);
}