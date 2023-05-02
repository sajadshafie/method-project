import React from "react";

//MUI
import { MenuItem } from "@mui/material";

//ValidateForm
import { SelectValidator } from "react-material-ui-form-validator";

export default function Appselectvalidator({
  option,
  onChange,
  value,
  label,
  errorMessages,
  validators
}) {
  return (
    <SelectValidator
      style={{ width: "100%" }}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      name="name"
      value={value}
      validators={validators}
      errorMessages={errorMessages}
    >
      {option?.map((v, i) => {
        return (
          <MenuItem key={i} value={v.value}>
            {v.label}
          </MenuItem>
        );
      })}
    </SelectValidator>
  );
}
