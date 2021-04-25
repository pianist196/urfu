<template>
  <div class="container">
    <div class="tabs">
      <a @click="activetab = 1" :class="[activetab === 1 ? 'active' : '']">
        <img
          class="tabs__item-img"
          :src="require('../assets/images/user.svg')"
          alt=""
        />
        <div class="tabs__item-text">Компетентностный профиль</div></a
      >
      <a @click="activetab = 2" :class="[activetab === 2 ? 'active' : '']">
        <img
          class="tabs__item-img"
          :src="require('../assets/images/comp.svg')"
          alt=""
        />
        <div class="tabs__item-text">Прогнозирование успевамости</div></a
      >
      <a @click="activetab = 3" :class="[activetab === 3 ? 'active' : '']">
        <img
          class="tabs__item-img"
          :src="require('../assets/images/predict.svg')"
          alt=""
        />
        <div class="tabs__item-text">Компетентностный профиль</div></a
      >
    </div>

    <div class="content">
      <div v-if="activetab === 1" class="tabcontent-profile">
        <tabcontent-profile />
      </div>
      <div v-if="activetab === 2" class="tabcontent-support">
        <tabcontent-support />
      </div>
      <div v-if="activetab === 3" class="tabcontent">Content for tab three</div>
    </div>
  </div>
</template>

<script>
import TabcontentProfile from "./TabcontentProfile.vue";
import TabcontentSupport from "./TabcontentSupport";
export default {
  components: {
    TabcontentProfile,
    TabcontentSupport,
  },
  name: "tabs",
  data() {
    return {
      activetab: 1,
    };
  },
};
</script>

<style>
.container {
  max-width: 620px;
  margin: 40px auto;
}

.tabs {
  overflow: hidden;
  margin-left: 120px;
  margin-bottom: 86px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  margin: 0 80px;
}

.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid #2f80ed;
  border-radius: 15px;
}
.tabs__item-text {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #3d3d3d;
  margin-left: 25px;
  max-width: 175px;
}
@media (max-width: 1510px) {
  .tabs a {
    margin: 0 40px;
  }
}
@media (max-width: 1280px) {
  .tabs a {
    margin: 0 20px;
  }
}
@media (max-width: 1170px) {
  .tabs {
    margin-left: 90px;
  }
  .tabs a {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .tabs {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .tabs a {
    margin: 0 auto 30px;
  }
}
</style>