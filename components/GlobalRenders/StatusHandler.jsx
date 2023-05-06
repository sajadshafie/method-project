import React from "react";
import style from "./style.module.scss";
import { Grid, Typography } from "@mui/material";
export default function StatusHandler({ type, content }) {
  const handleType = () => {
    let res;
    switch (type) {
      case "success":
        res = style.success;
        break;
      case "warning":
        res = style.warning;
        break;
      case "complete":
        res = style.complete;
        break;
        case "none":
          res = style.none;
          break;
    }
    return res;
  };
  console.log(type);
  return (
    <Grid display={"flex"}>
      <Typography className={handleType()}>{content}</Typography>
    </Grid>
  );
}
