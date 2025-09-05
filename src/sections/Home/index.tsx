"use client";
import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://cityin.net/uploads/travel-images/settings-files/afa21d355a621591cc4da501bb113a9f.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
       // height: "400px",
        mt: -5,
      }}
    >
      <Box
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}
        flexWrap={'wrap'}
        flexDirection={"column"}
        pt={15}
        pl={{xs:5,sm:10,md:15}}
      >
        <Typography variant="h2" color="white">
          Let's book your trip!
        </Typography>
        <Typography variant="h6" color="white">
          Choose from over 2+ million hotels worldwide!
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "rgba(7, 48, 61, 0.8)",
          display: "flex",
          flexWrap:'wrap',
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mt:10.6,
          p:1.5,
        }}
      >
        <TextField name="destination" placeholder="Enter a destination" size="medium" sx={{bgcolor:'white',borderRadius:1}} InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon color="action" />
          </InputAdornment>
        ),
      }}/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          slotProps={{
            textField: {
              placeholder: "Select a date", 
              size: "medium",
              sx: { bgcolor: "white", borderRadius: 1, mt: 0 },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
        <TextField name="room" placeholder="1 Room, 2 Adults, 0 Child" size="medium" sx={{bgcolor:'white',borderRadius:1}} InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Diversity3Icon color="action" />
          </InputAdornment>
        ),
      }}/>
      <Button variant="contained" sx={{bgcolor:' color="#1674dfff"'}}>Search Hotels</Button>
      </Box>
    </Box>
  );
}
