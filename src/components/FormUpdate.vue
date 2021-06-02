<template>
    <form @submit="sendValue($event)">
        <label for="name">Nom :</label>
        <input id="name" type="text" v-model="name" placeholder="service.name">

        <label for="location">Location :</label>
        <input id="location" type="text" v-model="location" placeholder="service.location">

        <label for="description">Description :</label>
        <input id="description" type="text" v-model="description" placeholder="service.description">

        <label for="status">Statut :</label>
        <select name="status" id="status" v-model="status">
            <option v-for="option in options" v-bind:key="option.value">
                {{option.text}}
            </option>
        </select>
        <Button>Envoyer</Button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FormUpdate',
    components: {
    },
    data () {
        return {
            service: null,
            name:  "",
            location: "",
            description: "",
            status: true,    
            options: [
                { text: "true", value: "1"},
                { text: "false", value: "2"}
            ]            
        }
    },
    methods: {

        sendValue($event) {
            axios
            .put('http://localhost:4000/api/services/' + service_id, {
                name: this.name, 
                location: this.location, 
                description: this.description, 
                status: this.status
            })
            .then((response) => {
                console.log(response);
                this.$router.push('/');
            }, (error) => {
                console.error(error)
            });

            $event.preventDefault();
        }, 
    }
}
</script>