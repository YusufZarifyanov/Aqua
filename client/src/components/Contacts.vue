<template>
  <div class="contacts" id="contact">
    <!-- <div class="contacts__phone">  -->
      <a class="phone-but" href="tel:+7(8552)20-00-11">+7(8552)20-00-11</a>
      <a class="phone-but" href="tel:+7(967)379-00-11">+7(967)379-00-11</a>
      <a class="email-but" href="mailto:service@aqua16.ru">service@aqua16.ru</a>
      <!-- <h2 style="color: rgb(255, 130, 46)">service@aqua16.ru</h2> -->
    <!-- </div> -->

    <p style="padding-top: 30px">Адрес нашего офиса: Набережночелнинский проспект 45а</p>

    <div id="map" class="contacts__location"></div>

    <div class="contacts__meta">
      <div class="contacts__left">
        <router-link to="/policy">Политика конфидецианольности</router-link>
      </div>
      <!-- <div class="contacts__icons">
        <a href="https://service.aqua16.ru/">
          <i class="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://vk.com/sk_aqua">
          <i class="fab fa-vk fa-lg"></i>
        </a>
        <a href="https://t.me/adele_aout">
          <i class="fab fa-telegram-plane fa-lg"></i>
        </a>
      </div> -->
      <div class="contacts__right"></div>
    </div>

  </div>
</template>

<script>
function init() {
  const center = [55.719094, 52.368539]

  // eslint-disable-next-line
  const map = new ymaps.Map("map", {
    center,
    zoom: 15
  });

  // eslint-disable-next-line
  let placemark = new ymaps.Placemark(center, {}, {});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);
}

export default {
  name: "Contacts",
  mounted() {
    // eslint-disable-next-line
    ymaps.ready(init);
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
  display: flex;
  flex-direction: column;
  text-align: center;
}

.contacts__location {
  width: 1000px;
  height: 400px;
  background-color: gray;
  margin: 40px 0;
}

.contacts__meta {
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  width: 90%;
  height: 50px;
}

.contacts__icons {
  /* height: 100px; */
  width: 100px;
  display: flex;
  justify-content: space-around;
}

.contacts__left, .contacts__right {
  flex: 1;
  text-align: start;
  font-size: 14px;
}

.phone-but {
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 30px;
  font-weight: 600;
}

.email-but {
  color: rgb(255, 130, 46);
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
}

a {
  text-decoration: none;
}

@media (max-width: 1050px) {
  .contacts__location {
    width: 90%;
  }
}

</style>
