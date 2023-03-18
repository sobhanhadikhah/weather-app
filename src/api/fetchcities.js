import axios from "axios";
const options = {
    method:"GET",
    url:"https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    headers:{
    'X-RapidAPI-Key': 'f8c864745dmsh661500d3dd457a8p1fe352jsn0a2be6204ca9',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
}
 const fetchCities = async () => {
       const {data} = await axios.request(options)
       return data.data
}
export default fetchCities;