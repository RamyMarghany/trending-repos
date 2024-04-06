// Modules
import { Route, Routes } from "react-router-dom";

// Pages
import { TrendingRepos } from "../../../pages/TrendingsRepos/TrendingsRepos";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TrendingRepos />} />
    </Routes>
  );
};
