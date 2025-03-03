// Photo Component
Vue.component("photo-component", {
  props: ["src", "alt"],
  template: `
        <img :src="src" :alt="alt" width="180">
    `,
});

// Comment Component with Profile Picture
Vue.component("comment-component", {
  props: ["author", "date", "content", "profile", "lvl", "bio"],
  data() {
    return { showPopup: false };
  },
  template: `
        <div class="post">
            <div class="comment-header d-flex align-items-center">
                <img :src="profile" alt="Profile Picture" class="profile-pic" @click="showPopup = true">
                <span class="author">{{ author }}</span> — 
                <span class="date">{{ date }}</span>
                <span class="reply">REPLY</span>
            </div>

            <p>{{ content }}</p>

            <!-- Floating Info Box -->
            <div v-if="showPopup" class="floating-box position-absolute text-white">
                <span class="close-btn float-right" @click="showPopup = false">&times;</span>
                <div class="bio-header font-weight-bold mb-3">{{ author }}</div>
                <p><strong>Foodie Level:</strong> {{ lvl }}</p>
                <p><strong>Bio:</strong></p>
                <p class="bio mb-4">{{ bio }}</p>
                <button @click="showPopup = false">Close</button>
            </div>
        </div>
    `,
});

// Vue Instance
new Vue({
  el: "#container",
  //Local Header Component
  components: {
    "header-component": {
      template: `
                <header class="d-flex justify-content-between align-items-center bg-white p-2">
                    <span class="font-weight-bold">Food Blog</span>
                    <nav>
                        <ul class="nav d-flex" style="">
                            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                        </ul>
                    </nav>
                </header>
            `,
    },
  },
  data: {
    comments: [
      {
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        content:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
        profile: "images/profile.png",
        lvl: "Novice",
        bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat-free, sugar-free stuffs!",
      },
      {
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        content:
          "I just made this soup today and it’s so tasty! Didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!",
        profile: "images/profile.png",
        lvl: "Newcomer",
        bio: "Love food! Grew up with meat and potatoes. Recently ventured outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.",
      },
      {
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021 @ 12:58 pm",
        content:
          "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
        profile: "images/profile.png",
        lvl: "Mentor",
        bio: "I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never looked back since!",
      },
      {
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        content:
          "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
        profile: "images/profile.png",
        lvl: "Novice",
        bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
      },
    ],
  },
  mounted() {
    console.log("Vue instance mounted!");
    console.log("Comments Data:", this.comments);
  },
});
