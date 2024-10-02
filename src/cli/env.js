const parseEnv = () => {
  const envs = process.env;

  for (const env in envs) {
    if (env.includes("RSS_")) console.log(`${env}=${envs[env]}`);
  }
};

parseEnv();
