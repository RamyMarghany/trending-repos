// Components
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const Loading: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} animation="wave" />
      <Skeleton variant="rectangular" height={60} animation="wave" />
      <Skeleton variant="rounded" height={60} animation="wave" />
    </Stack>
  );
};
