const list = [
  {
    "id": 1,
    "question": "What is Agile methodology?",
    "options": [
      {
        "label": "A",
        "description": "A project management method emphasizing flexibility and collaboration."
      },
      {
        "label": "B",
        "description": "A programming language used for rapid application development."
      },
      {
        "label": "C",
        "description": "A type of software that manages databases."
      },
      {
        "label": "D",
        "description": "A tool for version control."
      }
    ],
    "answer": "A"
  },
  {
    "id": 2,
    "question": "What does 'CI/CD' stand for?",
    "options": [
      {
        "label": "A",
        "description": "Continuous Integration / Continuous Delivery"
      },
      {
        "label": "B",
        "description": "Code Integration / Code Deployment"
      },
      {
        "label": "C",
        "description": "Centralized Information / Centralized Database"
      },
      {
        "label": "D",
        "description": "Customer Interface / Customer Development"
      }
    ],
    "answer": "A"
  },
  {
    "id": 3,
    "question": "Which language is primarily used for web development?",
    "options": [
      {
        "label": "A",
        "description": "Python"
      },
      {
        "label": "B",
        "description": "JavaScript"
      },
      {
        "label": "C",
        "description": "C++"
      },
      {
        "label": "D",
        "description": "Java"
      }
    ],
    "answer": "B"
  },
  {
    "id": 4,
    "question": "What is the main purpose of a version control system?",
    "options": [
      {
        "label": "A",
        "description": "To compile code"
      },
      {
        "label": "B",
        "description": "To manage changes to source code"
      },
      {
        "label": "C",
        "description": "To execute tests"
      },
      {
        "label": "D",
        "description": "To design user interfaces"
      }
    ],
    "answer": "B"
  },
  {
    "id": 5,
    "question": "What is 'DevOps'?",
    "options": [
      {
        "label": "A",
        "description": "A software development methodology focusing on communication and collaboration between developers and IT operations."
      },
      {
        "label": "B",
        "description": "A type of database management system."
      },
      {
        "label": "C",
        "description": "A cloud service provider."
      },
      {
        "label": "D",
        "description": "A programming language for system development."
      }
    ],
    "answer": "A"
  },
  {
    "id": 6,
    "question": "Which is a popular framework for building web applications in Python?",
    "options": [
      {
        "label": "A",
        "description": "React"
      },
      {
        "label": "B",
        "description": "Django"
      },
      {
        "label": "C",
        "description": "Angular"
      },
      {
        "label": "D",
        "description": "Laravel"
      }
    ],
    "answer": "B"
  },
  {
    "id": 7,
    "question": "What is 'pair programming'?",
    "options": [
      {
        "label": "A",
        "description": "Two developers working together at one workstation."
      },
      {
        "label": "B",
        "description": "A programming technique for mobile applications."
      },
      {
        "label": "C",
        "description": "A method of splitting tasks between two teams."
      },
      {
        "label": "D",
        "description": "A software tool for code review."
      }
    ],
    "answer": "A"
  },
  {
    "id": 8,
    "question": "What is an API?",
    "options": [
      {
        "label": "A",
        "description": "Application Programming Interface"
      },
      {
        "label": "B",
        "description": "Application Protocol Interface"
      },
      {
        "label": "C",
        "description": "Advanced Programming Input"
      },
      {
        "label": "D",
        "description": "Application Process Interface"
      }
    ],
    "answer": "A"
  },
  {
    "id": 9,
    "question": "What does 'OOP' stand for in software development?",
    "options": [
      {
        "label": "A",
        "description": "Object-Oriented Programming"
      },
      {
        "label": "B",
        "description": "Operational Output Programming"
      },
      {
        "label": "C",
        "description": "Overhead Output Process"
      },
      {
        "label": "D",
        "description": "Object-Oriented Process"
      }
    ],
    "answer": "A"
  },
  {
    "id": 10,
    "question": "Which of the following is a NoSQL database?",
    "options": [
      {
        "label": "A",
        "description": "MySQL"
      },
      {
        "label": "B",
        "description": "PostgreSQL"
      },
      {
        "label": "C",
        "description": "MongoDB"
      },
      {
        "label": "D",
        "description": "Oracle"
      }
    ],
    "answer": "C"
  },
  {
    "id": 11,
    "question": "What is the primary purpose of unit testing?",
    "options": [
      {
        "label": "A",
        "description": "To test the complete system"
      },
      {
        "label": "B",
        "description": "To test individual components of the software"
      },
      {
        "label": "C",
        "description": "To test user interfaces"
      },
      {
        "label": "D",
        "description": "To ensure code quality"
      }
    ],
    "answer": "B"
  },
  {
    "id": 12,
    "question": "What does 'refactoring' mean in software development?",
    "options": [
      {
        "label": "A",
        "description": "Adding new features to the software"
      },
      {
        "label": "B",
        "description": "Fixing bugs in the software"
      },
      {
        "label": "C",
        "description": "Rewriting code to improve readability and maintainability"
      },
      {
        "label": "D",
        "description": "Optimizing software performance"
      }
    ],
    "answer": "C"
  },
  {
    "id": 13,
    "question": "What is the purpose of a 'sprint' in Agile methodology?",
    "options": [
      {
        "label": "A",
        "description": "A phase where new team members are trained."
      },
      {
        "label": "B",
        "description": "A set period during which specific work has to be completed and made ready for review."
      },
      {
        "label": "C",
        "description": "A period of time allocated for planning the next phase of development."
      },
      {
        "label": "D",
        "description": "A technique used for continuous integration."
      }
    ],
    "answer": "B"
  },
  {
    "id": 14,
    "question": "What is 'TDD' in software development?",
    "options": [
      {
        "label": "A",
        "description": "Technical Design Documentation"
      },
      {
        "label": "B",
        "description": "Test-Driven Development"
      },
      {
        "label": "C",
        "description": "Technical Data Deployment"
      },
      {
        "label": "D",
        "description": "Test Data Deployment"
      }
    ],
    "answer": "B"
  },
  {
    "id": 15,
    "question": "Which of the following is a front-end web development framework?",
    "options": [
      {
        "label": "A",
        "description": "Node.js"
      },
      {
        "label": "B",
        "description": "Express.js"
      },
      {
        "label": "C",
        "description": "React"
      },
      {
        "label": "D",
        "description": "Django"
      }
    ],
    "answer": "C"
  },
  {
    "id": 16,
    "question": "What is the role of a 'Product Owner' in Scrum?",
    "options": [
      {
        "label": "A",
        "description": "To manage the development team."
      },
      {
        "label": "B",
        "description": "To define the features of the product and prioritize the product backlog."
      },
      {
        "label": "C",
        "description": "To write code and fix bugs."
      },
      {
        "label": "D",
        "description": "To ensure the product is tested before release."
      }
    ],
    "answer": "D"
  }
];

export default list;
