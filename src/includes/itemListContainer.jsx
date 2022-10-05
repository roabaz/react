
import React, { useState, useEffect } from 'react';
import {ItemList} from './itemList';

export const ItemListContainer = (params) => {
    const [count, setCountValue] = useState(0);
    const addCount = () => {
        setCountValue(count + 1);
    };
    const lessCount = () => {
        if (count > 0) {
            setCountValue(count - 1);
        }
    };
    const clearCount = () => {
        if (count > 0) {
            setCountValue(count - count);
        }
    };

    //  Promesas  //
    const products = [
        {
            "id": 7109,
            "id_item": "17113436-3595558",
            "shop": "Only",
            "title": "Pantalon Chilli Comfy. - Simply Green",
            "full_search": "PIECES  Simply Green Pantalon Chilli Comfy. Cintura Elastizada. - Simply Green",
            "price": 899,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/0aa89d/only.com.uy/onlyuy/0508/webp/catalogo/17113436_3981142_1/1920-1200/pantalon-chilli-comfy-cintura-elastizada-simply-green.jpg",
            "description": "",
            "sizes": [
              "XS",
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "PIECES",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Simply Green",
            "gender": "Mujer"
          },
          {
            "id": 7110,
            "id_item": "10252961-3821365",
            "shop": "Only",
            "title": "Pantalon Octavia Comfy - Rosin",
            "full_search": "ONLY  Rosin Pantalon Octavia Comfy - Rosin",
            "price": 899,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/3f91e1/only.com.uy/onlyuy/086b/webp/catalogo/10252961_3821365_1/1920-1200/pantalon-octavia-comfy-rosin.jpg",
            "description": "",
            "sizes": [
              "S",
              "M",
              "L"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Rosin",
            "gender": "Mujer"
          },
          {
            "id": 7114,
            "id_item": "15191526-3223382",
            "shop": "Only",
            "title": "Pantalón Vilda Tiro Medio Y Straight Fit - Brownie",
            "full_search": "ONLY  Brownie Pantalón Vilda Tiro Medio Y Straight Fit - Brownie",
            "price": 999,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/0f3e54/only.com.uy/onlyuy/4727/webp/catalogo/15191526_3388077_1/1920-1200/pantalon-vilda-tiro-medio-y-straight-fit-brownie.jpg",
            "description": "",
            "sizes": [
              "34",
              "36",
              "38",
              "40"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Brownie",
            "gender": "Mujer"
          },
          {
            "id": 7115,
            "id_item": "15237770-3696667",
            "shop": "Only",
            "title": "Pantalon Laya Veltet. Flared Fit. - Rose Brown",
            "full_search": "ONLY  Rose Brown Pantalon Laya Veltet. Flared Fit. - Rose Brown",
            "price": 999,
            "full_price": "1.099",
            "currency": "UYU",
            "discount": "9",
            "pic": "https://f.fcdn.app/imgs/7fd0a3/only.com.uy/onlyuy/b2ec/webp/catalogo/15237770_3696667_1/1920-1200/pantalon-laya-veltet-flared-fit-rose-brown.jpg",
            "description": "92% Polyester, 8% Elastano,",
            "sizes": [
              "XS",
              "S",
              "M",
              "L"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Rose Brown",
            "gender": "Mujer"
          },
          {
            "id": 11116,
            "id_item": "15113356-2183162",
            "shop": "Only",
            "title": "Jersey Geena Tejido Manga Larga - Frosty Green",
            "full_search": "ONLY  Frosty Green Jersey Geena Tejido Manga Larga - Frosty Green",
            "price": 999,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/1a597d/only.com.uy/onlyuy/2183/webp/catalogo/15113356_3758313_1/1920-1200/jersey-geena-tejido-manga-larga-frosty-green.jpg",
            "description": "Jersey Tejido manga larga",
            "sizes": [
              "XS",
              "S",
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Frosty Green",
            "gender": "Mujer"
          },
          {
            "id": 11117,
            "id_item": "15175267-3036126",
            "shop": "Only",
            "title": "Jersey Tejido Manga Larga - Pine Grove",
            "full_search": "ONLY  Pine Grove Jersey Tejido Manga Larga - Pine Grove",
            "price": 799,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/6541cf/only.com.uy/onlyuy/fa77/webp/catalogo/15175267_3167151_1/1920-1200/jersey-tejido-manga-larga-pine-grove.jpg",
            "description": "Jersey Tejido manga larga",
            "sizes": [
              "XS",
              "S"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Pine Grove",
            "gender": "Mujer"
          },
          {
            "id": 13174,
            "id_item": "22015123-3326923",
            "shop": "Only",
            "title": "Chaleco Acolchado - Tree House",
            "full_search": "ONLY  Tree House Chaleco Acolchado - Tree House",
            "price": 1299,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/073d24/only.com.uy/onlyuy/a215/webp/catalogo/22015123_3329186_1/1920-1200/chaleco-acolchado-tree-house.jpg",
            "description": "Se puede lavar a máquina a un máximo de 30 °C - No utilizar productos blanqueadores - No secar en secadora - Planchar a baja temperatura. Planchar a una temperatura máxima de 100 °C - No limpiar en seco - Tejido: 100% Poliéster - Relleno: 100% Poliéster",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "chaquetas",
            "colors": "Tree House",
            "gender": "Hombre"
          },
          {
            "id": 13176,
            "id_item": "22019343-3618415",
            "shop": "Only",
            "title": "Campera Acolchada Con Capucha - Peat",
            "full_search": "ONLY  Peat Campera Acolchada Con Capucha - Peat",
            "price": 1499,
            "full_price": "1.899",
            "currency": "UYU",
            "discount": "21",
            "pic": "https://f.fcdn.app/imgs/3a8400/only.com.uy/onlyuy/14ec/webp/catalogo/22019343_3697591_1/1920-1200/campera-acolchada-con-capucha-peat.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C -  No utilizar productos blanqueadores -  No secar en secadora",
            "sizes": [
              "M",
              "L"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "chaquetas",
            "colors": "Peat",
            "gender": "Hombre"
          },
          {
            "id": 13178,
            "id_item": "22019618-3574651",
            "shop": "Only",
            "title": "Chaqueta De Denim Come - Blue Denim",
            "full_search": "ONLY  Blue Denim Chaqueta De Denim Come - Blue Denim",
            "price": 1999,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/605959/only.com.uy/onlyuy/7dfc/webp/catalogo/22019618_3574651_1/1920-1200/chaqueta-de-denim-come-blue-denim.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C. No se pueden utilizar productos blanqueadores. Planchar a temperatura media. Se puede secar en secadora a baja temperatura. Colgar para secar.",
            "sizes": [
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "chaquetas",
            "colors": "Blue Denim",
            "gender": "Hombre"
          },
          {
            "id": 13284,
            "id_item": "22019853-3624925",
            "shop": "Only",
            "title": "Sobre Camisa De Pana - Peat",
            "full_search": "ONLY  Peat Sobre Camisa De Pana - Peat",
            "price": 999,
            "full_price": "1.899",
            "currency": "UYU",
            "discount": "47",
            "pic": "https://f.fcdn.app/imgs/6c1613/only.com.uy/onlyuy/ba07/webp/catalogo/22019853_3624930_1/1920-1200/sobre-camisa-de-pana-peat.jpg",
            "description": "Se puede lavar a máquina a media carga utilizando un centrifugado de corta duración y a un máximo de 30 °C No utilizar productos blanqueadores No secar en secadora Planchar a baja temperatura. Planchar a una temperatura máxima de 100 °C No limpiar en seco - 73% Algodón - 27% Poliéster",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisas",
            "colors": "Peat",
            "gender": "Hombre"
          },
          {
            "id": 14317,
            "id_item": "22021315-3730320",
            "shop": "Only",
            "title": "Pantalon Deportivo Tipo Jogger - Incense",
            "full_search": "ONLY  Incense Pantalon Deportivo Tipo Jogger - Incense",
            "price": 799,
            "full_price": "999",
            "currency": "UYU",
            "discount": "20",
            "pic": "https://f.fcdn.app/imgs/71e0e9/only.com.uy/onlyuy/c216/webp/catalogo/22021315_3730320_1/1920-1200/pantalon-deportivo-tipo-jogger-incense.jpg",
            "description": "Se puede lavar a máquina a media carga utilizando un centrifugado de corta duración y a un máximo de 30 °C -  No utilizar productos blanqueadores -  No secar en secadora -  Planchar a temperatura media -  No limpiar en seco",
            "sizes": [
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Incense",
            "gender": "Hombre"
          },
          {
            "id": 14319,
            "id_item": "22020987-3709773",
            "shop": "Only",
            "title": "Pantalon Estampado De Lino - Cherry Mahogany",
            "full_search": "ONLY  Cherry Mahogany Pantalon Estampado De Lino - Cherry Mahogany",
            "price": 1099,
            "full_price": "1.499",
            "currency": "UYU",
            "discount": "26",
            "pic": "https://f.fcdn.app/imgs/d8f30a/only.com.uy/onlyuy/ea3c/webp/catalogo/22020987_3709773_1/1920-1200/pantalon-estampado-de-lino-cherry-mahogany.jpg",
            "description": "",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Cherry Mahogany",
            "gender": "Hombre"
          },
          {
            "id": 14321,
            "id_item": "22018686-3500994",
            "shop": "Only",
            "title": "Pantalon Jogger. Cintura Ajustable - Chinchilla",
            "full_search": "ONLY  Chinchilla Pantalon Jogger. Cintura Ajustable - Chinchilla",
            "price": 999,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/6b0450/only.com.uy/onlyuy/b823/webp/catalogo/22018686_3526831_1/1920-1200/pantalon-jogger-cintura-ajustable-chinchilla.jpg",
            "description": "",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Chinchilla",
            "gender": "Hombre"
          },
          {
            "id": 14649,
            "id_item": "22021751-3777118",
            "shop": "Only",
            "title": "Camiseta Estampada - Star White",
            "full_search": "ONLY  Star White Camiseta Estampada - Star White",
            "price": 699,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/c0436a/only.com.uy/onlyuy/eb87/webp/catalogo/22021751_3777118_1/1920-1200/camiseta-estampada-star-white.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas No utilizar productos blanqueadores No secar en secadora Planchar a temperatura media No limpiar en seco Colgar para secar - 100% algodón",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Star White",
            "gender": "Hombre"
          },
          {
            "id": 14651,
            "id_item": "22021332-3730811",
            "shop": "Only",
            "title": "Camiseta De 3 Colores - Kangaroo",
            "full_search": "ONLY  Kangaroo Camiseta De 3 Colores - Kangaroo",
            "price": 399,
            "full_price": "499",
            "currency": "UYU",
            "discount": "20",
            "pic": "https://f.fcdn.app/imgs/e80bd3/only.com.uy/onlyuy/1ca4/webp/catalogo/22021332_3730811_1/1920-1200/camiseta-de-3-colores-kangaroo.jpg",
            "description": "",
            "sizes": [
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Kangaroo",
            "gender": "Hombre"
          },
          {
            "id": 59698,
            "id_item": "13195738-3726419",
            "shop": "Only",
            "title": "Buzo Tejido - Dark Sapphire",
            "full_search": "ONLY  Dark Sapphire Buzo Tejido - Dark Sapphire",
            "price": 699,
            "full_price": "799",
            "currency": "UYU",
            "discount": "12",
            "pic": "https://f.fcdn.app/imgs/2117ce/only.com.uy/onlyuy/0a6a/webp/catalogo/13195738_3726419_1/1920-1200/buzo-tejido-dark-sapphire.jpg",
            "description": "Buzo de punto a rayas. Corte básico y escote redondo. Composición: 100% Algodón orgánico. Instrucciones de lavado: Lavar a máquina a 40ªC como máximo en progama de lavado suave. No usar blanqueador. No secar en secadora. Planchar a temperatura media. No lavar en seco. Colgar para secar.",
            "sizes": [
              "1.5 Años",
              "2 Años",
              "4 Años"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Sapphire",
            "gender": "Niños"
          },
          {
            "id": 59710,
            "id_item": "13192989-3657971",
            "shop": "Only",
            "title": "Saco Tejido - Dusty Blue",
            "full_search": "ONLY  Dusty Blue Saco Tejido - Dusty Blue",
            "price": 779,
            "full_price": "849",
            "currency": "UYU",
            "discount": "8",
            "pic": "https://f.fcdn.app/imgs/1bbf60/only.com.uy/onlyuy/3142/webp/catalogo/13192989_3768072_1/1920-1200/saco-tejido-dusty-blue.jpg",
            "description": "Cárdigan tejido de punto cuadrado a rayas de colores. Cierre de botones en la parte delantera y cuello de pico. Composición: 56% Poliéster reciclado, 37% Acrílico, 4% Alpaca, 3% Lana. Instrucciones de lavado: Lavar a máquina a un máximo de 40°C con un programa de lavado suave. No usar blanqueador. No secar en secadora. Planchar a baja temperatura (máximo 100°C). No lavar en seco.Colgar para secar.",
            "sizes": [
              "13 a 14 Años"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dusty Blue",
            "gender": "Niños"
          },
          {
            "id": 59481,
            "id_item": "13192413-3623666",
            "shop": "Only",
            "title": "Leggings Estampada - Deco Rose",
            "full_search": null,
            "price": 399,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/544818/only.com.uy/onlyuy/7c5b/webp/catalogo/13192413_3623666_1/1920-1200/leggings-estampada-deco-rose.jpg",
            "description": "Leggings estampadas. Elástico en la cintura. Cómoda calidad elástica. Composición: 58% Algodón orgánico, 37% Modal, 5% Elastano. Instrucciones de lavado: Se puede lavar a máquina a media carga utilizando un centrifugado de corta duración y a un máximo de 30°C. No utilizar productos blanqueadores. No secar en secadora. Planchar a temperatura media. No limpiar en seco. Colgar para secar.",
            "sizes": [
              "4 Meses",
              "6 Meses",
              "9 Meses",
              "1 Año"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Deco Rose",
            "gender": "Niños"
          },
          {
            "id": 59487,
            "id_item": "13194508-3681433",
            "shop": "Only",
            "title": "Pantalón Deportivo - Curry",
            "full_search": "NAME IT  Curry Pantalón Deportivo - Curry",
            "price": 599,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/8bc134/only.com.uy/onlyuy/9802/webp/catalogo/13194508_3681437_1/1920-1200/pantalon-deportivo-curry.jpg",
            "description": "Pantalón deportivo con elástico ajustable en la cintura. Ajuste normal. Elástico en tobillos. Composición: 100% Algodón orgánico. Instrucciones de lavado: Lavar a máquina, media carga, ciclo de centrifugado corto a 40ºC. No usar blanqueador. No secar en secadora. Planchar a temperatura media. No lavar en seco.",
            "sizes": [
              "2 Años"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Curry",
            "gender": "Niños"
          },
          {
            "id": 59492,
            "id_item": "13191866-3615468",
            "shop": "Only",
            "title": "Leggings Disney Tambor - Pale Mauve",
            "full_search": "ONLY  Pale Mauve Leggings Disney Tambor - Pale Mauve",
            "price": 399,
            "full_price": "479",
            "currency": "UYU",
            "discount": "16",
            "pic": "https://f.fcdn.app/imgs/ad67c1/only.com.uy/onlyuy/9d1c/webp/catalogo/13191866_3615469_1/1920-1200/leggings-disney-tambor-pale-mauve.jpg",
            "description": "Leggings con estampado de conejo TAMBOR-DISNEY. Cómoda calidad elástica y elástico en la cintura. Composición: 95% Algodón, 5% Elastano. Instrucciones de lavado: Lavar a máquina a un máximo de 40ºC con un programa de lavado suave. No usar blanqueador. No secar en secadora. Planchar a fuego medio. No lavar en seco. Colgar para secar.",
            "sizes": [
              "1.5 Años",
              "2 Años",
              "3 Años"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Pale Mauve",
            "gender": "Niños"
          },
          {
            "id": 59496,
            "id_item": "13186890-3519280",
            "shop": "Only",
            "title": "Leggings Lisa - Woodrose",
            "full_search": "NAME IT  Woodrose Leggings Lisa - Woodrose",
            "price": 399,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/7e60ca/only.com.uy/onlyuy/644e/webp/catalogo/13186890_3519280_1/1920-1200/leggings-lisa-woodrose.jpg",
            "description": "Leggings lisa con elástico en la cintura y tejido con textura acanalada. Composición: 57% Algodón orgánico 38% Mezcla modal, 5% Elastano. Instrucciones de lavado: Se puede lavar a máquina a media carga utilizando un centrifugado de corta duración y a un máximo de 40°C. No utilizar productos blanqueadores. No secar en secadora. Planchar a temperatura media. No limpiar en seco. Colgar para secar.",
            "sizes": [
              "2 Años",
              "5 Años"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Woodrose",
            "gender": "Niños"
          },
          {
            "id": 37451,
            "id_item": "27020765-3898492",
            "shop": "Only",
            "title": "Top Kerry Sin Una Manga - Bright White",
            "full_search": "NOISY MAY  Bright White Top Kerry Sin Una Manga - Bright White",
            "price": 599,
            "full_price": "799",
            "currency": "UYU",
            "discount": "25",
            "pic": "https://f.fcdn.app/imgs/0a1d29/only.com.uy/onlyuy/5a5d/webp/catalogo/27020765_3898493_1/1920-1200/top-kerry-sin-una-manga-bright-white.jpg",
            "description": "",
            "sizes": [
              "M"
            ],
            "brand": "NOISY MAY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Bright White",
            "gender": "Mujer"
          },
          {
            "id": 37452,
            "id_item": "15246481-3777415",
            "shop": "Only",
            "title": "Camiseta Rolling Stones. Manga Corta - Pumice Stone",
            "full_search": "ONLY  Pumice Stone Camiseta Rolling Stones. Manga Corta - Pumice Stone",
            "price": 999,
            "full_price": "1.099",
            "currency": "UYU",
            "discount": "9",
            "pic": "https://f.fcdn.app/imgs/029801/only.com.uy/onlyuy/63db/webp/catalogo/15246481_3777415_1/1920-1200/camiseta-rolling-stones-manga-corta-pumice-stone.jpg",
            "description": "100% ALGODÓN,",
            "sizes": [
              "S"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Pumice Stone",
            "gender": "Mujer"
          },
          {
            "id": 37460,
            "id_item": "15228785-3610128",
            "shop": "Only",
            "title": "Sudadera Judiea Deportiva - Bijou Blue",
            "full_search": "ONLY PLAYONLY  Bijou Blue Sudadera Judiea Deportiva - Bijou Blue",
            "price": 999,
            "full_price": "1.299",
            "currency": "UYU",
            "discount": "23",
            "pic": "https://f.fcdn.app/imgs/648a9e/only.com.uy/onlyuy/0cda/webp/catalogo/15228785_3610128_1/1920-1200/sudadera-judiea-deportiva-bijou-blue.jpg",
            "description": "80% POLIESTSER, 20% ELASTANO,",
            "sizes": [
              "M"
            ],
            "brand": "ONLY PLAYONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Bijou Blue",
            "gender": "Mujer"
          },
          {
            "id": 37552,
            "id_item": "15201066-3417783",
            "shop": "Only",
            "title": "Camiseta Manga Corta Con Diseño - Black",
            "full_search": "ONLY  Black Camiseta Manga Corta Con Diseño - Black",
            "price": 399,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/e390ed/only.com.uy/onlyuy/6338/webp/catalogo/15201066_3417784_1/1920-1200/camiseta-manga-corta-con-diseno-black.jpg",
            "description": "",
            "sizes": [
              "XS",
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Black",
            "gender": "Mujer"
          },
          {
            "id": 17084,
            "id_item": "13191995-3623703",
            "shop": "Only",
            "title": "Cardigan Tejido - Dark Sapphire",
            "full_search": "ONLY  Dark Sapphire Cardigan Tejido - Dark Sapphire",
            "price": 499,
            "full_price": "649",
            "currency": "UYU",
            "discount": "23",
            "pic": "https://f.fcdn.app/imgs/f1b46d/only.com.uy/onlyuy/3f3d/webp/catalogo/13191995_3623703_1/1920-1200/cardigan-tejido-dark-sapphire.jpg",
            "description": "Cárdigan de punto. Corte básico y escote redondo. Botones en el pecho. Composición: 100% Algodón orgánico. Instrucciones de lavado: Lavar a máquina a 40ªC como máximo en progama de lavado suave. No usar blanqueador. No secar en secadora. Planchar a temperatura media. No lavar en seco. Colgar para secar.",
            "sizes": [
              "4 Años",
              "6 Años"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Sapphire",
            "gender": "Niños"
          },
          {
            "id": 17086,
            "id_item": "13195592-3726738",
            "shop": "Only",
            "title": "Cardigan Tejido - Café Au Lait",
            "full_search": null,
            "price": 848,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/18639f/only.com.uy/onlyuy/85f8/webp/catalogo/13195592_3727742_1/1920-1200/cardigan-tejido-cafe-au-lait.jpg",
            "description": "Cárdigan de punto. Elástico. Cierre que simula cruzado. Lazo decorativo. Estilo encantador y relajado, con un ajuste cómodo y una sensación suave. Composición: 100% Algodón orgánico. Este producto está fabricado con fibras de viscosa de la marca LENZING™ ECOVERO™ utilizando pulpa de madera procedente de bosques gestionados de forma sostenible y producida de forma que se reduce el impacto medioambiental. Composición: 81% Viscosa LENZING™ ECOVERO™, 14% Poliéster, 5% Elastano. Instrucciones de lavado: Lavar a ",
            "sizes": [
              "6 Años",
              "7 a 8 Años",
              "9 a 10 Años",
              "11 a 12 A"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Café Au Lait",
            "gender": "Niños"
          },
          {
            "id": 17089,
            "id_item": "13197468-3764372",
            "shop": "Only",
            "title": "Buzo Tejido - Dark Sapphire",
            "full_search": null,
            "price": 699,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/4e7793/only.com.uy/onlyuy/db81/webp/catalogo/13197468_3764372_1/1920-1200/buzo-tejido-dark-sapphire.jpg",
            "description": "Buzo de punto. Corte básico y escote redondo. Composición: 100% Acrílico. Instrucciones de lavado: Lavar a máquina a 40ªC como máximo en progama de lavado suave. No usar blanqueador. No secar en secadora. Planchar a temperatura media. No lavar en seco. Colgar para secar.",
            "sizes": [
              "6 Años",
              "7 a 8 Años",
              "9 a 10 Años"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Sapphire",
            "gender": "Niños"
          },
          {
            "id": 17090,
            "id_item": "13197469-3764378",
            "shop": "Only",
            "title": "Buzo Tejido - Dark Sapphire",
            "full_search": "ONLY  Dark Sapphire Buzo Tejido - Dark Sapphire",
            "price": 599,
            "full_price": "699",
            "currency": "UYU",
            "discount": "14",
            "pic": "https://f.fcdn.app/imgs/29cfa5/only.com.uy/onlyuy/8635/webp/catalogo/13197469_3798479_1/1920-1200/buzo-tejido-dark-sapphire.jpg",
            "description": "Buzo de punto. Corte básico y escote redondo. Composición: 100% Acrílico. Instrucciones de lavado: Lavar a máquina a 40ªC como máximo en progama de lavado suave. No usar blanqueador. No secar en secadora. Planchar a temperatura media. No lavar en seco. Colgar para secar.",
            "sizes": [
              "1.5 Años",
              "2 Años"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Sapphire",
            "gender": "Niños"
          },
          {
            "id": 17092,
            "id_item": "13192071-3624271",
            "shop": "Only",
            "title": "Buzo Tejido - Dark Sapphire",
            "full_search": null,
            "price": 549,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/7cfcb1/only.com.uy/onlyuy/fc72/webp/catalogo/13192071_3689128_1/1920-1200/buzo-tejido-dark-sapphire.jpg",
            "description": "Buzo tejido de punto. Corte normal y cuello redondo. Manga larga. Prenda básica. Composición: 84% Viscosa, 14% Poliéster, 2% Elastano. Instrucciones de lavado: Lavar a máquina a 40°C como máximo en el programa de lavado suave. No usar blanqueador. No secar en secadora. Planchar a baja temperatura. No lavar en seco. Colgar para secar.",
            "sizes": [
              "2 Años",
              "3 Años",
              "4 Años",
              "5 Años",
              "6 Años"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Sapphire",
            "gender": "Niños"
          },
          {
            "id": 17093,
            "id_item": "13192071-3624271",
            "shop": "Only",
            "title": "Buzo Tejido - Pale Mauve",
            "full_search": null,
            "price": 549,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/72afdc/only.com.uy/onlyuy/34c0/webp/catalogo/13192071_3696755_1/1920-1200/buzo-tejido-pale-mauve.jpg",
            "description": "Buzo tejido de punto. Corte normal y cuello redondo. Manga larga. Prenda básica. Composición: 84% Viscosa, 14% Poliéster, 2% Elastano. Instrucciones de lavado: Lavar a máquina a 40°C como máximo en el programa de lavado suave. No usar blanqueador. No secar en secadora. Planchar a baja temperatura. No lavar en seco. Colgar para secar.",
            "sizes": [
              "3 Años",
              "4 Años"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Pale Mauve",
            "gender": "Niños"
          },
          {
            "id": 17094,
            "id_item": "13192071-3624271",
            "shop": "Only",
            "title": "Buzo Tejido - Grey Melange",
            "full_search": null,
            "price": 549,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/5e157e/only.com.uy/onlyuy/17c9/webp/catalogo/13192071_3696759_1/1920-1200/buzo-tejido-grey-melange.jpg",
            "description": "Buzo tejido de punto. Corte normal y cuello redondo. Manga larga. Prenda básica. Composición: 84% Viscosa, 14% Poliéster, 2% Elastano. Instrucciones de lavado: Lavar a máquina a 40°C como máximo en el programa de lavado suave. No usar blanqueador. No secar en secadora. Planchar a baja temperatura. No lavar en seco. Colgar para secar.",
            "sizes": [
              "2 Años",
              "3 Años",
              "4 Años",
              "5 Años",
              "6 Años"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Grey Melange",
            "gender": "Niños"
          },
          {
            "id": 17051,
            "id_item": "13189441-3580201",
            "shop": "Only",
            "title": "Camiseta Manga Corta - Dark Sapphire",
            "full_search": "ONLY  Dark Sapphire Camiseta Manga Corta - Dark Sapphire",
            "price": 299,
            "full_price": "349",
            "currency": "UYU",
            "discount": "14",
            "pic": "https://f.fcdn.app/imgs/1039d6/only.com.uy/onlyuy/3749/webp/catalogo/13189441_3580201_1/1920-1200/camiseta-manga-corta-dark-sapphire.jpg",
            "description": "Camiseta de manga corta con dobladillo en puños. Detalle de bolsillo falso en el pecho. Cuello redondo y ajuste regular. Composición: 100% Algodón orgánico. Instrucciones de lavado: Lavar a máquina a un máximo de 40°C con un programa de lavado suave. No usar blanqueador. Secar en secadora a fuego lento. Planchar a fuego medio. No lavar en seco.",
            "sizes": [
              "7 a 8 Años",
              "9 a 10 Años"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Dark Sapphire",
            "gender": "Niños"
          },
          {
            "id": 17056,
            "id_item": "13187752-3536292",
            "shop": "Only",
            "title": "Camiseta Manga Corta - Zephyr",
            "full_search": null,
            "price": 349,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/faa20b/only.com.uy/onlyuy/2d1c/webp/catalogo/13187752_3536292_1/1920-1200/camiseta-manga-corta-zephyr.jpg",
            "description": "Camiseta lisa de manga corta y cuello redondo. Bolsillo en el pecho. Composición: 60% Algodón orgánico, 40% Poliéster. Lavar a máquina a un máximo de 40 ° C con un programa de lavado suave. No usar blanqueador. No secar en secadora. Planchar a fuego medio. Colgar para secar.",
            "sizes": [
              "7 a 8 Años",
              "9 a 10 Años",
              "13 a 14 Años"
            ],
            "brand": "NAME IT",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Zephyr",
            "gender": "Niños"
          },
          {
            "id": 7154,
            "id_item": "15195424-3275881",
            "shop": "Only",
            "title": "Pantalon Emily De Pana. Tiro Alto Mom Fit. - Black",
            "full_search": "ONLY  Black Pantalon Emily De Pana. Tiro Alto Mom Fit. - Black",
            "price": 1499,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/65c355/only.com.uy/onlyuy/2b7f/webp/catalogo/15195424_3275881_1/1920-1200/pantalon-emily-de-pana-tiro-alto-mom-fit-black.jpg",
            "description": "",
            "sizes": [
              "36",
              "38",
              "40"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Black",
            "gender": "Mujer"
          },
          {
            "id": 7155,
            "id_item": "17033113-1682642",
            "shop": "Only",
            "title": "Pantalón Tipo Leggings - Black",
            "full_search": "PIECES  Black Pantalón Tipo Leggings - Black",
            "price": 499,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/48ed6c/only.com.uy/onlyuy/fbf4/webp/catalogo/17033113_1682642_1/1920-1200/pantalon-tipo-leggings-black.jpg",
            "description": "",
            "sizes": [
              "XS",
              "S",
              "M"
            ],
            "brand": "PIECES",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Black",
            "gender": "Mujer"
          },
          {
            "id": 7156,
            "id_item": "10225280-3259929",
            "shop": "Only",
            "title": "Pantalón Tiro Medio - Laurel Wreath",
            "full_search": "ONLY  Laurel Wreath Pantalón Tiro Medio - Laurel Wreath",
            "price": 1199,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/41810a/only.com.uy/onlyuy/68d8/webp/catalogo/10225280_3456880_1/1920-1200/pantalon-tiro-medio-laurel-wreath.jpg",
            "description": "Pantalón tiro medio",
            "sizes": [
              "XS",
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Laurel Wreath",
            "gender": "Mujer"
          },
          {
            "id": 7158,
            "id_item": "10204164-2861770",
            "shop": "Only",
            "title": "Pantalón Tiro Medio, Loose Fit - Black",
            "full_search": "ONLY  Black Pantalón Tiro Medio, Loose Fit - Black",
            "price": 1199,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/8c9a01/only.com.uy/onlyuy/e309/webp/catalogo/10204164_3019901_1/1920-1200/pantalon-tiro-medio-loose-fit-black.jpg",
            "description": "",
            "sizes": [
              "XS",
              "S",
              "M",
              "L"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Black",
            "gender": "Mujer"
          },
          {
            "id": 13721,
            "id_item": "22019812-3600543",
            "shop": "Only",
            "title": "Jean Slim Fit Con Roturas - Blue Denim",
            "full_search": "ONLY  Blue Denim Jean Slim Fit Con Roturas - Blue Denim",
            "price": 1299,
            "full_price": "1.999",
            "currency": "UYU",
            "discount": "35",
            "pic": "https://f.fcdn.app/imgs/ae29ed/only.com.uy/onlyuy/242d/webp/catalogo/22019812_3600543_1/1920-1200/jean-slim-fit-con-roturas-blue-denim.jpg",
            "description": "",
            "sizes": [
              "30",
              "31",
              "32",
              "33"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "jeans",
            "colors": "Blue Denim",
            "gender": "Hombre"
          },
          {
            "id": 14302,
            "id_item": "22018686-3500994",
            "shop": "Only",
            "title": "Pantalon Jogger. Cintura Ajustable - Chinchilla",
            "full_search": "ONLY  Chinchilla Pantalon Jogger. Cintura Ajustable - Chinchilla",
            "price": 999,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/6b0450/only.com.uy/onlyuy/b823/webp/catalogo/22018686_3526831_1/1920-1200/pantalon-jogger-cintura-ajustable-chinchilla.jpg",
            "description": "",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "pantalones",
            "colors": "Chinchilla",
            "gender": "Hombre"
          },
          {
            "id": 14664,
            "id_item": "22021465-3742675",
            "shop": "Only",
            "title": "Camiseta Guns N Roses - Black",
            "full_search": "ONLY  Black Camiseta Guns N Roses - Black",
            "price": 499,
            "full_price": "699",
            "currency": "UYU",
            "discount": "28",
            "pic": "https://f.fcdn.app/imgs/8b0c1e/only.com.uy/onlyuy/0538/webp/catalogo/22021465_3742675_1/1920-1200/camiseta-guns-n-roses-black.jpg",
            "description": "Se puede lavar a máquina a un máximo de 30 °C No utilizar productos blanqueadores Se puede secar en secadora a baja temperatura Planchar a alta temperatura. Planchar a una temperatura máxima de 200 °C Lavado en seco (sin tricloroetileno) - 100% algodón",
            "sizes": [
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Black",
            "gender": "Hombre"
          },
          {
            "id": 14679,
            "id_item": "22020133-3628772",
            "shop": "Only",
            "title": "Camiseta Con Bolsillo - Monks Robe",
            "full_search": "ONLY  Monks Robe Camiseta Con Bolsillo - Monks Robe",
            "price": 399,
            "full_price": "599",
            "currency": "UYU",
            "discount": "33",
            "pic": "https://f.fcdn.app/imgs/74d359/only.com.uy/onlyuy/1dc3/webp/catalogo/22020133_3628773_1/1920-1200/camiseta-con-bolsillo-monks-robe.jpg",
            "description": "Lavar con colores similares. Encojimiento máximo 5%",
            "sizes": [
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "Monks Robe",
            "gender": "Hombre"
          },
          {
            "id": 14680,
            "id_item": "22020139-3628859",
            "shop": "Only",
            "title": "Camiseta Estampada - White",
            "full_search": "ONLY  White Camiseta Estampada - White",
            "price": 299,
            "full_price": "399",
            "currency": "UYU",
            "discount": "25",
            "pic": "https://f.fcdn.app/imgs/d0445c/only.com.uy/onlyuy/bba1/webp/catalogo/22020139_3628859_1/1920-1200/camiseta-estampada-white.jpg",
            "description": "Lavar con colores similares. Encojimiento máximo 5%",
            "sizes": [
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "White",
            "gender": "Hombre"
          },
          {
            "id": 14681,
            "id_item": "22020097-3628218",
            "shop": "Only",
            "title": "Camiseta Con Diseño Vincent - White",
            "full_search": "ONLY  White Camiseta Con Diseño Vincent - White",
            "price": 399,
            "full_price": "499",
            "currency": "UYU",
            "discount": "20",
            "pic": "https://f.fcdn.app/imgs/d17a96/only.com.uy/onlyuy/9a40/webp/catalogo/22020097_3628218_1/1920-1200/camiseta-con-diseno-vincent-white.jpg",
            "description": "",
            "sizes": [
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "White",
            "gender": "Hombre"
          },
          {
            "id": 14682,
            "id_item": "22020097-3628218",
            "shop": "Only",
            "title": "Camiseta Con Diseño Vincent - White",
            "full_search": "ONLY  White Camiseta Con Diseño Vincent - White",
            "price": 399,
            "full_price": "499",
            "currency": "UYU",
            "discount": "20",
            "pic": "https://f.fcdn.app/imgs/d17a96/only.com.uy/onlyuy/9a40/webp/catalogo/22020097_3628218_1/1920-1200/camiseta-con-diseno-vincent-white.jpg",
            "description": "",
            "sizes": [
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "camisetas",
            "colors": "White",
            "gender": "Hombre"
          },
          {
            "id": 14906,
            "id_item": "22020088-3629808",
            "shop": "Only",
            "title": "Sweater Tejido Básico - Dark Navy",
            "full_search": "ONLY  Dark Navy Sweater Tejido Básico - Dark Navy",
            "price": 699,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/642ccf/only.com.uy/onlyuy/34a2/webp/catalogo/22020088_3629810_1/1920-1200/sweater-tejido-basico-dark-navy.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas No utilizar productos blanqueadores No secar en secadora Planchar a baja temperatura. Planchar a una temperatura máxima de 100 °C No limpiar en seco - 78% Viscosa 22% Poliéster",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Navy",
            "gender": "Hombre"
          },
          {
            "id": 14909,
            "id_item": "22019548-3630241",
            "shop": "Only",
            "title": "Sweater Tejido Color Block - Chinchilla",
            "full_search": "ONLY  Chinchilla Sweater Tejido Color Block - Chinchilla",
            "price": 1299,
            "full_price": "1.599",
            "currency": "UYU",
            "discount": "18",
            "pic": "https://f.fcdn.app/imgs/2c365e/only.com.uy/onlyuy/1989/webp/catalogo/22019548_3630241_1/1920-1200/sweater-tejido-color-block-chinchilla.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas No utilizar productos blanqueadores No secar en secadora Planchar a temperatura media No limpiar en seco - 100% Acrílico",
            "sizes": [
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Chinchilla",
            "gender": "Hombre"
          },
          {
            "id": 14911,
            "id_item": "22021266-3768693",
            "shop": "Only",
            "title": "Sweater Hoyt - Dark Navy",
            "full_search": "ONLY  Dark Navy Sweater Hoyt - Dark Navy",
            "price": 1099,
            "full_price": "1.299",
            "currency": "UYU",
            "discount": "15",
            "pic": "https://f.fcdn.app/imgs/ec0c2e/only.com.uy/onlyuy/f622/webp/catalogo/22021266_3768693_1/1920-1200/sweater-hoyt-dark-navy.jpg",
            "description": "Sweater de punto. Lavar del revés. Lavar con colores similares. No colgar durante el secado.",
            "sizes": [
              "L"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Navy",
            "gender": "Hombre"
          },
          {
            "id": 14916,
            "id_item": "22021016-3783822",
            "shop": "Only",
            "title": "Sweater Con Capucha - Black",
            "full_search": "ONLY  Black Sweater Con Capucha - Black",
            "price": 999,
            "full_price": "1.199",
            "currency": "UYU",
            "discount": "16",
            "pic": "https://f.fcdn.app/imgs/3c62e7/only.com.uy/onlyuy/26e2/webp/catalogo/22021016_3783822_1/1920-1200/sweater-con-capucha-black.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas No utilizar productos blanqueadores No secar en secadora Planchar a temperatura media No limpiar en seco - 100% algodón",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Black",
            "gender": "Hombre"
          },
          {
            "id": 14918,
            "id_item": "22021734-3776946",
            "shop": "Only",
            "title": "Sweater Felix - Dark Navy",
            "full_search": "ONLY  Dark Navy Sweater Felix - Dark Navy",
            "price": 1099,
            "full_price": "1.499",
            "currency": "UYU",
            "discount": "26",
            "pic": "https://f.fcdn.app/imgs/79700b/only.com.uy/onlyuy/b2da/webp/catalogo/22021734_3776947_1/1920-1200/sweater-felix-dark-navy.jpg",
            "description": "Encogimiento máximos 5% Lavar con colores similares.",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Navy",
            "gender": "Hombre"
          },
          {
            "id": 14922,
            "id_item": "22018201-3470029",
            "shop": "Only",
            "title": "Sweater De Punto Texturizado - Olive Night",
            "full_search": "ONLY  Olive Night Sweater De Punto Texturizado - Olive Night",
            "price": 999,
            "full_price": "1.299",
            "currency": "UYU",
            "discount": "23",
            "pic": "https://f.fcdn.app/imgs/7736d5/only.com.uy/onlyuy/9abe/webp/catalogo/22018201_3470031_1/1920-1200/sweater-de-punto-texturizado-olive-night.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas No utilizar productos blanqueadores No secar en secadora Planchar a temperatura media No limpiar en seco - 100% algodón",
            "sizes": [
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Olive Night",
            "gender": "Hombre"
          },
          {
            "id": 14926,
            "id_item": "22016980-3378229",
            "shop": "Only",
            "title": "Sweater Tejido Con Textura - Cloud Dancer",
            "full_search": "ONLY  Cloud Dancer Sweater Tejido Con Textura - Cloud Dancer",
            "price": 1299,
            "full_price": "",
            "currency": "UYU",
            "discount": "",
            "pic": "https://f.fcdn.app/imgs/383f8a/only.com.uy/onlyuy/60c3/webp/catalogo/22016980_3492695_1/1920-1200/sweater-tejido-con-textura-cloud-dancer.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas No utilizar productos blanqueadores No secar en secadora Planchar a temperatura media No limpiar en seco - 100% Algodón",
            "sizes": [
              "M",
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Cloud Dancer",
            "gender": "Hombre"
          },
          {
            "id": 14936,
            "id_item": "22021595-3764649",
            "shop": "Only",
            "title": "Sweater Tejido Con Bolsillo - Silver Lining",
            "full_search": "ONLY  Silver Lining Sweater Tejido Con Bolsillo - Silver Lining",
            "price": 999,
            "full_price": "1.299",
            "currency": "UYU",
            "discount": "23",
            "pic": "https://f.fcdn.app/imgs/fa5717/only.com.uy/onlyuy/7daa/webp/catalogo/22021595_3764649_1/1920-1200/sweater-tejido-con-bolsillo-silver-lining.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas - No utilizar productos blanqueadores - No secar en secadora - Planchar a temperatura media - No limpiar en seco - 51% viscosa 26% poliéster 23% poliamida",
            "sizes": [
              "L",
              "XL",
              "XXL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Silver Lining",
            "gender": "Hombre"
          },
          {
            "id": 14941,
            "id_item": "22019542-3629179",
            "shop": "Only",
            "title": "Sweater Tejido - Dark Navy",
            "full_search": "ONLY  Dark Navy Sweater Tejido - Dark Navy",
            "price": 699,
            "full_price": "899",
            "currency": "UYU",
            "discount": "22",
            "pic": "https://f.fcdn.app/imgs/4dddd6/only.com.uy/onlyuy/5d6c/webp/catalogo/22019542_3629180_1/1920-1200/sweater-tejido-dark-navy.jpg",
            "description": "Se puede lavar a máquina a un máximo de 40 °C utilizando un programa para prendas delicadas - No utilizar productos blanqueadores - No secar en secadora - Planchar a temperatura media - No limpiar en seco - 100% algodón",
            "sizes": [
              "S",
              "M",
              "L",
              "XL"
            ],
            "brand": "ONLY",
            "ship": "Envío Estándar - Mirtrans: Envío sin costo en compras mayores a UYU 1.500 Costo normal: UYU 160.",
            "category": "sweaters",
            "colors": "Dark Navy",
            "gender": "Hombre"
          }
    ];

    const getProducts = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        })
    }
    const [productsItems, setProductsItems] = useState([]);

    useEffect(() => {
       getProducts().then((data) => setProductsItems(data));
    }, []);



    return (

        <div className="container text-center p-5">
            <button className="alert alert-primary mx-2"><b> {count} productos </b></button>
            <button className="btn btn-success mx-2" onClick={addCount}><b>+</b></button>
            <button className="btn btn-warning mx-2" onClick={lessCount}><b>-</b></button>
            <button className="btn btn-danger mx-2" onClick={clearCount}><b>0</b></button>
            <ItemList data={productsItems} />

            <p className='p-5'>{params.content}</p>
        
        </div>

    );
};
