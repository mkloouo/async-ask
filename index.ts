import {createInterface} from 'readline';

/**
 * Prompt stdout with query and return an answer
 * @param query query
 */
const ask = async (query: string) => {
  const readlineInterface = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, _reject) => {
    readlineInterface.question(query, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
};

export default ask;
