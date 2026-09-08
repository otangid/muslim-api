"use client";

import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <Stack
      id="contact"
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        textAlign: "left",
        alignItems: "left",
        justifyContent: "left",
        overflow: "hidden",
        mt: 6,
        mx: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Typography
          variant="body2"
          color="primary"
          sx={{ fontWeight: "bold", letterSpacing: 2, textTransform: "uppercase" }}
        >
          KONTAK SAYA
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, mt: 1, mb: 3, letterSpacing: -1 }}
        >
          Hubungi Saya
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Paper
          component="form"
          variant="outlined"
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            gap: 3,
            p: 2,
            mx: "auto",
            mb: 10,
            textAlign: "left",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            // Tambahkan logika pengiriman formulir di sini
            alert("Terima kasih atas masukan Anda!");
            e.currentTarget.reset();
          }}
        >
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
            <TextField
              label="Nama Lengkap"
              required
              placeholder="Masukkan nama Anda"
              variant="outlined"
              type="text"
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                },
              }}
            />
            <TextField
              label="Email"
              required
              placeholder="Masukkan email Anda"
              variant="outlined"
              type="email"
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",
                },
              }}
            />
          </Box>

          <TextField
            label="Pesan / Masukan"
            required
            placeholder="Masukkan pesan Anda"
            variant="outlined"
            type="text"
            multiline
            rows={10}
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
              "& .MuiOutlinedInput-root": {
                borderRadius: "14px",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="warning"
            disableElevation
            sx={{
              mt: 1,
              mb: 2,
              px: 4,
              borderRadius: "20px",
              fontWeight: "bold",
              alignSelf: { xs: "stretch", sm: "center" },
            }}
          >
            Kirim Pesan
          </Button>
        </Paper>
      </motion.div>
    </Stack>
  );
}
