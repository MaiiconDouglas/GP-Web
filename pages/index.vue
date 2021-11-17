<template>
  <main>

    <b-container class="py-4">
      <b-row>
        <b-col
          cols="12"
          lg="6"
          class="
            d-flex
            flex-column
            align-items-center
            justify-content-center
            py-3
          "
        >
        </b-col>
      </b-row>
    </b-container>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#F1F1F1"
      img-height="450"
      img-width="1920"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            src="../static/images/banner.jpg"
            draggable="false"
            height="450"
            width="1920"
            class="d-block img-fluid mx-auto"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            src="../static/images/bannerr.jpg"
            draggable="false"
            height="450"
            width="1920"
            class="d-block img-fluid mx-auto"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t('pages.home.destaques') }}
          </h2>

          <hr class="hr-style mt-3" />

          <p class="description-style">
            {{ $t('pages.home.destaquesDesc') }}
          </p>
        </b-col>
      </b-row>

<!-- Destaque -->
      <b-row>
        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleOne')"
            img-src="../static/motos/xre300yellow.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoOne') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleTwo')"
            img-src="../static/motos/fazer250red.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoTwo') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleThree')"
            img-src="../static/motos/cg160titanblue.png"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
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
            :title="$t('pages.home.newsTitleOne')"
            img-src="../static/motos/xre300yellow.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoOne') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleTwo')"
            img-src="../static/motos/fazer250red.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoTwo') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleThree')"
            img-src="../static/motos/cg160titanblue.png"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
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

  <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t('pages.home.news') }}
          </h2>

          <hr class="hr-style mt-3" />

          <p class="description-style">
            {{ $t('pages.home.newsDesc') }}
          </p>
        </b-col>
      </b-row>

<!-- Destaque -->
      <b-row>
        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleOne')"
            img-src="../static/motos/xre300yellow.png"
            img-top
            tag="article"
            style="max-width: 20rem "
            class="my-3 mx-auto "
          >
            <div class="d-flex align-items-center justify-content-center">
              <b-link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoOne') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleTwo')"
            img-src="../static/motos/fazer250red.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoTwo') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleThree')"
            img-src="../static/motos/cg160titanblue.png"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
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
            :title="$t('pages.home.newsTitleOne')"
            img-src="../static/motos/xre300yellow.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoOne') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleTwo')"
            img-src="../static/motos/fazer250red.png"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!-- <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoTwo') }}
              </span> -->
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleThree')"
            img-src="../static/motos/cg160titanblue.png"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center  justify-content-center">
              <b-link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <!--               <span class="font-weight-normal">
                {{ $t('pages.home.newsPrecoThree') }}
              </span> -->
            </div>
          </b-card>
        </b-col>
      </b-row>
      </b-container>


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
          hid: 'description',
          name: 'description',
          content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas..'
        },
        { name: 'url', content: '#' },

        // Open Graph
        { property: 'og:title', content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Início' },
        { property: 'og:site_name', content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Início' },
        { property: 'og:description', content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas..' },
        { property: 'og:url', content: '#' }
      ]
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


 .HO1{

    display:flex;
    /* background-color: #f7f7f7; */
    margin-right:2px;
}

.HO2{

    display:flex;
    /* background-color: #f7f7f7; */
    margin-right:2px;
}

.HO3{

    display:flex;
    /* background-color: #f7f7f7; */
    margin-right:2px;
}

.HO4{

    display:flex;
    /* background-color: #f7f7f7; */
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
</style>
