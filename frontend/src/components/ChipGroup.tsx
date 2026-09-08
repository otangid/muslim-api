import { Box, Chip } from "@mui/material";

export default function ChipGroup({ items = [] }: { items: string[] }) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
      {items.map((text, index) => (
        <Chip
          key={index}
          variant="outlined"
          size="small"
          label={text}
        />
      ))}
    </Box>
  );
}
