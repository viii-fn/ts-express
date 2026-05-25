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
#   "name": "enterprise-express-api",
#   "version": "1.0.0",
#   "description": "Production ready Express and TypeScript configuration manual.",
#   "type": "module",
#   "main": "dist/index.js",
#   "scripts": {
#     "dev": "tsx watch src/index.ts",
#     "build": "tsc",
#     "start": "node dist/index.js"
#   },
#   "dependencies": {
#     "express": "^5.2.1"
#   },
#   "devDependencies": {
#     "@types/express": "^5.0.6",
#     "@types/node": "^25.9.0",
#     "tsx": "^4.19.0",
#     "typescript": "^6.0.3"
#   }
# }

pnpm tsc --init

# {
#   "compilerOptions": {
#     /* File Layout Strategy */
#     "rootDir": "./src",
#     "outDir": "./dist",
#     "noImplicitAny": true,

#     /* Runtime Target and Engine Specs */
#     "module": "NodeNext",
#     "moduleResolution": "NodeNext",
#     "target": "es2022",
#     "types": [],

#     /* Resource Mapping */
#     "sourceMap": true,
#     "declaration": true,
#     "declarationMap": true,

#     /* Defensive Strict Typechecking Options */
#     "strict": true,
#     "noUncheckedIndexedAccess": true,
#     "exactOptionalPropertyTypes": true,

#     /* Engineering Standards */
#     "jsx": "react-jsx",
#     "verbatimModuleSyntax": false,
#     "isolatedModules": true,
#     "noUncheckedSideEffectImports": true,
#     "moduleDetection": "force",
#     "skipLibCheck": true
#   },
#   "include": ["src/**/*"]
# }

mkdir -p src/dto src/models src/routes