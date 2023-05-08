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
import Texts from "@/components/Texts";
import Appselectvalidator from "@/components/common/Appselectvalidator";

export default function Registers() {
  const route = useRouter()
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
    localStorage.setItem("user_data", JSON.stringify(form))
    route.push('/confirmcode')
  }

  return (
    <AuthLayout
      title={"عضویت"}
      Textbutton={"ساخت اکانت"}
      linkSing={"ورود به پنل کاربری"}
      link={"/"}
      step
      onSubmit={onSubmitForm}

    >
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "username")}
          label="نام کاربری"
          value={form.username}
          errorMessages={[Texts.error.username]}
          type="text"
        />
      </Grid>
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "name_family")}
          label="نام و نام خانوادگی "
          value={form.name_family}
          errorMessages={[Texts.error.name_family]}
          type="text"
        />
      </Grid>

      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "phone_number")}
          label="شماره موبایل"
          value={form.phone_number}
          errorMessages={[Texts.error.phone_number]}
          type="number"
        />
      </Grid>
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "password")}
          label="کلمه عبور"
          value={form.password}
          errorMessages={[Texts.error.password]}
          type="password"
        />
      </Grid>
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "re_password")}
          label="تکرار کلمه عبور"
          value={form.re_password}
          errorMessages={[Texts.error.re_password]}
          type="password"
        />
      </Grid>
    </AuthLayout>
  );
}
