  import axios from "axios";
  const baseURL = "https://poryectosantraelena.000webhostapp.com";

  export const Contrys = async () => {
      try {
        const response = await axios.get(`${baseURL}/Country`);
        return response.data;
      } catch (error) {
        console.log("Ha surgido un error: " + error);
        throw error;
      }
    };