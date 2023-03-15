import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import './Usuario.css'
import { Avatar } from "@mui/material";

export const Usuario = ({ name, image, gender, email, city, phone, country, street, coordinates, setPosition, expanded, setExpanded, setMenu, menu }) => {


    const onChangeUser = (key) => (event, isExpanded) => {
        setExpanded(isExpanded ? key : false)
    }


    const onSubmitCoor = () => {
        setPosition([parseFloat(coordinates.latitude), parseFloat(coordinates.longitude)])
        setMenu(!menu)
    }

    return (
        <div className="container_grl">

            <Accordion expanded={expanded[name.first]} onChange={onChangeUser(name.first)}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >

                    <Avatar alt={name.first} src={image}></Avatar>

                    <Typography sx={{ width: '100%', flexShrink: 0, display: 'flex', alignItems: 'center', textAlign: 'center', padding: '10px' }}>
                        {`${name.title}. ${name.first} ${name.last}`}
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>

                    <Typography sx={{ color: 'text.secondary' }}>{`Gender: ${gender}  `}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{`Email: ${email}  `}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{`Adress: ${city}, ${country}, ${street.name}  `}</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{`Phone: ${phone}  `}</Typography>
                    <button onClick={onSubmitCoor}>go to map</button>




                </AccordionDetails>
            </Accordion>
        </div>
    )
}
