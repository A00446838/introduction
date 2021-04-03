import axios from 'axios'

export const weather = () => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Halifax&appid=64021bde9cafb24bbcff4d7093709eb9')
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.log(err)
        })
}