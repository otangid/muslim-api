"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import EndpointCard from "./EndpointCard";

export default function DoaPage() {
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
          title="Daftar Doa-doa harian"
          method="GET"
          path="/muslim/v1/doa"
          size="-+ 76 KB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/doa"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "judul": "Doa Agar Diberi Bangunan Indah di Surga",
      "arab": "رَبِّ ٱبْنِ لِى عِندَكَ بَيْتًا فِى ٱلْجَنَّةِ وَنَجِّنِى مِن فِرْعَوْنَ وَعَمَلِهِۦ وَنَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّٰلِمِينَ",
      "indo": "Ya Tuhanku, bangunlah untukku sebuah rumah di sisi-Mu dalam sorga, dan selamatkanlah aku dari Fir'aun dan perbuatannya, serta selamatkanlah aku dari kaum yang zhalim.",
      "source": "quran"
    },
    ...
  ]
}
                `}
        />
        <EndpointCard
          title="Mendapatkan daftar doa berdasarkan sumber"
          method="GET"
          path="/muslim/v1/doa/:source"
          params={[
            {
              name: "source",
              type: "string",
              required: true,
              description: "Sumber doa (quran, hadits, pilihan, harian, ibadah, haji, lainnya)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/doa/quran"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "judul": "Doa Agar Diberi Bangunan Indah di Surga",
      "arab": "رَبِّ ٱبْنِ لِى عِندَكَ بَيْتًا فِى ٱلْجَنَّةِ وَنَجِّنِى مِن فِرْعَوْنَ وَعَمَلِهِۦ وَنَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّٰلِمِينَ",
      "indo": "Ya Tuhanku, bangunlah untukku sebuah rumah di sisi-Mu dalam sorga, dan selamatkanlah aku dari Fir'aun dan perbuatannya, serta selamatkanlah aku dari kaum yang zhalim.",
      "source": "quran"
    },
    ...
  ]
}
                `}
        />
        <EndpointCard
          title="Mendapatkan doa berdasarkan kata kunci (Judul Doa)"
          method="GET"
          path="/muslim/v1/doa/find/:keyword"
          params={[
            {
              name: "keyword",
              type: "string",
              required: true,
              description: "Kata kunci pencarian (Judul Doa)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/doa/find/Kebaikan"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "judul": "Doa Kebaikan Dunia Akhirat",
      "arab": "اللَّهُمَّ أصْلِحْ لِي دِيْنِيَ الَّذِي هُوَ عِصْمَةُ أَمْرِي ، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي ، وَأَصْلِحْ لِي آخِرتِي الَّتي فِيهَا مَعَادِي ، وَاجْعَلِ الحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ ، وَاجْعَلِ المَوتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ",
      "indo": "Ya Allah, perbaikilah urusan agamaku yang menjadi pegangan bagi setiap urusanku. Perbaikilah duniaku yang di situlah urusan kehidupanku. Perbaikilah akhiratku yang ke sanalah aku akan kembali. Jadikanlah hidupku ini sebagai tambahan kesempatan untuk memperbanyak amal kebajikan, dan jadikanlah kematianku sebagai tempat peristirahatan dari setiap kejahatan.",
      "source": "hadits"
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
