import { Button, IconButton, Popover, Typography } from '@mui/material'
import React from 'react';
import Image from 'next/image'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpIcon from '@mui/icons-material/Help';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

/*
*  React MUI Popover
*  https://mui.com/material-ui/react-popover/
*
*  The image "src" is found in the "public" folder. 
*/

export default function Info_Button() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton 
                aria-describedby={id} 
                onClick={handleClick}
            ><HelpOutlineIcon /></IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
            >
                <div style={{
                    padding: "20px"
                }}>
                    <Typography >The content of the Popover.</Typography>
                    <Image 
                        src="/dc40a0f4a47f5adb.png" 
                        alt="contract"
                        height={100}
                        width={100}
                
                    />
                </div>
            </Popover>
        </>
    )
}
