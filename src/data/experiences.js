// data/experiences.js

const experiences = [
  {
    id: 4,
    title: "Regression analysis",
    description: `Building a notebook in which different algorithms are used to predict the housing prices based on a dataset from Kaggle. I used both a random forest model and a keras neural network. In the end, the random forest model worked significantly better than the neural network. This project was aimed to increase my skills in building regression models as I had not done this before. With the help of example Kaggle notebooks, I learned a lot from this project. In the end, I also decided to build a small API tool from which I could get predictions based on values inputted into the model using Postman. All code can be seen at my github page, which is linked under my contact section.`,
    imageUrl: "/images/houses.webp"
},
  {
    id: 5,
    title: "New programming language, OOP and design patterns",
    description: `This project was pretty big, as I wanted to get better at programming. Luckily, my brother could help me out as he has a degree in computer science.
    From him, I got the suggestion to start learning about TypeScript, object-oriented programming and design patterns to become a better programmer.
    As I wanted to get a good understanding, I decided to get the book TypeScript quickly as it gives an introduction to TypeScript and its accompanying frameworks, like angular and react.js. It explained these concepts while creating a blockchain network. As I am interested in this emerging technology, this book was great for me. To put my new learned
    skills in practice, I wrote a small program for a CodinGame challenge called code vs zombies, which eventually ranked 10th among 71 participants in the TypeScript language.
    In this process, I also made a list and learned all design patterns.`,
    imageUrl: "/images/TypeScript.webp"
},
  {
    id: 6,
    title: "Courses during semester 2 of the JADS master",
    description: `The second semester at JADS was an enriching one, with a diverse range of courses:
    - Interactive and Explainable AI design: Focused on improving the interpretability of AI models, learning to use tools like LIME and SHAP (Grade: 7.0).
    - Data Entrepreneurship in Action 2: Collaborated with the municipality of Rotterdam to address sexual distortion, adhering to confidentiality agreements (Grade: 7.5).
    - Prescriptive algorithms: Explored optimization algorithms like PSO, mixed integer linear programming, and ACO, one of my favorite courses (Grade: 8.0).
    - Deep Learning: Deepened my understanding of neural networks, successfully used them to predict whether a cell was cancerous (Grade: 8.0).
    - Entrepreneurial Finance: Learned about the financial considerations when selling a business stake, including parts of a contract, participating and preferred shares (Grade: 8.5).`,
    imageUrl: "/images/jads.webp"
  },
  {
    id: 7,
    title: "Part time job at BAS Trucks",
    description: `At BAS Trucks, I put my skills into action by building models to predict which vehicles would sell in specific countries and at what price. This included applying detailed data analysis and building a regression model to aid in these predictions. Due to the sensitive nature of this work, certain tasks remain confidential.`,
    imageUrl: "/images/bas_trucks.webp"
  },
  {
    id: 8,
    title: "Courses during semester 3 of the JADS master",
    description: `In the third semester at JADS, I pursued courses that further honed my data science capabilities:
    - Cybersecurity: Explored various digital threats and measures to counter them, gaining a solid foundation in cybersecurity principles (Grade: 7.5).
    - Data Entrepreneurship in Action 3: This practical course focused on operating a data-driven business, from business plan creation to data monetization (Grade: 8).
    - Data-Driven Food Value Chain: Studied the optimization of food supply chains and enhancing sustainability through data (Grade: 7.5).
    - Real-Time Process Mining: Learned about real-time analysis of business processes using petri-nets, causal nets, and process mining software (Grade: 9).`,
    imageUrl: "/images/jads.webp"
  },
  {
    id: 9,
    title: "Master thesis for the KNVB",
    description: `As a data scientist and avid football fan, I was thrilled when I had the opportunity to collaborate with the Royal Dutch Football Association (KNVB) on a project for my master's thesis. The goal of the project was to quantify the danger at a certain point in time in a football match using event and tracking data.

    To accomplish this, we used two main data sources: event data and tracking data. Event data is a record of all the notable events that occur during a match, such as shots on goal, fouls, and goals. This data is typically collected by analysts who watch the match and manually record the events as they happen.
    
    Tracking data, on the other hand, is a record of the movements of all the players and the ball on the pitch. This data is collected using sensors and cameras that track the positions of the players and the ball in real-time.
    
    Using these two data sources, we were able to build a model that could predict the likelihood of a goal being scored at any given moment in the match. We trained the model using data from previous matches and then tested it on a new set of matches to see how well it performed.
    
    The results were encouraging. Our model was able to accurately predict the likelihood of a goal being scored.
    
    Overall, working on this project with the KNVB was a fantastic experience. Not only did I get to apply my data science skills to a real-world problem, but I also had the opportunity to work with experts in the field of football. It was a great opportunity to learn and grow as a data scientist.`,
    imageUrl: "/images/knvb.webp"
},
  {
      id: 10,
      title: "Graduated Cum Laude from JADS's master",
      description: `As I entered my fourth and final semester at the JADS university, I was excited to complete my master's thesis and graduate with a degree in data science. In addition to my thesis, I also had the opportunity to take two additional courses that rounded out my education in data science.

      One of these courses was Data visualization, in which I learned about the various techniques and tools used to create effective visualizations of data. From understanding the principles of design to using software like Dash, I was able to develop my skills in data visualization and create a number of compelling visualizations. I was thrilled to earn a 9 for this course.

      The other course I took was Data ethics and entrepreneurship, which focused on the ethical implications of working with data and the responsibilities of data professionals. From understanding data privacy laws to considering the ethical consequences of our work, this course gave me a strong foundation in data ethics. I was happy to earn a 7.5 for this course.

      Upon completing my final semester at the JADS and completing my required coursework and master's thesis, I was pleased learn that I graduated with a Cum Laude distinction for my master's degree in data science. It was a challenging but rewarding journey, and I am grateful for the opportunity to have learned from knowledgeable individuals and applied my skills in a variety of contexts. I believe that the knowledge and skills I gained during my time at JADS will be invaluable assets as I continue my career in the field of data science.`,
      imageUrl: "/images/jads.webp"
  },
    {
      id: 11,
      title: 'Full-time job at EAISI as scientific programmer',
      description: `As a full-time employee at EAISI (Eindhoven Artificial Intelligence Systems Institute), I have the opportunity to work on a wide range of artificial intelligence (AI) projects and collaborate with industry partners. Located at the Technical University of Eindhoven, EAISI is a hub for AI research and development, and I am constantly learning and growing as a result of my work here.
  
      One of the most exciting aspects of my job is the opportunity to work on a variety of AI application areas. From healthcare and finance to transportation and logistics, I have the chance to tackle complex problems and develop innovative solutions using the latest AI technologies. Working with industry partners allows me to see firsthand how AI is being implemented in the real world, and it helps me to understand the unique challenges and opportunities that organizations face when it comes to adopting AI.
  
      In addition to working on AI projects, I also have the chance to give tutorials as part of EAISI's professional education program. This allows me to share my knowledge and experience with others, and it's a great way to stay up-to-date on the latest trends and best practices in the field.
  
      Overall, my job at EAISI is challenging and rewarding, and I feel fortunate to be a part of such a vibrant and forward-thinking community. Whether I'm working on AI projects with industry partners or giving tutorials to professionals, I am constantly learning and growing, and I am excited to see what the future holds for AI and EAISI.`,
      imageUrl: '/images/eaisi.webp'
    },
    // More experiences...
  ];
  
  export default experiences;
  