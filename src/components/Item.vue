<template>
    <tr>
        <td>
            {{ service.name }}
        </td>
        <td>
            {{ service.location }}
        </td>
        <td>
            {{ service.decription }}
        </td>
        <td>
            {{ service.status }}
        </td>
        
    </tr>
</template>

<script>

export default {
    name: 'Item',
    props: [ 'service' ]
}
</script>