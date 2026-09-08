"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import EndpointCard from "./EndpointCard";

export default function QuranPage() {
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
          method="GET"
          path="/muslim/v1/quran/asbab"
          title="Mendapatkan daftar Asbabun Nuzul"
          size="-+ 460 KB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/asbab"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "ayah": "69",
      "text": "Ayat ini turun untuk menjawab pertanyaan Salmān al-Fārisiy tentang nasib kaum Nasrani yang tulus beriman kepada Allah dan meninggal sebelum diutusnya Nabi Muhammad ṣallallāhu ‘alaihi wasallam.Menjelaskan sebab nuzul firman Allah, innallażīna āmanū wallażīna hādū ... hingga akhir ayat, Mujāhid berkata, “Salmān al-Fārisiy bertanya kepada Nabi ṣallallāhu ‘alaihi wasallam perihal kaum Nasrani dan bagaimana pendapat beliau tentang amal mereka. Nabi bersabda, ‘Mereka meninggal dalam keadaan tidak beragama Islam (yakni: patuh dan tunduk kepada Allah dengan cara menauhidkan, menaati, dan membebaskan diri dari kemusyrikan).’ Dengan sedih Salmān berkata, ‘Jika demikian, sungguh bumi terasa gelap bagiku; aku ingat betul bagaimana kesungguhan mere-ka (dalam beribadah).’ Berkaitan dengan hal ini turunlah ayat, innallażīna āmanū wallażīna hādū. Rasulullah lalu memanggil Salmān dan bersabda, ‘Ayat ini turun terkait teman-temanmu.’ Beliau juga bersabda, ‘Siapa saja yang wafat dalam keadaan memegang teguh agama Nabi Isa dan agama Islam sebelum ia mendengar dakwahku, ia berada di atas kebaikan. Sebaliknya, siapa saja yang hari ini mendengar (dakwahku) tetapi enggan beriman kepadaku, sungguh ia telah celaka.’” (Hasan; riwayat Ibnu Jarīr aṭ-Ṭabariy)."
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/asbab/:id"
          title="Mendapatkan spesifik Asbabun Nuzul berdasarkan ID"
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: "ID dari Asbabun Nuzul (1-286)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/asbab/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": {
    "id": "1",
    "ayah": "69",
    "text": "Ayat ini turun untuk menjawab pertanyaan Salmān al-Fārisiy tentang nasib kaum Nasrani yang tulus beriman kepada Allah dan meninggal sebelum diutusnya Nabi Muhammad ṣallallāhu ‘alaihi wasallam.Menjelaskan sebab nuzul firman Allah, innallażīna āmanū wallażīna hādū ... hingga akhir ayat, Mujāhid berkata, “Salmān al-Fārisiy bertanya kepada Nabi ṣallallāhu ‘alaihi wasallam perihal kaum Nasrani dan bagaimana pendapat beliau tentang amal mereka. Nabi bersabda, ‘Mereka meninggal dalam keadaan tidak beragama Islam (yakni: patuh dan tunduk kepada Allah dengan cara menauhidkan, menaati, dan membebaskan diri dari kemusyrikan).’ Dengan sedih Salmān berkata, ‘Jika demikian, sungguh bumi terasa gelap bagiku; aku ingat betul bagaimana kesungguhan mere-ka (dalam beribadah).’ Berkaitan dengan hal ini turunlah ayat, innallażīna āmanū wallażīna hādū. Rasulullah lalu memanggil Salmān dan bersabda, ‘Ayat ini turun terkait teman-temanmu.’ Beliau juga bersabda, ‘Siapa saja yang wafat dalam keadaan memegang teguh agama Nabi Isa dan agama Islam sebelum ia mendengar dakwahku, ia berada di atas kebaikan. Sebaliknya, siapa saja yang hari ini mendengar (dakwahku) tetapi enggan beriman kepadaku, sungguh ia telah celaka.’” (Hasan; riwayat Ibnu Jarīr aṭ-Ṭabariy)."
  }
}
          `}
        />
      </Paper>
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
          method="GET"
          path="/muslim/v1/quran/asma"
          title="Mendapatkan daftar Asmaul Husna"
          size="-+ 11 KB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/asma"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": 1,
      "arab": "الرَّحْمـٰنُ",
      "latin": "Ar-Rahmânu",
      "indo": "Yang Maha Pengasih"
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/asma/:number"
          title="Mendapatkan spesifik Asmaul Husna berdasarkan nomor"
          params={[
            {
              name: "number",
              type: "string",
              required: true,
              description: "Nomor dari Asmaul Husna (1-99)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/asma/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": {
    "id": 1,
    "arab": "الرَّحْمـٰنُ",
    "latin": "Ar-Rahmânu",
    "indo": "Yang Maha Pengasih"
  }
}
          `}
        />
      </Paper>
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
          method="GET"
          path="/muslim/v1/quran/ayah"
          title="Mendapatkan daftar Ayah-ayah Al-Qur'an"
          size="-+ 4 MB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/ayah"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "surah": "1",
      "ayah": "1",
      "arab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "latin": "Bismillāhir-raḥmānir-raḥīm(i). ",
      "page": "1",
      "juz": "1",
      "hizb": null,
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1",
      "theme": null,
      "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      "notes": null
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/ayah/range/:surah/:start/:end"
          title="Mendapatkan range ayah berdasarkan nomor surah"
          params={[
            {
              name: "surah",
              type: "string",
              required: true,
              description: "Nomor dari Surah (1-114)",
            },
            {
              name: "start",
              type: "string",
              required: true,
              description: "Nomor awal ayah dalam surah",
            },
            {
              name: "end",
              type: "string",
              required: true,
              description: "Nomor akhir ayah dalam surah",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/ayah/range/1/1/3"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "surah": "1",
      "ayah": "1",
      "arab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "latin": "Bismillāhir-raḥmānir-raḥīm(i). ",
      "page": "1",
      "juz": "1",
      "hizb": null,
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1",
      "theme": null,
      "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      "notes": null
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/ayah/surah/:surah"
          title="Mendapatkan ayah berdasarkan nomor surah"
          params={[
            {
              name: "surah",
              type: "string",
              required: true,
              description: "Nomor Surah (1-114)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/ayah/surah/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "surah": "1",
      "ayah": "1",
      "arab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "latin": "Bismillāhir-raḥmānir-raḥīm(i). ",
      "page": "1",
      "juz": "1",
      "hizb": null,
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1",
      "theme": null,
      "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      "notes": null
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/ayah/juz/:juz"
          title="Mendapatkan ayah berdasarkan nomor juz"
          params={[
            {
              name: "juz",
              type: "string",
              required: true,
              description: "Nomor Juz (1-30)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/ayah/juz/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "surah": "1",
      "ayah": "1",
      "arab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "latin": "Bismillāhir-raḥmānir-raḥīm(i). ",
      "page": "1",
      "juz": "1",
      "hizb": null,
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1",
      "theme": null,
      "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      "notes": null
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/ayah/page/:page"
          title="Mendapatkan ayah berdasarkan nomor halaman"
          params={[
            {
              name: "page",
              type: "string",
              required: true,
              description: "Nomor Halaman (1-604)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/ayah/page/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "surah": "1",
      "ayah": "1",
      "arab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "latin": "Bismillāhir-raḥmānir-raḥīm(i). ",
      "page": "1",
      "juz": "1",
      "hizb": null,
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1",
      "theme": null,
      "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      "notes": null
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/ayah/specific/:surah/:ayah"
          title="Mendapatkan ayah berdasarkan nomor surah dan nomor ayah"
          params={[
            {
              name: "surah",
              type: "string",
              required: true,
              description: "Nomor Surah (1-114)",
            },
            {
              name: "ayah",
              type: "string",
              required: true,
              description: "Nomor Ayah dalam Surah",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/ayah/specific/1/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "surah": "1",
      "ayah": "1",
      "arab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "latin": "Bismillāhir-raḥmānir-raḥīm(i). ",
      "page": "1",
      "juz": "1",
      "hizb": null,
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1",
      "theme": null,
      "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      "notes": null
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/ayah/find/:keyword"
          title="Mendapatkan ayah berdasarkan kata kunci (Terjemahan Indonesia)"
          params={[
            {
              name: "keyword",
              type: "string",
              required: true,
              description: "Kata kunci pencarian (Terjemahan Indonesia)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/ayah/find/Maha%20Pengasih"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "surah": "1",
      "ayah": "1",
      "arab": "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      "latin": "Bismillāhir-raḥmānir-raḥīm(i). ",
      "page": "1",
      "juz": "1",
      "hizb": null,
      "asbab": "0",
      "audio": "https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1",
      "theme": null,
      "text": "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
      "notes": null
    },
    ...
  ]
}
          `}
        />
      </Paper>
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
          method="GET"
          path="/muslim/v1/quran/juz"
          title="Mendapatkan daftar Juz Al-Qur'an"
          size="-+ 100 KB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/juz"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "number": "1",
      "name": "Juz 1",
      "name_start_arab": "الفاتحة",
      "name_end_arab": "البقرة",
      "name_start_id": "Al-Fatihah",
      "name_end_id": "Al-Baqarah",
      "verse_start": "1",
      "verse_end": "141",
      "surah_id_start": "1",
      "surah_id_end": "2",
      "ayat_arab": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "ayat_latin": "Bismillaahir Rahmaanir Raheem",
      "ayat_indo": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/juz/:number"
          title="Mendapatkan informasi juz berdasarkan nomor juz"
          params={[
            {
              name: "number",
              type: "string",
              required: true,
              description: "Nomor Juz (1-30)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/juz/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": {
    "number": "1",
    "name": "Juz 1",
    "name_start_arab": "الفاتحة",
    "name_end_arab": "البقرة",
    "name_start_id": "Al-Fatihah",
    "name_end_id": "Al-Baqarah",
    "verse_start": "1",
    "verse_end": "141",
    "surah_id_start": "1",
    "surah_id_end": "2",
    "ayat_arab": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "ayat_latin": "Bismillaahir Rahmaanir Raheem",
    "ayat_indo": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
  }
}
          `}
        />
      </Paper>
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
          method="GET"
          path="/muslim/v1/quran/surah"
          title="Mendapatkan daftar Surah Al-Qur'an"
          size="-+ 100 KB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/surah"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "number": "1",
      "sequence": "5",
      "number_of_verses": "7",
      "name_short": "الفاتحة",
      "name_long": "سُورَةُ ٱلْفَاتِحَةِ",
      "name_en": "Al-Faatiha",
      "name_id": "Al-Fatihah",
      "translation_en": "The Opening",
      "translation_id": "Pembukaan",
      "revelation": "مكة",
      "revelation_en": "Meccan",
      "revelation_id": "Makkiyyah",
      "tafsir": "Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut Al Faatihah (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan Ummul Quran (induk Al Quran) atau Ummul Kitaab (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang. Dinamakan pula As Sab'ul matsaany (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
      "audio_url": "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3"
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/surah/:number"
          title="Mendapatkan informasi surah berdasarkan nomor surah"
          params={[
            {
              name: "number",
              type: "string",
              required: true,
              description: "Nomor Surah (1-114)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/surah/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "number": "1",
      "sequence": "5",
      "number_of_verses": "7",
      "name_short": "الفاتحة",
      "name_long": "سُورَةُ ٱلْفَاتِحَةِ",
      "name_en": "Al-Faatiha",
      "name_id": "Al-Fatihah",
      "translation_en": "The Opening",
      "translation_id": "Pembukaan",
      "revelation": "مكة",
      "revelation_en": "Meccan",
      "revelation_id": "Makkiyyah",
      "tafsir": "Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut Al Faatihah (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan Ummul Quran (induk Al Quran) atau Ummul Kitaab (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang. Dinamakan pula As Sab'ul matsaany (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
      "audio_url": "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3"
    },
    ...
  ]
}
          `}
        />
      </Paper>
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
          method="GET"
          path="/muslim/v1/quran/tafsir"
          title="Mendapatkan daftar Tafsir Al-Qur'an"
          size="-+ 13 MB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/tafsir"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "ayah": "1",
      "wajiz": "Aku memulai bacaan Al-Qur'an dengan menyebut nama Allah, nama teragung bagi satu-satunya Tuhan yang patut disembah, yang memiliki seluruh sifat kesempurnaan dan tersucikan dari segala bentuk kekurangan, Yang Maha Pengasih, Pemilik dan sumber sifat kasih Yang menganugerahkan segala macam karunia, baik besar maupun kecil, kepada seluruh makhluk, Maha Penyayang Yang tiada henti memberi kasih dan kebaikan kepada orang-orang yang beriman. Memulai setiap pekerjaan dengan menyebut nama Allah (basmalah) akan mendatangkan keberkahan, dan dengan mengingat Allah dalam setiap pekerjaan, seseorang akan memiliki kekuatan spiritual untuk melakukan yang terbaik dan menghindar dari keburukan.",
      "tahlili": "(1) Surah al-Fātiḥah dimulai dengan Basmalah (بسم الله الرحمن الرحيم).\nAda beberapa pendapat ulama berkenaan dengan Basmalah yang terdapat pada permulaan surah Al-Fātiḥah. Di antara pendapat-pendapat itu, yang termasyhur ialah:\n1. Basmalah adalah ayat tersendiri, diturunkan Allah untuk jadi kepala masing-masing surah, dan pembatas antara satu surah dengan surah yang lain. Jadi dia bukanlah satu ayat dari al-Fātiḥah atau dari surah yang lain, yang dimulai dengan Basmalah itu. Ini pendapat Imam Malik beserta ahli qiraah dan fuqaha (ahli fikih) Medinah, Basrah dan Syam, dan juga pendapat Imam Abu Hanifah dan pengikut-pengikutnya. Sebab itu menurut Imam Abu Hanifah, Basmalah itu tidak dikeraskan membacanya dalam salat, bahkan Imam Malik tidak membaca Basmalah sama sekali.\nHadis Nabi saw:\nعَنْ أَنَسِ بْنِ مَالِكٍ قَالَ: صَلَّيْتُ خَلْفَ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَأَبِي بَكْرٍوَعُمَرَوَعُثْمَانَ فَكَانُوْا يَسْتَفْتِحُوْنَ بِالْحَمْدِ ِللهِ رَبِّ الْعَالَمِيْنَ لاَ يَذْكُرُوْنَ بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِِ فِي أَوَّلِ قِرَاءَةٍ وَلاَ فِي آخِرِهَا (رواه الشيخان واللفظ لمسلم);Dari Anas bin Malik, dia berkata, “Saya salat di belakang Nabi saw, Abu Bakar, Umar dan Usman. Mereka memulai dengan al-ḥamdulillāhi rabbil ‘ālamīn, tidak menyebut Bismillāhirraḥmānirrahīm di awal bacaan, dan tidak pula di akhirnya.”(Riwayat al-Bukhārī dan Muslim).;2. Basmalah adalah salah satu ayat dari al-Fātiḥah, dan pada surah an-Naml/27:30, انه من سليمن وانه بسم الله الرحمن الرحيم (النمل/27:30) yang dimulai dengan Basmalah. Ini adalah pendapat Imam Syafi'i beserta ahli qiraah Mekah dan Kufah. Sebab itu menurut mereka Basmalah itu dibaca dengan suara keras dalam salat (jahar). Dalil-dalil yang menunjukkan hal itu antara lain Hadis Nabi saw:\nعَنْ ابن عباس قال: كانَ رَسُوْلُ اللهِ صَلَّى الله ُعَلَيْهِ وَسَلَّمَ يَجْهَرُ ِببِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِِ (رواه الحاكم فى المستدرك وقال صحيح) \nDari Ibnu ‘Abbās, ia berkata, Rasulullah saw mengeraskan bacaan Bismillāhirrahmānirrahīm. (Riwayat al-Ḥākim dalam al-Mustadrak dan menurutnya, hadis ini sahih);عَنْ اُمِّ سَلَمَةَ قَالَتْ كَانَ رَسُوْلُ اللهِ صَلَّى الله ُعَلَيْهِ وَسَلَّمَ يُقَطِّعُ قِرَأَتَهُ بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِِ، اَلْحَمْدُ ِللهِ رَبِّ اْلعَالَمِيْنَ، الرَّحْمٰنِ الرَّحِيْمِِ، مَالِكِ يَوْمِ الدِّيْنِ (رواه أحمد وابوداود وابن خزيمة والحاكم وقال الدار قطنى سنده صحيح)\nDari Ummu Salamah, katanya, Rasulullah saw berhenti berkali-kali dalam bacaanya Bismillāhirrahmānirrahīm, al-Ḥamdulillāhi Rabbil- ‘Ālamīn, ar-Raḥmānir-raḥīm, Māliki Yaumid-dīn. (Riwayat Aḥmad, Abu Dāud, Ibnu Khuzaimah dan al-Ḥākim. Menurut ad-Dāruquṭnī, sanad hadis ini sahih).;  Abu Hurairah juga salat dan mengeraskan bacaan basmalah. Setelah selesai salat, dia berkata, “Saya ini adalah orang yang salatnya paling mirip dengan Rasulullah.” Muawiyah juga pernah salat di Medinah tanpa mengeraskan suara basmalah. Ia diprotes oleh para sahabat lain yang hadir disitu. Akhirnya pada salat berikutnya Muawiyah mengeraskan bacaan basmalah. \nKalau kita perhatikan bahwa sahabat-sahabat Rasulullah saw telah sependapat menuliskan Basmalah pada permulaan surah dari surah Al-Qur′an, kecuali surah at-Taubah (karena memang dari semula turunnya tidak dimulai dengan Basmalah) dan bahwa Rasulullah saw melarang menuliskan sesuatu yang bukan Al-Qur′an agar tidak bercampur aduk dengan Al-Qur′an, sehingga mereka tidak menuliskan ‘āmīn’ pada akhir surah al-Fātiḥah, maka Basmalah itu adalah salah satu ayat dari Al-Qur′an. Dengan kata lain, bahwa “basmalah-basmalah” yang terdapat di dalam Al-Qur′an adalah ayat-ayat Al-Qur′an, lepas dari pendapat apakah satu ayat dari al-Fātiḥah atau dari surah lain, yang dimulai dengan Basmalah atau tidak.\nSebagaimana disebutkan di atas bahwa surah al-Fātiḥah itu terdiri dari tujuh ayat. Mereka yang berpendapat bahwa Basmalah itu tidak termasuk satu ayat dari al-Fātiḥah, memandang:\nغَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ  \nadalah salah satu ayat, dengan demikian ayat-ayat al-Fātiḥah itu tetap tujuh.\nبِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ \n“Dengan nama Allah” maksudnya “Dengan nama Allah saya baca atau saya mulai”. Seakan-akan Nabi berkata, “Saya baca surah ini dengan menyebut nama Allah, bukan dengan menyebut nama saya sendiri, sebab ia wahyu dari Tuhan, bukan dari saya sendiri.” Maka Basmalah di sini mengandung arti bahwa Al-Qur′an itu wahyu dari Allah, bukan karangan Muhammad saw dan Muhammad itu hanyalah seorang Pesuruh Allah yang dapat perintah menyampaikan Al-Qur′an kepada manusia.;Makna kata Allāh \nAllah adalah nama bagi Zat yang ada dengan sendirinya (wājibul-wujūd). Kata “Allah” hanya dipakai oleh bangsa Arab kepada Tuhan yang sebenarnya, yang berhak disembah, yang mempunyai sifat-sifat kesempurnaan. Mereka tidak memakai kata itu untuk tuhan-tuhan atau dewa-dewa mereka yang lain. \n \nHikmah Membaca Basmalah\nSeorang yang selalu membaca Basmalah sebelum melakukan pekerjaan yang penting, berarti ia selalu mengingat Allah pada setiap pekerjaannya. Dengan demikian ia akan melakukan pekerjaan tersebut dengan selalu memperhatikan norma-norma Allah dan tidak merugikan orang lain. Dampaknya, pekerjaan yang dilakukannya akan berbuah sebagai amalan ukhrawi. \nSeorang Muslim diperintahkan membaca Basmalah pada waktu mengerjakan sesuatu yang baik. Yang demikian itu untuk mengingatkan bahwa sesuatu yang dikerjakan adalah karena perintah Allah, atau karena telah diizinkan-Nya. Maka karena Allah dia mengerjakan pekerjaan itu dan kepada-Nya dia meminta pertolongan agar pekerjaan terlaksana dengan baik dan berhasil.\nNabi saw bersabda:\nكُلُّ أَمْرٍ ذِيْ بَالٍ لَمْ يُبْدَأْ فِيْهِ بِبِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ أَقْطَعُ (رواه عبد القادر الرهاوي)\n“Setiap pekerjaan penting yang tidak dimulai dengan menyebut Basmalah adalah buntung (kurang berkahnya).” (Riwayat Abdul-Qādir ar-Rahāwī).;Orang Arab sebelum datang Islam mengerjakan sesuatu dengan menyebut al-Lāta dan al-‘Uzzā, nama-nama berhala mereka. Sebab itu, Allah mengajarkan kepada penganut-penganut agama Islam yang telah mengesakan-Nya, agar mereka mengerjakan sesuatu dengan menyebut nama Allah."
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/tafsir/:id"
          title="Mendapatkan tafsir berdasarkan ID"
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: "ID dari Tafsir Al-Qur'an (1-6236)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/tafsir/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": {
    "id": "1",
    "ayah": "1",
    "wajiz": "Aku memulai bacaan Al-Qur'an dengan menyebut nama Allah, nama teragung bagi satu-satunya Tuhan yang patut disembah, yang memiliki seluruh sifat kesempurnaan dan tersucikan dari segala bentuk kekurangan, Yang Maha Pengasih, Pemilik dan sumber sifat kasih Yang menganugerahkan segala macam karunia, baik besar maupun kecil, kepada seluruh makhluk, Maha Penyayang Yang tiada henti memberi kasih dan kebaikan kepada orang-orang yang beriman. Memulai setiap pekerjaan dengan menyebut nama Allah (basmalah) akan mendatangkan keberkahan, dan dengan mengingat Allah dalam setiap pekerjaan, seseorang akan memiliki kekuatan spiritual untuk melakukan yang terbaik dan menghindar dari keburukan.",
    "tahlili": "(1) Surah al-Fātiḥah dimulai dengan Basmalah (بسم الله الرحمن الرحيم).\nAda beberapa pendapat ulama berkenaan dengan Basmalah yang terdapat pada permulaan surah Al-Fātiḥah. Di antara pendapat-pendapat itu, yang termasyhur ialah:\n1. Basmalah adalah ayat tersendiri, diturunkan Allah untuk jadi kepala masing-masing surah, dan pembatas antara satu surah dengan surah yang lain. Jadi dia bukanlah satu ayat dari al-Fātiḥah atau dari surah yang lain, yang dimulai dengan Basmalah itu. Ini pendapat Imam Malik beserta ahli qiraah dan fuqaha (ahli fikih) Medinah, Basrah dan Syam, dan juga pendapat Imam Abu Hanifah dan pengikut-pengikutnya. Sebab itu menurut Imam Abu Hanifah, Basmalah itu tidak dikeraskan membacanya dalam salat, bahkan Imam Malik tidak membaca Basmalah sama sekali.\nHadis Nabi saw:\nعَنْ أَنَسِ بْنِ مَالِكٍ قَالَ: صَلَّيْتُ خَلْفَ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَأَبِي بَكْرٍوَعُمَرَوَعُثْمَانَ فَكَانُوْا يَسْتَفْتِحُوْنَ بِالْحَمْدِ ِللهِ رَبِّ الْعَالَمِيْنَ لاَ يَذْكُرُوْنَ بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِِ فِي أَوَّلِ قِرَاءَةٍ وَلاَ فِي آخِرِهَا (رواه الشيخان واللفظ لمسلم);Dari Anas bin Malik, dia berkata, “Saya salat di belakang Nabi saw, Abu Bakar, Umar dan Usman. Mereka memulai dengan al-ḥamdulillāhi rabbil ‘ālamīn, tidak menyebut Bismillāhirraḥmānirrahīm di awal bacaan, dan tidak pula di akhirnya.”(Riwayat al-Bukhārī dan Muslim).;2. Basmalah adalah salah satu ayat dari al-Fātiḥah, dan pada surah an-Naml/27:30, انه من سليمن وانه بسم الله الرحمن الرحيم (النمل/27:30) yang dimulai dengan Basmalah. Ini adalah pendapat Imam Syafi'i beserta ahli qiraah Mekah dan Kufah. Sebab itu menurut mereka Basmalah itu dibaca dengan suara keras dalam salat (jahar). Dalil-dalil yang menunjukkan hal itu antara lain Hadis Nabi saw:\nعَنْ ابن عباس قال: كانَ رَسُوْلُ اللهِ صَلَّى الله ُعَلَيْهِ وَسَلَّمَ يَجْهَرُ ِببِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِِ (رواه الحاكم فى المستدرك وقال صحيح) \nDari Ibnu ‘Abbās, ia berkata, Rasulullah saw mengeraskan bacaan Bismillāhirrahmānirrahīm. (Riwayat al-Ḥākim dalam al-Mustadrak dan menurutnya, hadis ini sahih);عَنْ اُمِّ سَلَمَةَ قَالَتْ كَانَ رَسُوْلُ اللهِ صَلَّى الله ُعَلَيْهِ وَسَلَّمَ يُقَطِّعُ قِرَأَتَهُ بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِِ، اَلْحَمْدُ ِللهِ رَبِّ اْلعَالَمِيْنَ، الرَّحْمٰنِ الرَّحِيْمِِ، مَالِكِ يَوْمِ الدِّيْنِ (رواه أحمد وابوداود وابن خزيمة والحاكم وقال الدار قطنى سنده صحيح)\nDari Ummu Salamah, katanya, Rasulullah saw berhenti berkali-kali dalam bacaanya Bismillāhirrahmānirrahīm, al-Ḥamdulillāhi Rabbil- ‘Ālamīn, ar-Raḥmānir-raḥīm, Māliki Yaumid-dīn. (Riwayat Aḥmad, Abu Dāud, Ibnu Khuzaimah dan al-Ḥākim. Menurut ad-Dāruquṭnī, sanad hadis ini sahih).;  Abu Hurairah juga salat dan mengeraskan bacaan basmalah. Setelah selesai salat, dia berkata, “Saya ini adalah orang yang salatnya paling mirip dengan Rasulullah.” Muawiyah juga pernah salat di Medinah tanpa mengeraskan suara basmalah. Ia diprotes oleh para sahabat lain yang hadir disitu. Akhirnya pada salat berikutnya Muawiyah mengeraskan bacaan basmalah. \nKalau kita perhatikan bahwa sahabat-sahabat Rasulullah saw telah sependapat menuliskan Basmalah pada permulaan surah dari surah Al-Qur′an, kecuali surah at-Taubah (karena memang dari semula turunnya tidak dimulai dengan Basmalah) dan bahwa Rasulullah saw melarang menuliskan sesuatu yang bukan Al-Qur′an agar tidak bercampur aduk dengan Al-Qur′an, sehingga mereka tidak menuliskan ‘āmīn’ pada akhir surah al-Fātiḥah, maka Basmalah itu adalah salah satu ayat dari Al-Qur′an. Dengan kata lain, bahwa “basmalah-basmalah” yang terdapat di dalam Al-Qur′an adalah ayat-ayat Al-Qur′an, lepas dari pendapat apakah satu ayat dari al-Fātiḥah atau dari surah lain, yang dimulai dengan Basmalah atau tidak.\nSebagaimana disebutkan di atas bahwa surah al-Fātiḥah itu terdiri dari tujuh ayat. Mereka yang berpendapat bahwa Basmalah itu tidak termasuk satu ayat dari al-Fātiḥah, memandang:\nغَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ  \nadalah salah satu ayat, dengan demikian ayat-ayat al-Fātiḥah itu tetap tujuh.\nبِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ \n“Dengan nama Allah” maksudnya “Dengan nama Allah saya baca atau saya mulai”. Seakan-akan Nabi berkata, “Saya baca surah ini dengan menyebut nama Allah, bukan dengan menyebut nama saya sendiri, sebab ia wahyu dari Tuhan, bukan dari saya sendiri.” Maka Basmalah di sini mengandung arti bahwa Al-Qur′an itu wahyu dari Allah, bukan karangan Muhammad saw dan Muhammad itu hanyalah seorang Pesuruh Allah yang dapat perintah menyampaikan Al-Qur′an kepada manusia.;Makna kata Allāh \nAllah adalah nama bagi Zat yang ada dengan sendirinya (wājibul-wujūd). Kata “Allah” hanya dipakai oleh bangsa Arab kepada Tuhan yang sebenarnya, yang berhak disembah, yang mempunyai sifat-sifat kesempurnaan. Mereka tidak memakai kata itu untuk tuhan-tuhan atau dewa-dewa mereka yang lain. \n \nHikmah Membaca Basmalah\nSeorang yang selalu membaca Basmalah sebelum melakukan pekerjaan yang penting, berarti ia selalu mengingat Allah pada setiap pekerjaannya. Dengan demikian ia akan melakukan pekerjaan tersebut dengan selalu memperhatikan norma-norma Allah dan tidak merugikan orang lain. Dampaknya, pekerjaan yang dilakukannya akan berbuah sebagai amalan ukhrawi. \nSeorang Muslim diperintahkan membaca Basmalah pada waktu mengerjakan sesuatu yang baik. Yang demikian itu untuk mengingatkan bahwa sesuatu yang dikerjakan adalah karena perintah Allah, atau karena telah diizinkan-Nya. Maka karena Allah dia mengerjakan pekerjaan itu dan kepada-Nya dia meminta pertolongan agar pekerjaan terlaksana dengan baik dan berhasil.\nNabi saw bersabda:\nكُلُّ أَمْرٍ ذِيْ بَالٍ لَمْ يُبْدَأْ فِيْهِ بِبِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ أَقْطَعُ (رواه عبد القادر الرهاوي)\n“Setiap pekerjaan penting yang tidak dimulai dengan menyebut Basmalah adalah buntung (kurang berkahnya).” (Riwayat Abdul-Qādir ar-Rahāwī).;Orang Arab sebelum datang Islam mengerjakan sesuatu dengan menyebut al-Lāta dan al-‘Uzzā, nama-nama berhala mereka. Sebab itu, Allah mengajarkan kepada penganut-penganut agama Islam yang telah mengesakan-Nya, agar mereka mengerjakan sesuatu dengan menyebut nama Allah."
  }
}
          `}
        />
      </Paper>
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
          method="GET"
          path="/muslim/v1/quran/themes"
          title="Mendapatkan daftar Tema Al-Qur'an"
          size="-+ 95 KB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/themes"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "1",
      "name": "Tiga Golongan Manusia dalam Menyikapi Kebenaran Al-Qur’an"
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/theme/:id"
          title="Mendapatkan Tema berdasarkan ID"
          params={[
            {
              name: "id",
              type: "string",
              required: true,
              description: "ID dari Tema Al-Qur'an (1-1121)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/theme/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": {
    "id": "1",
    "name": "Tiga Golongan Manusia dalam Menyikapi Kebenaran Al-Qur’an"
  }
}
          `}
        />
      </Paper>
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
          method="GET"
          path="/muslim/v1/quran/word"
          title="Mendapatkan daftar Kata Al-Qur'an"
          size="-+ 9 MB"
          params={[]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/word"
          exampleResponse={`
{
  "status":200,
  "message":"Sukses",
  "data":[
    {
      "id":"id",
      "surah":"1",
      "ayah":"1",
      "word":"1",
      "arab":"بِسْمِ",
      "indo":"dengan nama"
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/word/surah/:number"
          title="Mendapatkan kata berdasarkan nomor surah"
          params={[
            {
              name: "number",
              type: "string",
              required: true,
              description: "Nomor Surah (1-114)",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/word/surah/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "id",
      "surah": "1",
      "ayah": "1",
      "word": "1",
      "arab": "بِسْمِ",
      "indo": "dengan nama"
    },
    ...
  ]
}
          `}
        />
        <EndpointCard
          method="GET"
          path="/muslim/v1/quran/word/ayah/:surah/:ayah"
          title="Mendapatkan kata spesifik ayah dalam surah"
          params={[
            {
              name: "surah",
              type: "string",
              required: true,
              description: "Nomor Surah (1-114)",
            },
            {
              name: "ayah",
              type: "string",
              required: true,
              description: "Nomor Ayat dalam surah",
            },
          ]}
          exampleRequest="https://api.otang.id/muslim/v1/quran/word/ayah/1/1"
          exampleResponse={`
{
  "status": 200,
  "message": "Sukses",
  "data": [
    {
      "id": "id",
      "surah": "1",
      "ayah": "1",
      "word": "1",
      "arab": "بِسْمِ",
      "indo": "dengan nama"
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
