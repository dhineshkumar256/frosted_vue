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
                  <h3 class="title">HERE THE CUP CAKES FEAST !!</h3>
                  <h4>“When you share a CUP CAKE, you share LOVE”</h4>
                  <h6 class="text-center">― James Beard</h6>
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
                  <div class="md-layout-item md-medium-size-50 md-small-size-100 ml-auto">
                    <img :src="cupcakePane1[0].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-medium-size-50 md-small-size-100 ml-auto">
                    <img :src="cupcakePane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-medium-size-50 md-small-size-100 ml-auto">
                    <img :src="cupcakePane1[3].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-medium-size-50 md-small-size-100 ml-auto">
                    <img :src="cupcakePane1[2].image" class="rounded" />
                  </div>
                  <!-- <div class="md-layout-item md-medium-size-50 md-small-size-100 ml-auto">
                    <img :src="cupcakePane1[4].image" class="rounded" />
                  </div> -->
                  <div class="md-layout-item md-medium-size-100 md-small-size-100 ml-auto">
                    <img :src="cupcakePane1[5].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-medium-size-100 md-small-size-100 ml-auto">
                    <img :src="cupcakePane1[6].image" class="rounded" />
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
        { image: require("@/assets/img/cup_cakes/1.jpg") },
        { image: require("@/assets/img/cup_cakes/2.jpg") },
        { image: require("@/assets/img/cup_cakes/7.jpg") },
        { image: require("@/assets/img/cup_cakes/4.jpg") },
        { image: require("@/assets/img/cup_cakes/6.jpg") },
        { image: require("@/assets/img/cup_cakes/3.jpg") },
        { image: require("@/assets/img/cup_cakes/8.jpg") }
      ],
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/cup_cakes/8.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/cup_cakes/5_a.jpg")
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
