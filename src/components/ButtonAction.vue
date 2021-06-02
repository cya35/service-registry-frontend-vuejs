<template>
    <tr>
        <td>
            <button id="updateBtn" class="favorite styled"
                    type="button">
                {{ updateBtn }}
            </button>
        </td>
        <td>
            <button id="deleteBtn" class="favorite styled"
                    type="button" V-on:click="deleteItem()">
                {{ deleteBtn }}
            </button>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ButtonAction',
    props: [ 'service' ],
    components: {
    },
    data () {
        return {
            updateBtn: "Modifier",
            deleteBtn: "Supprimer",
            idItem: "null",
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
        putNewValue: function() {
            //renvoie vers un form de récupération des nouvelles valeurs
            return "";
        },

        deleteItem: function() {
            console.log('http://localhost:4000/api/services/' + this.service._id);
            axios
            .delete('http://localhost:4000/api/services/' + this.service._id)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        }
    }
}

</script>