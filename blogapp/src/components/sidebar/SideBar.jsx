import {axiosInstance} from "../../config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
  const [cats,setCats] = useState([]);
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    }
    getCats();
  },[])
  return (
    <div className=" sidebar">
      <div className="sidebarItem">
        <span className=" sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/12070041/pexels-photo-12070041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fugit architecto quos adipisci ullam. 
        </p>
      </div>

      <div className="sidebarItem">
        <span className=" sidebarTitle">CATEGORIES</span>
        <lu className="sidebarList">
          {cats.map((c)=>(
            <Link className="link" to={`/?cat=${c.name}`}>
            <li className="sidebarListItem">{c.name}</li>
            </Link>

          ))}
     
        </lu>
      </div>
      <div className="sidebarItem">
      <span className=" sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i class="fa-brands sidebarIcon fa-facebook"></i>
        <i class="fa-brands sidebarIcon fa-instagram"></i>
        <i class="fa-brands sidebarIcon fa-linkedin-in"></i>
      </div>
      </div>
    </div>
  );
}
