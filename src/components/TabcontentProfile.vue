<template>
  <div class="container">
    <div class="tabs-profile__title">Компетентностный профиль студента</div>
    <div class="tabs-profile">
      <a
        v-on:click="activetab = 1"
        v-bind:class="[activetab === 1 ? 'active' : '']"
        >Общекультурные <br />
        компетенции</a
      >
      <a
        v-on:click="activetab = 2"
        v-bind:class="[activetab === 2 ? 'active' : '']"
        >Общепрофессиональные <br />
        компетенции</a
      >
      <a
        v-on:click="activetab = 3"
        v-bind:class="[activetab === 3 ? 'active' : '']"
        >Профессиональные <br />
        компетенции</a
      >
      <a
        v-on:click="activetab = 4"
        v-bind:class="[activetab === 4 ? 'active' : '']"
        >Дополнительные профессиональные <br />
        компетенции</a
      >
    </div>

    <div class="content">
      <div v-if="activetab === 1" class="tabcontent">
        <competencies />
      </div>
      <div v-if="activetab === 2" class="tabcontent">Content for tab two</div>
      <div v-if="activetab === 3" class="tabcontent">Content for tab three</div>
      <div v-if="activetab === 4" class="tabcontent">Content for tab four</div>
    </div>
  </div>
</template>

<script>
import Competencies from "./Competencies.vue";
export default {
  components: { Competencies },
  name: "TabcontentProfile",
  data() {
    return {
      activetab: 1,
    };
  },
};
</script>

<style>
.tabs-profile__title {
  margin-bottom: 48px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3d3d3d;
}

.container {
  max-width: 620px;
  min-width: 420px;
  margin: 40px auto;
}

.tabs-profile {
  overflow: hidden;
  margin-bottom: -2px;
  display: flex;
  align-items: flex-end;
}

.tabs-profile ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs-profile a {
  float: left;
  cursor: pointer;
  padding: 12px 12px;
  transition: background-color 0.2s;
  border-right: none;
  border-radius: 15px 15px 0 0;
  font-weight: bold;
  border: 1px solid rgba(61, 61, 61, 0.5);
  box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #2f80ed;
  width: 366px;
}

.tabs-profile a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 1px solid #fff;
  border-right: 1px solid rgb(61, 61, 61);
  border-left: 1px solid rgb(61, 61, 61);
  border-top: 1px solid rgb(61, 61, 61);
  height: 100px;
}

.tabcontent {
  padding: 30px;
  border: 1px solid #3d3d3d;
  box-shadow: 6px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border-top-left-radius: 0;
  margin-bottom: 50px;
}
</style>