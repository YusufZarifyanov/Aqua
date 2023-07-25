<template>
  <div class="serviceItem">
    <div class="serviceItem__image">
      <img :src="image">
    </div>

    <div class="serviceItem__description">
      <p>{{description}}</p>
    </div>

    <a href="#price">
      <button class="serviceItem__btn">
        Рассчитать стоимость
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: {
    image: {
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.serviceItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  height: 500px;
  margin: 1rem;
  /* margin-bottom: 20px; */
}

.serviceItem__description {
  height: 60px;
  color: black;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-top: 10px;
}

.serviceItem__btn {
  margin-top: 20px;
  background-color: black;
  color: yellow;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.serviceItem__image {
  height: 300px;
  overflow: hidden;
  width: 100%;
}

.serviceItem__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

p {
  font-size: 22px;
}

@media (max-width: 1000px) {
  .serviceItem {
    width: 75%;
    margin-bottom: 40px;
    background-size: cover;
  }

  /* img {
   width: 300px;
    height: 300px;
  } */
}

@media (max-width: 550px) {
  .serviceItem {
    width: 90vw;
  }
}
</style>
