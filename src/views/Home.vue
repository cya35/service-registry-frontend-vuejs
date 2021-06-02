<template>
  <div class="home">
    <ServiceList/>
    <Button @click="getForm()"> Add service</Button>
  </div>
</template>

<script>
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
<style scoped>
.home {
  display: flex;
}
</style>
