import axios from "axios";
const Apiservice  = {

  get : async function getData (lat,long,lang) {

      const datas = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getNearbyCities',
        params: {
            latitude: {lat},
            longitude: {long},
            languagecode: {lang}
        },
        headers: {
            'X-RapidAPI-Key': '53fbd87b8fmsh5b20c36ed8f7082p192b97jsn80b91e6032bb',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
        };

        try {
        const response = await axios.request(datas);
        // console.log(">>>>>",response.data);
        return response.data;
     
        } catch (error) {
        console.error(error);
        }
        }, 

  getLocation : async function getData () {
    let location = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/meta/locationToLatLong',
        params: {query: 'man'},
        headers: {
            'X-RapidAPI-Key': '53fbd87b8fmsh5b20c36ed8f7082p192b97jsn80b91e6032bb',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
        };
        try {
        const response = await axios.request(location);
         
        return response.data;
     
        } catch (error) {
        console.error(error);
        }
        }
}
export default Apiservice;