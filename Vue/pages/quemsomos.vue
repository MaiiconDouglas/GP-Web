<template>
  <main>
    <Menu />
    <br />
    <br />
    <br />

    <section class="container-marcas">
      <h2>Nossa história</h2>
    </section>

    <div class="layoutquemsomos">
      <img src="~/static/fachada.jpg" alt="placehold" style="width: 500px" />
    </div>
    <br />

    <div class="layoutquemsomos">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat
        dignissimos eligendi, pariatur, explicabo dolores illo enim rerum nam
        repudiandae nobis molestiae facilis soluta ipsum amet provident? Veniam,
        vel consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Veniam fugiat dignissimos eligendi, pariatur, explicabo dolores
        illo enim rerum nam repudiandae nobis molestiae facilis soluta ipsum
        amet provident? Veniam, vel consequuntur!Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Veniam fugiat dignissimos eligendi,
        pariatur, explicabo dolores illo enim rerum nam repudiandae nobis
        molestiae facilis soluta ipsum amet provident? Veniam, vel consequuntur!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat
        dignissimos eligendi, pariatur, explicabo dolores illo enim rerum nam
        repudiandae nobis molestiae facilis soluta ipsum amet provident? Veniam,
        vel consequuntur!
      </p>
    </div>
    <br />
    <h3>Nossa Missão</h3>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat
    dignissimos eligendi, pariatur, explicabo dolores illo enim rerum nam
    repudiandae nobis molestiae facilis soluta ipsum amet provident? Veniam, vel
    consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Veniam fugiat dignissimos eligendi, pariatur, explicabo dolores illo enim
    rerum nam repudiandae nobis molestiae facilis soluta ipsum amet provident?
    Veniam, vel consequuntur!Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Veniam fugiat dignissimos eligendi, pariatur, explicabo dolores illo
    enim rerum nam repudiandae nobis molestiae facilis soluta ipsum amet
    provident? Veniam, vel consequuntur! Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Veniam fugiat dignissimos eligendi, pariatur, explicabo
    dolores illo enim rerum nam repudiandae nobis molestiae facilis soluta ipsum
    amet provident? Veniam, vel consequuntur!
    <br />
    <div class="layoutquemsomos">
      <p></p>
    </div>
    <br />
    <h3>Nossa visão</h3>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat
    dignissimos eligendi, pariatur, explicabo dolores illo enim rerum nam
    repudiandae nobis molestiae facilis soluta ipsum amet provident? Veniam, vel
    consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Veniam fugiat dignissimos eligendi, pariatur, explicabo dolores illo enim
    rerum nam repudiandae nobis molestiae facilis soluta ipsum amet provident?
    Veniam, vel consequuntur!Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Veniam fugiat dignissimos eligendi, pariatur, explicabo dolores illo
    enim rerum nam repudiandae nobis molestiae facilis soluta ipsum amet
    provident? Veniam, vel consequuntur! Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Veniam fugiat dignissimos eligendi, pariatur, explicabo
    dolores illo enim rerum nam repudiandae nobis molestiae facilis soluta ipsum
    amet provident? Veniam, vel consequuntur!
    <br />
    <div class="layoutquemsomos">
      <p></p>
    </div>
    <br />
    <h3>Nossos valores</h3>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat
    dignissimos eligendi, pariatur, explicabo dolores illo enim rerum nam
    repudiandae nobis molestiae facilis soluta ipsum amet provident? Veniam, vel
    consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Veniam fugiat dignissimos eligendi, pariatur, explicabo dolores illo enim
    rerum nam repudiandae nobis molestiae facilis soluta ipsum amet provident?
    Veniam, vel consequuntur!Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Veniam fugiat dignissimos eligendi, pariatur, explicabo dolores illo
    enim rerum nam repudiandae nobis molestiae facilis soluta ipsum amet
    provident? Veniam, vel consequuntur! Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Veniam fugiat dignissimos eligendi, pariatur, explicabo
    dolores illo enim rerum nam repudiandae nobis molestiae facilis soluta ipsum
    amet provident? Veniam, vel consequuntur!
    <br />
    <div class="layoutquemsomos">
      <p></p>
    </div>

    <Footer />
  </main>
</template>


<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 990px;
  height: 100px;
  position: relative;
}
.container-marcas {
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;
}

h2,
h3 {
  display: block;
  justify-content: center;
  padding: 15px;
  text-decoration: none;
  text-transform: uppercase;
  color: rgb(20, 18, 18);
  font-family: Ariel;
}
h3 {
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;
}

.flex-container {
  display: flex;
  border: none;
  border: 1px solid #ddd;
}

.flex-container > div {
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}

.container-flex {
  display: flex;
  flex-direction: row;
  border: 2px solid rgb(20, 18, 18);
  border-radius: 6px;
  width: 50vw;
  box-shadow: 0 0 19px;
}

.conteiner-flex-info {
  flex: 0 1 40%;
  background-color: rgb(20, 18, 18);
  padding-top: 20px;
}
.conteiner-flex-info li {
  list-style: none;
  padding: 6px 0;
}
.conteiner-flex-info a {
  text-decoration: none;
  font-size: 18px;
}
@media (max-width: 900px) {
  .container-flex {
    flex-direction: column;
  }
}

.layoutquemsomos {
  display: flex;
  justify-content: center;
  text-align: center;
}
h2 {
  margin-left: 10px;
}

.flex-container-marcas {
  text-align: center;
}
</style>
