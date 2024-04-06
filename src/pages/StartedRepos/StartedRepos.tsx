// Modules
import { useState, useEffect } from "react";

// Components
import { Container, Card, Button, Link, Typography } from "@mui/material";
export const StartedRepos = () => {
  // States
  const [starredRepositories, setStarredRepositories] = useState<string[]>([]);

  useEffect(() => {
    const starred = localStorage.getItem("starredRepositories");
    if (starred) {
      setStarredRepositories(JSON.parse(starred));
    }
  }, []);

  const saveStarredRepositories = (repos: string[]) => {
    localStorage.setItem("starredRepositories", JSON.stringify(repos));
  };

  const removeRepository = (repoName: string) => {
    const updatedStarredRepositories = starredRepositories.filter(
      (repo) => repo !== repoName
    );
    setStarredRepositories(updatedStarredRepositories);
    saveStarredRepositories(updatedStarredRepositories);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ margin: 2 }}>
        Starred Repositories
      </Typography>
      {starredRepositories.length > 0 ? (
        starredRepositories.map((repoName) => (
          <Card key={repoName} sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h6">{repoName}</Typography>
            <Link
              display={"block"}
              href={`https://github.com/${repoName}`}
              underline="hover"
              target="_blank"
              rel="noopener"
              sx={{ marginBottom: 2 }}
            >
              More Details
            </Link>
            <Button
              variant="contained"
              onClick={() => removeRepository(repoName)}
            >
              Remove from the list
            </Button>
          </Card>
        ))
      ) : (
        <Typography variant="overline">
          No repositories in the star list
        </Typography>
      )}
    </Container>
  );
};
