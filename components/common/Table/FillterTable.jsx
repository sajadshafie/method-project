import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import Appselectvalidator from "../Appselectvalidator";
import style from "../style.module.scss";

import SearchFild from "../../base/SearchFild";
// import SwitchContent from "components/OverView/Packages/SwitchContent";
export default function FilterTable({
  filters,
  title = "Filters",
  haveSwitch,
  onActiveContent,
}) {
  const length = haveSwitch ? filters.length + 1 : filters.length;
  const flex = 100 / length - 1;
  return (
    <Grid className={style.container_fillter}>
      <Typography
        sx={{ marginBottom: "16px" }}
        variant="h6"
      >
        {title}
      </Typography>
      <Grid marginBottom={"20px"}>
        <SearchFild placeholder={"Search Keyword"} />
      </Grid>
      <Grid className={style.content_fillter}>
        {haveSwitch && (
          <Grid
            sx={{ flex: `0 0 ${flex}%`, marginRight: "15px", height: "48px" }}
          >
            {/* <SwitchContent firstContent="active" secendContent="Deactive" onActiveContent={onActiveContent}/> */}
          </Grid>
        )}
        {filters?.map((v, i) => {
          return (
            <Grid
              key={i}
              sx={{
                flex: `0 0 ${flex}%`,
                marginRight: "18px",
                marginBottom: "8px",
              }}
            >
              <Appselectvalidator options={v.options} label={v.label} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
