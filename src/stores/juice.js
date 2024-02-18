import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usejuiceStore = defineStore('juice', () => {
   const list  =  ref ([
      {
        "name": "Strawberry smoothie",
        "price": 140,
        "ingredients": "strawberries, banana, yogurt, milk, honey",
        "img": "strawberrybanana.jpg"
      },
      {
        "name": "Tropical fruit juice",
        "price": 120,
        "ingredients": "mango, pineapple, papaya, orange, water",
        "img": "tropicalfruitjuice.jpg"
      },
      {
        "name": "Acai bowl",
        "price": 160,
        "ingredients": "acai berries, banana, granola, blueberries, almond milk",
        "img": "acaibowl.jpg"
      },
      {
        "name": "Watermelon mint cooler",
        "price": 70,
        "ingredients": "watermelon chunks, mint leaves, lime juice, water",
        "img": "watermelonmintcooler.jpg"
      },
      {
        "name": "Green detox smoothie",
        "price": 150,
        "ingredients": "spinach, kale, apple, cucumber, lemon juice, ginger",
        "img": "greendetoxs smoothie.jpg"
      },
      {
        "name": "Frozen banana bites",
        "price": 80,
        "ingredients": "bananas, nut butter, chopped nuts, dark chocolate (optional)",
        "img": "frozenbananabites.jpg"
      },
      {
        "name": "Fruit salad with yogurt",
        "price": 90,
        "ingredients": "mixed seasonal fruits, yogurt, honey, granola",
        "img": "fruitsaladyogurt.jpg"
      },
      {
        "name": "Mango chia pudding",
        "price": 130,
        "ingredients": "mango puree, chia seeds, coconut milk, honey, toppings (optional)",
        "img": "mangochiapudding.jpg"
      },
      {
        "name": "Blueberry smoothie bowl",
        "price": 140,
        "ingredients": "blueberries, yogurt, banana, protein powder (optional), toppings",
        "img": "blueberrysmoothiebowl.jpg"
      },
      {
        "name": "Peach melba",
        "price": 110,
        "ingredients": "peaches, vanilla ice cream, raspberry sauce",
        "img": "peachmelba.jpg"
      }
   ])
   const homePageList  =  ref ([])
   const recommend  =  ref ([])
    return {
        
    }
});