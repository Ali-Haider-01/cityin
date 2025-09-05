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
import { company } from "./footer.data";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Logo } from "@/assets";
import Image from "next/image";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { SOCIAL_ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        bgcolor: "#07303dff",
        color: "#2F2F2F",
        py: { xs: 4, md: 6 },
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 4,
            mb: 4,
          }}
        >
          <Box sx={{ gridColumn: { xs: "1", md: "1" } }}>
            <Stack spacing={3}>
              <Box>
                <Image src={Logo} alt="logo" />
              </Box>
              <Stack direction="row" spacing={2}>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(223, 232, 247, 0.5)",
                    color: "white",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      backgroundColor: "#385C89",
                    },
                  }}
                  onClick={() => {
                    router.push(SOCIAL_ROUTES.INSTAGRAM);
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(223, 232, 247, 0.5)",
                    color: "white",
                    width: 40,
                    height: 40,
                    "&:hover": {
                      backgroundColor: "#385C89",
                    },
                  }}
                  onClick={() => {
                    router.push(SOCIAL_ROUTES.WHATSAPP);
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Box>

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

          <Box sx={{ gridColumn: { xs: "1", md: "3" } }}>
            <Stack >
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffffff",
                  fontWeight: 600,
                  fontSize: "26px",
                }}
              >
                Looking for help?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffffff",
                  fontWeight: 400,
                  fontSize: "14px",
                  mb:1,
                }}
              >
                Our team is available 24/7
              </Typography>
              <Box display={'flex'} alignItems={'center'} gap={2}>
                <WhatsAppIcon sx={{ color: 'white', fontSize: 40 }} />
                <Box>
                  <Typography variant="body2" color="white">Get support via WhatsApp:</Typography>
                  <Typography variant="body1" fontWeight={'bold'} color="white">+973 7791 8877</Typography>
                </Box>
              </Box>
              <Box display={'flex'} alignItems={'center'} gap={2}>
                <WhatsAppIcon sx={{ color: 'white', fontSize: 40 }} />
                <Box>
                  <Typography variant="body2" color="white">Get support via WhatsApp:</Typography>
                  <Typography variant="body1" fontWeight={'bold'} color="white">+966 5540 88227</Typography>
                </Box>
              </Box>
              <Box display={'flex'} alignItems={'center'} gap={2}>
                <MailOutlineIcon sx={{ color: 'white', fontSize: 40 }} />
                <Box>
                  <Typography variant="body2" color="white">Or you can email us at:</Typography>
                  <Typography variant="body1" fontWeight={'bold'} color="white">support@cityin.net</Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

        </Box>

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

          <Stack direction="row" spacing={2}>
            <img src="https://cityin.net/modules/travel_customer/assets/images/payments.png" alt="payments"></img>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
