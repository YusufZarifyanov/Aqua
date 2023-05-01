<template>
<div class="works" id="work">
  <div class="works__title">
    <h1>Примеры работ</h1>
  </div>
  <div class="works__images">
    <img
    v-for="imageObj in imageObjs"
    :src="imageObj.image"
    :key="imageObj.id"
    >
  </div>

  <div class="works__title">
    <h1>Ваши выгоды</h1>
  </div>

  <div class="works__profit">
    <WorkItem
        v-for="workItem in workItemData"
        :key="workItem.id"
        :id="workItem.id"
        :title="workItem.title"
        :description="workItem.description">
    </WorkItem>
  </div>
</div>
</template>

<script>
import WorkItem from "@/components/WorkItem";
import image1 from "@/assets/images/worksImg1.jpg"
import image2 from "@/assets/images/worksImg2.jpg"
import image3 from "@/assets/images/worksImg3.jpg"
import image4 from "@/assets/images/worksImg4.jpg"
import image5 from "@/assets/images/worksImg5.jpg"
import image6 from "@/assets/images/worksImg6.jpg"
import image7 from "@/assets/images/worksImg7.jpg"
import image8 from "@/assets/images/homeImg.jpg"

export default {
  data() {
    return {
      imageObjs: [
        {
          id: 1,
          image: image1
        },
        {
          id: 2,
          image: image2
        },
        {
          id: 3,
          image: image3
        },
        {
          id: 4,
          image: image4
        }, {
          id: 5,
          image: image5
        },
        {
          id: 6,
          image: image6
        },
        {
          id: 7,
          image: image7
        },
        {
          id: 8,
          image: image8
        },
      ],
      workItemData: [
        {
          id: 1,
          title: "Заключение договора",
          description: "Соблюдение всех установленных порядков"
        },
        {
          id: 2,
          title: "Гарантия на выполненную работу и материалы",
          description: "Головное предприятие обладает огромными ресурсами и в состоянии ответить по своим обязательствам"
        },
        {
          id: 3,
          title: "Выполняем работы только по проекту",
          description: "Проекты позволяют не закладывать излишнюю мощность приборов, что позволит избавиться от перерасхода материалов и энергии"
        },
        {
          id: 4,
          title: "Выполнение монтажей на качественных материалах и компонентах",
          description: "Мы работаем с известными производителями, которые гарантируют качество поставляемой продукции"
        },
        {
          id: 5,
          title: "Опыт работы",
          description: "На рынке более 9 лет"
        },
        {
          id: 6,
          title: "Для нас принципиально важны:",
          description: "Эстетика выполненных работ, Аккуратность, Чистота"
        },
      ]
    }
  },
  components: {
    WorkItem
  },
  name: "Works"
}
</script>

<style scoped>
.works {
  min-height: 100vh;
  background-color: #f0f0f0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.works__title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
}

.works__images {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 5vw;
}

.works__profit {
  min-width: 50vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 5vw 5vh 20px;
}

img {
  width: 24vw;
  height: 24vw;
  padding: 20px 20px;
}

@media (max-width: 950px) {
  img {
    width: 45vw;
    height: 45vw;
    padding: 5px 5px;
  }

  .works__images {
    justify-content: center;
  }
}

@media (max-width: 450px) {
  h1 {
    font-size: 25px;
  }
}
</style>
