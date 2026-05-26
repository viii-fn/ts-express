markdown_content = """# Express + TypeScript (ESM) Project Blueprint

A comprehensive, reliable guide for setting up and troubleshooting modern Express.js backend servers using TypeScript, ES Modules (ESM), and `pnpm`.

---

## 🚀 Quick Start: Creating a New Server from Scratch

Follow these 5 steps to spin up a fully configured, production-ready development environment in under two minutes.

### Step 1: Initialize and Install Dependencies
Create your project directory, initialize it, and install the required production and development dependencies.

```bash
# 1. Create and enter your new project folder
mkdir ts-express-app && cd ts-express-app

# 2. Initialize a default package.json
pnpm init

# 3. Install production dependencies (Express)
pnpm add express

# 4. Install TypeScript, development engines, and type definitions
pnpm add -D typescript @types/node @types/express tsx

# {
#   "name": "ts-express",
#   "version": "1.0.0",
#   "description": "",
#   "license": "ISC",
#   "author": "",
#   "type": "module",
#   "main": "index.js",
#   "scripts": {
#     "start": "tsc && node dist/index.js",
#     "dev": "tsx watch src/index.ts"
#   },
#   "dependencies": {
#     "express": "^5.2.1"
#   },
#   "devDependencies": {
#     "@types/express": "^5.0.6",
#     "@types/node": "^25.9.0",
#     "nodemon": "^3.1.14",
#     "ts-node": "^10.9.2",
#     "tsx": "^4.22.3",
#     "typescript": "^6.0.3"
#   }
# }

pnpm tsc --init

# {
#   // Visit https://aka.ms/tsconfig to read more about this file
#   "compilerOptions": {
#     // File Layout
#     "rootDir": "./src",
#     "outDir": "./dist",
#     "noImplicitAny": true,

#     // Environment Settings
#     // See also https://aka.ms/tsconfig/module
#     "module": "esnext",
#     "target": "es2022",
#     "types": [],
#     // For nodejs:
#     // "lib": ["esnext"],
#     // "types": ["node"],
#     // and npm install -D @types/node

#     // Other Outputs
#     "sourceMap": true,
#     "declaration": true,
#     "declarationMap": true,

#     // Stricter Typechecking Options
#     "noUncheckedIndexedAccess": true,
#     "exactOptionalPropertyTypes": true,

#     // Style Options
#     // "noImplicitReturns": true,
#     // "noImplicitOverride": true,
#     // "noUnusedLocals": true,
#     // "noUnusedParameters": true,
#     // "noFallthroughCasesInSwitch": true,
#     // "noPropertyAccessFromIndexSignature": true,

#     // Recommended Options
#     "strict": true,
#     "jsx": "react-jsx",
#     "verbatimModuleSyntax": false,
#     "isolatedModules": true,
#     "noUncheckedSideEffectImports": true,
#     "moduleDetection": "force",
#     "skipLibCheck": true,
#   }
# }

mkdir -p src/dto src/models src/routes

# Add the index.ts file to start a basic express server

import express from 'express';

const app = express();
app.use(express.json());

# The port number for listening on the server
const PORT = 8000;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}));

app.get('/', (req, res) => {
    res.send('Welcome to your new express server');
});