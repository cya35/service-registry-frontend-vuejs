<template>
    <tr>
        <td>
            <button id="updateBtn" class="favorite styled"
                    type="button" v-on:click="putNewValue(service)">
                {{ updateBtn }}
            </button>
        </td>
        <td>
            <button id="deleteBtn" class="favorite styled"
                    type="button" v-on:click="deleteItem(service)">
                {{ deleteBtn }}
            </button>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ButtonAction',
    props: [ 'service', 'onServiceDeleted' ],
    components: {
    },
    data () {
        return {
            updateBtn: "Modifier",
            deleteBtn: "Supprimer"
        }
    },
    mounted () {
        /*
        axios
            .post('http://localhost:4000/api/services')
            .then(response => {
                this.services = response.data;
            })
        */
    },
    methods: {
        putNewValue: function(service) {
            //renvoie vers un form de récupération des nouvelles valeurs
            console.log(service._id);
        },

        deleteItem: function(service) {
            axios
            .delete('http://localhost:4000/api/services/' + service._id)
            .then((response) => {
                console.log(response);
                this.$alert("Service " + service.name + " supprimé");
                this.onServiceDeleted(service);
            }, (error) => {
                console.log(error);
            });
        }
    }
}

</script>