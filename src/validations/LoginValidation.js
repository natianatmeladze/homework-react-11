import { object, string } from "yup";

const schema = object({
  username: string()
    .required("username არის სავალდებულო ველი")
    .min(3, "username უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს")
    .max(15, "username უნდა შედგებოდეს მაქსიმუმ 15 სიმბოლოსგან"),
  password: string()
    .required("პაროლი არის სავალდებულო ველი")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს")    
    ,
});

export default schema;