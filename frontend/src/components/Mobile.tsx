import { Box, Typography } from "@mui/material";

export default function Mobile() {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center" }}
      >
        Untuk mobile belum dibuat
      </Typography>
    </Box>
  );
}
