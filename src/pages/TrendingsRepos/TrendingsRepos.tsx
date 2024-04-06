// Modules
import { useState, useEffect } from "react";
// Components
import { Container, Card, Button } from "@mui/material";
// Hooks
import { useFetch } from "../../hooks/useFetch/useFetch";
// Types
import { Repository, Repos } from "../../types/definitions";

export const TrendingRepos: React.FC = () => {
  // States
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const { data } = useFetch<Repos>(
    `https://api.github.com/search/repositories?q=created:2017-01-10&sort=stars&order=desc`
  );

  useEffect(() => {
    if (data) {
      setRepositories(data.items);
    }
  }, [data]);

  return (
    <Container>
      <h1>TrendingRepos</h1>
      {repositories.map((repo) => (
        <Card
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            marginY: 2,
          }}
          key={repo.full_name}
          className="repository"
        >
          <p>{repo.description}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Language: {repo.language}</p>
          <Button color="primary" variant="outlined">
            Star
          </Button>
        </Card>
      ))}
    </Container>
  );
};
