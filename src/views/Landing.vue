<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title landing_letters">The Ultimate Pastery Store.</h1>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <!-- Talk About Content !-->
      <div class="section">
        <div class="container">
          <div class="features text-center">
            <div class="md-layout" :class="`md-alignment-center-center`">
              <div class="md-layout-item md-medium-size-100 md-small-size-100">
                <h1 class="title text-center">Let's talk About Us</h1>
              </div>
              <div class="md-layout-item md-medium-size-100 md-small-size-100">
                <div class="description">
                  <h4 class="talkTextSub">Between working and Bakeschooling from home, every single day just jumbles together into a big blob of days. I’ve actually resorted now on making Cakes.
                  From chocolate cake and brownies to more loaves of banana bread than I can count, I have been eagerly baking at The Frosted Crown and it was time to whip up one of our favorite sweet treats – Butter Cream Cake! </h4>

                  <h2 class="talkText">I hope you’re not rolling your eyes at The Frosted Crown.</h2>

                  <h4 class="talkTextSub">Admittedly, everyone are pretty obsessed with The Frosted Crown. And I’m not even remotely sorry about it.
                  In my mind, The Frosted Crown are synonymous with every occasion...
                  I would totally nosh on one every. single. day. if I could.</h4>

                  <h4 class="talkTextSub">The beauty of Butter cream cake is that they only require a handful of ingredients and they come together in minutes. And, hello – it’s Butter Cream cake that would require you to turn on your taste buds – how could you possibly resist?</h4>

                  <h4 class="talkTextSub">For this Butter Cream cake version, I used fresh butter with no essence or emulsifier added to really give these cream cakes an absolutely huge pop of flavor.</h4>

                  <h4 class="talkTextSub">A cake frosted with home made butter cream and home made fruit compote.
                  When I say you’re gonna love these Cakes and make them more than once this summer, I mean it.</h4>

                  <h2 class="talkText">You can always trust our dairy products and our quality and natural flavors will always be top notch.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main md-elevation-24">
      <!-- Meet Our Chef Content !-->
      <div class="section text-center">
        <div class="container">
          <div class="features text-center">
            <div class="md-layout" :class="`md-alignment-center-center`">
              <div class="md-layout-item md-medium-size-100 md-small-size-100">
                <h1 class="title text-center">Meet Our Chef</h1>
              </div>
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="info">
                  <h2>Sivanraj Kartheesan</h2>
                  <h4 class="info-title">CEO and Founder</h4>
                </div>
              </div>
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
      <!-- Best From Us Content !-->
      <div class="section text-center">
        <div class="container">
            <h1 class="title test">Best Products From Us</h1>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <md-card md-with-hover>
                  <md-card-media>
                    <img :src="bestproduct1" alt="cookie">
                  </md-card-media>
                  <md-card-content>
                    Today we will live in the moment unless it’s unpleasant in which case we will need a  bite of Chewy Cookie filled with nuttella inside and sugar sprinkles on the top.
                  </md-card-content>
                </md-card>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <md-card md-with-hover>
                  <md-card-media>
                    <img :src="bestproduct2" alt="choclate">
                  </md-card-media>
                  <md-card-content>
                    Looking for happiness when you’re in tea break? <br/>
                    Here’s our treat of home made tea cake and breads.
                  </md-card-content>
                </md-card>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <md-card md-with-hover>
                  <md-card-media>
                    <img :src="bestproduct3" alt="bread">
                  </md-card-media>
                  <md-card-content>
                    Go to the counter and take a *Blondie* off the rack,  drizzle some chocolates and bite into it... Heavenly? And We make the heaven possible...
                  </md-card-content>
                </md-card>
              </div>
            </div>
        </div>
      </div>
      <!-- Quote Content !-->
      <div class="section text-center">
        <div class="container">
          <h1 id="quote">
            <span>“</span> Baking is any labor at all, it's a labor of love. A love that gets passed from generation to generation. <span>”</span></h1>
          <h4>-Regina Brett</h4>
        </div>
      </div>
      <!-- Menu Content !-->
      <div class="section text-center">
        <div class="container">
          <h1 class="title">Here is our Menu</h1>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="menu_item1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h3 class="card-title">
                      Cup Cakes
                      <br />
                      <small class="card-description text-muted">You Never tasted something like before!!</small>
                    </h3>

                    <md-card-content>
                      <md-list class="md-triple-line">
                        <md-list-item 
                          v-for="cmenu in cupcake_menu"
                          :key="cmenu"
                        >
                          <div class="md-list-item-text">
                            <span class="menuname text-center">{{cmenu.cupcake_name}}</span>
                            <span class="menudescription text-center">{{cmenu.cupcake_description}}</span>
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
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="menu_item2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h3 class="card-title">
                      Birthday Cakes
                      <br />
                      <small class="card-description text-muted">A Party without cake is really just a Meeting!!</small>
                    </h3>

                    <md-card-content>
                      <md-list class="md-triple-line">
                        <md-list-item 
                          v-for="bcmenu in birthdaycakes_menu"
                          :key="bcmenu"
                        >
                          <div class="md-list-item-text">
                            <span class="menuname text-center">{{bcmenu.birthdaycakes_name}}</span>
                            <span class="menudescription text-center">{{bcmenu.birthdaycakes_description}}</span>
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
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="menu_item3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h3 class="card-title">
                      Breads & Tea Cakes
                      <br />
                      <small class="card-description text-muted">Happiness is Home Made Breads</small>
                    </h3>

                    <md-card-content>
                      <md-list class="md-triple-line">
                        <md-list-item 
                          v-for="breadbunsmenu in bread_and_Buns_menu"
                          :key="breadbunsmenu"
                        >
                          <div class="md-list-item-text">
                            <h4 class="menuname text-center">{{breadbunsmenu.bread_and_Buns_name}}</h4>
                            <span class="menudescription text-center">{{breadbunsmenu.bread_and_Buns_description}}</span>
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
              <div class="md-layout-item md-medium-size-50 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="menu_item4"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h3 class="card-title">
                      Cookies & Macarons
                      <br />
                      <small class="card-description text-muted">Crack the Cookies & Macarons Explore the Taste!!</small>
                    </h3>

                    <md-card-content>
                      <md-list class="md-triple-line">
                        <md-list-item 
                          v-for="CookiesAndMacarons in CookiesAndMacaronsMenu"
                          :key="CookiesAndMacarons"
                        >
                          <div class="md-list-item-text">
                            <h4 class="menuname text-center">{{CookiesAndMacarons.macrons_name}}</h4>
                            <span class="menudescription text-center">{{CookiesAndMacarons.macrons_description}}</span>
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
      <!-- Contact Us Content !-->
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h1 class="text-center title">Grab Your Pastries. <br/>Contact Us</h1>
              <h3 class="text-center description">
                Some Pastries Not included in menus will be made on Order.
              </h3>
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
                    <md-button>Send Message</md-button>
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
    },
    menu_item4: {
      type: String,
      default: require("@/assets/img/backgrounds/cookie_ava.jpg")
    },
    bestproduct1: {
      type: String,
      default: require("@/assets/img/b3/cookie_50.jpg")
    },
    bestproduct2: {
      type: String,
      default: require("@/assets/img/b3/choclate_50.jpg")
    },
    bestproduct3: {
      type: String,
      default: require("@/assets/img/b3/bread_50.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      cupcake_menu: [
        {
          cupcake_name: "Tropical Fruits",
          cupcake_description: "Cupcake filled with fresh compotes and deliciously satisfactory to your sweet tooth",
        },
        {
          cupcake_name: "Creamy Chocolate cupcake",
          cupcake_description: "The frosting is creamy, it will definitely melt in your mouth and in the end it will sure be a finger licking creamier cupcake",
        },
        {
          cupcake_name: "Butter cream cupcake",
          cupcake_description: "A cupcake frosted with fresh homemade butter cream. The cream is soft and cake is spongy. A bite would take you to a world of cupcakes",
        },
        {
          cupcake_name: "Red Velvet Cupcake",
          cupcake_description: "Red Velvet cupcake is frosted with fresh cream cheese.  Life is wonderful so eat the damn redvelvet cup cake."
        },
        {
          cupcake_name: "Vanilla creme cupcake",
          cupcake_description: "Creme Brûlée Cupcakes are made with a moist vanilla cupcake and pastry cream filling, then topped with fresh cream and Caramel"
        }
      ],
      birthdaycakes_menu: [
        {
          birthdaycakes_name: "Dreamy Vanilla Cake",
          birthdaycakes_description: "It is flavoured with the goodness of vanilla extract. It is moist,Crumbly and most importantly its delicious.",
        },
        {
          birthdaycakes_name: "Chocoholic",
          birthdaycakes_description: "Chocoholic is the Chocolate Truffle cake is the perfect cake for birthdays, it's has the moist sponge, delicate flavor and smooth cream on the inside and out",
        },
        {
          birthdaycakes_name: "Bloody Redvelvet",
          birthdaycakes_description: "Bloody Redvelvet cake is red and Scarlet Colored Chocolate layer cake, layered with Cream Cheese Frosting.",
        },
        {
          birthdaycakes_name: "Simply Orange",
          birthdaycakes_description: "orange cake is rich in flavor and definitely a melt in mouth cake. The taste will last in you tongue than a normal cake could would.",
        },
        {
          birthdaycakes_name: "world of Berries",
          birthdaycakes_description: "Cake mixed with triple berries( strawberry, blueberry and raspberry. The flavor will take you to the core of sweetness where you'll taste every single berries in every bite...",
        },
      ],
      bread_and_Buns_menu: [
        {
          bread_and_Buns_name: "Banana Cake",
          bread_and_Buns_description: "The banana cake is moist and fluffy and is the perfect complement for your evening tea. On top of being healthy, it is  guaranteed to satisfy your sweet tooth",
        },
        {
          bread_and_Buns_name: "Mr. Lemony",
          bread_and_Buns_description: "well this is sweet not sour. Taste it and bet you'll end up licking your hand and look for more of these..",
        },
        {
          bread_and_Buns_name: "Ginger Spice Cake ",
          bread_and_Buns_description: "Its combined with sweet and spice with flavor of cinnamon. Could there be anything more delicious snack for tea..",
        },
        {
          bread_and_Buns_name: "Hokkaido Milk Bread",
          bread_and_Buns_description: "You'll find this soft and spongy.. It'll melt in ur mouth completely. It's sweet and yummy. The taste will make u forget the regular bread",
        },
        {
          bread_and_Buns_name: "Burger Buns",
          bread_and_Buns_description: "when u find a place like ours for home made burger buns All you have to do is buy some buns and make a good burger for ur kids.. The kids are gonna fall in love with the burgers"
        },
        {
          bread_and_Buns_name:"Apple Crumble Cake",
          bread_and_Buns_description: "Perfect tea time cake. The cake is filled with freshly sliced apples. Every single bite will give a fresh taste of the fruit"
        },
        {
          bread_and_Buns_name:"Aloo buns",
          bread_and_Buns_description: "Fresh home made buns stuffed with freshly cooked aloo masala. The flavour of this buns will make you have more."
        },
        {
          bread_and_Buns_name:"Cheesy Garlic Bun",
          bread_and_Buns_description: "Cheesy Garlic Buns are stuffed ithu fresh cheese and finely chopped garlic mixed with herbs. Its soft and easy to chew."
        }
      ],
      CookiesAndMacaronsMenu: [
        {
          macrons_name: "French Macaron",
          macrons_description: "French Macaron is a smooth, Crispy shell and a moist, chewy interior which tastes flavourful"
        },
        {
          macrons_name:"Chocolate Chip Cookie",
          macrons_description: "Chewy cookie with goey chocolate chips.. It is sweet and yummy will be a sweet treat to your tummy"
        },
        {
          macrons_name:"Peanut Butter Cookie",
          macrons_description: "The cookie is full of peanut butter aroma. The taste will take you to the paradise of sweetness"
        },
        {
          macrons_name:"Nutter cookie",
          macrons_description:"Made of delicious Nuttella. It's crunchy and crispy. The taste will make you fall in love with the cookie"
        },
        {
          macrons_name:"Coconut cookie",
          macrons_description:"Coconut cookie is 100% natural cookie... Every single bite will give you the goodness of Coconut with yummilicious taste.."
        },
        {
          macrons_name: "Almond Butter Cookie",
          macrons_description: "The taste of this cookie will b buttery with natural almond butter aroma. It's crispy and bit salty but we bet you'll never stop loving this cookie. BEST COOKIE FOR TEA TIME SNACK"
        },
        {
          macrons_name: "Cashew Butter Cookie",
          macrons_description: "Made of Cashew butter. It's sweet, It's crispy and bit salty but we bet you'll never stop loving this cookie. BEST COOKIE FOR TEA TIME SNACK"
        },
        {
          macrons_name: "Walnut Butter Cookie",
          macrons_description: "Walnut Butter cookie the smell of this cookie Itself will take you to a different place... Wonder it's place like willi wonka's factory.. "
        }
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
.menuname{
  color: #ab1a23 !important;
  font-weight: bold !important;
}
.menudescription{
  white-space: break-spaces !important;
}
.landing_letters {
  color: #fd0213d0 !important;
  font-family: 'Alice', serif;
  border-style: double !important;
  padding: 10px !important;
  border-width: 10px !important;
  border-color: papayawhip !important;
  font-size: 70px !important;
}
.talkText{
  font-family: 'Caveat', cursive;
  color: #ab1a23 !important;
  font-size: 45px !important;
}
.talkTextSub{
  font-family: 'Tangerine', cursive;
  font-size: 40px !important;
  color: black !important;
}
.contact-form {
  margin-top: 30px;
}
.md-button{
  background-color: #ab1a23 !important;
}
.md-button:hover{
  background-color: #4e171a !important;
}
.md-has-textarea + .md-layout {
  margin-top: 15px;
}
#quote::after{
  position: absolute;
  content: "";
  background: #ab1a23;
  height: 2px;
  width: 70px;
  bottom: 0;
  margin-left: -35px;
  left: 50%;
}
</style>
