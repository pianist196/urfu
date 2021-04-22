<template>
  <div class="main">
    <header-main
      header-subtitle="Главная страница"
      student="Студент Студентович Студентов"
      group="СТ-370000 |  3 курс"
      profile="редактировать профиль"
    />
  </div>
</template>

<script>
import HeaderMain from "./HeaderMain";

export default {
  name: "MainPage",
  components: {
    HeaderMain,
  },
  props: ["headerSubtitle", "student", "group", "profile"],
};
</script>

<style>
</style>