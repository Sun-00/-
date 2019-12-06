<template>
  <div class="home">
    <Header></Header>
    <router-view :is="this.$store.state.view"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import store from "../store/index"
import Header from '../components/header'
import Footer from '../components/footer'
import Index from '../views/index'
import SjnGren from '../views/SjnGren'
import ON from '../views/On'
import Clean from '../views/clean'
import Clothes from '../views/clothes'
import Digital from '../views/digital'
import Global from '../views/global'
import Life from '../views/life'
import Mother from '../views/mother'
import Motion from '../views/motion'
import Wine from '../views/wine'
import yx from '../views/yanxuan'
export default {
  name: 'home',
  components: {
    Header,
    Index,
    ON,
    SjnGren,
    Footer,
    Clean,
    Clothes,
    Digital,
    Global,
    Life,
    Mother,
    Motion,
    Wine,
    yx,
  }
}
</script>
