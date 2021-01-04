
import axios from 'axios';
import api_url  from '../../api_url';

const API_URL = api_url; // TODO: use env variable
const createOrderUrl = `${API_URL}createOrder`;
const captureOrderUrl = `${API_URL}captureOrder`;

const serviceTypes = {
  TYPE1: 'TYPE1',
  TYPE2: 'TYPE2',
  TYPE3: 'TYPE3'
};

// creates an order to by making call our backend
const createOrder = (type, otherData) => {
  const payload = {
    purpose: otherData.purpose,
    serviceType: type,
    buyer_name: otherData.buyer_name,
    email: otherData.email,
    phone: otherData.phone,
    redirect_url: captureOrderUrl,
    userData: otherData.userData
  };

  axios.post(createOrderUrl, payload)
    .then(res => {
      console.log("response", res);
      // after payment redirect user to client side
      window.location.href = res.data;
    })
    .catch(err => {
      console.error("error", err);
      window.alert("PAYMENT failed, Try again");
    });
}

const paymentUtils = {
  serviceTypes,
  createOrder
};

export default paymentUtils;
