<template>
	<main>
<!-- 		background="#F1F1F1" -->
    	<b-carousel
				class="m-5"
				id="carousel-1"
				v-model="slide"
				:interval="4000"
				controls

				img-height="450"
				img-width="1920"
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<b-carousel-slide>
					<template #img>
					<img
							class="d-block img-fluid mx-auto"
							height="300"
							width="900"
							src="../static/motos/fachada.jpg"
								alt="Fachada"
						>
					</template>
				</b-carousel-slide>

				<b-carousel-slide>
					<template #img>
						<img
							class="d-block img-fluid mx-auto"
							height="300"
							width="900"
							src="../static/motos/fachada.jpg"
							alt="Fachada"
						>
					</template>
				</b-carousel-slide>
			</b-carousel>
		<b-container class="pt-4">
				<b-row>
					<b-col cols="12">
						<div>
							<h1 class= "text-center">Sobre Nos</h1>

							<p class="description text-center">
						 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit dolorum voluptate praesentium impedit iure suscipit
             ducimus veritatis blanditiis ea porro possimus, aspernatur facilis accusamus maiores eveniet ex quos voluptates.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit dolorum voluptate praesentium impedit iure suscipit
             ducimus veritatis blanditiis ea porro possimus, aspernatur facilis accusamus maiores eveniet ex quos voluptates.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit dolorum voluptate praesentium impedit iure suscipit
             ducimus veritatis blanditiis ea porro possimus, aspernatur facilis accusamus maiores eveniet ex quos voluptates.
							</p>
						</div>
					</b-col>
				</b-row>
					<b-row class="text-center mt-3">
					<b-col cols="12" lg="4">
						<div class="m-4">
							 <!-- <img src="../static/icons/" alt="Missao" width="50" class="mt-n3"> -->
							<h2 class="d-inline-flex pt-2 ">Missão</h2>

						</div>
						<div>

							<p class="mt-3">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, accusamus quidem a laborum atque asperiores rem placeat dolor quas voluptatibus provident error sed! Unde officia maiores facilis, quisquam itaque nesciunt.
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-4">
							 <!-- <img src="../static/icons/vision.svg" alt="Visao" width="50"> -->
							<h2 class="d-inline-flex pt-2">Visão</h2>

							<p class="mt-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum in ex, blanditiis, cumque repellat quam at ullam quibusdam error voluptas, quis magni id eaque? Quidem ab vitae ea atque dolores.
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-4">
							<!-- <img src="../static/icons/value.png" alt="Valores da Fatec Matão" width="50" class="mt-n2">  -->
							<h2 class="d-inline-flex mt-2">Valores</h2>
             <!-- <img src="../static/icons/valores.svg" alt="Valores" width="50"> -->
							<p class="mt-3 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laborum ad deserunt a id, ullam animi molestiae obcaecati molestias magni exercitationem maiores maxime, ratione sapiente officiis ipsum optio nam corrupti!
							</p>
						</div>
					</b-col>
				</b-row>


		</b-container>
	</main>
</template>

<script>
export default {
  head() {
   return {
      title: "GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Empresa",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas..'
        },
        { name: 'url', content: '#' },

        // Open Graph
        { property: 'og:title', content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Empresa' },
        { property: 'og:site_name', content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas.. | Empresa' },
        { property: 'og:description', content: 'GP Motos | Vendas é Compras de Motos Usadas é Novas..' },
        { property: 'og:url', content: '#' }
      ]
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: clamp(2.45rem, 5vw - 0.5rem, 3.5rem);
  font-weight: 650;
}
p {
  font-size: 1.25rem;
}
</style>
