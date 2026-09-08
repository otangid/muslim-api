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
import { IconButton, Paper, Tooltip } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function NavBarMobile() {
  const { mode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    if (pathname === href) return;
    const isSubPage = pathname !== "/";
    if (href === "/") {
      router.push(href);
    } else {
      isSubPage ? router.replace(href) : router.push(href);
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
      elevation={4}
      sx={{
        display: { xs: "flex", md: "none" }, // hanya muncul di mobile
        position: "fixed",
        bottom: 12,
        left: 12,
        right: 12,
        borderRadius: "20px",
        px: 1.5,
        py: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 1200,
      }}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.route;
        return (
          <Tooltip
            key={item.id}
            title={item.label}
          >
            <IconButton
              onClick={() => handleNavigation(item.route)}
              sx={{
                color: isActive ? "primary.contrastText" : "text.primary",
                bgcolor: isActive ? "primary.main" : "transparent",
                borderRadius: "14px",
                transition: "0.3s",
                "&:hover": { bgcolor: "primary.main", color: "primary.contrastText" },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        );
      })}

      <Tooltip title={mode === "dark" ? "Light Mode" : "Dark Mode"}>
        <IconButton
          onClick={toggleColorMode}
          sx={{ color: "secondary.main", borderRadius: "14px" }}
        >
          {mode === "dark" ? <LightModeTwoTone /> : <DarkModeTwoTone />}
        </IconButton>
      </Tooltip>
    </Paper>
  );
}
