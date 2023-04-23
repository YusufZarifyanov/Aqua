<template>
  <div id="price" class="price">
    <div class="price__text">
      <h1>Расчет стоимости проектирования и монтажных работ</h1>
      <p>С вами свяжется наш специалист</p>
    </div>

    <form @submit.prevent>
      <Input
          v-model="name"
          type="text"
          placeholder="Имя"
      />
      <Input
          v-model="phone"
          type="text"
          placeholder="Телефон"
      />
      <Input
          v-model="email"
          type="text"
          placeholder="E-mail"
      />

      <button
          class="price__button"
          @click="sendMsgToEmail"
      >
        Отправить заявку
      </button>
    </form>
  </div>
</template>

<script>
import Input from "@/components/UI/Input";

export default {
  name: "Price",
  components: {
    Input
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    }
  },
  methods: {
    sendMsgToEmail() {
      console.log(this.name, this.phone, this.email)
    }
  }
}
</script>

<style scoped>
.price {
  min-height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url("@/assets/images/priceImg.jpg") center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.price__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 50%;
}

.price__button {
  width: 100%;
  background-color: yellow;
  margin: 15px;
  border-radius: 5px;

  padding: 20px;
}

form {
  display: flex;
  flex-direction: row;
  width: 80%;
}

h1 {
  color: black;
  margin: 20px 0;
}

p {
  font-size: 24px;
  color: white;
  margin: 20px 0;
}

h1 {
  font-size: 48px;
  color: white;
}

@media (max-width: 900px) {
  form {
    flex-direction: column;
  }

  .price__text {
    width: 80%;
  }
}

@media (max-width: 550px) {
  p {
    font-size: 20px;
  }

  h1 {
    font-size: 30px;
  }
}
</style>
