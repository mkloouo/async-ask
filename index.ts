import {createInterface} from 'readline';

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompt stdout with query and return an answer
 * @param query query
 */
export const ask = async (query: string) => {
  return new Promise((resolve, _reject) => {
    readlineInterface.question(query, resolve);
  });
};

/**
 * Mandatory call when all ask interaction ends
 */
export const closeAsk = () => readlineInterface.close();
