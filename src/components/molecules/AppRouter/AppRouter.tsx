// Modules
import { Route, Routes } from "react-router-dom";

// Pages
import { TrendingRepos } from "../../../pages/TrendingRepos/TrendingRepos";
import { StartedRepos } from "../../../pages/StartedRepos/StartedRepos";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TrendingRepos />} />
      <Route path="/star-repos" element={<StartedRepos />} />
    </Routes>
  );
};
