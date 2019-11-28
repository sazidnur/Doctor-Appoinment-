<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Source Sans Pro", sans-serif;
  /* color: #2bae66; */

}

.flex-center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
}
.flex-column {
  -ms-flex-direction: column !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  flex-direction: column !important;
}
</style>
