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

export default function Companyinfo() {
  const route = useRouter();
  const [form, setForm] = useState({
    company_name: "",
    activity: "",
    phone_number: "",
    password: "",
    re_password: "",
    states: "",
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
      title={"اطلاعات شرکت"}
      Textbutton={"ذخیره اطلاعات"}
      linkSing={"ورود به پنل کاربری"}
      link={"/"}
      step
      activeStep={3}
      onSubmit={onSubmitForm}
      linkForgotpass="/forgotpassword"
    >
      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "company_name")}
          label="نام شرکت"
          value={form.company_name}
          errorMessages={[Globals.error.company_name]}
          type="text"
        />
      </Grid>
      <Grid mb={2.5}>
        <Appselectvalidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "activity")}
          label="حوزه فعالیت شرکت"
          value={form.activity}
          errorMessages={[Globals.error.activity]}
          option={Globals.list_industry}
        />
      </Grid>

      <Grid mb={2.5}>
        <AppTextValidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "phone_number")}
          label="کد اقتصادی"
          value={form.phone_number}
          errorMessages={[Globals.error.phone_number]}
          type="number"
        />
      </Grid>
      <Grid mb={2.5}>
        <Appselectvalidator
          validators={["required"]}
          onChange={(value) => onChangeForm(value, "states")}
          label="استان"
          value={form.states}
          errorMessages={[Globals.error.states]}
          option={Globals.states}
        />
      </Grid>
    </AuthLayout>
  );
}
