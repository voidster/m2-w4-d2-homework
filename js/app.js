// Header Component
Vue.component("header-component", {
  template: `
        <header>
            <span>Food Blog</span>
        </header>
    `,
});

// Photo Component
Vue.component("photo-component", {
  props: ["src", "alt"],
  template: `
        <img :src="src" :alt="alt" width="180">
    `,
});

// Comment Component
Vue.component("comment-component", {
  props: ["author", "date", "content"],
  template: `
        <div class="post">
            <span class="author">{{ author }}</span> — 
            <span class="date">{{ date }}</span>
            <span class="reply">REPLY</span>
            <p>{{ content }}</p>
        </div>
    `,
});
// Vue Instance
new Vue({
  el: "#container",
  data: {
    comments: [
      {
        author: "Brianna",
        date: "February 18, 2021 @ 3:30 pm",
        content:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!",
      },
      {
        author: "LINH",
        date: "February 15, 2021 @ 9:46 am",
        content:
          "I just made this soup today and it’s so tasty! Didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!",
      },
      {
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021 @ 12:58 pm",
        content:
          "I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.",
      },
      {
        author: "KALI",
        date: "February 13, 2021 @ 11:31 am",
        content:
          "This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!",
      },
    ],
  },
});
