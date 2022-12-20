import piggy_1 from '../../images/piggy_1.png';
import piggy_2 from '../../images/piggy_2.jpg';
import piggy_3 from '../../images/piggy_3.jpg';
import piggy_4 from '../../images/piggy_4.jpg';

import myShop from '../../images/myshop.png';
import ethio_2 from '../../images/ethio_2.png';
import ethio_3 from '../../images/ethio_3.png';
import ethio_4 from '../../images/ethio_4.png';

import final from '../../images/final.png';
import endless_2 from '../../images/endless_2.png';
import endless_3 from '../../images/endless_3.png';
import endless_4 from '../../images/endless_4.png';






export const projectInfo = [
    {
        id: 1,
        projectName: 'Piggy',
        tools: 'React Native, Expo, Firebase, Javascript',
        details: 'Personal project built with React Native and using Firebase for the authentication and as database. The app is still in progress.'
        + ' Piggy helps users to mange their money and follow their budgets with incomes/expenses. '
        + ' This app focuses on 2 features: 1. Check the balance with a diagram of total, add incomes and expenses.'
        + '2. Users could set a monthly budget (optional), for example 300$ for groceries, and follow up on their goal.'
        + 'Once he will get to 60% or 80% of his budget (160$ or 240$), he will get a warning notification.',
        link: 'https://github.com/Adise211/piggy-mobile',
        images: [ piggy_1, piggy_2, piggy_3, piggy_4 ]
    },
    {
        id: 2,
        projectName: 'Ethio Dresses',
        tools: 'NodeJS, Javascript, HTML, CSS',
        details: 'My first app. An online store for Ethiopian clothes and accessories. You can collect items but because it is just a demo you can not really do purchases with a credit card.'
        + ' Except from online store you will be exposed to the Ethiopian culture like the food, tradition and more. ',
        link: 'https://github.com/Adise211/Hackathon-2',
        images: [ myShop, ethio_2, ethio_3, ethio_4 ]

    },
    {
        id: 3,
        projectName: 'Endless Budget',
        tools: 'NodeJS, ReactJS, ExpressJS, Heroku, Javscript, CSS , Material-UI',
        details: 'Finance web app. An earlier project used for saving money, it is similar to my mobile app called Piggy.'
        + ' This app is one of my first projects while I was learning React. I will continue to finish this project using my current knowledge and experience'
        + ' in order to make it the web version of Piggy.',
        link: 'https://products-api-adise.herokuapp.com',
        images: [ final, endless_2, endless_3, endless_4 ]
    },
    

];