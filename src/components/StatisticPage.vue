<template>
  <div class="statistic">
    <header-main
      header-subtitle="Статистика посещаемости"
      student="Административный Доступ Администратор"
      profile="сменить пароль"
    />
    <resourse />
  </div>
</template>

<script>
import HeaderMain from "./HeaderMain";
import Resourse from "./Resourse";

export default {
  name: "StatisticPage",
  components: {
    HeaderMain,
    Resourse,
  },
  props: ["headerSubtitle", "student", "profile"],
};
</script>

<style>
</style>