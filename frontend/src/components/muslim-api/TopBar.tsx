"use client";

import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import OtangImg from "@/assets/images/otang.png";
import { ApiTwoTone } from "@mui/icons-material";
import Link from "next/link";

export default function TopBar() {
  return (
    <Paper
      variant="elevation"
      elevation={0}
      sx={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "76px",
        p: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "end",
        gap: 2,
      }}
    >
      <Avatar
        component={Link}
        href="/"
        src={OtangImg.src}
        sx={{ width: "auto", height: "75%", outline: "1px solid", outlineColor: "divider" }}
      />
      <Stack
        spacing={-0.5}
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 0,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 500,
            fontSize: "0.625rem",
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "text.disabled",
          }}
        >
          otang.id
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", fontSize: "1rem", textAlign: "center", color: "text.primary" }}
        >
          Diki Zulkarnaen
        </Typography>
      </Stack>
      <Typography
        variant="h6"
        sx={{ fontWeight: 900, textAlign: "center", color: "text.primary" }}
      >
        MUSLIM API
      </Typography>
      <Box sx={{ width: "1px", height: "100%", bgcolor: "divider", mx: 0.5 }} />
      <ApiTwoTone
        color="error"
        fontSize="large"
      />
    </Paper>
  );
}
