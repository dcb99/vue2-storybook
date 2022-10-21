<template>
    <v-btn>Hello!</v-btn>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
    },
};
</script>
