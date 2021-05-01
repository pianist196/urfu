<template>
  <div class="competencies">
    <div class="competencies__table">
      <div class="competencies__title">
        <h5>Рекомендации по выбору курса</h5>
        <span>Расшифровка компетенций</span>
      </div>
      <div class="competencies__items">
        <div class="competencies__item">
          <div class="competencies__item-wrapper">
            <div class="competencies__item-group">ОК-1</div>
            <div class="competencies__item-lesson">Философия</div>
          </div>
          <img
            class="competencies__item-icon"
            :src="require('../assets/images/competencies-icon.svg')"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="competencies__image">
      <div class="competencies__image-radio">
        <div class="competencies__image-radio-title">По итогам:</div>
        <div class="competencies__image-radio-btn">
          <div class="radio">
            <input
              class="radio__input"
              name="male"
              type="radio"
              id="radio_2"
              value="0"
              v-model.number="someProperty"
            />
            <label class="radio__label" htmlFor="radio_2">1-го курса</label>
          </div>

          <div class="radio">
            <input
              class="radio__input"
              name="male"
              type="radio"
              id="radio_3"
              value="1"
              v-model.number="someProperty"
            />
            <label class="radio__label" htmlFor="radio_3">2-го курса</label>
          </div>

          <div class="radio">
            <input
              class="radio__input"
              name="male"
              type="radio"
              id="radio_4"
              value="2"
              v-model.number="someProperty"
            />
            <label class="radio__label" htmlFor="radio_4">3-го курса</label>
          </div>
        </div>
      </div>
      <!-- <img :src="require('../assets/images/competencies-image.png')" alt="" /> -->
      <div class="competencies__image-canvas">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";

export default {
  name: "Competencies",
  extends: Pie,
  data() {
    return {
      someProperty: 0,
    };
  },
  mounted() {
    this.renderChart({
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  },
};
</script>

<style>
.competencies {
  display: flex;
}
.competencies__table {
  width: 425px;
  border: 1px solid #3d3d3d;
  border-radius: 15px;
  margin-right: 60px;
  border-left: transparent;
  border-bottom: transparent;
  padding: 25px;
}
.competencies__title {
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgba(47, 128, 237, 0.3);
  padding-bottom: 15px;
  margin-bottom: 25px;
}
.competencies__title::before {
  content: "";
  position: absolute;
  background-image: url("../assets/images/competencies-title.svg");
  background-repeat: no-repeat;
  left: 0;
  bottom: 22px;
  width: 33px;
  height: 40px;
}
.competencies__title h5 {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  padding-left: 41px;
  display: inline-block;
}
.competencies__title h5::after {
  content: "";
  position: absolute;
  background-color: #2f80ed;
  left: 0;
  bottom: 0px;
  width: 50%;
  height: 4px;
}

.competencies__title span {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgba(61, 61, 61, 0.5);
}
.competencies__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(47, 128, 237, 0.3);
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  padding-bottom: 5px;
}
.competencies__item-wrapper {
  display: flex;
  align-items: center;
}
.competencies__item-group {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  margin-right: 30px;
}
.competencies__item-lesson {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
}
.competencies__image-radio {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 181px;
  margin-bottom: 40px;
}
.competencies__image-radio-btn {
  display: flex;
  align-items: center;
  margin-left: 36px;
}
.radio + .radio {
  margin-left: 45px;
}
.radio__input {
  margin-right: 11px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  vertical-align: sub;
}
.radio__label {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
}
@media (max-width: 1090px) {
  .radio + .radio {
    margin-left: 20px;
  }
  .competencies__image-radio-btn {
    margin-left: 20px;
  }
}
</style>