import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AuthLayout from "@/components/layout/AuthLayout";





export default function Registers() {
    return (
        <AuthLayout title={'عضویت'} Textbutton={'ساخت اکانت'} linkSing={'ورود به پنل کاربری'} link={'/login'}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="نام کاربری"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="نام شرکت"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="حوزه فعالیت شرکت"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="کد سامانه"
                // name="email"
                // autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="کلمه عبور"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
        </AuthLayout>
    );
}
