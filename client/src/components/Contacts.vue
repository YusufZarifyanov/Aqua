<template>
  <div class="contacts" id="contact">
    <div class="contacts__phone">
      <h1>+7(8552)20-00-11</h1>
      <h1>+7(967)379-00-11</h1>
      <h2 style="color: rgb(255, 130, 46)">service@aqua16.ru</h2>
    </div>

    <p style="padding-top: 30px">Адрес нашего офиса: Набережночелнинский проспект 45а</p>

    <div class="contacts__icons">
      <a href="https://service.aqua16.ru/">
        <i class="fab fa-twitter fa-lg"></i>
      </a>
      <a href="https://vk.com/sk_aqua16">
        <i class="fab fa-vk fa-lg"></i>
      </a>
      <a href="https://service.aqua16.ru/">
        <i class="fab fa-telegram-plane fa-lg"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data: () => ({
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
}
</script>

<style scoped>
.contacts {
  background-color: #f0f0f0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.contacts__phone {
  text-align: center;
}

.contacts__location {
  width: 70%;
  height: 500px;
  /*background-color: gray;*/
}

.contacts__icons {
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

h1 {
  padding: 10px;
}

a {
  text-decoration: none;
}

</style>
