<template>
    <table id="serviceList">
        <ListHeader />
        <Item  v-for="service in services" 
            v-bind:service="service"
            v-bind:key="service._id"
            v-bind:onServiceDeleted="onServiceDeleted"> 
        </Item>
    </table>
</template>

<script>
import ListHeader from './ListHeader.vue';
import Item from './Item.vue';
import axios from 'axios';

export default {
    name: 'ServiceList',
    components: {
        Item,
        ListHeader
    },
    data () {
        return {
            services: null
        }
    },
    mounted () {
        axios
            .get('http://localhost:4000/api/services')
            .then(response => {
                this.services = response.data;
            });
    },
    methods: {
        onServiceDeleted(service) {
            const pos = this.services.indexOf(service);
            if(pos >= 0) {
                this.services.splice(pos, 1);
            }
        }
    }
}
</script>