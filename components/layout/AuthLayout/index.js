import * as React from "react";

//MUI
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//Icon
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

//Theme MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

//Global Tags
import Appimage from "../../../common/Appimage";
import Appbutton from "@/common/Appbutton";
import Applink from "@/common/Applink";

//Form
import { ValidatorForm } from "react-material-ui-form-validator";

import AnimateButton from "@/components/libs/Animatebutton";

const theme = createTheme();

export default function AuthLayout({
  linkSing,
  Textbutton,
  title,
  children,
  link,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#FF9F1C" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h2" variant="h5w">
              {title}
            </Typography>
            <Grid sx={{ width: "100%", mt: 4 }}>
              <ValidatorForm>
                {children}
                <AnimateButton>
                  <Appbutton
                    type="submit"
                    // fullWidth
                    // variant="contained"
                    sx={{ mt: 3, mb: 2, fontWeight: "600", fontSize: "16px" }}
                  >
                    <Typography variant="h6w">{Textbutton}</Typography>
                  </Appbutton>
                </AnimateButton>
                <Grid container justifyContent={"space-between"}>
                  <Grid item mb={0.7}>
                    <Applink href="#" variant="body2">
                      کلمه عبور را فراموش کرده اید؟
                    </Applink>
                  </Grid>
                  <Grid item mb={0.7}>
                    <Applink href={link}>{linkSing}</Applink>
                  </Grid>
                </Grid>
              </ValidatorForm>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
          }}
        >
          <Appimage src={"/static/image/auth_img.jpg"} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
