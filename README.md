# Two-Minute Motivation

## About

Two Minute Motivation is an app that solves the feeling of laziness by building a small piece of momentum. It provides the user with ideas on what they could do to jumpstart themselves.

I wanted to have a simple app which was just complex enough to allow for implementing various technologies. The list of used technologies can be found at the end of this document.

## Starting the App

### One-Time Setup

- Install Node and npm
- Global install yarn: `npm install -g yarn`
- Install Heroku CLI: `brew install heroku`
- Global install Flow: `npm install -g flow-typed`
- Copy env file: `cp .env-example .env`
- Enable linting in Sublime Text 3
  - Install `SublimeLinter`
  - Install `SublimeLinter-eslint`
  - Install `SublimeLinter-flow`
- Enable auto-styling in Sublime Text 3
  - Install `JsPrettier`
  - In Terminal, run `which prettier`
  - In Terminal, run `which node`
  - Sublime Text > Preferences > Package Settings > JsPrettier > Settings - User

```json
{
  "prettier_cli_path": "<result of `which prettier`>",
  "node_path": "<result of `which node`>",
  "auto_format_on_save": true,
  "prettier_options": {
    "parser": "babylon",
    "singleQuote": true,
    "printWidth": 80,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "semi": false,
    "tabs": false
  }
}
```

### Every Time

- Install dependencies: `yarn install`
- Start the watch servers:
  - Standard watch:
    - `yarn watch:server`
    - `yarn watch:client`
  - Using Cypress:
    - `yarn test:e2e:dev`
- Install new types: `flow-typed install`

## Committing

Husky is used to manage Git hooks. This enforces all contributors to have to follow precommit requirements.

### Precommit Hook Errors

If you get an error when committing, it's most likely because you have the server running in another tab.

## Tech Used

- UI / Front-End
  - Sketch
  - Bootstrap 4
  - React
- Build Steps
  - Prettier
  - Babel
  - Webpack
- Testing
  - ESLint and Flow (static tests)
  - Jest
  - Cypress
- Back-End / DevOps
  - Node
  - Express
  - Husky
  - Heroku

## TODOs

- Redux
- Flexbox
- Fix missing dependencies/settings
- Heroku CI
- Offline functionality (while grabbing new ideas when offline)
- Accessibility
- React Native (with different view for landscape vs portrait)
- FAQs / Research section
