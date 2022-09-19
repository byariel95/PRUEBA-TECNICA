import axios from 'axios';


export class ApiService {
    baseUrl = "";
    constructor(baseUrl = 'http://localhost:3000/api/')
    {
      this.baseUrl = baseUrl
    }

    async getFiscalias(url) 
    {
      try {
        const response  = await axios.get(this.baseUrl + url);
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    async postFiscalia(url,data) 
    {
      try {
        const response  = await axios.post(this.baseUrl + url,data);
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    async updateFiscalia(url,data,id) 
    {
      try {
        const response  = await axios.patch(`${this.baseUrl}${url}/${id}`,data);
        return response.data;
      } catch (error) {
        throw error;
      }
    }

    async deleteFiscalia(url,id) 
    {
      try {
        const response  = await axios.delete(`${this.baseUrl}${url}/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
}