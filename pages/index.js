import * as React from "react";

//MUI
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid, Typography } from "@mui/material";
//Layout
import AuthLayout from "@/components/layout/AuthLayout";

//Form

import AppTextValidator from "@/components/common/Apptextvalidator";
import { useState } from "react";

import Globals from "@/components/Globals";
import AppInputPassword from "@/components/common/Appinputpassword";

//LoginPage
export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onChangeForm = (value, type) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  return (
    <AuthLayout
      title={" ورود"}
      Textbutton={"وارد شوید"}
      linkSing={"ایا اکانت ندارید؟ ساخت اکانت"}
      link={"/register"}
      linkForgotpass="/forgotpassword"
      activeStep={1}
    >
      <Grid mb={2}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "username")}
          label="نام کاربری یا تلفن همراه"
          value={form.username}
          errorMessages={[Globals.error.username]}
          type="text"
          name={"name"}
        />
      </Grid>
      <Grid mb={2}>
        <AppInputPassword
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "password")}
          label="کلمه عبور"
          value={form.password}
          errorMessages={[Globals.error.password]}
          type="password"
        />
      </Grid>
      <Grid container alignItems={"center"}>
        <Checkbox value="remember" color="primary" />
        <Typography sx={{ fontSize: "12px" }}>مرا به خاطر بسپار</Typography>
      </Grid>
    </AuthLayout>
  );
}
