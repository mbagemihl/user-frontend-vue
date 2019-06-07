<template>
    <div class="nes-container">

        <h3>What's your name?</h3>
        <!--suppress HtmlFormInputWithoutLabel -->
        <input type="text" v-model="data.name" class="nes-input" id="name">
        <div class="input-container">
            <h3>Are you a boy or a girl?</h3>
            <label>
                <input id="male" type="radio" v-model="data.gender" value="male" class="nes-radio" name="answer">
                <span>Boy</span>
            </label>
            <label>
                <input type="radio" v-model="data.gender" value="female" class="nes-radio" name="answer" id="female">
                <span>Girl</span>
            </label>
            <label>
                <input type="radio" class="nes-radio" v-model="data.gender" name="answer" value="none" id="none"
                       checked="checked">
                <span>I don't know</span>
            </label>
        </div>
        <div class="input-container">
            <label>
                <input type="checkbox" class="nes-checkbox" v-model="data.adult">
                <span>I am over the age of 18</span>
            </label>
        </div>
        <div class="input-container">
            <h3>Choose your avatar</h3>
            <label>
                <input type="radio" class="nes-radio" name="avatar" v-model="data.avatar" value="nes-octocat"
                       checked>
                <span><i class="nes-octocat animate"></i></span>
            </label>
            <label>
                <input type="radio" class="nes-radio" name="avatar" value="nes-mario" v-model="data.avatar">
                <span>
                    <i class="nes-mario animate"></i>
                </span>
            </label>
            <label>
                <input type="radio" class="nes-radio" name="avatar" value="nes-ash" v-model="data.avatar">
                <span>
                    <i class="nes-ash"></i>
                </span>
            </label>
            <label>
                <input type="radio" class="nes-radio" name="avatar" value="nes-pokeball" v-model="data.avatar">
                <span>
                    <i class="nes-pokeball"></i>
                </span>
            </label>
            <label>
                <input type="radio" class="nes-radio" name="avatar" value="nes-bulbasaur" v-model="data.avatar">
                <span>
                    <i class="nes-bulbasaur"></i>
                </span>
            </label>
            <label>
                <input type="radio" class="nes-radio" name="avatar" value="nes-charmander" v-model="data.avatar">
                <span>
                    <i class="nes-charmander"></i>
                </span>
            </label>
            <label>
                <input type="radio" class="nes-radio" name="avatar" value="nes-squirtle" v-model="data.avatar">
                <span>
                    <i class="nes-squirtle"></i>
                </span>
            </label>
            <label>
                <input type="radio" class="nes-radio" name="avatar" value="nes-kirby" v-model="data.avatar">
                <span>
                    <i class="nes-kirby"></i>
                </span>
            </label>
        </div>
        <div class="input-container">
            <button v-on:click="$emit('save', data )" type="button" class="nes-btn is-primary">Enter</button>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        name: "login",
        data() {
            return {
                data: {}
            }
        }
    }
</script>

<style scoped>
    .input-container {
        margin-top: 24px;
    }
</style>