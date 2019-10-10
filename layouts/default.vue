<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600,700&display=swap');
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
    url(https://fonts.gstatic.com/s/montserrat/v12/JTUQjIg1_i6t8kCHKm45_QpRxC7mw9c.woff2)
      format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
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
