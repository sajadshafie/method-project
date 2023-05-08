import React, { useEffect, useState } from "react";
//Layout Auth
import AuthLayout from "@/components/layout/AuthLayout";

//MUI
import { Grid } from "@mui/material";

//Textvalidtor
import AppTextValidator from "@/components/common/Apptextvalidator";

//All Message Text
import Texts from "@/components/Texts";
import Appselectvalidator from "@/components/common/Appselectvalidator";

export default function Registers() {

  const [form, setForm] = useState({
    username: "",
    code: "",
    re_password: "",
    phone_number: ""
  });

  const onChangeForm = (value, type) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_data"))
    setForm({
      ...data, code: ""
    })
  }, [])

  return (
    <AuthLayout
      title={`کد تایید `}
      Textbutton={"ارسال"}
      linkSing={"ورود به پنل کاربری"}
      link={"/"}
      description={`کد تایید به شماره ${form.phone_number}  ارسال شده است  `}
      step={2}
    >
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "code")}
          label="کد تایید"
          value={form.code}
          errorMessages={[Texts.error.code]}
          type="text"
        />
      </Grid>
      {/* <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "company_name")}
          label="نام شرکت"
          value={form.company_name}
          errorMessages={[Texts.error.company_name]}
          type="text"
        />
      </Grid>
      <Grid mb={2.5}>
        <Appselectvalidator
          // validators={["required"]}
          onChange={(value) => onChangeForm(value, "activity")}
          label="حوزه فعالیت"
          value={form.activity}
          // errorMessages={[Texts.error.activity]}
          option={Texts.list_industry}
        />
      </Grid>
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "code")}
          label="کد سامانه"
          value={form.code}
          errorMessages={[Texts.error.code]}
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
      </Grid> */}
    </AuthLayout>
  );
}
