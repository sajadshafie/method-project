import React from 'react';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
// import { default as CircleDotted } from "../assets/images/authLayout/circle_dotted.png";
import CalculateColor from './CalculateFilterBasedOnColor';
import Appimage from '@/components/common/Appimage';

// CustomCard component
function CustomCard({ title, backgroundColor, backgroundColor2, subtitle, buttonText, buttonAction, imageSrc }) {
    const theme = useTheme();


    // Create gradient background from given colors
    const gradientBackground = `linear-gradient(352deg, ${backgroundColor} 0%, ${backgroundColor2} 100%)`;

    // Generate random edge position
    const randomEdgePosition = () => {
        const value = Math.random() * 100;
        return `${value}%`;
    };

    // Generate random size for image
    const randomSize = () => {
        const size = Math.random() * 120 + 50;
        return `${size}px`;
    };

    // Set image opacity
    const opacity = 0.5;

    // Calculate image styles based on side
    const getImageStyles = (side) => {
        const size = randomSize();
        const position = randomEdgePosition();
        let style;

        // Position the image based on the given side
        if (side === 'top' || side === 'bottom') {
            style = {
                top: side === 'top' ? 0 : 'auto',
                bottom: side === 'bottom' ? 0 : 'auto',
                left: position,
            };
        } else {
            style = {
                left: side === 'left' ? 0 : 'auto',
                right: side === 'right' ? 0 : 'auto',
                top: position,
            };
        }

        return {
            ...style,
            position: 'absolute',
            zIndex: 1,
            width: size,
            height: size,
            opacity: opacity,
            filter: CalculateColor(backgroundColor),
        };
    };

    // Set sides for positioning images
    const sides = ['top', 'right', 'bottom', 'left'];

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
                borderRadius: `${12}px`,
                background: `${gradientBackground}`,
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Grid container alignItems="center" spacing={2} sx={{ zIndex: 2, position: 'relative', pl: 2 }}>
                {sides.map((side, index) => (
                    <React.Fragment key={index}><Appimage src={'/static/image/circle_dotted.png'} alt="" style={getImageStyles(side)} /></React.Fragment>
                ))}

                {/* TEXT AREA */}
                <Grid item xs={12} md={9} sx={{ zIndex: 2, pr: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {subtitle}
                    </Typography>
                    {buttonText &&
                        <Box mt={2}>
                            <Button variant="contained" color="primary" onClick={buttonAction}>
                                {buttonText}
                            </Button>
                        </Box>
                    }
                </Grid>

                {/* IMAGE */}
                {/* <Grid item xs={12} md={3} sx={{ zIndex: 2 }}>
                    <Box
                        component="img"
                        src={imageSrc}
                        alt=""
                        sx={{
                            width: '100%',
                            height: 200,
                            objectFit: 'contain',
                        }}
                    />
                </Grid> */}
            </Grid>
        </Box>
    );
}

export default CustomCard;
