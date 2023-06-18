<template>
    <div class="restriction">
        <div class="restriction_content">
            <div class="restriction_content_text">
                <h2>ОГРАНИЧЕНИЯ</h2>
                <p>НЕ ДЕЛАЕМ:</p>
                <ul>
                    <li>ДОМА БОЛЕЕ 700 M2</li>
                    <li>ПРАВКИ ЧУЖИХ ПРОЕКТОВ</li>
                    <li>ПРОМЫШЛЕННЫЕ ОБЪЕКТЫ</li>
                </ul>
            </div>
        </div>
        <div class="restriction_img"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Restrictions"
  }
  </script>
  
  <style scoped>
  .restriction {
    height: 80vh;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
  }

  .restriction_content {
    width: 50%;
    background-color: yellow;
    display: flex;
    align-items: center;
  }
  
  .restriction_img {
    width: 50%;
    background-image: url("@/assets/images/priceImg.jpg"); 
    background-size: cover;
    background-position: center;
  }

  .restriction_content_text {
    padding-left: 3vw;
  }

  h2 {
    padding: 20px 0;
  }

  @media (max-width: 1400px) {
    .restriction {
        height: 60vh;
    }
  
    .restriction_content {
      width: 40%;
    }
  
    .restriction_img {
      width: 60%;
    }
  }

  @media (max-width: 1000px) {
    .restriction {
        height: 80vh;
        flex-direction: column;
    }
  
    .restriction_content {
        height: 40vh;
        width: 100%;

        display: flex;
        justify-content: center;
    }
  
    .restriction_img {
        height: 60vh;
        width: 100%;
    }
  }

  @media (max-width: 500px) {
    .restriction {
        height: 40vh;
    }

    .restriction_content {
        height: 100%;
    }
    .restriction_img {
        height: 0vh;
    }
  }
  
  </style>
  