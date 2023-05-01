<template>
  <div id="price" class="price">
    <div class="price__text">
      <h1>Расчет стоимости проектирования и монтажных работ</h1>
      <p>С вами свяжется наш специалист</p>
    </div>

    <form @submit.prevent="submit">
      <div class="price__input">
        <v-text-field
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="Имя"
            bg-color="white"
        ></v-text-field>
      </div>

      <div class="price__input">
        <v-text-field
            v-model="phone.value.value"
            :counter="7"
            :error-messages="phone.errorMessage.value"
            label="Телефон"
            class="price__input"
            bg-color="white"
        ></v-text-field>
      </div>

      <div class="price__input">
        <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
            class="price__input"
            bg-color="white"
        ></v-text-field>
      </div>

      <v-btn
          class="price__button"
          type="submit"
          height="58px"
      >
        Отправить заявку
      </v-btn>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from 'vee-validate'
import axios from "axios";

export default {
  name: "Price",
  setup () {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name (value) {
          if (value?.length >= 2) return true

          return 'Длина имени должна быть больше 2 символов.'
        },
        phone (value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true

          return 'Укажите корретный телефон'
        },
        email (value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Укажите корректный e-mail.'
        },
      },
    })

    const name = useField('name')
    const phone = useField('phone')
    const email = useField('email')

    const submit = handleSubmit(values => {
      console.log(values)
      axios.post(
          `${process.env.VUE_APP_SERVER_URL}/email/send`,
          {
            name: values.name,
            phone: values.phone,
            email: values.email
          }
      )

      handleReset()
    })

    return { name, phone, email, submit }
  },
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
  width: 15vw;
  background-color: yellow;
  border-radius: 5px;
  height: 56px;

  margin-left: 30px;
}

.price__input {
  width: 15vw;
  margin: 0 20px;
}

form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
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

@media (max-width: 1100px) {
  form {
    flex-direction: column;
    align-items: center;
  }

  .price__text {
    width: 80%;
  }

  .price__input {
    width: 50vw;
    margin: 0 auto;
  }

  .price__button {
    margin: 20px 0;
    width: 50vw;
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
