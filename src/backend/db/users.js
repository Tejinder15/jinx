import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Test",
    lastName: "User",
    username: "testuser",
    password: "test123",
    profile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "This is Test User"
  },
  {
    _id: uuid(),
    firstName: "Gudu",
    lastName: "Pandit",
    username: "Gudu12",
    password: "123",
    profile: "https://images.indianexpress.com/2020/10/mirzapur-2-review-1200.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ""
  },
  {
    _id: uuid(),
    firstName: "Robert",
    lastName: "Jr",
    username: "Robert12",
    password: "123",
    profile: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ""
  },
  {
    _id: uuid(),
    firstName: "Lucy",
    lastName: "White",
    username: "Lucy123",
    password: "123",
    profile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ""
  },
  {
    _id: uuid(),
    firstName: "Vijay",
    lastName: "Raaz",
    username: "VijayR",
    password: "123",
    profile: "https://spiderimg.amarujala.com/assets/images/2018/03/18/vijay-raj_1521391896.jpeg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ""
  },
  {
    _id: uuid(),
    firstName: "Rajpal",
    lastName: "Yadav",
    username: "RajpalY",
    password: "123",
    profile: "https://im.idiva.com/content/2021/Feb/rajpal-yadav-quiz_THUMB_601bc5de36d7a.jpg?w=790&h=590&cc=1",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ""
  },
  {
    _id: uuid(),
    firstName: "Babu",
    lastName: "Rao",
    username: "BabuR",
    password: "123",
    profile: "https://static.toiimg.com/photo/msid-87325917/87325917.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ""
  },
];
