<template>
    <div class="rate">
        <div class="rate__content">
           <h2>РАСЦЕНКИ НА ПРОЕКТИРОВАНИЕ</h2>
           <ol>
            <li>Обычный(250p/м2). Не менее 35 000р.</li>
            <li>Обычный + канализация(290р/м2). Не менее 35 000р.</li>
            <li>Интерактивный 3D(330р/м2). Не менее 46 000р.</li>
            <li>Интерактивный 3D + канализация(370р/м2). Не менее 46 000р.</li>
          </ol>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Restrictions"
  }
  </script>
  
  <style scoped>
  .rate {
    height: 100vh;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;

    /* background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.8)), ; */
    filter: brightness(80%);
    /* opacity: 0.8; */
    background-image: url("@/assets/images/worksImg7.jpg"); 
    background-size: cover;
    background-position: center;
  }

  .rate__content {
    color: yellow;
    text-align: center;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 5vh;
  }

  ol {
    font-size: 20px;
  }

  li {
    margin: 10px;
  }

  @media (max-width: 650px) {
    h2 {
      font-size: 24px
    }

    ol {
    font-size: 15px;
  }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 15px
    }

    ol {
    font-size: 10px;
  }
  }
  
  </style>
  