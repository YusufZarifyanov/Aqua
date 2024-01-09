<template>
  <div class="steplist">
    <div class="steplist__title">
      <h1>Процесс заказа</h1>
    </div>

    <v-app class="steplist__proc">
      <v-timeline v-if="!small" direction= "horizontal" truncate-line="both">
        <v-timeline-item>
          <div class="steplist__proc__item">
            <div class="text-h6" style="font-weight: 600"><h3>Согласование</h3></div>
            <p>
              Заказчик согласовывает стоимость и состав проектирования с менеджером проекта
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <div>
            <div class="text-h6" style="font-weight: 600">Техническое задание</div>
            <p>
              Составляется техническое задание для проекта
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <div>
            <div class="text-h6" style="font-weight: 600">Договор</div>
            <p>
              Заключается договор на проектирование и вносится предоплата
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <div>
            <div class="text-h6" style="font-weight: 600">Правки и сдача проекта</div>
            <p>
              Заказчик вносит правки и после оплачивает остаток по договору.
              Заказчику передается спецификация на материалы и оборудование
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
      <v-timeline v-else direction= "vertical" truncate-line="both">
        <v-timeline-item>
          <div class="steplist__proc__item">
            <h3>Согласование</h3>
            <p>
              Заказчик согласовывает стоимость и состав проектирования с менеджером проекта
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <div class="steplist__proc__item">
            <h3>Техническое задание</h3>
            <p>
              Составляется техническое задание для проекта
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <div class="steplist__proc__item">
            <h3>Договор</h3>
            <p>
              Заключается договор на проектирование и вносится предоплата
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <div class="steplist__proc__item">
            <h3>Правки и сдача проекта</h3>
            <p>
              Заказчик вносит правки и после оплачивает остаток по договору.
              Заказчику передается спецификация на материалы и оборудование
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Steplist",
  data: () => ({
    small: false
  }),
  created() {
    this.checkSize();
    window.addEventListener('resize', this.checkSize)
  },
  methods: {
    checkSize(){
      this.small = innerWidth < 1200
    }
  }
}
</script>

<style scoped>
*, ::after, ::before { box-sizing: border-box; }

.steplist {
  height: 650px;
  background-color: yellow;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.steplist__title {
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 5vh;
}

.steplist__proc {
  width: 1200px;
  height: 100px;
  background-color: yellow;
  padding-top: 5vh;
  overflow: hidden;
}

.steplist__proc__item {
  width: 300px;
  text-align: left;
  align-items: end;
  /*margin-left: 50px;*/
}

p {
  font-weight: 300;
  font-size: 15px;
  line-height: 1.55;
}

@media (max-width: 1200px) {
  .steplist {
    height: 1100px;
  }

  .steplist__proc {
    width: 70%;
  }

  .v-timeline--vertical.v-timeline {
    height: 800px;
  }

  .steplist__proc__item {
    width: 30vw;
    text-align: center;
  }
}

@media (max-width: 700px) {
  p {
    font-size: 10px;
  }

  h3 {
    font-size: 13px;
  }

  .steplist__proc__item {
    width: 20vw;
    text-align: center;
  }

  .steplist__proc__item {
    text-align: center;
  }
}
</style>
