import { Grid, Typography } from '@mui/material';
import React from 'react';
import style from './style.module.scss';
import DoneIcon from '@mui/icons-material/Done';

export default function StepBar({
    active = 2,
    steps = [
        {
            title: 'اطلاعات شخصی',
            step: 1, active: false
        },
        {
            title: 'کد تایید',
            step: 2, active: true
        },
        {
            title: 'اطلاعات شرکت',
            step: 3
        }
    ]
}) {
    console.log(steps);
    const classHandler = (step) => {
        let number;
        let title;
        if (step === active) {
            number = style.active_number;
            title = style.active_title;
        }
        if (step < active) {
            number = '';
            title = style.pass_title;
        }
        if (step > active) {
            number = style.number_not_active;
            title = style.title_not_active;
        }
        return {
            number: number,
            title: title
        };
    };
    return (
        <div className={style.container}>
            {steps.map((v, i) => {
                return (
                    <Grid key={i} className={style.item_step}>
                        {v.step ? (
                            v.step == active ? (
                                <Grid
                                    sx={{ marginRight: '10px', borderRadius: '100%', border: '1px solid white', boxShadow: '0px 4px 20px rgba(255, 159, 28, 0.3)' }}

                                    width={'45px'}
                                    height={'45px'}
                                    display="flex"
                                    alignItems={'center'}
                                    justifyContent="center"
                                >

                                    <Typography sx={{ color: '#FF9F1C', fontSize: '16px', fontWeight: "600" }}>{v.step}</Typography>
                                </Grid>
                            ) : (
                                <Grid
                                    sx={{ marginRight: '10px', borderRadius: '100%', border: '1px solid white', boxShadow: '0px 4px 20px rgba(255, 159, 28, 0.3)' }}
                                    width={'45px'}
                                    height={'45px'}
                                    display="flex"
                                    alignItems={'center'}
                                    justifyContent="center"
                                >
                                    {
                                        v.step < active ? (
                                            <DoneIcon sx={{ color: '#FF9F1C' }} />
                                        ) : <Typography sx={{ color: '#959499', fontSize: '16px' }}>{v.step}</Typography>

                                    }

                                </Grid>
                            )
                        ) : (
                            ''
                        )}

                        <Typography className={classHandler(v.step).title}>{v.title}</Typography>
                    </Grid>
                );
            })}
        </div>
    );
}
