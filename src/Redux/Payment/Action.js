
import api from "@/config/Api";

export const createPayment=async ({planType, jwt})=> {
    try {
        const {data} = await api.post(`/api/payments/${planType}`);
        if (data.payment_link_url){
            window.location.href = data.payment_link_url;
        }
    } catch (err){
        console.log("error",err);
    }
}