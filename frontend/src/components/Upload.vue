<template>

        <div class="flexbox-item flexbox-item-2">
            <form @click.prevent="sendPost()">
                <label for="movietitle">Title:</label>
                <br>
                <input type="text" id="movietitle" name="movietitle">
                <br>

                <label for="Genre">Genre:</label>
                <br>
                <input type="text" id="Genre" name="Genre">
                <br>
                <br>
                

                <input type="submit">

            </form>

        </div>
</template>

<script>
export default {
    name: 'upload'
}
</script>

<style scoped>
@import '../assets/css/admin_style.css';

</style>