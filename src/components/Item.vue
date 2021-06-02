<template>
    <tr >
        <td>
            {{ service.name }}
        </td>
        <td>
            {{ service.location }}
        </td>
        <td>
            {{ service.description }}
        </td>
        <td>
            {{ service.status }}
        </td>
        <td>
            <ButtonAction v-bind:service="service" v-bind:onServiceDeleted="onServiceDeleted"/>
        </td>
    </tr>
</template>

<script>
import ButtonAction from './ButtonAction.vue';

export default {
    name: 'Item',
    components: {
        ButtonAction
    },
    props: [ 'service', 'onServiceDeleted' ]
}
</script>