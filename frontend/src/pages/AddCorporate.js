import { useState } from "react";
import axios from "axios";
import "./AddInstructor.css";
const AddCorporate = () => {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");

    const handleSumbit = async (event) => {
        const corporate = {fullname:fullname, username: username, password: password , email:email ,gender:gender};
        event.preventDefault();
        event.target.reset();
        let config = {
          headers: {
            header1: "Access-Control-Allow-Origin",
          },
        };
        try {
          const res = await axios.post("/api/admin/addCorporate", corporate, config);
          console.log(res.data);
        
        } catch (e) {
          console.log(e);
        
        }
      };
  return (
    <div className="contains">
    <h1 className="title">Add A NEW Corporate Trainee</h1>
      <form onSubmit={handleSumbit}>
        <label>
          Fullname <span className="required">*</span>
        </label>
        <input type="text" name="fullname" placeholder="name.." onChange={(e) => setFullname(e.target.value) }/>

        <label>
          Email <span className="required">*</span>
        </label>
        <input type="text" name="email" placeholder="Email.."  onChange={(e) => setEmail(e.target.value)}/>

        <label>
          username <span className="required">*</span>
        </label>
        <input type="text" name="username" placeholder="username.." onChange={(e) => setUsername(e.target.value)} />
        <label>
          password <span className="required">*</span>
        </label>
        <input type="password" name="password"  placeholder="password.." onChange={(e) => setPassword(e.target.value)}/>
        <label >gender</label>
        <select id="gender" name="gender " onChange={(e) => setGender(e.target.value)}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddCorporate;
