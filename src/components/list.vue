<template>
    <ul id="userlist" v-if="users.length>0">
        <li v-for="user of users" v-bind:key="user.id">
            <i :class="'nes-' + toAvatar(user.avatar)"></i>
            <span>{{ user.name + " " + user.gender + " " + (user.adult ? "adult" : "child")}}</span>
            <button v-on:click="$emit('delete', user.id )" type="button" class="nes-btn is-error">Delete</button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "list",
        props: ['users'],
        watch: {
          users(newValue, oldValue) {
              // eslint-disable-next-line
              console.log(newValue, oldValue);
          }
        },
        data() {
            return {
                userAvatar: ""
            }
        },
        methods: {
            toAvatar(avatar) {

                let response = avatar === 'OCTOCAT' ? avatar + " animate" : avatar;
                return response.toLowerCase();
            }
        }
    }
</script>

<style scoped>

</style>