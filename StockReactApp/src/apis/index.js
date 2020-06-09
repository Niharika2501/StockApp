import axios from 'axios';
export const  requestStockList=()=> 
  axios.get(`http://localhost:9091/api/stock/`);     
  