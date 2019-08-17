<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600,700&display=swap');

:root {
  --primary-color: hsl(286, 55%, 40%);
  --secondary-color: hsl(288, 71%, 54%);
}

html,
body {
  font-family: 'Montserrat', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #a6a6a6;
  color: #212121;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
