<template>
  <div class="services" id="service">
    <div>
      <h1>Наши услуги</h1>
    </div>
    <div class="services__description">
      <p>Мы проектируем и монтируем системы: отопления, водоснабжения, канализации, а также котельные в частных домах.</p>
    </div>
    <div class="services__images">
      <ServiceItem
      v-for="imageObj in images"
      :image="imageObj.image"
      :description="imageObj.description"
      :key="imageObj.id"
      ></ServiceItem>
    </div>
    <a href="https://192.168.50.112:8080/file.pdf">
      <button class="services__downloadLink">
        ПОСМОТРЕТЬ ПРАЙС-ЛИСТ
      </button>
    </a>
  </div>
</template>

<script>
import ServiceItem from "@/components/ServiceItem";
import image from "@/assets/images/serviceImg1.jpg"

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      images: [
        {
          id: 1,
          image,
          description: "Котельные и тепловые пункты"
        },
        {
          id: 2,
          image,
          description: "Водоснабжение и канализация"
        },
        {
          id: 3,
          image,
          description: "Теплый пол"
        },
        {
          id: 4,
          image,
          description: "Радиаторное отопление"
        },
      ]
    }
  },
  name: "Services",
  components: {
    ServiceItem
  }
}
</script>

<style scoped>
  .services {
    min-height: 90vh;
    background: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
  }

  .services__description {
    width: 50vw;
    min-height: 10vh;

    color: black;
    padding-top: 20px;
    position: relative;
    margin: 20px 0;

    text-align: center;
  }

  .services__images {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin: 20px;
  }

  .services__downloadLink {
    background-color: white;
    padding: 15px;
    margin: 40px;
    border-radius: 10px;
    color: black;
    transition: background-color 0.5s ease-in 0.3s;
  }

  h1 {
    color: black;
    font-size: 45px;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 1.5;
    font-size: 24px;
  }

  a {
    text-decoration: none;
  }

  button:hover {
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
  }

  @media (max-width: 1000px) {
    .services__images {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .services__description {
      width: 70vw;
      padding: 40px 0;
    }
  }

  @media (max-width: 550px) {
    .services__description {
      width: 95vw;
    }

    p {
      font-size: 20px;
    }
  }
</style>
