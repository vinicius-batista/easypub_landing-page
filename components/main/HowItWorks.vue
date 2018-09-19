<template>
  <v-layout
    id="how-it-works"
    justify-center
    align-center
    wrap
    class="my-5"
  >
    <v-flex xs12 sm4 class="my-3">
      <div class="text-xs-center">
        <h2 class="primary--text headline font-weight-bold">Como funciona</h2>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center>
          <v-flex
            v-for="({ icon, text, title}, i) in items"
            :key="i"
            xs12
            md2
          >
            <v-card flat class="transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="primary--text">{{ icon }}</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <span class="headline primary--text font-weight-medium text-xs-center">
                  {{ title }}
                </span>
              </v-card-title>
              <v-card-text
                class="blue-grey--text text--darken-1 font-weight-regular text-xs-center subheading"
              >
                {{ text }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'HowItWorks',
  data: () => ({
    items: [
      {
        icon: 'fa-check',
        title: 'Sem erros',
        text: `Você faz o pedido pelo celular e ele vai direto para o bar. Sem intermediários que podem anotar errado o seu pedido.`
      },
      {
        icon: 'fa-qrcode',
        title: 'Simples e rápido',
        text: `Sem necessidade de baixar grandes aplicativos. Apenas leia o QR Code  na  mesa do bar e estará pronto para fazer o pedido.`
      },
      {
        icon: 'fa-mobile-alt',
        title: 'Tudo integrado',
        text: `Escolha o bar, pegue uma mesa, faça o pedido e pague a conta tudo isso no mesmo aplicativo sem sair de seu celular.`
      },
      {
        icon: 'fab fa-elementor',
        title: 'Cardápios completos',
        text: `Com os cardápios digitais, você terá acesso a mais informações sobre os produtos do que os cardápios convencionais.`
      }
    ]
  })
}
</script>
