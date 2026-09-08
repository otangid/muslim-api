import NavBar from "@/components/muslim-api/NavBar";
import NavBarMobile from "@/components/muslim-api/NavBarMobile";
import TopBar from "@/components/muslim-api/TopBar";
import { ColorModeProvider } from "@/context/ColorModeContext";
import { Box, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muslim API | Otang.id",
  description: "Rest API Muslim.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ColorModeProvider>
            <CssBaseline />
            <Box sx={{ display: "flex", height: "100vh", backgroundColor: "background.paper" }}>
              <TopBar />
              <NavBar />
              <NavBarMobile />
              <Box
                component="main"
                id="main-content"
                sx={{
                  position: "fixed",
                  top: 76,
                  left: { xs: 0, md: 240 },
                  bottom: 0,
                  right: 0,
                  flex: 1,
                  overflowY: "auto",
                  outline: "1px solid",
                  outlineColor: "divider",
                  borderRadius: "36px",
                  bgcolor: "background.default",
                  backgroundColor: "background.default",
                  p: 2,
                  ml: { xs: 1.5, md: 0 },
                  mt: 0,
                  mr: 1.5,
                  mb: 1.5,
                  scrollSnapType: "none",
                  scrollBehavior: "smooth",
                  WebkitOverflowScrolling: "touch",
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                }}
              >
                {children}
              </Box>
            </Box>
            {/* <Mobile /> */}
          </ColorModeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
