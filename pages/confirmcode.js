import React, { useEffect, useState } from "react";
//Layout Auth
import AuthLayout from "@/components/layout/AuthLayout";

//MUI
import { Grid, Button } from "@mui/material";

//Textvalidtor
import AppTextValidator from "@/components/common/Apptextvalidator";

//Router
import { useRouter } from "next/router";

//All Message Text
import Globals from "@/components/Globals";
import Appselectvalidator from "@/components/common/Appselectvalidator";

export default function Confirmcode() {
  const route = useRouter();

  const [form, setForm] = useState({
    username: "",
    code: "",
    re_password: "",
    phone_number: "",
  });

  const onChangeForm = (value, type) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_data"));
    setForm({
      ...data,
      code: "",
    });
  }, []);

  const onSubmitForm = () => {
    route.push("/company_info");
  };

  return (
    <AuthLayout
      title={`کد تایید `}
      Textbutton={"تایید"}
      linkSing={"ورود به پنل کاربری"}
      link={"/"}
      description={`کد مورد نظر از طریق پیامک به شماره ${form.phone_number} ارسال شده است. در صورت عدم دریافت پیامک دکمه ارسال مجدد را بزنید`}
      step={2}
      linkForgotpass="/forgotpassword"
      onSubmit={onSubmitForm}
    >
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "code")}
          label="کد تایید"
          value={form.code}
          errorMessages={[Globals.error.code]}
          type="text"
        />
      </Grid>
      <Grid mt={5}>
        <Button fullWidth variant={"outlined"}>
          ارسال مجدد
        </Button>
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
