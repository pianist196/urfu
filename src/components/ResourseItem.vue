<template>
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
  </div>
</template>

<script>
export default {
  name: "ResourseItem",
};
</script>

<style>
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