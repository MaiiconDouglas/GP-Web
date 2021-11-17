
<template>
<!--==================== HEADER ====================-->
    <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">GP MOTOS</a>

              <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
        <span id="hamburger"></span>
      </button>
            <!-- <a href="index.html"><img src="~/static/img/logo-dark.png" ></a> -->
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list grid">
                    <li class="nav__item">
                        <a href="/" class="nav__link active-link">
                            <i class="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="/quemsomos" class="nav__link">
                            <i class="uil uil-user nav__icon"></i> Sobre Min
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="compras" class="nav__link">
                            <i class="uil uil-file-alt nav__icon"></i> Compras
                        </a>
                    </li>
                     <!-- <li class="nav__item">
                        <a href="vendas" class="nav__link">
                            <i class="uil uil-file-alt nav__icon"></i> Vendas
                        </a>
                    </li> -->
                    <li class="nav__item">
                        <a href="fale" class="nav__link">
                            <i class="uil uil-scenery nav__icon"></i> Fale Conosco
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="login" class="nav__link">
                            <i class="uil uil-estate nav__icon"></i> Login
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" id="nav-close"></i>
            </div>

             <!-- <div class="nav__btns"> -->
                <!--Theme Change Button-->
                <!-- <i class="uil uil-moon change-theme" id="theme-button"></i>

                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </div> -->
        </nav>

    </header>
</template>


<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "appp"
};
</script>

<style scoped>

#menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

#menu a {
  display: block;
  padding: 0.5rem;
}

#btn-mobile {
  display: none;
}

@media (max-width: 600px) {
  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: #e7e7e7;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
  #nav.active #menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }
  #menu a {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  }
  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
  #hamburger {
    border-top: 2px solid;
    width: 20px;
  }
  #hamburger::after,
  #hamburger::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  #nav.active #hamburger {
    border-top-color: transparent;
  }
  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }
  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}

</style>
