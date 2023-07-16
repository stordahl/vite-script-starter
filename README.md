# vite-script-starter

Bootstrap a Third Party JavaScript Application with Vite + Typescript

## Template App

This template comes with an example event logging app that a client would embed via a script tag and call to record different events in their application. Here's what the client side implementation of this example library works. 

```html
<button id="btn">Click me to log an event!</button>

<script type="module" src="/path/to/logger.js"></script>
<script type="module">
  const logger = new EventLogger("my logger", "staging");
      
  logger.id(); // logs this EventLogger instance's unique id

  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    logger.log({event_type: 'click', event_json: { "element_id": "btn" }})
  })
</script>
```

## Getting Started

Use [tiged](https://github.com/tiged/tiged) to clone the project to your local machine without the git
history. 

```shell
npx tiged git@github.com:stordahl/vite-script-starter
cd vite-script-starter
npm install # yarn | pnpm install
```

Alternatively, click the "use this template" button in Github to clone
the project to your Github profile.

## Development

```shell
npm run dev 
# yarn dev
# pnpm run dev
```

## Tests

This template comes with some basic tests using Vitest. To run them...

```shell
npm run test
# yarn test
# pnpm run test
```
