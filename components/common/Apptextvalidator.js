import { Grid } from "@mui/material";
import React from "react";
import { TextValidator } from "react-material-ui-form-validator";

//stle
import style from "./style.module.scss";

export default function AppTextValidator({
  onChange,
  validators = ["required", "isEmail"],
  errorMessages = ["Email can not be empty", "Email not valid"],
  name,
  value,
  className,
  label,
  rows,
  type,
}) {
  return (
    <Grid fontSize={"10px"}>
      <TextValidator
        type={type}
        style={{ width: "100%" }}
        rows={5}
        rowsMax={5}
        className={`${className} ${style.input}`}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        value={value}
        validators={validators}
        errorMessages={errorMessages}
      />
    </Grid>
  );
}
