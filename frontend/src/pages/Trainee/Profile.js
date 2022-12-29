import LoadingScreen from "react-loading-screen";
import spinner from "../../static/download.gif";
import style from "./Profile.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ProfileSideBar from "./ProfileSidebar";
import Cookie from "universal-cookie";
import axios from "axios";
import { useEffect } from "react";
const cookie = new Cookie();
const fetchUrl = "/individualtrainee/getIndividualTraineebyId";
const fetchInstUrl = "/instructor/instructorbyid";
const updateUrl = "/individualtrainee/updateBasics";
const updateInstUrl = "/instructor/updateBasics";
const Profile = () => {
  const id = cookie.get("currentUser");
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [minibio, setMiniBio] = useState("");
  const [wallet, setWallet] = useState(0);
  const fetchData = async () => {
    setIsLoading(true);
    const fetch = cookie.get("status") == 1 ? fetchInstUrl : fetchUrl;
    try {
      const res = await axios.get(fetch, { params: { id: id } });
      if (cookie.get("status") == 1) {
        setData(res.data.firstField);
        setFirstname(res.data.firstField.firstname);
        setLastname(res.data.firstField.lastname);
        setMiniBio(res.data.firstField.mini_bio);
      } else {
        setData(res.data);
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setMiniBio(res.data.mini_bio);
        setWallet(res.data.wallet);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleSumbit = (event) => {
    event.preventDefault();
    const body = {
      firstname: firstname,
      lastname: lastname,
      minibio: minibio,
    };
    const update = cookie.get("status") == 1 ? updateInstUrl : updateUrl;
    try {
      const res = axios.patch(update, body);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {isloading ? (
        <LoadingScreen loading={true} logoSrc={spinner} />
      ) : (
        <section className={style["main"]}>
          <ProfileSideBar
            fullname={data.firstname + " " + data.lastname}
            state={"profile"}
          />
          <section className={style["profile"]}>
            <section className={style["profile-top"]}>
              <div>
                <h1>Public profile</h1>
                <label>Add information about yourself</label>
              </div>
            </section>
            <section className={style["profile-bottom"]}>
              <form onSubmit={handleSumbit}>
                <label>Basics :</label>
                <input
                  placeholder={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                ></input>
                <input
                  placeholder={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                ></input>
                <input
                  placeholder={minibio == "" ? "write your mini bio" : minibio}
                  onChange={(e) => setMiniBio(e.target.value)}
                ></input>
                <div>wallet : {wallet == 0 ? "empty" : wallet}</div>
                <Button
                  style={{ backgroundColor: "#a00407", border: "none" }}
                  variant="dark"
                  type="submit"
                >
                  {" "}
                  save
                </Button>
              </form>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Profile;
