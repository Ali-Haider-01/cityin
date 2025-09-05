"use client";

import {
  Box,
  Link,
  Stack,
  Typography,
  Container,
  Divider,
  IconButton,
} from "@mui/material";
import { company, support } from "./footer.data";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Logo } from "@/assets";
import Image from "next/image";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#07303dff", // Light off-white background as shown in image
        color: "#2F2F2F",
        py: { xs: 4, md: 6 },
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Logo and Description */}
          <Box sx={{ gridColumn: { xs: "1", md: "1" } }}>
            <Stack spacing={3}>
              <Box>
                <Image src={Logo} alt="logo" />
              </Box>
              <Stack direction="row" spacing={2}>
            <IconButton
              sx={{
                backgroundColor: "#60cfcfff",
                color: "white",
                width: 40,
                height: 40,
                "&:hover": {
                  backgroundColor: "#385C89",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#60cfcfff",
                color: "white",
                width: 40,
                height: 40,
                "&:hover": {
                  backgroundColor: "#385C89",
                },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
            </Stack>
          </Box>

          {/* Company */}
          <Box sx={{ gridColumn: { xs: "1", md: "2" } }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff7f7ff",
                  fontWeight: 600,
                  fontSize: "26px",
                  mb: 1,
                }}
              >
                Links
              </Typography>
              {company.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  sx={{
                    color: "#ffffffff",
                    textDecoration: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "#385C89",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Support */}
          <Box sx={{ gridColumn: { xs: "1", md: "3" } }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffffff",
                  fontWeight: 600,
                  fontSize: "26px",
                  mb: 1,
                }}
              >
                Looking for help?
              </Typography>
              {support.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  sx={{
                    color: "#ffffffff",
                    textDecoration: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "#385C89",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>

        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: "#E0E0E0", my: 3 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "#ffffffff",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            2025 Copyright © CityIn Developed by Wide Technology
          </Typography>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={2}>
            <img src="https://cityin.net/modules/travel_customer/assets/images/payments.png" alt="payments"></img>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
