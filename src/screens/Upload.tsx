import * as React from "react"
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { checkSessURL, uploadImageURL } from "Endpoints";
import MyAppBar from "components/MyAppBar";
import { ThemeProvider } from "@emotion/react";

import { theme } from "components/Theme"
import { Button } from "@mui/material";

export default function Upload() {
    const [img, setImg] = React.useState("")
    const [labeledImage, setLabeledImage] = React.useState({
      "show":false,
      "num_bottles":0,
      "img_data":""
    })
    // const navigate = useNavigate()
    // If not logged in, redirect to login page
    // if (localStorage.getItem("session_id") == null) {
    //   navigate("/login")
    // }
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //       "session_id":localStorage.getItem("session_id")
    //   })
    // }
    // fetch(checkSessURL, requestOptions)
    //   .then(res => res.json())
    //   .then((data) => {
    //     if (data["ok"] === "true") {

    //     }
    //     else {
    //       navigate("/login")
    //     }
    //   })

    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <MyAppBar title={"Upload"}/>
          <Box sx={{marginLeft: "1rem", marginTop:"1rem", display:"flex", flexDirection:"column" }}>
          <input type="file" accept="image/*" capture="environment" onChange={(e) => {
            console.log(e.target.files)
            let fr = new FileReader()
            if (e.target.files) {
              fr.readAsDataURL(e.target.files[0])
              fr.addEventListener("load", (e) => {
                if (e.target)
                  setImg(e.target.result as string)
              })
            }
          }}></input>
          <Button onClick={
            () => {
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  "session_id": localStorage.getItem("session_id"),
                  "img": img
                })
              }
              fetch(uploadImageURL, requestOptions)
                .then(res => res.json())
                .then((data) => {
                  if (data["ok"] === "true") {
                    setLabeledImage({
                      "show":true,
                      "num_bottles":parseInt(data["num_bottles"]),
                      "img_data": data["labeled_image"]
                    })
                  }
                })
            }
          }>
            Upload
          </Button>
          <Box sx={{
            marginTop:"2rem",
            display:"flex",
            flexDirection:"column"
          }}>
            {
              labeledImage["show"] ? 
                  <img src={labeledImage["img_data"]}></img>
                : <Box/>
            }
            {
              labeledImage["show"] ?
                <Typography>You are using {labeledImage["num_bottles"]} bottles!</Typography>
                : <Box/>
            }
          </Box>
          </Box>
        </Box>
      </ThemeProvider>
        
    )
}