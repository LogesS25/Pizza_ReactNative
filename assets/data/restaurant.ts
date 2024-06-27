export const getDishById = (id: number) => {
  console.log('getdishhby idd',id);
  const meals = restaurant.food.flatMap((category) => category.meals);
  return meals.find((meal) => meal.id === id);
};
export const restaurant = {
  name: 'margherita pizza',
  rating: '4.5 Excellent',
  ratings: '(500+)',
  img: require('@/assets/data/r1.jpeg'),
  distance: '0.85 miles away',
  delivery: '10-20 min',
  tags: ['Italian', 'Pizza'],
  about: 'The home of handmade fresh pasta, thin crust pizza, protein packed salads.',
  food: [
    {
      category: 'Meal Deals',
      meals: [
        {
          id: 1,
          name: 'Margherita',
          price: 17,
          info: 'Includes one garlic bread, one pasta and one soft drink.',
          img: require('@/assets/data/1.png'),
        },
        {
          id: 2,
          name: 'Veg Pizza',
          price: 17,
          info: 'Includes one garlic bread, one vegetarian pasta and one soft drink',
          img: require('@/assets/data/2.png'),
        },
        {
          id: 3,
          name: 'Chicken Pizza',
          price: 40,
          info: 'Includes one garlic bread with or without cheese, choice of two chicken pizzas',
          img: require('@/assets/data/3.png'),
        },        
      ],
    },
    {
      category: 'Pasta',
      meals: [
        {
          id: 5,
          name: 'Arrabbiata',
          price: 9,
          info: 'Tomato sauce, chilli, garlic, and onions',
          img: require('@/assets/data/5.png'),
        },
        {
          id: 6,
          name: 'Pomodoro e Mozzarella',
          price: 10,
          info: 'Tomato sauce, onions, mozzarella',
          img: require('@/assets/data/6.png'),
        },
      ],
    },
    {
      category: 'Pizza',
      meals: [
        {
          id: 7,
          name: 'Salame',
          price: 11,
          info: 'Spicy Italian sausage, tomato sauce, mozzarella',
          img: require('@/assets/data/7.png'),
        },
        {
          id: 8,
          name: 'Margherity',
          price: 9,
          info: 'Tomato sauce, mozzarella',
          img: require('@/assets/data/8.png'),
        },
      ],
    },
    {
      category: 'Salad',
      meals: [
        {
          id: 9,
          name: 'Italian Salad',
          price: 5,
          info: 'Mixed leaf salad, cherry tomatoes and grated carrot.',
          img: require('@/assets/data/9.png'),
        },
        {
          id: 10,
          name: 'Spanish Salad',
          price: 8,
          info: 'Large mixed salad.',
          img: require('@/assets/data/10.png'),
        },
      ],
    },
    
  ],
};
