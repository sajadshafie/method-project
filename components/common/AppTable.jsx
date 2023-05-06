import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./style.module.scss";
import StatusHandler from "../GlobalRenders/StatusHandler";
import { Grid, Typography } from "@mui/material";
import FilterTable from "./Table/FillterTable";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from "@mui/material/Tooltip";
//SAMPLE DATA PASS TO COMPONENT

// const labels = ["Product", "Country", "Package Type", "Actions"];
//   const rows = [
//     {
//       name: "test",
//       align: "sfsdf",
//       sdf: "qqqqqqq",
//       button: { name: "View Report", content: "View Results Analysis" },
//     },
//     {
//       name: "test",
//       align: "sfsdf",
//       sdf: "qqqqqqq",
//       button: { name: "View Report", content: "View Results Analysis" },
//     },
//     {
//       name: "test",
//       align: "sfsdf",
//       sdf: "qqqqqqq",
//       button: { name: "View Report", content: "View Results Analysis" },
//     },
//     {
//       name: "test",
//       align: "sfsdf",
//       sdf: "qqqqqqq",
//       button: { name: "View Report", content: "View Results Analysis" },
//     },
//   ];

export default function AppTable({
  rows,
  labels,
  onClick,
  typeColor = "primary",
  widthBtn = "170px",
  filters,
  buttonDotted,
  onClickDottedItem,
  handleAction,
  haveSwitchFilter,
  onActiveSwitchFilter,
  isLoading,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [itemSelect, setItemSelect] = useState("");
  const handleClick = (event, content, data, index) => {
    setAnchorEl(event.currentTarget);
    setItemSelect(index);
    onClickDottedItem(content, data, index);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onAction = (item, ind, content, data, index) => {
    handleAction(item, ind, content, data, index);
  };

  const classRender = () => {
    let res;
    switch (typeColor) {
      case "success":
        res = style.success_btn_txt;
        break;
      case "danger":
        res = style.danger_btn_txt;
        break;
      case "orange":
        res = style.orange_btn_txt;
        break;
      case "primary":
        res = style.primary_btn_txt;
        break;
    }
    return res;
  };
  //text button render
  const buttonRender = (content, data, index) => {
    console.log(content, data);
    return (
      <TableCell
        key={index}
        sx={{ width: widthBtn }}
        className={classRender()}
        // onClick={() => onClick(content, data, index)}
        align="right"
      >
        <Grid
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          {content.map((v, i) => {
            console.log(v);
            return (
              <p
                className={style.text_button}
                onClick={() => onAction(v, i, content, data, index)}
              >
                {v.name}
              </p>
            );
          })}
        </Grid>
      </TableCell>
    );
  };
  const onClickDotted = () => { };
  const buttonDottedRender = (content, data, index) => {
    console.log(content, data);
    return (
      <TableCell
        style={{
          width: "24px",
          height: "100%",
          cursor: "pointer",
          position: "relative",
        }}
        key={index}
        sx={{ width: widthBtn }}
        className={classRender()}
        align="right"
      >
        <Grid display={"flex"} alignItems="center">
          {content.map((item, index) => {
            console.log(item);
            return (
              <Tooltip title={item.type}>
                <div style={{ marginLeft: "25px" }}>
                  <img
                    onClick={() => onAction(item, index, content, data, index)}
                    className={style.icon}
                    src={process.env.PUBLIC_URL + item.icon}
                    key={index}
                    alt=""
                  />
                </div>
              </Tooltip>
            );
          })}
        </Grid>
      </TableCell>
    );
  };
  //render row with items
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  const itemHandler = (v, i) => {
    let res = [];
    for (let x in v) {
      if (getKeyByValue(v, v[x]) == "button") {
        res.push(
          buttonDotted
            ? buttonDottedRender(v.button, v, i)
            : buttonRender(v.button, v, i)
        );
      } else {
        if (getKeyByValue(v, v[x]) == "status") {
          res.push(
            <TableCell rowSpan={1} align="left">
              <StatusHandler type={v[x].type} content={v[x].content} />
            </TableCell>
          );
        } else if (getKeyByValue(v, v[x]) == "none") {
        } else {
          res.push(
            <TableCell key={i} rowSpan={1} align="left">
              {v[x]}
            </TableCell>
          );
        }
      }
    }
    const result = res.map((item, index) => {
      return <React.Fragment key={index}>{item}</React.Fragment>;
    });
    return result;
  };
  //title Row Render
  const titleHandler = () => {
    const res = labels.map((v, i) => {
      return (
        <TableCell
          key={i}
          align={v.toLowerCase() == "actions" ? "center" : "left"}
          colSpan={v.toLowerCase() == "actions" ? 2 : 1}
          sx={{ borderBottom: "none",color:'white' }}
        >
          {v}
        </TableCell>
      );
    });
    return res;
  };
  
  // console.log(rowData.name);
  return (
    <Grid>
      {filters && (
        <FilterTable
          onActiveContent={onActiveSwitchFilter}
          haveSwitch={haveSwitchFilter}
          filters={filters}
        />
      )}
      <TableContainer
        component={Paper}
        sx={{ minHeight: "300px", position: "relative", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{background:"#12A3BA"}}>
            <TableRow > {titleHandler()}</TableRow>
          </TableHead>
          {isLoading ? (
            <Grid
              sx={{
                position: "absolute",
                background: "white",
                height: "300px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress color="success" />
            </Grid>
          ) : rows.length >= 1 ? (
            <TableBody className={style.table_body}>
              {rows.map((v, i) => (
                <TableRow
                  key={i}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    backgroundColor: i % 2 ? "#F6F9FB;" : "#ffff",
                  }}
                >
                  {itemHandler(v, i)}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <Grid
              sx={{
                background: "white",
                height: "300px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>No Data</p>
            </Grid>
          )}
        </Table>
      </TableContainer>
    </Grid>
  );
}

{
  /* <Typography
          className={style.button_dotted}
          aria-describedby={id}
          variant="contained"
          onClick={(e) => handleClick(e, content, data, index)}
        >
          <img src={process.env.PUBLIC_URL + "/image/layout/more.svg"} alt="" />
        </Typography>

        {index == itemSelect && (
          <Popover
            // style={{padding:"12px"}}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {data.button.dotted.map((item, ind) => {
              return (
                <div
                  onClick={() => onAction(item, ind, content, data, index)}
                  key={ind}
                  className={style.item_popup}
                  // onClick={() => onClickDottedItem(item, data, index)}
                >
                  <img src={item.icon} alt="" />
                  <Typography
                    sx={{ marginLeft: "8px" }}
                    className={fontstyle.heading_extra_small}
                  >
                    {item.label}
                  </Typography>
                </div>
              );
            })}
          </Popover>
        )} */
}
