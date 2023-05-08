import React from "react";
import firstuser from '../../assets/images/Brad Lebo - Pennsylvania (1).png';
import seconduser from '../../assets/images/Eric Ratchford - South Carollina (1).png';
import thirduser from '../../assets/images/Gary Hester - North Carolina.png';
import fourthuser from '../../assets/images/Greg Newport - North Carolina.png';
import fivethuser from '../../assets/images/Jay Klapper - Georgia.png';
import sexthuser from '../../assets/images/Jeremy Inabinet - Illinois.png';
import seventhuser from '../../assets/images/Joey Graybeal - Tennessee .png';
import eigthuser from '../../assets/images/John Ventura - South Carolina.png';
import ninethuser from '../../assets/images/Justin Monnig - Ohio.png';
import tenthuser from '../../assets/images/Kent Cranford - North Carolina.png';
import eleventhuser from '../../assets/images/Kyle Sweatt - Georgia.png';
import twelwethuser from '../../assets/images/Matthew W McCaslin - North Carolina.png';

import './Players.scss';
import Footer from "../../components/Footer/Footer";

const Players = () => {
    const Data = [
        {
            id: 1,
            img: firstuser,
            name: 'Brad Lebo',
            country: 'Pennsylvania',
        },
        {
            id: 2,
            img: seconduser,
            name: 'Eric Ratchford',
            country : 'South Carolina',
        },
        {
            id: 3,
            img: thirduser,
            name: 'Gary Hester',
            country: 'North Carolina',
        },
        {
            id: 4,
            img: fourthuser,
            name: 'Greg Newport',
            country: 'North Carolina',
        },
        {
            id: 5,
            img: fivethuser,
            name: 'Jay Klapper',
            country: 'Georgia',
        },
        {
            id: 6,
            img: sexthuser,
            name: 'Jeremy Inabinet',
            country: 'Illinois',
        },
        {
            id: 7,
            img: seventhuser,
            name: 'Joey Graybeal',
            country: 'Tennessee',
        },
        {
            id: 8,
            img: eigthuser,
            name: 'John Ventura',
            country: 'South Carolina',
        },
        {
            id: 9,
            img: ninethuser,
            name: 'Justin Monnig',
            country: 'Ohio',
        },
        {
            id: 10,
            img: tenthuser,
            name: 'Kent Cranford',
            country: 'North Carolina',
        },
        {
            id: 11,
            img: eleventhuser,
            name: 'Kyle Sweatt',
            country: 'Georgia',
        },
        {
            id: 12,
            img: twelwethuser,
            name: 'Matthew W McCaslin',
            country: ' North Carolina',
        },
    ]
    return(
        <div className='Players__page'>
            <div className='Players__container'>
                <div className="back_image">
                    <h1>Players</h1>
                </div>
                <div className="playerslist">
                    <div className="players_card">
                        {Data.map((item) => (
                            <>
                                <div className="card">
                                    <div className="card_img">
                                        <img className="playerimage" src={item.img} alt="img" />
                                    </div>
                                    <div className="box">
                                        <h3 className="name">{item.name}</h3>
                                        <p className="country">{item.country}</p>
                                    </div>
                                </div>
                            </>

                        ))}
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Players;