<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.clearfix::after,
.clearfix::before {
  content: "";
  display: table;
  clear: both;
}
#app {
  width: 100%;
}
</style>
