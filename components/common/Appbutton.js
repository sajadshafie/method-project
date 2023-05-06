import React from 'react'
import { Button } from '@mui/material'
export default function Appbutton({ children, type, sx, variant }) {
    return (
        <Button
            fullWidth
            type={type}
            variant={variant}
            sx={{
                ...sx, backgroundColor: '#12A3BA',
                color: "white",
                '&:hover': {
                    backgroundColor: '#40aebf',
                    boxShadow: 'none',
                }
            }}
        >
            {children}
        </Button>
    )
}
