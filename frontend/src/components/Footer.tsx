"use client";

import { Telegram, Facebook, Instagram, GitHub, X } from "@mui/icons-material";
import { IconButton, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      id="footer"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        py: 6,
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "text.primary", fontWeight: "bold" }}
      >
        OTANG.ID © 2026
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "0.75rem", mt: 1 }}
      >
        Email: me@otang.id | Phone: +62 812-3456-7890 | Address: Jl. Otang No. 123, Jakarta, Indonesia
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
      >
        <IconButton
          size="large"
          onClick={() => {}}
          sx={{ color: "#1877F2" }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => {}}
          sx={{ color: "text.primary" }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => {}}
          sx={{ color: "#0088CC" }}
        >
          <Telegram />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => {}}
          sx={{ color: "text.primary" }}
        >
          <X />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => {}}
          sx={{ color: "#E4405F" }}
        >
          <Instagram />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
      >
        <Link
          href="/privacy-policy"
          sx={{ textDecoration: "none" }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.75rem" }}
          >
            Privacy Policy
          </Typography>
        </Link>
        <Link
          href="/terms-of-service"
          sx={{ textDecoration: "none" }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.75rem" }}
          >
            Terms of Service
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
