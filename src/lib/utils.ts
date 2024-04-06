export const saveStarredRepositories = (
    repoFullName: string,
    starredRepositories: string[],
    setStarredRepositories: (updated: string[]) => void
) => {
    let updatedStarredRepositories: string[];
    const index = starredRepositories.indexOf(repoFullName);
    if (index === -1) {
        updatedStarredRepositories = [...starredRepositories, repoFullName];
    } else {
        updatedStarredRepositories = starredRepositories.filter(
            (repo) => repo !== repoFullName
        );
    }
    setStarredRepositories(updatedStarredRepositories);
    localStorage.setItem(
        "starredRepositories",
        JSON.stringify(updatedStarredRepositories)
    );
};
