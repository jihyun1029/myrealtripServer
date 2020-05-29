import React, { useState, useEffect } from 'react'
import axios from 'axios' // axios는 서버와 통신을 하기위해서 HTTP 통신을 해야하는데 이 통신을 좀 더 쉽게 할 수 있도록 해주는 라이브러리

import NavBar from '../../components/NavBar'
import Card from '../../components/Card'
import AdvertisementCard from '../../components/AdvertisementCard'

import './index.scss'

const Home = () => {
  const [ cities, setCities ] = useState(
    [
      /*
        {
            name : '오사카',
            image : 'https://d2ur7st6jjikze.cloudfront.net/landscapes/4720_medium_square_1535703132.jpg?1535703132'
        },
        {
            name : '싱가포르',
            image : 'http://www.nobrandtour.com/upfiles/product/3760188944.jpg'
        },
        {
            name : '다낭',
            image : 'https://vietnamguide.co.kr/wp-content/uploads/2018/12/%EB%8B%A4%EB%82%AD-%EB%B0%94%EB%82%98%ED%9E%90.jpg'
        },
        {
            name : '파리',
            image : 'https://cdn.getyourguide.com/img/tour_img-2215792-146.jpg'
        }
        */
    ]
  )

  // useEffect (
  //    () => {},
  //    [cities, countries] => useState로 만든, 상태 -> 배열안에 있는 상태들이 변경될 때마다 첫번째 인자의 함수를 실행시킴.
  // )
  // 두 번째 인자로 배열을 받는데, 배열 안에 있는 usefState로 정의한 상태들이 변경될 때 마다 useEffect를 실행.

  useEffect(() => {
    axios
      .get('/main/slide')
      // Promise .then
      // .then
      // .get 의 네트워크 요청이 끝난 다음에 then 이 실행됨
      .then((response) => {
        console.log(response)
        // http response code => 숙제
        if (response.status === 200) setCities(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) // 두 번째 인자에 빈 배열을 넣으면 최초 1회만 실행.

  const [ advertisement, setAdvertisement ] = useState({
    title: '겨울에도 꿀잼 보장',
    arr: [
      /*
            {
                image : 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1578559507.jpg?1578559507',
                title : '[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권 (~1/31)',
                breadcrumb : '티켓/교통패스 ・ 강원도',
                cost : '27,000원'
            },
            {
                image : 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/71093/437161_medium_1576421812.jpg?1576421812',
                title : '[쿠폰할인] 비발디파크 스키 리프트권 + 장비렌탈 PKG 이용권',
                breadcrumb : '티켓/교통패스 ・ 강원도',
                cost : '44,700원'
            },
            {
                image : 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72063/443310_medium_1578624845.jpg?1578624845',
                title : '★타임특가★ 평창 휘닉스파크 스키 리프트권',
                breadcrumb : '티켓/교통패스 ・ 강원도',
                cost : '17,800원'
            }
            */
    ]
  })

  useEffect(() => {
    axios
      .get('/main')
      // Promise .then
      // .then
      .then((response) => {
        console.log(response)
        // http response code => 숙제
        if (response.status === 200)
          setAdvertisement({
            ...advertisement,
            arr: response.data
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) // 두 번째 인자에 빈 배열을 넣으면 최초 1회만 실행.

  const [ advertisement2, setAdvertisement2 ] = useState({
    title: '마리트 추천! 동남아 핵심투어',
    arr: [
      {
        image: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1578559507.jpg?1578559507',
        title: '[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권 (~1/31)',
        breadcrumb: '티켓/교통패스 ・ 강원도',
        cost: '27,000원'
      },
      {
        image: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1578559507.jpg?1578559507',
        title: '[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권 (~1/31)',
        breadcrumb: '티켓/교통패스 ・ 강원도',
        cost: '27,000원'
      },
      {
        image: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1578559507.jpg?1578559507',
        title: '[펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권 (~1/31)',
        breadcrumb: '티켓/교통패스 ・ 강원도',
        cost: '27,000원'
      }
    ]
  })

  const createCities = (arr) => {
    return (
      <ul>
        {arr.map((city) => (
          <li>
            <Card text={city.name} image={city.image} />
          </li>
        ))}
      </ul>
    )
  }

  const createAdvertisement = (obj) => {
    return (
      <div className='advertisement-wrapper'>
        <div className='name-wrapper'>
          <h2 className='name'>{obj.title}</h2>
        </div>
        <div className='advertisement-contents'>
          <ul>
            {obj.arr.map((advertisement) => (
              <li>
                <AdvertisementCard
                  image={advertisement.image}
                  title={advertisement.title}
                  breadcrumb={advertisement.breadcrumb}
                  cost={advertisement.cost}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className='home'>
      <NavBar />
      <div className='travel-container'>
        <div className='text-container'>
          <h1 className='title'>어디로 떠나세요?</h1>
        </div>
        <div className='search-container'>
          <input className='search-box' placeholder='여행지나 상품을 검색해보세요!' />
        </div>
      </div>
      <div className='sliding-card'>{createCities(cities)}</div>
      {createAdvertisement(advertisement)}
      {createAdvertisement(advertisement2)}
    </div>
  )
}

export default Home
