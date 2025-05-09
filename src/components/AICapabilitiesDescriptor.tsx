import { Chip, Stack } from "@mui/material"

export const AICapabilitiesDescriptor = (props: {data: string[]}) => {
    const {data} = props
    return <Stack direction="row" spacing={1} flexWrap="wrap">
    {data.map((cap, idx) => (
      <Chip key={idx} label={cap} size="small" />
    ))}
  </Stack>
}