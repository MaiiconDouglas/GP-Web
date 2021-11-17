<template>
  <main>
    <Menu /> <br><br><br><br>
    <div class="fale">
      <h1>Nossos Contatos</h1>
    </div>
    <div class="contatos">
      <ul>
        <div>
          <li>
            <a href="https://pt-br.facebook.com/humberto.zakaib.507"
              ><img
                src="~/static//facebook.png"
                alt="placehold"
                style="width: 20px"
              />
              Facebook</a
            >
          </li>
        </div>
        <div>
          <li>
            <a href="#"></a
            ><img
              src="~/static//whatsapp.png"
              alt="placehold"
              style="width: 20px"
            />
            WhatsApp: (16) 993267279
          </li>
        </div>
        <div>
          <li>
            <a href="#"></a
            ><img
              src="~/static//telefone.png"
              alt="placehold"
              style="width: 20px"
            />
            Telefone: (16) 993267279
          </li>
        </div>
      </ul>
      <div class="imgcontato">
        <img src="~/static/fachada.jpg" alt="placehold" style="width: 650px" />
      </div>
    </div>
    <Footer />
  </main>
</template>

<style scoped>





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
/* nav .active a,
 nav a:hover{     /*destaque  */
    /* background-color: #ffce00;
}  */

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
/*Carrousel*/
img {
    width: 100%;
 }
 imagem img{
    width: 200px;
    height: 100px;
 }

ul {
    padding: 1.25rem;
    text-align: center;
}
ul li {
    list-style-type: none;
    display: inline-block;
    margin: 0.25rem 0.75rem;
}
ul a {
    color: rgb(20, 18, 18);
    text-decoration: none;
}
ul a:hover {
    text-decoration: underline;
}


  .layoutquemsomos{
      display:flex;
      justify-content:center;
      text-align:center;

  }
  h2{
      margin-left: 10px;
  }

 .flex-container-marcas{
     text-align: center;
 }

 #btninfo{
     background-color:red;
     color:white;
 }
 .HO1{

    display:flex;          /*Configuração dos blocos das motos*/
    background-color: #f7f7f7;
    margin-right:2px;
}

.HO2{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.HO3{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.HO4{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.HO5{

    display:flex;
    border-style: solid;
    border-width:3px;
    border-right-width:1px;
    border-color:rgb(163, 17, 17);
    border-spacing:unset;
    margin-right:2px;
}

.fale{
    margin-left: 10px;
    margin-top:25px;
}
.k1{
    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.k2{
    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.k3{
    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.k4{
    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.option{
    display:flex;
    justify-content:center;
}

.S1{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.S2{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.S3{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.S4{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.Y1{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.Y2{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.Y3{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.Y4{

    display:flex;
    background-color: #f7f7f7;
    margin-right:2px;
}

.linkk{
    color:red; /*Cor do link do nome/preço da moto*/
    font-weight:bold;
}
.loghoda{
    display: flex;
    flex-direction: row;  /*Alinhamento das logos em suas respectivas páginas*/
    justify-content: center;
    margin-top:10px;
    margin-bottom:10px;
}


.logKAWA{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:10px;
    margin-bottom:10px;
  }


.logSUZU{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:10px;
    margin-bottom:10px;
  }


.logYAMA{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:10px;
    margin-bottom:10px;
  }

 .flex-container-marcas{
     text-align: center;
 }

 #btninfo{
     background-color:red;
     color:white;
 }

 .showroom{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
        height:300px;
        width:450px;
        margin:1%;
        padding:1%;
    }

.ficha{
    border: none;
    border:1px solid #ddd;
        /* display:flex; */
        /* flex-wrap:wrap; */
        /* justify-content:center; */
        /* align-items:center; */
        /* height:300px;
        width:450px;
        margin:1%;
        padding:1%; */
    }

    .contatos{
        display:flex;
        justify-content:left;
        align-items:flex-start;
        margin-top: 10px;
    }

.imgcontato{
    margin-left:50px;
}

/* Novo */

form {
    padding: 1.5rem 2rem;
    margin: 1.5rem 0 1.5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    gap: 0.75rem;
    background: #080808d8;
    backdrop-filter: blur(15px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 8px 40px -5px rgba(0, 0, 0, 0.06);
  }

  form > * {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
  }

  form label[for] {
    text-align: left;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    form {
      border-radius: 4px;
      flex-flow: row;
      flex-wrap: wrap;
    }

    form > * {
      flex: 1 0 calc(50% - 0.75rem);
    }
  }

  @media (min-width: 980px) {
    form {
      max-width: 980px;
    }

    table {
      max-width: 980px;
    }
  }



.navbar {
  overflow: hidden;
  /* background-color: #333; */
  display: flex;
  align-items: center;
  list-style:none;
  /* border:1px solid #c0c0c0; */
  float:left;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: rgb(14, 11, 11);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: rgb(14, 12, 12);
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
