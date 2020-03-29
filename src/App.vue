<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@charset "utf-8";
body,
p,
ul,
ol,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
input,
select,
textarea,
td {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
a {
  text-decoration: none;
}
img {
  display: block;
  border: none;
}
span {
  display: block;
}
html {
  font-size: 26.67vw;
}

li {
  list-style: none;
}
@media screen and (min-width: 750px) and (max-width: 1536px) {
  html {
    font-size: 9.77vw;
  }
}
#app {
  height: 100%;
  width: 100%;
  font-size: .16rem;
}
</style>
