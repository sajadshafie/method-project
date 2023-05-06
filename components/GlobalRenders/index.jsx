import style from './style.module.scss';
import { Grid, Typography } from '@mui/material';
export default {
    backgroundHandler: (data) => {
        let res = [];
        data.map((v) => {
            if (v <= 120) {
                res.push('#60D7CF');
            } else {
                res.push('#FFAE85');
            }
        });
        return res;
    },
    lables: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'],
    StatusHandler: ({ type, content }) => {
        const handleType = () => {
            let res;
            switch (type) {
                case 'success':
                    res = style.success;
                case 'warning':
                    res = style.warning;
                case 'complete':
                    res = style.complete;
                    break;
            }
            return res;
        };
        console.log(type);
        return (
            <Grid>
                <Typography className={handleType()}>{content}</Typography>
            </Grid>
        );
    },
    renderDateUTC: (dateStr) => {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }
};
