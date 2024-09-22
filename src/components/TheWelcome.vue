<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import HabilitationsIcon from './icons/IconHabilitations.vue'
import PriceIcon from './icons/IconPrice.vue'

</script>

<template>
<WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Ubicación</template>
    <span class="black-text">Ruta 12 Km 381. A 1500m de la entrada a Pueblo Edén y 26 km de Solanas.</span>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Caracteristicas</template>

    <span class="black-text">Fracciones de 125m de frente por 400m de fondo (excepto la fracción nº7 que cuenta con algo más de 5há.) <br> Orientadas hacia el norte, con lo cual se obtiene una vista privilegiada tanto de la salida como de la puesta del sol.</span>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Relieve</template>

    <span class="black-text">El punto más alto sobre el nivel del mar se encuentra en la fracción nº7 y es de 128 metros.<br>El punto más bajo está en la fracción nº4 y es de 88 metros.<br>Todas tienen alturas que superan los 100 metros.</span>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Ecosistema</template>

    <span class="black-text">Vegetación de especies autóctonas, tajamares, cañada y cerco de pierda.</span>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Accesos</template>

    <span class="black-text">Servidumbre de paso por la que se accede a 200 metros de la ruta 12, por donde pasa el tendido de UTE.</span>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <HabilitationsIcon />
    </template>
    <template #heading>Habilitaciones</template>
    <span class="black-text">Fraccionamiento aprobado por la Dirección Nacional de Catastro y la Intendencia Departamental de Maldonado. Pronto para escriturar.</span>
  </WelcomeItem>

  <WelcomeItem class="no-lines">
    <template #icon>
      <PriceIcon />
    </template>
    <template #heading>Precio</template>
    <span class="black-text">100.000 Dólares.</span>
  </WelcomeItem>
</template>

<style scoped>
.black-text {
  color: black;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;

}
</style>
