<template>
  <div class="card">
    <img class="image" v-bind:src="pizza.imageUrl" alt="pizza image" />
    <div class="title">{{ pizza.name }}</div>
    <div class="price">{{ pizza.price }}$</div>
    <p class="detail">
      <router-link
        class="event-link"
        :to="{ name: 'detail-pizza', params: { id: pizza.id } }"
        >more details</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  padding: 0 50px;
}

.image {
  width: 100%;
  height: 214px;
}

.card {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.title {
  font-weight: 900;
  margin: 10px;
}
.price {
  font-weight: 700;
  margin: 15px;
}

.detail {
  text-decoration: underline;
  color: blue;
  font-size: 14px;
}
</style>
