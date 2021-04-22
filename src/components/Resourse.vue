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
          <img
            class="resourse__input-svg-1"
            :src="require('../assets/images/input-svg-1.svg')"
            alt=""
          />
          <input
            class="resourse__input"
            type="text"
            placeholder="Поиск по ФИО студента..."
          />
        </div>
        <div class="resourse__table">
          <div class="resourse__table-title">
            <span class="resourse__table-title-1">Группа</span>
            <span class="resourse__table-title-2">ФИО Студента</span>
            <span class="resourse__table-title-3">User agent</span>
            <span class="resourse__table-title-4">Последний вход</span>
            <span class="resourse__table-title-5">История посещений</span>
          </div>
          <div class="resourse__table-items">
            <div class="resourse__table-item">
              <div class="resourse__table-item-group">СТ-370000</div>
              <div class="resourse__table-item-student">
                Студент Студентович Студентов
              </div>
              <div class="resourse__table-item-agent">
                Google Chrome/5.0 (windows NT, MSIE 6.0 SV1;...
              </div>
              <div class="resourse__table-item-enter">23:53 21.01.2020</div>
              <a href="#" class="resourse__table-item-history">посмотреть</a>
            </div>
            <div class="resourse__table-item">
              <div class="resourse__table-item-group">СТ-370000</div>
              <div class="resourse__table-item-student">
                Студент Студентович Студентов
              </div>
              <div class="resourse__table-item-agent">
                Google Chrome/5.0 (windows NT, MSIE 6.0 SV1;...
              </div>
              <div class="resourse__table-item-enter">23:53 21.01.2020</div>
              <a href="#" class="resourse__table-item-history">посмотреть</a>
            </div>
            <div class="resourse__table-item">
              <div class="resourse__table-item-group">СТ-370000</div>
              <div class="resourse__table-item-student">
                Студент Студентович Студентов
              </div>
              <div class="resourse__table-item-agent">
                Google Chrome/5.0 (windows NT, MSIE 6.0 SV1;...
              </div>
              <div class="resourse__table-item-enter">23:53 21.01.2020</div>
              <a href="#" class="resourse__table-item-history">посмотреть</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resourse",
};
</script>

<style>
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
.resourse__input-svg-1 {
  position: absolute;
  right: 32%;
  padding-bottom: 1px;
  padding-right: 6px;
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
}
.resourse__table-title-2 {
  margin-right: 158px;
}
.resourse__table-title-3 {
  margin-right: 408px;
}
.resourse__table-title-4 {
  margin-right: 40px;
}
.resourse__table-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(47, 128, 237, 0.3);
  margin-bottom: 5px;
}
.resourse__table-item-group {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  margin-right: 17px;
}
.resourse__table-item-student {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  margin-right: 25px;
}
.resourse__table-item-agent {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #2f80ed;
  margin-right: 117px;
}
.resourse__table-item-enter {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  margin-right: 50px;
}
.resourse__table-item-history {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #2f80ed;
}
</style>