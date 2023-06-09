import { IconButton, Popover, Typography } from '@mui/material'
import React from 'react';
import Image from 'next/image'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

/*
*  React MUI Popover
*  https://mui.com/material-ui/react-popover/
*
*  The image "src" is found in the "public" folder. 
*/

export default function Info_Button() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div
            style={{
                display: "inline-block",
                padding: "0 5px 0 10px"
            }}
        >
            <IconButton 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            ><HelpOutlineIcon /></IconButton>
            <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <div style={{
                    padding: "15px"
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
        </div>
    )
}
