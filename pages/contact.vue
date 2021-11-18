<template>
  <main>

    <h1>

      <strong
        >
        <a href="https://www.facebook.com/">
          <!-- <img src="../static/icons/icons8-facebook.svg" alt="Facebook" /> -->
        </a>
        <a href="https://www.instagram.com//">
          <!-- <img src="../static/icons/icons8-instagram.svg" alt="instagram" /> -->
        </a>
        <a href="https://www.youtube.com/">
          <!-- <img
            src="../static/icons/icons8-reproduzir-youtube.svg"
            alt="YouTube"
          /> -->
        </a>
      </strong>
    </h1>


  </main>
</template>

<script>
export default {
  head() {
    return {
      title: "GP Motos | Contato",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'GP Motos ' },
        { name: 'url', content: '#' },

        // Open Graph
        { property: 'og:title', content: 'GP Motos | Contato' },
        { property: 'og:site_name', content: 'GP Motos | Contato' },
        { property: 'og:description', content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas..' },
        { property: 'og:url', content: '#' }
      ]
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 15px;
  text-align: center;
}

strong {
  color: var(--secondary-color);
}

hr {
  background-image: linear-gradient(
    to right,
    transparent,
    var(--secondary-color),
    transparent
  );
  border: 0;
  height: 2px;
}

.img-banner {
  height: 85vh;
}

.btn {
  background-color: var(--gray-color);
}

.avisos {
  /* background-color: var(--secondary-color); */
  color: black;
  height: 280px;
  text-align: center;
  width: 100%;
}

.p1 {
  color: #151515;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-left: 25px;
  padding-top: 12px;
}

.p2 {
  font-family: "Poppins", sans-serif;
  margin-left: 25px;
  padding-top: 12px;
}

.p3 {
  color: #151515;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-left: 25px;
  padding-top: 12px;
}

.container-form {
  border-radius: 10px;
  background-color: #3e0204;
  background-image: url(~/assets/img/Group.svg);
  margin: 0 auto;
  margin-top: 100px;
  max-width: 500px;
  width: 100%;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-container{
  width: 90%;
}

.form-align {
  margin: 0 auto;
  margin-top: 27px;
}

.color-text {
  color: #fff;
}

.color-input {
  background-color: #f4f3ee;
  color: #000;
  border-color: none;
  border-radius: 15px;
  border: black;
}

.button-submit {
  margin: 0 auto;
  border-radius: 6px;
  background-color: #4fb34f;
  color: var(--white-color);
  border-color: transparent;
}

.button-reset {
  margin-top: 20px;
  margin-right: 20px;
  background-color: var(--black-200-color);
  color: var(--white-color);
  border-color: transparent;
}

.avalicao {
  text-align: center;
  margin-top: 30px;
}

.avalicao p {
  margin-left: 25px;
  padding-top: 12px;
  font-family: "Poppins", sans-serif;
  color: #151515;
  font-weight: 700;
}

.input {
  border-radius: 5px;
  border: none;
  margin: 10px;
  width: 60%;
}

@media (min-width: 320px) {
  .avisos {
    height: 350px;
  }

  .container-form {
    width: 80%;
  }
}

@media (min-width: 375px) {
  .avisos {
    height: 350px;
  }

  .container-form {
    width: 80%;
  }
}

@media (min-width: 414px) {
  .avisos {
    height: 350px;
  }

  .container-form {
    width: 80%;
  }
}

input.error,
textarea.error {
  border: 2px solid #ffff3f;
}

p.error {
  color: white;
  padding: 15px;
}
</style>
