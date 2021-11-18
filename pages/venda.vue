<template>
  <main>
            <article>
            <section>
                <div class="row">
                    <div class="col-md-6">
                       <img class ="fotoDaMoto" src ="static/moto/nova1.jpeg" style="width:85%" alt = "Honda biz, ano 2021, cor vermelha. A venda na GPmotos Taquaritinga-SP">
                   </div>

                   <div class="col-md-6">
                        <div class="quadro">
                            <div class="quadro__infos">
                                <h1>HONDA BIZ 2021</h1>
                                <div>
                                    <h3>Aceitamos pagamentos com cartão de crédito e débito  com as seguintes bandeiras</h3>
                                    <ul class="listaPagEsp">
                                        <li><img src ="../static/cartao/logoAmerican.png" style="width:8%"> American Express</li>
                                        <li><br></li>
                                        <li><img src ="../static/cartao/logoElo.png" style="width:8%"> Elo</li>
                                        <li><br></li>
                                        <li><img src ="../static/cartao/logoMaster.png" style="width:8%"> Mastercard</li>
                                        <li><br></li>
                                        <li><img src ="../static/cartao/logoVisa.png" style="width:8%"> Visa</li>
                                    </ul>

                                    <h4>Ou Então pague diretamente em nossa loja após verificar o valor e os métodos de financiamento</h4>

                                    <h4>R$ 10,590 à vista</h4>
                                    <br>
                                    <h5>Financiamentos</h5>
                                    <ul class="listaPagEsp">
                                        <li>Parcelamento em 8 vezes de R$ 1323,75</li>
                                        <li>Parcelamento em 6 vezes de R$ 1765,00 </li>
                                        <li>Parcelamento em 4 vezes de R$ 2645,50</li>
                                        <li>Parcelamento em 2 vezes de R$ 5295,00</li>
                                    </ul>

                                    <div>
                                        <button type="button" class="btn btn-warning" style="width:50%" >COMPRAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </section>
        </article>

  </main>
</template>
<style scoped>
.container{
    display:flex;
    justify-content:space-around;
    align-items: center;
    margin-top:10px;
    margin-bottom:10px;
}


.botao-compras-seletor{
    margin-top:30px;
}


.footer{
    display: flex;
    justify-content: space-around;
    text-align: center;
    color:white;

}

.carousel-item{
    height:300px;
}

.carousel-img{
    position: absolute;
    top:0;
    left:0;
    height:300px;
    width:150px;
}

.seletor{
    margin-top:30px;
}

.titulo-compras{
    display: flex;
    justify-content: center;
    text-align: center;
}

#area
{
  position:relative;
  left:37%;
  top:29%;
  width:320px;
  height:270px;
}
#area #formulario
{
  position:absolute;
  display:block;
}
fieldset
{
  width:300px;
  height:250px;
}


.cartoes{
    margin-right:5px;
}

.mapa{
    display:flex;
    align-items: center;
    justify-content: center;
}


</style>
