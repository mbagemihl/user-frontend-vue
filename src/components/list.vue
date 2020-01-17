<template>
    <ul id="userlist">
        <li v-for="user of users" v-bind:key="user.id">
            <i :class="[
                'nes-' + user.avatar.toLowerCase(),
                { animate: isAnimated(user) }
            ]"></i>
            <span>{{ user.name + " " + user.gender + " " + (user.adult ? "adult" : "child")}}</span>
            <button v-on:click="$emit('delete', user.id )" type="button" class="nes-btn is-error">Delete</button>
        </li>
    </ul>
</template>

<script>
    const ANIMATED_ICONS = ['OCTOCAT']

    export default {
        name: "list",
        props: ['users'],
        watch: {
          users(newValue, oldValue) {
              // eslint-disable-next-line
              console.log(newValue, oldValue);
          }
        },
        methods: {
            isAnimated (user) {
                return ANIMATED_ICONS.includes(user.avatar)
            }
        }
    }
</script>

<style scoped>

</style>