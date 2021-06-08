<template>
    <div v-if="currentService">
        <form @submit="sendValue($event)">
            <h4>Vous êtes en train de mettre à jour le service : {{ currentService.name }} </h4>
            <br><br>
            <label for="name">Nom </label>
            <input id="name" type="text" v-model="name" :placeholder="[[ currentService.name ]]">
            <br><br>
            <label for="location">Location </label>
            <input id="location" type="text" v-model="location" :placeholder="[[ currentService.location ]]">
            <br><br>
            <label for="description">Description </label>
            <input id="description" type="text" v-model="description" :placeholder="[[ currentService.description ]]">
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
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FormUpdate',
    components: {
    },
    delimiters: ["[[", "]]"],
    data () {
        return {
            currentService: null,
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
    props: [ 'service' ],
    methods: {
        getService(id) {
            axios
            .get('http://localhost:4000/api/services/' + id)
            .then(response => {
            this.currentService = response.data;
            console.log(response.data);
            }, (error) => {
                console.error(error)
            });
        },
        sendValue($event) {
            axios
            .put('http://localhost:4000/api/services/' + this.currentService._id, {
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
        }
    },
    mounted() {
        console.log(this.$route.params.id);
        this.getService(this.$route.params.id);
    }
}
</script>