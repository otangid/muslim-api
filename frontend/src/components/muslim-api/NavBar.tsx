"use client";

import { useColorMode } from "@/context/ColorModeContext";
import {
  AutoStoriesTwoTone,
  DarkModeTwoTone,
  HomeTwoTone,
  LibraryBooksTwoTone,
  LightModeTwoTone,
  MenuBookTwoTone,
  MosqueTwoTone,
} from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const { mode, toggleColorMode } = useColorMode();

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    // Jika klik tab yang sedang aktif, abaikan
    if (pathname === href) return;

    const isSubPage = pathname !== "/";
    const targetIsHome = href === "/";

    if (targetIsHome) {
      // Ke Home menggunakan push agar tersimpan di history (opsional bisa ganti replace)
      router.push(href);
    } else {
      // Jika antar fitur muslim (quran -> doa), gunakan replace
      // agar history tidak menumpuk. Jadi "Back" akan selalu ke /muslim-app
      if (isSubPage) {
        router.replace(href);
      } else {
        router.push(href);
      }
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: <HomeTwoTone />, route: "/" },
    { id: "quran", label: "Quran", icon: <MenuBookTwoTone />, route: "/quran" },
    { id: "doa", label: "Doa", icon: <AutoStoriesTwoTone />, route: "/doa" },
    { id: "dzikir", label: "Dzikir", icon: <MosqueTwoTone />, route: "/dzikir" },
    { id: "hadits", label: "Hadits", icon: <LibraryBooksTwoTone />, route: "/hadits" },
  ];

  return (
    <Paper
      variant="elevation"
      elevation={0}
      sx={{
        display: { xs: "none", md: "flex" },
        position: "fixed",
        top: 76,
        left: 0,
        bottom: 0,
        width: "240px",
        px: 2.5,
        pb: 1.75,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ height: "1px", width: "100%", bgcolor: "divider", mb: 1.5 }} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, width: "100%", alignItems: "center", p: 0 }}>
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <Button
              key={item.id}
              disableElevation
              variant={isActive ? "contained" : "outlined"}
              startIcon={item.icon}
              onClick={() => handleNavigation(item.route)}
              sx={{
                py: 1.25,
                textTransform: "none",
                borderRadius: "12px",
                transition: "0.3s",
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                bgcolor: "background.default",
                color: "text.primary",
                borderColor: "divider",
                "&:hover": {
                  transform: "translateY(-2px)",
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                },
                ...(isActive && {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                }),
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>
      <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", width: "100%", gap: 2, alignItems: "center" }}>
        <Button
          disableElevation
          variant="contained"
          color="secondary"
          startIcon={mode === "dark" ? <LightModeTwoTone /> : <DarkModeTwoTone />}
          onClick={() => toggleColorMode()}
          sx={{
            py: 1.25,
            textTransform: "none",
            borderRadius: "12px",
            transition: "0.3s",
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 500,
            fontSize: "0.625rem",
            letterSpacing: 1,
            color: "text.disabled",
          }}
        >
          Designed by OTANG.ID
        </Typography>
      </Box>
    </Paper>
  );
}
