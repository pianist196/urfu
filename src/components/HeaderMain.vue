<template>
  <div class="header-main">
    <div class="container">
      <div class="header-main__top">
        <div class="header-main__logo">
          <img
            :src="require('../assets/images/logo.png')"
            alt=""
            class="header-main__logo-image"
          />
          <div class="header-main__logo-text">
            <div class="header-main__logo-text-label">Студентам</div>
            Система рекомендательных сервисов Цифровой Тьютор
          </div>
        </div>
        <div class="header-main__studet">
          <img
            :src="require('../assets/images/student.svg')"
            alt=""
            class="header-main__student-img"
          />
          <div class="header-main__student-content">
            <div class="header-main__student-text">
              Студент Студентович Студентов <br />
              СТ-370000 | 3 курс
            </div>
            <a href="#" class="header-main__student-link"
              >редактировать профиль</a
            >
            <a href="#" class="header-main__student-link">выйти</a>
          </div>
        </div>
      </div>
      <div class="header-main__subtitle">
        <h3>Главная страница</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
};
</script>

<style>
.header-main__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 51px;
  margin-top: 85px;
}
.header-main__logo {
  display: flex;
  align-items: center;
}
.header-main__logo img {
  width: 80px;
  height: 80px;
}
.header-main__logo-text {
  margin-left: 13px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  max-width: 320px;
}
.header-main__logo-text-label {
  font-weight: 500;
}
.header-main__studet {
  display: flex;
  align-items: center;
}
.header-main__student-content {
  margin-left: 21px;
}
.header-main__student-text {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  max-width: 205px;
  margin-bottom: 28px;
}
.header-main__student-link {
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #2f80ed;
  display: block;
  margin-top: 2px;
}
.header-main__subtitle {
  padding-left: 52px;
  padding-bottom: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3d3d3d;
  border-bottom: 1px solid rgba(47, 128, 237, 0.3);
  position: relative;
}
.header-main__subtitle::before {
  content: "";
  position: absolute;
  background-image: url("../assets/images/main.svg");
  background-repeat: no-repeat;
  background-position: lefr center;
  left: 12px;
  top: 0;
  width: 26px;
  height: 26px;
}
.header-main__subtitle::after {
  content: "";
  position: absolute;
  width: 256px;
  height: 4px;
  background-color: #2f80ed;
  border-radius: 5px;
  bottom: -2px;
  left: 0;
}
</style>