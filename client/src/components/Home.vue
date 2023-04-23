<template>
  <div class="home">
    <div class="home__title">
      <p>Проектирование и монтаж систем отопления в частных домах под ключ</p>
    </div>
    <div class="home__btns">
      <a href="#price" style="color: black">
        <button class="home__btn1">
          Рассчитать стоимость
        </button>
      </a>

      <a href="#service">
        <button class="home__btn2">
          Услуги
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home {
  height: 90vh;
  background-image:
      linear-gradient(to bottom, rgba(4, 69, 87, 0.80), rgba(117, 19, 93, 0.73)),
      url("@/assets/images/homeImg.jpg");
  background-size: cover;
  min-height: 90vh;

  display: flex;
  flex-direction: column;
  padding: 10vh 0 38px 10vw;
}

.home__title {
  width: 60vw;
  min-height: 60px;
  font-weight: 600;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.20);
  text-align: left;
  line-height: 1.23;
}

.home__btns {
  display: flex;
  flex-direction: row;
  width: 50vw;
  justify-content: space-around;
  margin-top: 10vh;
}

.home__btn1 {
  width: 20vw;
  height: 50px;
  background-color: yellow;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home__btn2 {
  width: 15vw;
  height: 50px;
  background: none;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  text-align: center;
}

p {
  color: white;
  font-size: 48px;
  font-weight: 600;
}

a {
  text-decoration: none;
}

@media (max-width: 900px) {
  .home__title {
    width: 70vw;
  }

  .home__btns {
    width: 70vw;
  }

  .home__btn1 {
    width: 40vw;
  }
}

@media (max-width: 600px) {
  p {
    font-size: 30px;
  }

  .home {
    padding-top: 20vh;
  }
}

@media (max-width: 450px) {
  .home__btns {
    flex-direction: column;
  }

  .home__btn1 {
    width: 60vw;
  }

  .home__btn2 {
    margin-top: 20px;
    width: 40vw;
  }
}
</style>
