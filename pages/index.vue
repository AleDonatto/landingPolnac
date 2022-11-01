<template>
  <HomeMain />
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data (){
    return {
      
    }
  },
  mounted() {
    this.$store.commit('StateAssign', {windowSize:window.innerWidth})
    this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
    window.addEventListener('resize', this.Resize)

    if(this.pageHome === null){
      this.$store.dispatch('getPageHome')
      this.$store.dispatch('getAllProducts')
    }
  },
  methods: {
    Resize(){
      this.$store.commit('StateAssign', {windowSize:window.innerWidth})
      this.$store.commit('StateAssign', {windowHeight:window.innerHeight})
    }
  },
  computed: {
    ...mapState(['pageHome'])
  }
}
</script>
