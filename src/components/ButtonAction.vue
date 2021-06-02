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
                    type="button">
                {{ deleteBtn }}
            </button>
        </td>
    </tr>
</template>

<script>
//import axios from 'axios';

export default {
    name: 'ButtonAction',
    data () {
        return {
            updateBtn: "Modifier",
            deleteBtn: "Supprimer",
            idItem: "null"
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
    computed: {
        getItemId: function() {
            //Récupération de l'id de la ligne
            //Assigner à item id, l'id récupéré
            return "" ;
        },

        putNewValue: function() {
            //Récupération de l'objet
            //Modification les valeurs
            //Mettre à jour les valeurs
            return "";
        },

        deleteItem: function() {
            //delete l'item
            return "";
        }
    }
}

</script>