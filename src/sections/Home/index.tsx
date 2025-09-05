"use client";
import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'url("https://cityin.net/uploads/travel-images/settings-files/afa21d355a621591cc4da501bb113a9f.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          mt: -5,
        }}
      >
        <Box
          display={"flex"}
          alignItems={"start"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          flexDirection={"column"}
          pt={15}
          pl={{ xs: 5, sm: 10, md: 15 }}
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
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: 10.6,
            p: 1.5,
          }}
        >
          <TextField
            name="destination"
            placeholder="Enter a destination"
            size="small"
            sx={{ bgcolor: "white", borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
         <TextField
            name="date"
            placeholder="2025-09-06 - 2025-09-07"
            size="small"
            sx={{ bgcolor: "white", borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name="room"
            placeholder="1 Room, 2 Adults, 0 Child"
            size="small"
            sx={{ bgcolor: "white", borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Diversity3Icon color="action" />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" sx={{ bgcolor: "#1674dfff", color: 'white' }}>
            Search Hotels
          </Button>
        </Box>
      </Box>
      <Box my={8} sx={{
        px: { xs: 5, sm: 8, md: 15 },
      }}>
        <Typography variant="h4" color="#4a4a4bff" marginBottom={8}>Special deals for you</Typography>
        <Box
          sx={{
            backgroundImage:
              'url("https://cityin.net/uploads/travel-images/settings-files/afa21d355a621591cc4da501bb113a9f.webp")',
            backgroundSize: "cover",
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            borderRadius: 2,
            gap: 3,
            py: 10,
            px:2,
          }}
        >
          <Typography variant="h2" color="white">Unwind at a cosy retreat abroad</Typography>
          <Typography variant="body1" color="white">Avail our deals a save on your stay</Typography>
          <Button variant="contained" sx={{ bgcolor: '#ce5d59ff', color: 'white' }}>Learn More</Button>
        </Box>
      </Box>
      <Box mt={4} mb={8} sx={{
        px: { xs: 5, sm: 8, md: 15 },
      }}>
        <Typography variant="h4" marginBottom={5}>Top destinations</Typography>
        <Typography variant="h6" marginBottom={2} textAlign={'center'}>About Us</Typography>
        <Typography variant="body1" marginBottom={2} >CityIn platform is your smart gateway for local and international hotel reservations. The platform comes to bring peace of mind and travel closer to everyone, and makes reaching your next destination easy and fast. With options that suit different tastes and budgets, with the spirit of modern hospitality, to give you a unique and distinctive travel experience with a unique slogan</Typography>
        <Typography variant="body1" marginBottom={2} >“The far is closer”</Typography>
        <Typography variant="body1" marginBottom={2} >Individual consultations are available via WhatsApp with a call center that operates 24 hours a day, 7 days a week to help customers find an easy and comfortable accommodation experience and plan air travel for work or family vacations with a secure payment service</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt:1 }}>
    <Button variant="contained" sx={{ bgcolor: '#ce5d59ff', color: 'white' }}>
      Read More
    </Button>
  </Box>
      </Box>
    </>
  );
}