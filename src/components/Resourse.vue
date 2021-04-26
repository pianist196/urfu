<template>
  <div class="resourse">
    <div class="container">
      <div class="resourse__wrapper">
        <div class="resourse__title">Посещения ресурса</div>
        <div class="resourse__inputs">
          <img
            class="resourse__input-svg"
            :src="require('../assets/images/input-svg.svg')"
            alt=""
          />
          <input
            class="resourse__input"
            type="text"
            placeholder="Институт строительства и архите..."
          />
          <div class="resourse__input-wrapper">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8961 14.9136L15.8956 14.9131L11.6179 10.6354C12.4872 9.59139 13.0159 8.25238 13.0159 6.78822C13.0159 3.46356 10.3111 0.758789 6.98644 0.758789C3.66177 0.758789 0.957031 3.46356 0.957031 6.78822C0.957031 10.1129 3.6618 12.8177 6.98647 12.8177C8.45061 12.8177 9.78964 12.2889 10.8337 11.4191L15.1114 15.6968C15.2195 15.805 15.3617 15.8595 15.5035 15.8595C15.6452 15.8595 15.7869 15.8051 15.8948 15.6983L15.8961 15.6969C16.1117 15.4802 16.1117 15.1303 15.8961 14.9136ZM6.98647 11.7093C4.27316 11.7093 2.06541 9.50156 2.06541 6.78825C2.06541 4.07494 4.27314 1.86717 6.98647 1.86717C9.6998 1.86717 11.9075 4.07492 11.9075 6.78822C11.9075 9.50153 9.69977 11.7093 6.98647 11.7093Z"
                fill="#CDCDCD"
                stroke="#CDCDCD"
                stroke-width="0.5"
              />
            </svg>
            <input
              class="resourse__input resourse__input-1"
              type="text"
              placeholder="Поиск по ФИО студента..."
            />
          </div>
        </div>
        <div class="resourse__table">
          <div class="resourse__table-title">
            <span class="resourse__table-title-1">Группа</span>
            <span class="resourse__table-title-2">ФИО Студента</span>
            <span class="resourse__table-title-3">User agent</span>
            <span class="resourse__table-title-4">Последний вход</span>
            <span class="resourse__table-title-5">История посещений</span>
          </div>
          <resourse-item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResourseItem from "./ResourseItem";

export default {
  components: { ResourseItem },
  name: "Resourse",
};
</script>

<style>
.resourse {
  margin-bottom: 50px;
}
.resourse__wrapper {
  border: 1px solid rgba(61, 61, 61, 0.5);
  box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}
.resourse__title {
  padding-left: 65px;
  padding-top: 41px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #3d3d3d;
  margin-bottom: 92px;
}
.resourse__inputs {
  margin: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(47, 128, 237, 0.3);
  padding-bottom: 12px;
  margin-bottom: 42px;
}
.resourse__input-svg {
  position: absolute;
  padding-left: 12px;
  padding-bottom: 5px;
}
.resourse__input-wrapper {
  position: relative;
}
.resourse__input-wrapper svg {
  position: absolute;
  padding-bottom: 1px;
  padding-right: 6px;
  left: 1px;
  bottom: 5px;
  z-index: 5;
  width: 40px;
  height: 20px;
}
.resourse__input {
  border: 1px solid rgba(61, 61, 61, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px 33px;
  width: 360px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: rgba(61, 61, 61, 0.5);
}
.resourse__input-1 {
  position: relative;
}
.resourse__table {
  margin: 0 80px;
}
.resourse__table-title {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #3d3d3d;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
}
.resourse__table-title-1 {
  margin-right: 40px;
  white-space: nowrap;
}
.resourse__table-title-2 {
  margin-right: 158px;
  white-space: nowrap;
}
.resourse__table-title-3 {
  margin-right: 408px;
  white-space: nowrap;
}
.resourse__table-title-4 {
  margin-right: 40px;
  white-space: nowrap;
}
.resourse__table-title-5 {
  white-space: nowrap;
}
</style>