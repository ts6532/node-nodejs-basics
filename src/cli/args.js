const parseArgs = () => {
  const args = process.argv.slice(2);

  args.forEach((arg, idx) => {
    if(arg.includes('--')) {
        console.log(`${arg.substring(2)}=${args[idx+1]}`)
    }
  });
};

parseArgs();
