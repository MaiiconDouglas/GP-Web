<template>
  <main>


    <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t("pages.home.compras") }}
          </h2>

          <hr class="hr-style mt-3" />

          <p class="description-style">
            {{ $t("pages.home.comprarDesc") }}
          </p>
            <div id="about-area">
      <div class="container">
        <div class="row">
          <div class="col-12">


  <div>
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg"
                    alt="Selecionar montadora honda"
                    width="50"
                    height="50"
                  />

                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Honda
                  </label>
                </div>
                <p></p>
                <!--Parágrafo usado para espaçamento no seletor-->
                <div>
                  <img
                    src="data:image/png;base64,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"
                    alt="Selecionar montadora kawasaki"
                    width="50"
                    height="50"
                  />

                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Kawasaki
                  </label>
                </div>
                <p></p>
                <div>
                  <img
                    src="https://seeklogo.com/images/S/suzuki-logo-5311518DD9-seeklogo.com.png"
                    alt="Selecionar montadora suzuki"
                    width="50"
                    height="50"
                  />

                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Suzuki
                  </label>
                </div>
                <p></p>
                <div>
                  <img
                    src="https://marcas-logos.net/wp-content/uploads/2020/01/Simbolo-Yamaha.jpg"
                    alt="Selecionar montadora yamaha"
                    width="50"
                    height="50"
                  />

                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Yamaha
                  </label>
                </div>
                <div class="formulario">
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected>Selecione uma faixa de preço</option>
                    <option value="1">De R$ 3000,00 até R$ 5000,00</option>
                    <option value="2">De R$ 6000,00 até R$ 12000,00</option>
                    <option value="3">De R$ 12000,00 até R$ 24000,00</option>
                  </select>
                </div>

                <div>
                  <!-- <button type="button" class="btn btn-outline-secondary botao-compras-seletor">Selecionar</button> --><br />
                </div>
              </div>
            </div>
          </div>
        </div>



          </div>

        </b-col>
      </b-row>

      <!-- Destaque -->
      <b-row>
        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleNova1')"
            img-src="../static/motos/nova1.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t("pages.home.accessButtonSaber") }}
              </b-link>

              <span class="font-weight-normal">
                {{ $t("pages.home.newsPrecoCompras") }}
              </span>
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleNova2')"
            img-src="../static/motos/nova2.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t("pages.home.accessButtonSaber") }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoTwo') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleNova3')"
            img-src="../static/motos/nova3.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t("pages.home.accessButtonSaber") }}
              </b-link>

              <!--               <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoThree') }}
              </span> -->
            </div>
          </b-card>
        </b-col>
      </b-row>

      <!-- Noticias -->
      <b-row>
        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleNova4')"
            img-src="../static/motos/nova4.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t("pages.home.accessButtonSaber") }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoOne') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleNova5')"
            img-src="../static/motos/nova5.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t("pages.home.accessButtonSaber") }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoTwo') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleNova6')"
            img-src="../static/motos/nova6.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t("pages.home.accessButtonSaber") }}
              </b-link>

              <!--               <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoThree') }}
              </span> -->
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- Final Destaque -->

    <!-- <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t("pages.home.news") }}
          </h2>

          <hr class="hr-style mt-3" />

          <p class="description-style">
            {{ $t("pages.home.newsDesc") }}
          </p>
        </b-col>
      </b-row> -->

  </main>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },

  head() {
    return {
      title: "GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Início",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "GP Motos | Vendas é Compras de Motos Usadas é Novas..",
        },
        { name: "url", content: "#" },

        // Open Graph
        {
          property: "og:title",
          content:
            "GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Início",
        },
        {
          property: "og:site_name",
          content:
            "GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Início",
        },
        {
          property: "og:description",
          content: "GP Motos | Vendas é Compras de Motos Usadas é Novas..",
        },
        { property: "og:url", content: "#" },
      ],
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },

    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--black-200-color);
  font-size: clamp(2.45rem, 5vw - 0.5rem, 3.5rem);
  font-weight: 700;
}

h1 span {
  color: var(--primary-color);
}

p.description {
  color: var(--black-200-color);
  font-size: 1.1rem;
}

p.description span {
  color: var(--secondary-color);
  font-weight: 500;
}

a.link-one {
  background-color: var(--primary-color);
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  color: var(--white-color);
  font-weight: 500;
  margin-right: 10px;
  padding: 5px 15px;
}

a.link-two {
  background-color: var(--white-color);
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-weight: 500;
  padding: 5px 20px;
}

div.card-body {
  padding-inline: 15px;
}

h4.card-title {
  color: var(--secondary-color);
  font-size: 1.05rem !important;
  line-height: 1.5;
}

.card-link {
  background-color: var(--black-200-color);
  border-radius: 3px;
  color: var(--white-color);
  font-size: 0.95rem;
  padding: 5px 10px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  width: 990px;
  height: 100px;
  position: relative;
}

.HO1 {
  display: flex;
  /* background-color: #f7f7f7; */
  margin-right: 2px;
}

.HO2 {
  display: flex;
  /* background-color: #f7f7f7; */
  margin-right: 2px;
}

.HO3 {
  display: flex;
  /* background-color: #f7f7f7; */
  margin-right: 2px;
}

.HO4 {
  display: flex;
  /* background-color: #f7f7f7; */
  margin-right: 2px;
}

.HO5 {
  display: flex;
  border-style: solid;
  border-width: 3px;
  border-right-width: 1px;
  border-color: rgb(163, 17, 17);
  border-spacing: unset;
  margin-right: 2px;
}
</style>
