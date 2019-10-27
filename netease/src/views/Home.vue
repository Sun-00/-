<template>
  <div class="home">
    <Header></Header>
    <Index></Index>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
import Index from '../views/index'
export default {
  name: 'home',
  components: {
    Header,
    Index,
    Footer,
  }
}
</script>
