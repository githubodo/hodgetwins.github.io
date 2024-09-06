import axios from "axios";

const Base_Url='https://youtube-v31.p.rapidapi.com'

const options = {
    
    url: Base_Url,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async(url)=>{
     const {data} =await axios.get(`${Base_Url}/${url}`, options);

     return data;
  }