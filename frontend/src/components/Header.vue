<template>
    <nav class="navbar">
        <div class="brand-title">Palace Cinema</div>
        <a href="http://localhost:8080/" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li><a href="http://localhost:8080/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="http://localhost:8080/signup">Sign up</a></li>
            <li><a href="http://localhost:8080/login">Log in</a></li>
            <div class="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search">
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
          </ul>
        </div>
    </nav>
</template>

<script>
export default{
    name: 'Header'
}

</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}

.navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
}

.brand-title {
    font-size: 1.5rem;
    margin: .5rem;
}

.navbar-links {
    height: 100%;
}

.navbar-links .search-container {
    float: right;
}
.navbar-links input[type=text] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }

.navbar-links .search-container button{
    float: right;
    padding: 6px 10px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.navbar-links .search-container button:hover{
    background: #ccc;
}
  

.navbar-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    list-style: none;
}



.navbar-links li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 1rem;
}

.navbar-links li:hover {
    background-color: #555;
}

.toggle-button {
    position: absolute;
    top: .75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 800px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .toggle-button {
        display: flex;
    }

    .navbar-links {
        display: none;
        width: 100%;
    }

    .navbar-links ul {
        width: 100%;
        flex-direction: column;
    }

    .navbar-links ul li {
        text-align: center;
    }

    .navbar-links ul li a {
        padding: .5rem 1rem;
    }

    .navbar-links.active {
        display: flex;
    }
}














/* Background Styles Only */

@import url('https://fonts.googleapis.com/css?family=Raleway');

* {
    font-family: Raleway;
}

html {
    background-color: #DFDFDF;
}

.side-links {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.side-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 10px;
  color: white;
  width: 180px;
  padding: 10px 0;
  border-radius: 10px;
}

.side-link-youtube {
  background-color: red;
}

.side-link-twitter {
  background-color: #1DA1F2;
}

.side-link-github {
  background-color: #6e5494;
}

.side-link-text {
  margin-left: 10px;
  font-size: 18px;
}

.side-link-icon {
  color: white;
  font-size: 30px;
}

</style>
