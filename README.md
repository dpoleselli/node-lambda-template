# Node Lambda Template

This repos services as template for quickly spinning up new Node.js based Lambda functions with Typescript. To run the app locally execute `npm run start` which will call `local-main.ts` which calls the `handler` function from `index.ts`.

## What's included?
- `index.ts` file with `handler` function
- `eslint` configuration
- `prettier` configuration
- `deploy.sh` script to deploy Lambda function

## Commands

- `npm start`: run the handler once
  - See the [required environment veriables](#required-environment-variables) below
- `npm run build`: build the app using esbuild into the dist/ folder

### OLD Deployment Method

- `npm run package`: create a zip of the built app
- `npm run deploy`: deploy the app to aws
  - Requires that the environment variable `FUNCTION_NAME` be set
- `npm run build-and-deploy`: builds, packages, and deploys the app
