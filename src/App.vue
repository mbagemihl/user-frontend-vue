<template>
    <div id="app" v-bind:style="{ display: 'flex'}">
        <div class="content-left" v-bind:style="{ width: '50%'}">
            <login gender="gender" name="name" adult="adult" avatar="avatar" v-on:save="setData"/>
        </div>
        <div class="content-right" v-bind:style="{ width: '50%'}">
            <list v-bind:users="store" v-on:delete="deleteUser"></list>
        </div>
    </div>

</template>

<script>
    import List from '@/components/list';
    import login from '@/components/login';
    import userService from '@/services/User'

    export default {
        name: 'app',
        components: {
            List,
            login
        },
        data () {
            return {
                store: [],
                name: "",
                gender: undefined,
                adult: undefined,
                avatar: ""
            }
        },
        methods: {
            async setData (user) {
                await userService.create(user)
                this.fetchUsers()

            },
            async deleteUser (id) {
                await userService.delete(id)
                this.fetchUsers()
            },
            async fetchUsers () {
                const users = await userService.fetchAll()
                this.store = users
            }
        },
        created() {
            this.fetchUsers()
        }
    }
</script>

<style lang="scss">
#app {
    display: flex;

    .content {
        &-left{
            width: 60%;
        }

        &-right{
            width: 40%;
        }
    }
}
</style>