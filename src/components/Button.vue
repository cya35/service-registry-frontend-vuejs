<template>
    <tr>
        <td>
            <button class="favorite styled"
                    type="button">
                {{ buttonName }}
            </button>
        </td>
    </tr>
</template>

<script>

export default {
    name: 'Button',
    props: [ 'buttonName' ]
}
</script>