<template>
  <main>
    <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">GP MOTOS</h1>
          <span class="footer__subtitle"> .....</span>
        </div>

        <ul class="footer__links">
          <li>
            <a href="#services" class="footer__link">SERVIÇOS</a>
          </li>

          <li>
            <a href="#portfolio" class="footer__link">QUEM SOMOS</a>
          </li>

          <li>
            <a href="#contact" class="footer__link">FALE CONOSCO</a>
          </li>
        </ul>

        <div class="footer__socials">
          <a
            href="https://www.facebook.com/"
            class="footer__social"
            target="_blank"
            className="footer__social"
          >
            <i class="uil uil-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="footer__social"
            className="footer__social"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </div>
      </div>

      <p class="footer__copy">&#169; GP MOTOS. Todos os direitos reservados.</p>
    </div>
  </footer>
  </main>
</template>




<style scoped>
.container{
    max-width: 768px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
}
 .footer__container{
        grid-template-columns: repeat(2, 1fr);
    }
        .footer__container{
        padding: 0 1rem;
    }

   .footer__container{
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1024px) {
    .footer__container{
        padding: 0;
    }
.grid{
    display: grid;
    gap: 1.5rem;
}
.header{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
}

/*==================== NAV ====================*/
.nav
{
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
}


/*==================== FOOTER ====================*/
.footer{
    padding-top: 2rem;
}

.footer__container{
    row-gap: 3.5rem;
}

.footer__bg{
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;
}

.footer__title{
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-25);
}

.footer__subtitle{
    font-size: var(--small-font-size);
}
.footer__links{
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
}

.footer__link:hover{
    color: var(--first-color-lighter);
}

.footer__social{
    font-size: 1.25rem;
    margin-right: var(--mb-1-5);
}

.footer__social:hover {
    color: var(--first-color-lighter);
}

.footer__copy{
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--text-color-light);
    margin-top: var(--mb-3);
}

.footer__title,
.footer__subtitle,
.footer__link,
.footer__social{
    color: #FFF;
}
}
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://unicons.iconscout.com/release/v4.0.0/css/line.css');
@import url('https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css');
</style>
