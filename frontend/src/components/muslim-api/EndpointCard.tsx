import { motion } from "framer-motion";
import { Accordion, AccordionSummary, AccordionDetails, Box, Chip, Typography, Paper, Stack } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ChipGroup from "../ChipGroup";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface PathParam {
  name: string;
  type?: string;
  required?: boolean;
  description?: string;
}

interface ApiEndpointCardProps {
  method?: HttpMethod;
  path: string;
  title: string;
  size?: string;
  params?: PathParam[];
  exampleRequest?: string;
  exampleResponse?: string;
}

const METHOD_COLOR: Record<HttpMethod, "success" | "primary" | "warning" | "info" | "error"> = {
  GET: "success",
  POST: "primary",
  PUT: "warning",
  PATCH: "info",
  DELETE: "error",
};

export default function EndpointCard({
  method = "GET",
  path,
  title,
  size,
  params = [],
  exampleRequest,
  exampleResponse,
}: ApiEndpointCardProps) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{ "&:before": { display: "none" }, bgcolor: "background.paper" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{
          "&:hover": { bgcolor: "transparent" },
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1 }}>
          <Chip
            label={method}
            color={METHOD_COLOR[method]}
            size="medium"
            sx={{ fontWeight: "bold", borderRadius: "12px" }}
          />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "text.primary", wordBreak: "break-all" }}
          >
            {path}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 2 }}>
        <ChipGroup
          items={[
            "Host: api.otang.id",
            "Accept: */*",
            "Content-Type: application/json",
            `Size: ${size ?? "Irregular"}`,
          ]}
        />
        <Typography
          variant="body1"
          sx={{ color: "text.primary", textAlign: "left", mt: 2, mb: 1.5 }}
        >
          {title}
        </Typography>
        {params.length > 0 && (
          <>
            <Typography
              variant="caption"
              sx={{ display: "block", textAlign: "left", fontWeight: "bold", mb: 0.5, color: "text.secondary" }}
            >
              Path Parameters
            </Typography>
            {params.map((param, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  px: 2,
                  py: 1.5,
                  bgcolor: "background.default",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "12px",
                  mb: 0.5,
                }}
              >
                <Box
                  key={i}
                  sx={{ width: "100%", textAlign: "left" }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontWeight: "medium" }}
                    >
                      {param.name}
                    </Typography>
                    {param.type && (
                      <Chip
                        variant="outlined"
                        label={param.type}
                        color="warning"
                        size="small"
                        sx={{ borderRadius: "20px" }}
                      />
                    )}
                    {param.required && (
                      <Chip
                        variant="outlined"
                        label="required"
                        color="error"
                        size="small"
                        sx={{ borderRadius: "20px" }}
                      />
                    )}
                  </Stack>
                  <Box sx={{ width: "100%", height: "1px", bgcolor: "divider", my: 1 }} />
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontStyle: "italic", textAlign: "left" }}
                  >
                    {param.description ?? "—"}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </>
        )}
        <Typography
          variant="caption"
          sx={{ display: "block", textAlign: "left", fontWeight: "bold", mt: 2, mb: 0.5 }}
        >
          Contoh Response
        </Typography>
        {exampleRequest && (
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 0.5,
              mb: 1,
              bgcolor: "background.default",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "12px",
            }}
          >
            <Chip
              color="info"
              label="Req"
              size="small"
              sx={{ borderRadius: "8px" }}
            />
            <Typography
              variant="caption"
              sx={{ color: "text.secondary" }}
            >
              {exampleRequest}
            </Typography>
          </Paper>
        )}
        <Box
          sx={{
            px: 2,
            bgcolor: "background.default",
            color: "text.primary",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "12px",
            overflow: "auto",
          }}
        >
          <pre style={{ margin: 0, padding: 0, fontFamily: "monospace", fontSize: "12px", textAlign: "left" }}>
            <code>{exampleResponse ?? ""}</code>
          </pre>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
