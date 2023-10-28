<!-- src/components/Header.vue -->
<template>
  <header class="header wrapper">
    <nuxt-link :to='`/`'>
      <h1 class="title">
        Aizenの義務ブログ
      </h1>
    </nuxt-link>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 4% 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
}

.title {
  font-size: 2rem;
  color: #fff;
}

</style>