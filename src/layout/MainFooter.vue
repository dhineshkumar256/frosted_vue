<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://instagram.com/the_frosted_crown?igshid=19w8vzxzydzr" target="_blank">
              <img :src="followicon.facebook">
            </a>
          </li>&nbsp;
          <li>
            <a href="https://instagram.com/the_frosted_crown?igshid=19w8vzxzydzr" target="_blank">
              <img :src="followicon.instagram">
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by Dhineshkumar Rajendran
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      followicon : {
        facebook: require("@/assets/icon/facebook-logo.png"),
        instagram: require("@/assets/icon/insta-logo.png")
      }
    };
  }
};
</script>