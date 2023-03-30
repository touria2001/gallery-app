<template>
  <div class="containerDetails">
    <div class="details">
      <img class="image" v-bind:src="pizza.imageUrl" alt="pizza image" />
      <h4>{{ pizza.name }}</h4>
      <p>{{ pizza.description }}</p>
      <p>{{ pizza.price }}$</p>
    </div>
  </div>
</template>

<script>
import PizzaService from "@/services/PizzaService";
export default {
  props: ["id"],
  data() {
    return {
      pizza: {},
    };
  },
  created() {
    console.log(this.id);
    PizzaService.getPizza(this.id)
      .then((res) => (this.pizza = res.data))
      .catch((error) => {
        console.log(error.res);
      });
  },
};
</script>

<style>
.details {
  z-index: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: solid 1px #eee;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  align-items: center;
}
</style>
