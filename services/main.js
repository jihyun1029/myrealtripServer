const countries = require('../DB/country')

const advertisement = require('../DB/advertisement')

const main = {
    // main에 slide 정보를 가져오는 API
    countries: (cityName = null) => {
        // cityName 의 기본값은 null,
        // parameter 로 데이터를 받으면 null 이 아니라 데이터를 받은게 됨
        if(cityName !== null) return countries.find((country) => country.city_en === cityName)
        
        // cityName 이 null 일 때는 데이터를 받지 않은 상황,
        // 모든 배열의 값을 전달함
        return countries
    },

    advertisement: () => {
        return advertisement
    }
}

module.exports = main