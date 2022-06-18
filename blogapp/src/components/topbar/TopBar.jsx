import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css'

export default function TopBar() {
  const {user , dispatch} = useContext(Context);
  const PF = "https://blogbydhiraj.herokuapp.com/images/";

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
    window.location.replace("/");
  };
  return (
    <div className=' top'>
        <div className='topLeft'>
        <i class="fa-brands topIcon fa-facebook"></i>
        <i class="fa-brands topIcon fa-instagram"></i>
        <i class="fa-brands topIcon fa-linkedin-in"></i>
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className='topListItem'>
                  <Link to='/' className='link' >HOME</Link>
                </li>
                <li className='topListItem'>
                <Link to='/about' className='link' >ABOUT</Link>
                </li>
                <li className='topListItem'>
                <Link to='/contact' className='link' >CONTACT</Link>
                </li>
                <li className='topListItem'>
                <Link to='/write' className='link' >WRITE</Link>  
                </li>
                <li onClick={handleLogout} className='topListItem'>
                {user && "LOGOUT"}  
                </li>
            </ul>
        </div>
        <div className='topRight'>
         
            
          {
            user ? (
              <Link to ="/settings">

              <img className="topImg" src={PF+user.profilePic} alt="" />
              </Link>
            ) : (
              <ul className='topList'>
                <li className='topListItem'>
                  <Link to='/login' className='link' >LOGIN</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/register' className='link' >REGISTER</Link>
                </li>
              </ul>
            )
          }
            
           
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>            
        </div>
    </div>
  )
}







