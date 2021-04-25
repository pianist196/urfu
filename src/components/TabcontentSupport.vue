<template>
  <div class="tabcontent-support">
    <div class="tabcontent-support__title">Мониторинг и поддержка</div>
    <div class="tabcontent-support__wrapper">
      <div class="tabcontent-support__table">
        <p class="tabcontent-support__table-text">"Привет!</p>
        <p class="tabcontent-support__table-text">
          Обучение в университете - это важный этап в жизни любого человека.
          Осваивая различные дисциплины студент развивает свои компетенции,
          которые характеризуют его как профессионала.
        </p>
        <p class="tabcontent-support__table-text">
          У тебя появилась возможность отслеживать уровень своих компетенций в
          процессе обучения и управлять своим образованием через правильный
          выбор дисциплин, майноров, тем курсовых проектов и итоговой
          квалификационной работы.
        </p>
        <p class="tabcontent-support__table-text">
          Сервис "Колесо компетенций" разработан специально для студентов УрФУ,
          чтобы помочь им выстроить свою индивидуальную образовательную
          траекторию и реализовать свои амбиции в будущем.
        </p>
        <p class="tabcontent-support__table-text">
          Никто, кроме тебя, не видит твой компетентностный профиль.
        </p>
        <p class="tabcontent-support__table-text">
          Также мы будем рады любой обратной связи во вкладке "Мониторинг и
          поддержка".
        </p>
        <p class="tabcontent-support__table-text">
          Команда разработчиков Цифрового университета"
        </p>
      </div>
      <div class="tabcontent-support__accordion">
        <div class="tabcontent-support__accordion-title">
          F.A.Q. Часто задаваемые вопросы:
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <h3 class="accordion-item-head" @click="accordion">
              - Для чего сделан этот сервис?
            </h3>
            <div class="accordion-item-body">
              Кто, по-вашему, этот мощный старик? Не говорите, вы не можете
              этого знать. Это — гигант мысли, отец русской демократии и особа,
              приближенная к императору.
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-item-head" @click="accordion">
              - Как составлялись диаграммы?
            </h3>
            <div class="accordion-item-body">
              <p>
                - На основе статистического анализа результатов обучения
                студентов института и их успехов в отдельных дисциплинах.
              </p>
              <p>
                Была создана специальная математическая модель, которая
                благодаря графическому формату предоставляет возможность к
                гибкому администрированию программы обучения. Проще говоря, если
                ты знаешь куда идти, мы предоставим тебе карту!
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-item-head" @click="accordion">
              - Что от меня требуется?
            </h3>
            <div class="accordion-item-body">
              Кто, по-вашему, этот мощный старик? Не говорите, вы не можете
              этого знать. Это — гигант мысли, отец русской демократии и особа,
              приближенная к императору.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabcontentSupport",
  methods: {
    accordion: function (event) {
      event.target.classList.toggle("active");
    },
  },
};
</script>

<style>
.tabcontent-support {
  margin-bottom: 50px;
}
.tabcontent-support__title {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3d3d3d;
  margin-bottom: 53px;
}
.tabcontent-support__wrapper {
  display: flex;
}
.tabcontent-support__table {
  width: 840px;
  border: 1px solid rgba(61, 61, 61, 0.3);
  border-radius: 15px;
  margin-right: 34px;
  padding: 28px 51px 58px 41px;
}
.tabcontent-support__table-text {
  font-style: italic;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #3d3d3d;
  margin-bottom: 30px;
}
.tabcontent-support__accordion {
  width: 710px;
}
.tabcontent-support__accordion-title {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3d3d3d;
  margin-bottom: 31px;
}
.accordion-item {
  position: relative;
}

.accordion-item-head {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  padding: 16px;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #3d3d3d;
  border: 1px solid rgb(61, 61, 61, 0.3);
  border-radius: 5px;
}

.accordion-item-head::after {
  content: "";
  background-image: url("../assets/images/plus.svg");
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  right: 25px;
  top: 8px;
}

.accordion-item-head.active::after {
  content: "";
  background-image: url("../assets/images/close.svg");
  background-repeat: no-repeat;
  width: 49px;
  height: 49px;
  top: 0;
  color: #2f80ed;
}

.accordion-item-body {
  display: none;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  color: #3d3d3d;
  border: 1px solid rgb(61, 61, 61, 0.3);
  /* border-radius: 5px; */
  border-left: 5px solid #2f80ed;
  border-top: 0;
  padding: 20px;
}
.accordion-item-body p:nth-child(2) {
  margin-top: 30px;
}
.accordion-item-head.active + .accordion-item-body {
  display: block !important;
}
.accordion-item-head.active {
  border-bottom: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #2f80ed;
  border-bottom-left-radius: 0;
  border-left: 5px solid #2f80ed;
}
</style>