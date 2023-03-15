import React, { useState } from "react";
import { Usuario } from "../Usuario/Usuario";
import '../Map/Map.css'
import './Sidebar.css'




export const Sidebar = ({usuarios, setPosition, expanded, setExpanded, setMenu, menu}) => {

    const [searchUser, setSearchUser] = useState('')
    
    const users = searchUser.length > 1 ? usuarios.filter(user => user.name.first.toLowerCase().includes(searchUser.toLowerCase()) || user.name.last.toLowerCase().includes(searchUser.toLowerCase()) || user.name.title.toLowerCase().includes(searchUser.toLowerCase()) ) : usuarios

    const searchOnChange = (e) => {
        e.preventDefault()
        setSearchUser(e.target.value)
    }


    
    
    return(
        <div className="usuario">

            
            <input onChange={searchOnChange}/>
            

            {users.map(usuario => {
                return (
                    <Usuario
                    setPosition={setPosition}
                    name={usuario.name}
                    key={usuario.login.uuid}
                    image={usuario.picture.thumbnail}
                    gender={usuario.gender}
                    city={usuario.location.city}
                    email={usuario.email}
                    phone={usuario.phone}
                    coordinates={usuario.location.coordinates}
                    country={usuario.location.country}
                    street={usuario.location.street}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setMenu={setMenu}
                    menu={menu}
                    />
                )
            })}
        </div>
    )
}
