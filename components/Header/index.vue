<template>
  <header>
    <b-navbar class="bg-light" toggleable="lg">
      <b-container class="py-2">
        <b-navbar-brand :to="{ path: '/' }">
          <img
            src="../../static/logos/logo-dark.png"
            alt="GP MOTOS"
            width="120"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
          <b-navbar-nav>

            <nuxt-link to="/" class="nav-link">
              {{ $t('menu.home') }}
            </nuxt-link>

            <nuxt-link to="/empresa" class="nav-link">
              {{ $t('menu.empresa') }}
            </nuxt-link>

           <nuxt-link to="/compras" class="nav-link">
              {{ $t('menu.compras') }}
            </nuxt-link>


            <!-- <b-nav-item-dropdown :text="$t('menu.compras.title')" class="nav-link dropdown" left>
              <b-dropdown-item href="/" target="_blank" rel="noopener noreferrer">
                {{ $t('menu.compras.serviceOne') }}
              </b-dropdown-item>

              <b-dropdown-item href="/" target="_blank" rel="noopener noreferrer">
                {{ $t('menu.compras.serviceTwo') }}
              </b-dropdown-item>
            </b-nav-item-dropdown> -->

            <nuxt-link to="/contact" class="nav-link">
              {{ $t('menu.contact') }}
            </nuxt-link>


  <b-nav-item-dropdown :text="$t('menu.login.title')" class="nav-link dropdown" left>
              <b-dropdown-item href="/" target="_blank" rel="noopener noreferrer">
                {{ $t('menu.login.serviceOne') }}
              </b-dropdown-item>

              <b-dropdown-item href="/" target="_blank" rel="noopener noreferrer">
                {{ $t('menu.login.serviceTwo') }}
              </b-dropdown-item>


              <b-dropdown-item href="/" target="_blank" rel="noopener noreferrer">
                {{ $t('menu.login.serviceTree') }}
              </b-dropdown-item>
            </b-nav-item-dropdown>


            <b-nav-item-dropdown :text="$t('menu.language')" class="nav-link dropdown" left>
                <b-dropdown-item
                  href="#"
                  v-for="locale of availableLocales"
                  :key="locale.code"
                  @click.prevent="switchLocalePath(locale.code)"
                >
                  {{ locale.name }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
                 </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    }
  },

  methods: {
    switchLocalePath(code) {
      this.$i18n.setLocale(code)
    }
  }
}
</script>

<style scoped>
.bg-light {
  background-color: var(--white-color) !important;
}

.nav-link {
  color: var(--black-200-color);
  font-size: 1.2rem;
  margin-inline: 0.5rem;
  width: -moz-fit-content;
  width: fit-content;
}
.nav-link:hover {
  background-color: transparent;
  color: var(--black-color);
}
.nav-link::after {
  background-color: var(--primary-color);
  content: "";
  display: block;
  height: 2px;
  transition: 0.6s ease;
  width: 0%;
}
.nav-link:hover::after {
  transition: 0.6s ease;
  width: 70%;
}

li.dropdown {
  padding-block: 0;
}
</style>
