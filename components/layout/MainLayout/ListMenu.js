import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import { MenuItems } from './MenuItems'
export default function ListMenu({ open, activeIndex }) {
    return (
        <List >
            {MenuItems.map((v, index) => (
                <ListItem className={'list-item'} key={v.title} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            background: activeIndex == index ? '#FF9F1C' : null
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                color: "white",
                            }}
                        >
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={v.title} sx={{ opacity: open ? 1 : 0 }} className='text-menu' />
                    </ListItemButton>

                </ListItem>
            ))}
        </List>
    )
}
