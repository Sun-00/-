<template>
  <div class="home">
    <Header></Header>
    <Index></index>
  </div>
</template>

<script>
import Header from '../components/header'
import Index from '../views/index'
export default {
  name: 'home',
  components: {
    Header,
    Index
  }
}
</script>
