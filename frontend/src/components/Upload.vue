<template>

        <div class="flexbox-item flexbox-item-2">
            <form>
                <label for="movietitle">Title:</label>
                <br>
                <input type="text" id="movietitle" name="movietitle">
                <br>

                <label for="Genre">Genre:</label>
                <br>
                <input type="text" id="Genre" name="Genre">
                <br>
                <br>
                <label for="poster">Poster:</label>
                <input type="file" id="poster" name="poster">

                <input type="submit">

            </form>

        </div>
</template>

<script>
export default {
    name: 'upload'
}
</script>

<style>
@import '../assets/css/admin_style.css'

</style>