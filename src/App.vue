<template>
  <main class="container">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/about">Task description</router-link>
    </nav>
    <router-view />
  </main>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: border-box;
}

html {
  font: 112.5% / 1.625 -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
    'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  box-sizing: border-box;
  overflow-y: scroll;
}

body {
  position: relative;
  margin: 0;
  font-family: 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: normal;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  line-height: 1.5;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';
}

img {
  display: block;
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: #222;
  text-decoration: none;
  transition: color 0.6s ease;
}

button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media (max-width: 767px) {
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }
}
</style>

