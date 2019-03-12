<template>
    <div id="app" v-bind:style="{ display: 'flex'}">
        <div id="content-left" v-bind:style="{ width: '50%'}">
            <login gender="gender" name="name" adult="adult" avatar="avatar" v-on:save="setData($event)"/>
        </div>
        <div id="content-right" v-bind:style="{ width: '50%'}">
            <list users="store"></list>
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
        store: {},
        components: {
            List,
            login
        },
        props: ['data'],
        data () {
            return {
                name: "",
                gender: undefined,
                adult: undefined,
                avatar: ""
            }
        },
        methods: {
            setData(value) {
                axios.post("http://127.0.0.1:8888/users", {
                    name: value.name || 'unknown',
                    gender: value.gender === undefined ? 'NONE' : value.gender.toUpperCase(),
                    avatar: value.avatar === undefined ? 'MARIO' : value.avatar.replace('nes-', '').toUpperCase(),
                    adult: value.adult
                }).then(function(response) {
                    console.log(response);
                    this.store = response;
                });

            },
            getName() {
                return this.data === undefined ? "" : this.data.name;
            }
        },
        mounted() {
            this.store = axios.get("http://127.0.0.1:8888/users")
        }

    }
</script>