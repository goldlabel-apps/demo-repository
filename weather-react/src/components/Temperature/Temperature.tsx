import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    IconButton,
    Box,
} from "@mui/material";
import {
    Icon,
} from "../../../@raaf";
import {
    Font,
} from "../../";

export default function Wind() { 
    let windSpeedValue = 10;
    let windDirectionValue = 275;
    
    return <Card sx={{background: "rgba(0,0,0,0.5)"}}>
                <CardHeader 
                    title={<Font variant="title" color="white">Windiness</Font>}
                    action={<IconButton
                                color="primary"
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    console.log("settings")
                                }}>
                                <Icon icon="settings" />
                            </IconButton>}
                />
                <CardContent>
                    <Box sx={{mt:2}}>
                        <Font variant="bold" color="white">
                            {windSpeedValue} m/s
                        </Font>
                        <Font variant="small" color="white">
                            Speed of wind at 10m above sea level in meters per second.
                        </Font>
                    </Box>
                    <Box sx={{mt:2}}>
                        <Font variant="bold" color="white">
                            {windDirectionValue}
                        </Font>
                        <Font variant="small" color="white">
                            Direction of wind at 10m above sea level. 0° indicates wind coming from north
                        </Font>
                    </Box>
                </CardContent>
                
            </Card>;
};

/*
<CardActions>
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            console.log("more")
                        }}>
                        More
                    </Button>
                </CardActions>
*/