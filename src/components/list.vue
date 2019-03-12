<template>
    <ul id="userlist">
        <li v-for="user in users" v-bind:key="user">
            <i :class="'nes-' + user.avatar"></i>
            <span>{{ user.name + " " + user.gender + " " + (user.adult ? "adult" : "child")}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "list",
        props: ['users']
    }
</script>

<style scoped>

</style>