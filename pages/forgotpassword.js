import React, { useState } from "react";
//Layout Auth
import AuthLayout from "@/components/layout/AuthLayout";

//navigate
import { useRouter } from "next/router";

//MUI
import { Grid } from "@mui/material";

//Textvalidtor
import AppTextValidator from "@/components/common/Apptextvalidator";

//All Message Text
import Globals from "@/components/Globals";
import Appselectvalidator from "@/components/common/Appselectvalidator";

export default function Forgotpassword() {
  const route = useRouter();
  const [form, setForm] = useState({
    username: "",
    name_family: "",
    phone_number: "",
    password: "",
    re_password: "",
  });

  const onChangeForm = (value, type) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  const onSubmitForm = () => {
    localStorage.setItem("user_data", JSON.stringify(form));
    route.push("/confirmcode");
  };

  return (
    <AuthLayout
      title={"بازیابی کلمه عبور"}
      description={
        "برای بازیابی کلمه عبور به شماره وارد شده کد به شماره وارد شده ارسال میشود"
      }
      Textbutton={"ارسال کد"}
      linkSing={"ورود به پنل کاربری"}
      link={"/"}
      onSubmit={onSubmitForm}
      activeStep={1}
      isForgot
    >
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "username")}
          label="نام کاربری یا تلفن همراه"
          value={form.username}
          errorMessages={[Globals.error.username]}
          type="text"
        />
      </Grid>
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "phone_number")}
          label="شماره موبایل"
          value={form.phone_number}
          errorMessages={[Globals.error.phone_number]}
          type="number"
        />
      </Grid>
    </AuthLayout>
  );
}
