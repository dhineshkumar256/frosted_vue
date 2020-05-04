import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import BirthdayCakes from "./views/BirthdayCakes.vue";
import CupCakes from "./views/CupCakes.vue";
import CookiesandBreads from "./views/CookiesandBreads.vue"
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/birthdaycakes",
      name: "birthdaycakes",
      components: { default: BirthdayCakes, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/cupcakes",
      name: "cupcakes",
      components: { default: CupCakes, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/cookiesandbreads",
      name: "cookiesandbreads",
      components: { default: CookiesandBreads, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
