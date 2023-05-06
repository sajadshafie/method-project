import React from 'react';
import { TextField, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import { useTheme } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

// SearchField component displays a search input with a search icon and a search button
export default function SearchField({ placeholder, value, onClick, textButton = 'Search' }) {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" width="100%">
      <TextField
        fullWidth
        placeholder={placeholder}
        value={value}
        variant="outlined"
        sx={{
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        onClick={onClick}
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: '8px 16px',
          borderRadius: theme.shape.borderRadius,
          cursor: 'pointer',
          marginLeft: theme.spacing(1),
        }}
      >
        <Typography sx={{ color: 'white', fontWeight: '600' }}>{textButton}</Typography>
      </Box>
    </Box>
  );
}
