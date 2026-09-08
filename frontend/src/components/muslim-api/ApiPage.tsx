"use client";

import {
  AutoStoriesTwoTone,
  HeadsetMicTwoTone,
  LibraryBooksTwoTone,
  MenuBookTwoTone,
  MosqueTwoTone,
} from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  items,
}: {
  icon: any;
  title: string;
  description: string;
  items?: string[];
}) => (
  <motion.div variants={itemVariants}>
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        borderRadius: "20px",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              p: 1.2,
              borderRadius: "12px",
              bgcolor: "warning.main",
              color: "warning.contrastText",
            }}
          >
            <Icon sx={{ fontSize: 24, color: "warning.contrastText" }} />
          </Box>
          <Typography
            variant="h6"
            color="text.primary"
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, opacity: 0.8, textAlign: "left" }}
        >
          {description}
        </Typography>
        {items && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
            {items.map((item, idx) => (
              <Chip
                key={idx}
                variant="outlined"
                size="small"
                label={item}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

export default function ApiPage() {
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
      <Container sx={{ position: "relative", width: "100%" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                mt={2}
                sx={{
                  letterSpacing: 4,
                  fontWeight: 800,
                  textTransform: "uppercase",
                }}
              >
                Muslim Api Dokumentasi
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  mt: 1,
                  color: "primary.main",
                  letterSpacing: -2,
                  fontSize: { xs: "3.5rem", md: "5.5rem" },
                  fontWeight: 900,
                }}
              >
                Muslim Api
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  mx: "auto",
                  opacity: 0.9,
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                Rest Api ini menyediakan Al-Quran Indonesia, Kumpulan doa, Dzikir harian, dan Hadits arba'in dari
                berbagai sumber terpercaya untuk integrasi aplikasi Anda.
              </Typography>
            </motion.div>
          </Box>
          <Grid
            container
            spacing={4}
          >
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 4,
              }}
            >
              <FeatureCard
                icon={MenuBookTwoTone}
                title="Al-Quran Indonesia"
                description="Akses lengkap Al-Quran Indonesia dengan metadata mendalam dan navigasi fleksibel."
                items={["Al-Quran", "Asbab Nuzul", "Asmaul Husna", "Tafsir", "Per Kata"]}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 4,
              }}
            >
              <FeatureCard
                icon={AutoStoriesTwoTone}
                title="Kumpulan Doa"
                description="Integrasi kumpulan doa-doa pilihan untuk kebutuhan spiritual harian."
                items={["Doa Pilihan", "Kumpulan Sehari-hari", "Sumber Buku Terpercaya"]}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 4,
              }}
            >
              <FeatureCard
                icon={MosqueTwoTone}
                title="Dzikir Harian"
                description="Panduan bacaan dzikir pagi, petang, dan sesudah sholat fardhu."
                items={["Dzikir Pagi", "Dzikir Petang", "Setelah Sholat", "Riwayat Shahih"]}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 4,
              }}
            >
              <FeatureCard
                icon={LibraryBooksTwoTone}
                title="Hadits Arba'in"
                description="Koleksi hadits-hadits pokok dalam agama Islam dari kitab Hadits Arba'in Nawawi."
                items={["42 Hadits Utama", "Matan Arab", "Terjemah", "Penjelasan"]}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 4,
              }}
            >
              <FeatureCard
                icon={HeadsetMicTwoTone}
                title="Audio Murottal"
                description="Streaming audio Al-Quran berkualitas tinggi dari Syeikh Mishary Rasyid Alafasy."
                items={["Syeikh Mishary Rasyid Alafasy", "128kbps Audio", "Per Ayat/Surah"]}
              />
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 6,
                lg: 4,
              }}
            >
              <motion.div
                variants={itemVariants}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 4,
                    border: "2px dashed",
                    borderColor: "divider",
                    borderRadius: "20px",
                    textAlign: "center",
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography
                    variant="h6"
                    color="success"
                    sx={{ mb: 1 }}
                  >
                    Segera Hadir
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ opacity: 0.6 }}
                  >
                    Lebih banyak sumber dan fitur API sedang dikembangkan.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          <motion.div variants={itemVariants}>
            <Divider sx={{ my: 8, opacity: 0.25, bgcolor: "text.primary" }} />
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body2"
                color="text.disabled"
                sx={{ fontStyle: "italic" }}
              >
                Sumber Data: Kemenag RI, Hadits Arba'in, & Berbagai Sumber Shahih.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Stack>
  );
}
