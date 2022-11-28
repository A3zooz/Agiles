import style from './Profile.module.css'
import userimage from "../../static/user.png"
import { useNavigate } from 'react-router-dom';
const ProfileSideBar = ({fullname}) => {
    const navigate = useNavigate();
    const handleNavigate = (e)=>{
            navigate(e.target.id)
    }
     
    return ( <section className={style['side-bar']}>
             <section className={style['side-bar-top']}>
               <img src = {userimage} alt="User"></img>
               <label>{fullname}</label>
             </section>
             <section className={style['side-bar-bottom']}>
                    <ul>
                        <li id ="/user/profile" onClick={handleNavigate}><span id ="/user/profile" >Profile</span></li>
                        <li id ="/user/accountsettings" onClick={handleNavigate}><span  id ="/user/accountsettings">Account Security</span></li>
                        <li id ="/user/paymentMethods" onClick={handleNavigate}><span id ="/user/paymentMethods">Payment Methods</span></li>
                    </ul>
                </section>
    </section> );
}
 
export default ProfileSideBar;