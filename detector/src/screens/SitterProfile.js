import React from 'react';
import image3 from '../assets/image3.png';

const SitterProfile = () => {
    return (
        <div className="sitterProfile">
            <div>
                <img src={image3} alt=""/>
                <div>
                    <h1>Name LastName</h1>
                    <h2>XX Años</h2>
                    <h3>Área/Dirección</h3>
                    <p>Calificaciones <span><img src="" alt=""/></span></p>
                </div>
            </div>
            <div>
                <h2>Biografía</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, distinctio. Inventore consequatur porro nesciunt cum adipisci, atque praesentium expedita, illo necessitatibus eius vel quasi quidem voluptatem, vitae maxime possimus aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, aliquam iusto? Ducimus, obcaecati. Assumenda repellat ipsum a delectus amet, beatae nobis. Suscipit, officia ea. Facere mollitia beatae dolorem quae corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem voluptatem explicabo quia fuga non. A culpa aliquam temporibus ad at possimus expedita mollitia rerum delectus, nam repellat. Soluta, iusto perspiciatis!
                </p>
            </div>
            <div className="sitterProfile__availability">
                <h2>Disponibilidad</h2>
                <div className="sitterProfile__availability--list">
                    <div><h3>Lunes</h3></div>
                    <div><h3>Martes</h3></div>
                    <div><h3>Miércoles</h3></div>
                    <div><h3>Jueves</h3></div>
                    <div><h3>Viernes</h3></div>
                    <div><h3>Sábado</h3></div>
                    <div><h3>Domingo</h3></div>
                </div>
            </div>
            
            <button><a href="/">Agenda con <span>*nombre*</span></a></button>
        </div>
    )
}

export default SitterProfile;