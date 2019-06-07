<template>
    <div id="app" v-bind:style="{ display: 'flex'}">
        <div id="content-left" v-bind:style="{ width: '50%'}">
            <login gender="gender" name="name" adult="adult" avatar="avatar" v-on:save="setData($event)"/>
        </div>
        <div id="content-right" v-bind:style="{ width: '50%'}">
            <list v-bind:users="store" v-on:delete="deleteUser($event)"></list>
        </div>
    </div>

</template>

<script>
    /* eslint-disable no-console */
    import login from './components/login.vue'
    import axios from 'axios'
    import List from "./components/list";

    export default {
        name: 'app',
        components: {
            List,
            login
        },
        props: ['data'],
        data () {
            return {
                store: [],
                name: "",
                gender: undefined,
                adult: undefined,
                avatar: ""
            }
        },
        created: function() {
            axios.get("http://127.0.0.1:8888/users").then(response => {
                this.store = response.data;
            });
        },
        methods: {
            setData(value) {
                axios.post("http://127.0.0.1:8888/users", {
                    name: value.name || 'unknown',
                    gender: value.gender === undefined ? 'NONE' : value.gender.toUpperCase(),
                    avatar: value.avatar === undefined ? 'MARIO' : value.avatar.replace('nes-', '').toUpperCase(),
                    adult: value.adult
                }).then(response => {
                    this.store = response.data;
                });

            },
            deleteUser(id) {
                axios.delete("http://127.0.0.1:8888/users/" + id).then( response => {
                    this.store = response.data;
                })
            }
        },
        mounted() {
            this.store = axios.get("http://127.0.0.1:8888/users")
        }

    }
</script>