import { useEffect, useState } from "react";
import api from "../lib/axios";
import NavBar from "../components/NavBar";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await api.get("/user");
      console.log("Utilisateurs récupérés :", res.data);

      setUsers(res.data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b">{user._id}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
