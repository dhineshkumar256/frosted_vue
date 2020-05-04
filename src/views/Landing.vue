<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <!-- <h1 class="title">Your Story Starts With Us.</h1> -->
            <!-- <h4>
              Every landing page needs a small description after the big bold
              title, that's why we added this text here. Add here all the
              information that can make you or your product create the first
              impression.
            </h4> -->
            <br />
            
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Let's talk About Us</h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout" :class="`md-alignment-center-center`">
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <img src="../assets/logo/man_logo.svg" alt="logo">
                    <!-- <md-icon>sentiment_satisfied_alt</md-icon> -->
                  </div>
                  <h2>Sivanraj Kartheesan</h2>
                  <h4 class="info-title">CEO and Founder</h4>
                </div>
              </div>
              <!-- <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Verified Users</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div> -->
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <md-card>
                  <md-card-media-cover>
                    <md-card-media>
                      <img src="../assets/img/faces/christian.jpg" alt="Skyscraper">
                    </md-card-media>
                  </md-card-media-cover>
                </md-card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Here is our Menu</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="menu_item1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Cup Cakes
                      <br />
                      <small class="card-description text-muted">something about cup cakes</small>
                    </h4>

                    <md-card-content>
                      <md-list class="md-triple-line">
                        <md-list-item 
                          v-for="cmenu in cupcake_menu"
                          :key="cmenu"
                        >
                          <div class="md-list-item-text">
                            <span>{{cmenu.cupcake_name}}</span>
                            <span>{{cmenu.cupcake_description}}</span>
                            <p>{{cmenu.cupcake_FC_special}}</p>
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="#/cupcakes">Gallery</md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="menu_item2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Birthday Cakes
                      <br />
                      <small class="card-description text-muted"
                        >Something about Birthday cakes</small
                      >
                    </h4>

                    <md-card-content>
                      <md-list class="md-triple-line">
                        <md-list-item 
                          v-for="bcmenu in birthdaycakes_menu"
                          :key="bcmenu"
                        >
                          <div class="md-list-item-text">
                            <span>{{bcmenu.birthdaycakes_name}}</span>
                            <span>{{bcmenu.birthdaycakes_description}}</span>
                            <p>{{bcmenu.birthdaycakes_FC_special}}</p>
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="#/birthdaycakes">Gallery</md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="menu_item3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Breades & Cookies
                      <br />
                      <small class="card-description text-muted">something About Breads and Cookies</small>
                    </h4>

                    <md-card-content>
                      <md-list class="md-triple-line">
                        <md-list-item 
                          v-for="breadcookiemenu in bread_and_cookies_menu"
                          :key="breadcookiemenu"
                        >
                          <div class="md-list-item-text">
                            <span>{{breadcookiemenu.bread_and_cookies_name}}</span>
                            <span>{{breadcookiemenu.bread_and_cookies_description}}</span>
                            <p>{{breadcookiemenu.bread_and_cookies_FC_special}}</p>
                          </div>
                        </md-list-item>
                      </md-list>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button href="#/cookiesandbreads">Gallery</md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Grab Your Pastries. Contact Us</h2>
              <h4 class="text-center description">
                Content to contact with us
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success">Send Message</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/backgrounds/cup_cake_background.jpg")
    },
    menu_item1: {
      type: String,
      default: require("@/assets/img/cup_cakes/5_a.jpg")
    },
    menu_item2: {
      type: String,
      default: require("@/assets/img/birthday_cakes/2_a.jpg")
    },
    menu_item3: {
      type: String,
      default: require("@/assets/img/cookies_and_breads/18_a.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      cupcake_menu: [
        {
          cupcake_name: "Cake name One",
          cupcake_description: "Cake One Description",
          cupcake_FC_special: "This cup cake is this type of special in our shop!!"
        },
        {
          cupcake_name: "Cake name Two",
          cupcake_description: "Cake Two Description",
          cupcake_FC_special: "This cup cake is this type of special in our shop!!"
        },
        {
          cupcake_name: "Cake name Three",
          cupcake_description: "Cake Three Description",
          cupcake_FC_special: "This cup cake is this type of special in our shop!!"
        },
        {
          cupcake_name: "Cake name Four",
          cupcake_description: "Cake Four Description",
          cupcake_FC_special: "This cup cake is this type of special in our shop!!"
        },
      ],
      birthdaycakes_menu: [
        {
          birthdaycakes_name: "Birthday Cake name One",
          birthdaycakes_description: "Birthday Cake One Description",
          birthdaycakes_FC_special: "This Birthday Cake is this type of special in our shop!!"
        },
        {
          birthdaycakes_name: "Birthday Cake name Two",
          birthdaycakes_description: "Birthday Cake Two Description",
          birthdaycakes_FC_special: "This Birthday Cake is this type of special in our shop!!"
        },
        {
          birthdaycakes_name: "Birthday Cake name Three",
          birthdaycakes_description: "Birthday Cake Three Description",
          birthdaycakes_FC_special: "This Birthday Cake is this type of special in our shop!!"
        },
        {
          birthdaycakes_name: "Birthday Cake name Four",
          birthdaycakes_description: "Birthday Cake Four Description",
          birthdaycakes_FC_special: "This Birthday Cake is this type of special in our shop!!"
        },
      ],
      bread_and_cookies_menu: [
        {
          bread_and_cookies_name: "Cookie name One",
          bread_and_cookies_description: "Cookie One Description",
          bread_and_cookies_FC_special: "This Cookie is this type of special in our shop!!"
        },
        {
          bread_and_cookies_name: "Cookie name Two",
          bread_and_cookies_description: "Cookie Two Description",
          bread_and_cookies_FC_special: "This Cookie is this type of special in our shop!!"
        },
        {
          bread_and_cookies_name: "Cookie name Three",
          bread_and_cookies_description: "Cookie Three Description",
          bread_and_cookies_FC_special: "This Cookie is this type of special in our shop!!"
        },
        {
          bread_and_cookies_name: "Bread name Four",
          bread_and_cookies_description: "Bread Four Description",
          bread_and_cookies_FC_special: "This Bread is this type of special in our shop!!"
        },
      ]
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
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
