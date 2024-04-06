// Components
import { Card, Link, Button, Typography } from "@mui/material";

type RepoCardProps = {
  name: string;
  description: string;
  numberOfStars: number;
  language: string;
  url: string;
  buttonText?: React.ReactNode;
  buttonOnClick?: () => void;
};

export const RepoCard: React.FC<RepoCardProps> = ({
  name,
  description,
  numberOfStars,
  language,
  url,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <Card sx={{ paddingY: 4, marginBottom: 4 }}>
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 500 }}>
        {name}
      </Typography>
      <Typography variant="subtitle1">{description}</Typography>
      <Typography variant="button">Languages: {language}</Typography>
      <Typography variant="overline" display={"block"}>
        Stars: {numberOfStars}
      </Typography>
      <Link
        display={"block"}
        href={url}
        underline="hover"
        target="_blank"
        rel="noopener"
        sx={{ marginBottom: 2 }}
      >
        More Details
      </Link>
      <Button onClick={buttonOnClick} variant="contained">
        {buttonText}
      </Button>
    </Card>
  );
};
