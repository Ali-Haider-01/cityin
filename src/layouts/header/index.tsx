"use client";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { navLinksData } from "./header.data";
import { APP_ROUTES } from "@/constants/routes";
import Image from "next/image";
import { Logo } from "@/assets";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          mb: 2,
        }}
      >
       
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ pt: 1 }}>
        {navLinksData.map((item) => (
          <ListItem
            key={item.title}
            component={Link}
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              px: 3,
              "&:hover": {
                backgroundColor: "rgba(56, 92, 137, 0.08)",
              },
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{
                    color: isActiveRoute(item.path) ? "#385C89" : "#07303dff",
                    fontWeight: isActiveRoute(item.path) ? 600 : 400,
                    fontSize: "16px",
                  }}
                >
                  {item.title}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3, pt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#07303dff",
            color: "white",
            py: 1.5,
            px: 3,
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "16px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#2E285C",
            },
          }}
          onClick={() => {
            router.push(APP_ROUTES.LOGIN);
          }}
        >
         Login
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#07303dff",
          borderBottom: "1px solid #fdfdfdff",
        }}
        
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: { xs: "64px", md: "80px" },
              px: { xs: 1, md: 2 },
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: { xs: 2, md: 3 },
              }}
            >
              <Link href={APP_ROUTES.HOME} style={{ textDecoration: "none" }}>
                <Image
                src={Logo}
                alt="logo"
                />
              </Link>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                sx={{ flex: 1, justifyContent: "end" }}
              >
                {navLinksData.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: isActiveRoute(item.path) ? "#141219" : "#f8f8f8ff",
                        fontWeight: isActiveRoute(item.path) ? 400 : 200,
                        fontSize: "18px",
                        cursor: "pointer",
                        transition: "color 0.2s ease",
                        "&:hover": {
                          color: "#afb6beff",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            )}

            {!isMobile && (
              <Box sx={{ px: { xs: 2, md: 3 } }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#07303dff",
                    color: "white",
                    p: 1,
                    border:1,
                    borderColor:'white',
                    fontWeight: 600,
                    fontSize: "16px",
                    textTransform: "none",
                    minWidth: "140px",
                    "&:hover": {
                      backgroundColor: "#0d4452ff",
                    },
                  }}
                  onClick={() => {
                    router.push(APP_ROUTES.LOGIN);
                  }}
                >
                  Login
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ px: { xs: 2, md: 3 } }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: "white",
                    p: 1,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            border: "none",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box sx={{ height: { xs: "64px", md: "80px" } }} />
    </>
  );
};
