# Two-Minute Motivation

## About

Two Minute Motivation is an app that solves the feeling of laziness by building a small piece of momentum. It provides the user with ideas on what they could do to jumpstart themselves.

## Starting the App

### One-Time Setup

- Install Node and npm
- Global install yarn: `npm install -g yarn`
- Install Heroku CLI: `brew install heroku`
- Copy env file: `cp .env-example .env`
- Enable linting in Sublime Text 3
  - Install `SublimeLinter`
  - Install `SublimeLinter-eslint`
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
  - `yarn watch:server`
  - `yarn watch:client`

## Tech Used

- UI / Front-End
  - Sketch
  - Bootstrap 4
  - React
- Build Steps
  - Webpack
  - Babel
  - Prettier
- Back-End / DevOps
  - Node
  - Express
  - Heroku

## TODOs

- PropTypes
- Jest
- Cypress
- Flow
- Husky
- Heroku CI
- Offline functionality (while grabbing new ideas when offline)
- Accessibility
- React Native
- FAQs / Research section
