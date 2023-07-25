<template>
  <div class="navbar">
    <router-link to="/" style="text-decoration: none;">
      <div class="navbar__title">
        <span style="color: yellow">АКВА </span>
        <span>Сервис Регион</span>
      </div>
    </router-link>
    
    <div class="navbar__btns" v-show="isMainMode">
      <a class="navbar__btn" href="#service">Услуги</a>
      <a class="navbar__btn" href="#work">Работы</a>
      <a class="navbar__btn" href="#price">Цены</a>
      <a class="navbar__btn" href="#contact">Контакты</a>
    </div>
    <div class="navbar__contacts">
      <span>+7(8552)20-00-11</span>
      <span>+7(967)379-00-11</span>
      <span>Пн.-Пт. 8:00-17:00</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['isMain'],
  data() {
    return {
      isMainMode: this.isMain
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.navbar__btns {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.navbar__btn {
  background: black;
  color: yellow;
  border: 0 black;
  text-decoration: none;
  margin: 10px;
}

.navbar__title {
  color: white;
  font-size: 25px;
}

.navbar__contacts {
  color: yellow;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

@media (max-width: 1000px) {
  .navbar {
    flex-direction: column;
  }

  .navbar__btns {
    flex-direction: column;
    margin: 30px 0;
  }

  .navbar__contacts {
    margin-bottom: 20px;
  }
}

@media (min-width: 1000px) {

}
</style>
