import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const responce = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(responce.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-pink-500 flex justify-center mt-4">Hello {user.firstName}</h1>
    </>
  );
};

export default Profile;
