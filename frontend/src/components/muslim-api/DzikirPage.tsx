"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import EndpointCard from "./EndpointCard";

export default function DzikirPage() {
  return (
    <Stack
      id="hero"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        py: 4,
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 800, textAlign: "center", letterSpacing: -1 }}
        >
          Endpoint Reference
        </Typography>
        <Stack
          direction={"row"}
          spacing={2}
          my={2}
          justifyContent="center"
        >
          <Box sx={{ width: "4px", height: "4px", bgcolor: "info.main", borderRadius: "10px" }} />
          <Box sx={{ width: "4px", height: "4px", bgcolor: "warning.main", borderRadius: "10px" }} />
          <Box sx={{ width: "60px", height: "4px", bgcolor: "secondary.main", borderRadius: "10px" }} />
          <Box sx={{ width: "4px", height: "4px", bgcolor: "warning.main", borderRadius: "10px" }} />
          <Box sx={{ width: "4px", height: "4px", bgcolor: "info.main", borderRadius: "10px" }} />
        </Stack>
        <Typography
          variant="h6"
          mb={4}
          mt={1}
          sx={{
            mx: "auto",
            opacity: 0.9,
            fontWeight: 400,
          }}
        >
          Berikut adalah dokumentasi endpoint API yang tersedia untuk integrasi aplikasi Anda:
        </Typography>
      </motion.div>
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          mb: 4,
          borderRadius: "20px",
          overflow: "hidden",
          borderColor: "divider",
        }}
      >
        <EndpointCard
          title="Daftar Dzikir-dzikir harian"
          method="GET"
          path="/muslim/v1/dzikir"
          size="-+ 40 KB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/dzikir"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "type": "pagi",
      "arab": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      "indo": "Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.",
      "ulang": "1x"
    },
    ...
  ]
}
                `}
        />
        <EndpointCard
          title="Mendapatkan daftar dzikir berdasarkan jenis"
          method="GET"
          path="/muslim/v1/dzikir/:type"
          params={[
            {
              name: "type",
              type: "string",
              required: true,
              description: "Jenis dzikir (pagi, sore, solat)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/dzikir/pagi"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "type": "pagi",
      "arab": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      "indo": "Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.",
      "ulang": "1x"
    },
    ...
  ]
}
                `}
        />
      </Paper>
    </Stack>
  );
}
