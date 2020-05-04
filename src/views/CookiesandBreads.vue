<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">HERE !!</h3>
                  <h6>Some of our Best Products..</h6>
                </div>
              </div>
            </div>
          </div>          
          <div class="profile-tabs">
            <tabs
              :tab-name="['']"
              :tab-icon="[]"
              plain
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                    <img :src="cupcakePane1[0].image" class="rounded" />
                    <img :src="cupcakePane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[3].image" class="rounded" />
                    <img :src="cupcakePane1[2].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[4].image" class="rounded" />
                    <img :src="cupcakePane1[5].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[6].image" class="rounded" />
                    <img :src="cupcakePane1[7].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[9].image" class="rounded" />
                    <img :src="cupcakePane1[10].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[11].image" class="rounded" />
                    <img :src="cupcakePane1[12].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[13].image" class="rounded" />
                    <img :src="cupcakePane1[14].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[15].image" class="rounded" />
                    <img :src="cupcakePane1[16].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <img :src="cupcakePane1[8].image" class="rounded" />
                    <img :src="cupcakePane1[17].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      cupcakePane1: [
        { image: require("@/assets/img/cookies_and_breads/1.jpg") },
        { image: require("@/assets/img/cookies_and_breads/2.jpg") },
        { image: require("@/assets/img/cookies_and_breads/3.jpg") },
        { image: require("@/assets/img/cookies_and_breads/4.jpg") },
        { image: require("@/assets/img/cookies_and_breads/5.jpg") },
        { image: require("@/assets/img/cookies_and_breads/6.jpg") },
        { image: require("@/assets/img/cookies_and_breads/7.jpg") },
        { image: require("@/assets/img/cookies_and_breads/8.jpg") },
        { image: require("@/assets/img/cookies_and_breads/9.jpg") },
        { image: require("@/assets/img/cookies_and_breads/10.jpg") },
        { image: require("@/assets/img/cookies_and_breads/11.jpg") },
        { image: require("@/assets/img/cookies_and_breads/12.jpg") },
        { image: require("@/assets/img/cookies_and_breads/13.jpg") },
        { image: require("@/assets/img/cookies_and_breads/14.jpg") },
        { image: require("@/assets/img/cookies_and_breads/15.jpg") },
        { image: require("@/assets/img/cookies_and_breads/16.jpg") },
        { image: require("@/assets/img/cookies_and_breads/17.jpg") },
        { image: require("@/assets/img/cookies_and_breads/19.jpg") },
      ],
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/backgrounds/cookies_background.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/cookies_and_breads/18_a.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
