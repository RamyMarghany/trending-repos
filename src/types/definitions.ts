export type Repository = {
    full_name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
};

export type Repos = {
    incomplete_results: boolean;
    total_count: number;
    items: Repository[];
};
