<template>
  <div class="main">
    <header-main
      header-subtitle="Главная страница"
      student="Студент Студентович Студентов"
      group="СТ-370000 |  3 курс"
      profile="редактировать профиль"
    />
    <tabs />
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";
import HeaderMain from "./HeaderMain";

export default {
  name: "MainPage",
  components: {
    HeaderMain,
    Tabs,
  },
  props: ["headerSubtitle", "student", "group", "profile"],
};
</script>

<style>
</style>