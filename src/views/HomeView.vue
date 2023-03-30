<template>
  <div class="home">
    <h1>app gallery</h1>
    <div class="container">
      <pizza-card v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PizzaCard from "@/components/PizzaCard.vue";
import PizzaService from "@/services/PizzaService";
export default {
  components: {
    PizzaCard,
  },
  data() {
    return {
      pizzas: [],
    };
  },
  created() {
    PizzaService.getpizzas()
      .then((res) => {
        this.pizzas = res.data;
      })
      .catch((error) => console.error(error.message));
  },
};
</script>
