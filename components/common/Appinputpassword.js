import React from "react";
import { TextValidator } from "react-material-ui-form-validator";
import style from "./style.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
export default function AppInputPassword({
  className,
  Label = "Password",
  value,
  onChange,
  errorMessages = "this field is required",
  name = "password",
  required,
  validators = ["require"],
}) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <TextValidator
        style={{ width: "100%" }}
        required={required}
        className={className}
        label={Label}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        value={value}
        validators={validators}
        errorMessages={errorMessages}
        type={show ? "text" : "password"}
      />
      <div className={style.suffix_icon}>
        {show ? (
          <div style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
            <VisibilityIcon className={style.icon_color} />
          </div>
        ) : (
          <div style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
            <VisibilityOffIcon className={style.icon_color} />
          </div>
        )}
      </div>
    </div>
  );
}
