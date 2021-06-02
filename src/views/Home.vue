<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ServiceList/>
    <Button @click="getForm()"> Add service</Button>
  </div>
</template>

<script>
// @ is an alias to /src
import ServiceList from '@/components/ServiceList.vue'

export default {
  name: 'Home',
  components: {
    ServiceList,
    
  },
  methods: {
    getForm() {
      this.$router.push({ path: '/addService'});
    }
  }
}
</script>
