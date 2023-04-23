<template>
  <div class="expansionPanel">
    <div class="expansionPanel__title">
      <h1>Ответы на вопросы</h1>
    </div>
    <div class="expansionPanel__panel">
      <v-expansion-panels>
        <v-expansion-panel
            title="Вы производите монтажные работы?"
            text="Да, мы полностью монтируем системы отопления под ключ в частном секторе, площадь которой не превышает 700кв/м."
        >
        </v-expansion-panel>
        <v-expansion-panel
            title="Есть ли у Вас гарантии на работы?"
            text="Мы даем гарантию 1 год на свои работы."
        >
        </v-expansion-panel>
        <v-expansion-panel
            title="Вы занимаетесь обслуживанием систем отопления?"
            text="Да, об этом нужно будет сказать специалисту или нашему менеджеру по телефону до начала составления договора."
        >
        </v-expansion-panel>
        <v-expansion-panel
            title="Сколько времени длится монтаж?"
            text="Зависит от типа работ и размера площади. Мы никогда не берем работу, если понимаем, что не сможем ее выполнить качественно и в необходимые сроки."
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="expansionPanel__description">
      <p>Если у вас остались, вопросы, пожалуйста, напишите нам на <span style="color: rgb(255, 130, 46)">service@aqua16.ru</span> или свяжемся по телефону</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpansionPanel"
}
</script>

<style scoped>
.expansionPanel {
  background-color: #f0f0f0;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.expansionPanel__title {
  width: 80%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.expansionPanel__panel {
  width: 80%;
}

.expansionPanel__description {
  margin: 40px 0;
  width: 80%;
  text-align: center;
}
</style>
