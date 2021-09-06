<script>
export default {
  data() {
    return {
      items: [
        { url: "/", text: "Inicio" },
        { url: "/Motos", text: "Motos" },
        { url: "/quemsomos", text: "Quem Somos" },
        { url: "/contato", text: "Fale Conosco" },
        { url: "/login", text: "Login" },
      ],
    };
  },
};
</script>

<template>
  <header>
    <h1>
          <link rel="shortcut icon" href="assets/image/logo.ico" />
    </h1>

    <nav>
      <nuxt-link v-for="item of items" :key="item" :to="item.url">
        {{ item.text }}
      </nuxt-link>
    </nav>
  </header>
</template>

<style scoped>

*{
    margin: 0;
    padding: 0;
}
body{
    font-family: arial, helvetica, sans-serif;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 0 1rem;
  background-color: white;
  box-shadow: 0 2px 10px #0004;
  border-radius: 5px;
}


h1 {
  width: 4rem;
  margin: 10px 0 0;
}

h1 img {
  width: 100%;
}

nav {
  font-size: 0.875rem;
  display: flex;
  gap: 1rem;
}

nav ul,
nav li {
    list-style: none; /*remove os pontos*/
    margin: 0;
    padding: 0;
}
nav ul{
    display: flex;
}
nav a{
    display: block;
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(20, 18, 18);
    font-family:  Ariel;
}

 a{
    display: block;
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(20, 18, 18);
    font-family:  Ariel;
    align-items: center;
}

h2,h3 {
    display: block;
    justify-content: center;
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(20, 18, 18);
    font-family:  Ariel;
}
h3 {
    display: flex;
    justify-content: center;
    height: 120px;
    align-items: center;
}

/* Adicionar efeito */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

</style>
