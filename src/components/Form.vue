<template>
    <form @submit="sendValue($event)">
        <h4>Ajouter un nouveau service</h4>
        <br><br>
        <label for="name">Nom </label>
        <input id="name" type="text" v-model="name">
        <br><br>
        <label for="location">Location </label>
        <input id="location" type="text" v-model="location">
        <br><br>
        <label for="description">Description </label>
        <input id="description" type="text" v-model="description">
        <br><br>
        <label for="status">Statut </label>
        <select name="status" id="status" v-model="status">
            <option v-for="option in options" v-bind:key="option.value">
                {{option.text}}
            </option>
        </select>
        <br><br>
        <Button>Envoyer</Button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Form',
    components: {
    },
    data () {
        return {
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
            .post('http://localhost:4000/api/services', {
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