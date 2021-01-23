import {createInterface} from 'readline';

const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const ask = async (query: string) => {
  return new Promise((resolve, _reject) => {
    readlineInterface.question(query, resolve);
  });
};

export const closeAsk = () => readlineInterface.close();
