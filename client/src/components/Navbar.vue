<template>
  <div class="navbar">
    <div class="navbar__container">
        <a href="https://aqua16.ru">
            <button class="navbar__link">
              Вернуться на главный сайт
            </button>
          </a>
        <div class="navbar__title">
          <router-link to="/" style="text-decoration: none;">
            <span style="color: yellow">АКВА </span>
            <span style="color: white">Сервис Регион</span>
          </router-link>
        </div>
    
      <div class="navbar__btns" v-show="isMainMode">
        <a class="navbar__btn" href="#service">Услуги</a>
        <a class="navbar__btn" href="#work">Работы</a>
        <a class="navbar__btn" href="#price">Цены</a>
        <a class="navbar__btn" href="#contact">Контакты</a>
      </div>
      <div class="navbar__contacts">
        <a class="phone-but" href="tel:+7(8552)20-00-11">+7(8552)20-00-11</a>
        <a class="phone-but" href="tel:+7(967)379-00-11">+7(967)379-00-11</a>
        <span>Пн.-Пт. 8:00-17:00</span>
      </div>
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
  justify-content: center;
  min-height: 8vh;
}

.navbar__container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
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

.navbar__btn:hover {
  color: rgb(156, 152, 23);
}

.navbar__container__link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar__link {
  width: 300px;
  height: 35px;
  background-color: yellow;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.navbar__link:hover {
  background-color: rgb(223, 238, 6);
}

.navbar__title {
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  height: 100%;

  display: flex;
  flex-direction: column;;
  justify-content: center;
  align-items: center;
} 

.navbar__contacts {
  color: yellow;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.phone-but {
  text-decoration: none;
  color: yellow;
}

a {
  text-decoration: none;
}

@media (max-width: 1000px) {
  .navbar {
    flex-direction: column;
  }

  .navbar__container {
    flex-direction: column;
    margin-top: 20px;
  }

  .navbar__btns {
    flex-direction: column;
    margin: 30px 0;
  }

  .navbar__contacts {
    margin-bottom: 20px;
  }

  .navbar__link {
    margin: 20px;
  }
}

@media (max-width: 1600px) {
 .navbar__container {
  width: 100%;
 }

 .navbar__link {
  width: 200px;
  height: 50px;
 }
}
</style>
