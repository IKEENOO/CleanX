import React from 'react';
import Image from "next/image";
import "./style.css";

const Prices = () => {
  return (
    <div className="prices">
        <div className="price__item">
            <Image 
                src="/assets/prices/1.jpg"
                alt="1"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie kanapy 2-osobowej
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
        <div className="price__item">
            <Image 
                src="/assets/prices/2.jpg"
                alt="2"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie kanapy 3-osobowej
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
        <div className="price__item">
            <Image 
                src="/assets/prices/3.jpg"
                alt="3"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie oddzielnej poduszki oparciowej kanapy
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
        <div className="price__item">
            <Image 
                src="/assets/prices/4.jpg"
                alt="4"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie krzesła z miękkim oparciem
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
        <div className="price__item">
            <Image 
                src="/assets/prices/5.jpg"
                alt="5"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie narożnika (do 2,5 m długości)
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
        <div className="price__item">
            <Image 
                src="/assets/prices/6.jpg"
                alt="6"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie materaca jednoosobowego
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
        <div className="price__item">
            <Image 
                src="/assets/prices/7.jpg"
                alt="7"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie materaca dwuosobowego
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
        <div className="price__item">
            <Image 
                src="/assets/prices/8.jpg"
                alt="8"
                width={200}
                height={200}
                priority
            />
            <p className="item__name">
                Pranie łóżka z wezgłowiem
            </p>
            <p className="price">
                80 zł
            </p>
        </div>
    </div>
  )
}

export default Prices;