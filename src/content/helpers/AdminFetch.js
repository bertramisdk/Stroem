import axios from "axios";

const axiosBase = axios.create({ baseURL: "http://localhost:5333/" });



export const getContactInformation = () => {
    let response = axiosBase.get("contactinformation/");
    return response;
  };



export const getSlider = () => {
    let response = axiosBase.get("slider/");
    return response;
  };



  export const getAbout = () => {
    let response = axiosBase.get("about/");
    return response;
  };



  export const getService = () => {
    let response = axiosBase.get("service/");
    return response;
  };


  export const getCarousel = () => {
    let response = axiosBase.get("testimonial/");
    return response;
  };


  export const getTeam = () => {
    let response = axiosBase.get("team/");
    return response;
  };

  export const getNyheder = () => {
    let response = axiosBase.get("news/");
    return response;
  };

  export const getFaq = () => {
    let response = axiosBase.get("faq/");
    return response;
  };


  export const postBooking = (newForm) => {
    let response = axiosBase.post("booking/", newForm);
    return response;
  };

 
export const deleteNyhed = (nyhedID) => {
  let response = axiosBase.delete("news/admin/" + nyhedID);
  return response;
};



export const createNyhed = (newNyhed) => {
  console.log(newNyhed)
  let response = axiosBase.post("news/admin", newNyhed);
  return response;
};


export const getNyhedByID = (ID) => {
  let response = axiosBase.get("news/" + ID);
  return response;
};



export const editNyhed = (updatedNyhed, nyhedID) => {
  let response = axiosBase.put("news/admin/" + nyhedID, updatedNyhed );
  return response;
};


