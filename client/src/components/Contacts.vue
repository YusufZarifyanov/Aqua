<template>
  <div class="contacts" id="contact">
    <div class="contacts__phone">
      <h1>+7(8552)20-00-11</h1>
      <h1>+7(967)379-00-11</h1>
      <h2 style="color: rgb(255, 130, 46)">service@aqua16.ru</h2>
    </div>

    <p style="padding-top: 30px">Адрес нашего офиса: Набережночелнинский проспект 45а</p>

    <div id="map" class="contacts__location"></div>

    <div class="contacts__icons">
      <a href="https://service.aqua16.ru/">
        <i class="fab fa-twitter fa-lg"></i>
      </a>
      <a href="https://vk.com/sk_aqua">
        <i class="fab fa-vk fa-lg"></i>
      </a>
      <a href="https://t.me/adele_aout">
        <i class="fab fa-telegram-plane fa-lg"></i>
      </a>
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
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contacts__phone {
  text-align: center;
}

.contacts__location {
  width: 1000px;
  height: 400px;
  background-color: gray;
  margin: 40px 0;
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

@media (max-width: 1050px) {
  .contacts__location {
    width: 90%;
  }
}

</style>
