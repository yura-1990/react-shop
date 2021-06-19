import React, { useState } from 'react'
import { builds, internet, phones, porfume, short, toys, washing, sofa, iphon1, iphon2, iphon3, iphon4, iphon5, iphon6, mi1, mi2, mi3, mi4, mi5, mi6 } from '../static/img'


export default function Header() {
    const [category, setCategory] = useState([
        {
            name: 'Одежда',
            imgUrl: 'fal fa-tshirt',
            img: short
        },
        {
            name: 'Техника ',
            imgUrl: 'fal fa-mobile',
            img: phones
        },
        {
            name: 'Бытовая-техника ',
            imgUrl: 'fal fa-washer',
            img: washing
        },
        {
            name: 'Товары для дома',
            imgUrl: 'fal fa-couch',
            img: sofa
        },
        {
            name: 'Интерьер',
            imgUrl: 'fal fa-sunset',
            img: internet
        },
        {
            name: 'Для детей',
            imgUrl: 'fab fa-playstation',
            img: toys
        },
        {
            name: 'Красота',
            imgUrl: 'fal fa-air-freshener',
            img: porfume
        },
        {
            name: 'Другие товары',
            imgUrl: 'fal fa-atom-alt',
            img: builds
        },
    ])
    const [products, setProducts] = useState([
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: iphon1
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: iphon2
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: iphon3
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: iphon4
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: iphon5
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: iphon6
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: mi1
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: mi2
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: mi3
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: mi4
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: mi5
        },
        {
            name: 'Apple / Техника',
            originPrice: '950 000 тг',
            currentPrice: '350 000 тг',
            image: mi6
        },
    ])

    return (
        <main className="shop">
            <section className="container shop__block">
                <h1 className="title">Категории</h1>
                <div className="shop__content">
                    {category.map((categ, index) =>
                        <div key={index} className="shop__item">
                            <div className="shop__item-icon">
                                <i className={categ.imgUrl}></i>
                            </div>
                            <div className="shop__item-photo">
                                <img src={categ.img} alt={categ.name} className="shop__item-image" />
                            </div>
                            <span className="shop__item-item">{categ.name}</span>
                        </div>
                    )}
                </div>
            </section>
            <section className="shop__products container">
                <h1 className="title">Популярные товары</h1>
                <div className="shop__products-content">
                    {products.map((el, i) =>
                        <div key={i} className="shop__products-item">
                            <img src={el.image} alt={el.name} />
                            <div className="shop__products-spans">
                                <span className="shop__products-current">{el.currentPrice}</span>
                                <span className="shop__products-origin">{el.originPrice}</span>
                            </div>
                            <p className="shop__products-info">{el.name}</p>
                        </div>
                    )}
                </div>
            </section>
        </main>

    )
}