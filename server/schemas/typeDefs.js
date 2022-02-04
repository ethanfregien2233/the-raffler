const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    raffleTickets: Array
    rafflesWon: Array
  }

  type Raffle {
    name: String
    description: String
    image: String
    ticketArray: Array
  }

  type Ticket {
    username: User
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }


  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!,  email: String!, username: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
