export interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  default_branch: string;
  owner: {
    login: string;
  };
}

export interface GitHubReadmeResponse {
  markdown: string;
}
