import graphqlWorkshop from '../images/graphql/graphql-workshop.svg'
import graphqlForEveryone from '../images/graphql/graphql-for-everyone.svg'
import graphqlTheNextParts from '../images/graphql/graphql-the-next-parts.svg'

export default [
  {
    title: 'GraphQL Workshop',
    //slug: 'graphql-workshop',
    description: `In this hands-on workshop, you'll learn GraphQL from the ground up. We'll learn how to write queries, mutations, and subscriptions with the GraphQL query language. Then once we understand how to interact with a GraphQL endpoint, you will design your own schema and create a fullstack GraphQL application. Students will receive a copy of the new [Learning GraphQL](http://shop.oreilly.com/product/0636920137269.do) book from O'Reilly Media.`,
    thumb: `${graphqlWorkshop}`,
    button: '',
    length: '2',
    tags: [
      'Query Language',
      'Schema Definition Language',
      'Creating an API',
      'Resolvers',
      'GraphQL Clients',
      'Apollo Client',
      'Apollo with React',
      'Subscriptions',
    ],
  },
  {
    title: 'GraphQL: The Next Parts',
    //slug: 'graphql-the-next-parts',
    description: `Beyond the basics, this course covers all of the next level stuff that you'll want to learn about GraphQL after you have the basics of writing queries, creating schemas, and building simple servers dialed in. You'll spend time digging into the more advanced features of GraphQL including subscriptions, advanced schema design, and more. Upon leaving the course, students will have a better understanding of best practices and a working knowledge of the emerging trends and tools in the GraphQL ecosystem.`,
    thumb: `${graphqlTheNextParts}`,
    button: '',
    length: '2',
    tags: [
      'Subscriptions',
      'Advanced Schema Design',
      'Mocking',
      'Security',
      'Schema Stitching',
      'API Orchestration Layers',
    ],
  },
  {
    title: 'GraphQL for Everyone',
    //slug: 'graphql-for-everyone',
    description: `Designing an API is not just for developers: it's literally for everyone. This course is aimed at developers, managers, designers, and anyone who works on development projects. We'll start with an overview of GraphQL, its design principles, and its history. Learn more about how to plan, execute, and communicate about GraphQL projects with everyone in your organization.`,
    thumb: `${graphqlForEveryone}`,
    button: '',
    length: '1',
    tags: [
      'GraphQL Overview',
      'Why Choose GraphQL',
      'Query Language',
      'Schema Definition Language',
      'GraphQL Servers',
      'GraphQL Clients',
      'GraphQL Architecture',
    ],
  },
]
