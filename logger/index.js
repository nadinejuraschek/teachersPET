import chalk from "chalk";

export const logger = module => {
  return {
    debug: (message, value) =>
      console.log(chalk.yellow(`[${module}] ${message}`, value ? value : "")),
    error: (message, value) =>
      console.log(chalk.red(`[${module}] ${message}`, value ? value : "")),
    info: (message, value) =>
      console.log(chalk.green(`[${module}] ${message}`, value ? value : ""))
  };
};
