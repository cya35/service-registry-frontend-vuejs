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
            <ButtonAction />
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
    props: [ 'service' ]
}
</script>