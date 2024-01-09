<template>
  <div class="home">
    <div class="home__container">
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
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home {
  background-image:
      linear-gradient(rgba(4,69,87,0.50), rgba(4,30,56,0.80)),
      url("@/assets/images/homeImg.jpg");
  background-size: cover;
  min-height: 92vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.home__container {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.home__title {
  width: 700px;
  font-size: 52px;
  font-weight: 600;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.20);
  text-align: left;
  line-height: 1.23;
}

.home__btns {
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
}

.home__btn1 {
  width: 300px;
  height: 50px;
  background-color: yellow;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home__btn1:hover {
  background-color: rgb(223, 238, 6);
}

.home__btn2 {
  width: 160px;
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

  margin-left: 10px;
}

.home__btn2:hover {
  background-color: rgb(223, 238, 6);
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

@media (max-width: 650px) {
  p {
    font-size: 30px;
  }

  .home {
    padding-top: 20vh;
  }

  .home__title {
    font-size: 30px;
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

@media (max-width: 1600px) {
 .home__container {
  width: 80%;
 }

 .home__title {
  width: 80%;
  font-size: 48px;
 }
}
</style>
