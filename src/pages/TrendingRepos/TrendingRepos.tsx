// Modules
import { useState, useEffect } from "react";
// Components
import { Container, Typography } from "@mui/material";
import { RepoCard } from "../../components/molecules/RepoCard/RepoCard";
// Hooks
import { useFetch } from "../../hooks/useFetch/useFetch";
// Utils
import { saveStarredRepositories } from "../../lib/utils";
// Types
import { Repository, Repos } from "../../types/definitions";

export const TrendingRepos: React.FC = () => {
  // States
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [starredRepositories, setStarredRepositories] = useState<string[]>([]);

  const { data } = useFetch<Repos>(
    `https://api.github.com/search/repositories?q=created:2017-01-10&sort=stars&order=desc`
  );

  useEffect(() => {
    if (data) {
      setRepositories(data.items);
    }
  }, [data]);

  useEffect(() => {
    const starred = localStorage.getItem("starredRepositories");
    if (starred) {
      try {
        setStarredRepositories(JSON.parse(starred));
      } catch (error) {
        console.error("Error parsing starred repositories:", error);
      }
    }
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ margin: 2 }}>
        TrendingRepos
      </Typography>
      {repositories.map((repo) => (
        <RepoCard
          key={repo.full_name}
          name={repo.full_name}
          description={repo.description}
          numberOfStars={repo.stargazers_count}
          language={repo.language}
          url={repo.html_url}
          buttonText={
            starredRepositories.includes(repo.full_name)
              ? "Remove from Star List"
              : "Add to Start List"
          }
          buttonOnClick={() =>
            saveStarredRepositories(
              repo.full_name,
              starredRepositories,
              setStarredRepositories
            )
          }
        />
      ))}
    </Container>
  );
};
