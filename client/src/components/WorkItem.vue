<template>
  <div class="workItem">
    <div class="workItem__circle">
      <p style="font-weight: 600">{{id}}</p>
    </div>
    <div class="workItem__text">
      <div>
        <h3>{{title}}</h3>
      </div>

      <div>
        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkItem",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.workItem {
  width: 30%;
  display: flex;
  flex-direction: row;
  margin: 30px 20px;
}


.workItem__circle {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: yellow;

  padding: 18px;
  align-items: center;
  font-weight: 300;
}

.workItem__text {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

h3 {
  font-size: 16px;
}

p {
  font-size: 14px;
  line-height: 1.55;
}

@media (max-width: 950px) {
  .workItem {
    width: 80%;
  }
}
</style>
