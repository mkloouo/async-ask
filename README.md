# async-ask

Simple prompt questioning for beginners

# Installation

```bash
npm install --save async-ask
```

# Dependencies

- `node.js/readline`

# Usage

```typescript
import {ask, closeAsk} from 'async-ask';

async function main() {
  const answer = await ask('Hello, world? ');

  switch (answer) {
    case 'Hello, indeed': {
      console.log('Sounds great.');
      break;
    }
    default: {
      console.log('Good for you.');
      break;
    }
  }

  closeAsk();
}

main.catch((e) => console.error(e));
```
