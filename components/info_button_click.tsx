import { Button, Popover, Typography } from '@mui/material'
import React from 'react';
import Image from 'next/image'

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
            <Button 
                aria-describedby={id} 
                variant="contained" 
                onClick={handleClick}
            >
                Open Popover
            </Button>
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
