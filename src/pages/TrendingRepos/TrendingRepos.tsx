// Modules
import { useState, useEffect } from "react";
// Hooks
import { useFetch } from "../../hooks/useFetch/useFetch";
// Utils
import { saveStarredRepositories } from "../../lib/utils";
// Components
import { Box, Container, Typography, Alert } from "@mui/material";
import { RepoCard } from "../../components/molecules/RepoCard/RepoCard";
import { Dropdown } from "../../components/molecules/Dropdown/Dropdown";
// Types
import { Repository, Repos } from "../../types/definitions";
import { Loading } from "../../components/molecules/Loading/Loading";

export const TrendingRepos: React.FC = () => {
  // States
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [starredRepositories, setStarredRepositories] = useState<string[]>([]);
  const [filterLanguage, setFilterLanguage] = useState<string>("");
  const { data, hasError, isLoading } = useFetch<Repos>(
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

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterLanguage(event.target.value);
  };

  const filteredRepositories = repositories.filter((repo) => {
    if (!filterLanguage) return true;
    return repo.language === filterLanguage;
  });

  return (
    <Container>
      <Typography variant="h4" sx={{ margin: 2 }}>
        TrendingRepos
      </Typography>
      {hasError && <Alert severity="error">Something went wrong!</Alert>}
      {isLoading && <Loading />}
      {repositories.length > 0 && (
        <Box sx={{ display: "flex", marginBottom: 4 }}>
          <label htmlFor="languageFilter">Filter by Language:</label>
          <Dropdown
            id="languageFilter"
            onChange={handleFilterChange}
            value={filterLanguage}
            optionsList={["Python", "JavaScript", "Java", "TypeScript"]} // Pass options as props
          />
        </Box>
      )}
      {filteredRepositories.map((repo) => (
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
