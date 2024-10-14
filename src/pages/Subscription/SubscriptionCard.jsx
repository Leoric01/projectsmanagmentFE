import {BanknoteIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {CheckCircledIcon} from "@radix-ui/react-icons";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createPayment} from "@/Redux/Payment/Action";

const SubscriptionCard = ({data}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleUpgrade = async () =>{
        await dispatch(createPayment({
            planType: data.planType,
            jwt:localStorage.getItem("jwt")}));
    };

    return (
        <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
            <p>{data.planName}</p>
            <p>
                <span>{data.price} CZK<BanknoteIcon className="inline w-4 pb-1"/>/</span>
                <span>{data.planType}</span>
            </p>
            {data.planType === "ANNUALLY" && <p className="text-green-500">30% off</p>}
            <Button onClick={handleUpgrade} className="w-full">
                {data.buttonName}
            </Button>
            <div>
                {data.features.map((item) => (
                        <div key={item} className="flex align-top gap-2">
                            <CheckCircledIcon/>
                            <p>{item}</p>
                        </div>
                    )
                )}
            </div>
            <Button onClick={()=>navigate("/upgrade/success")} className="w-full">
                upgrade-success page
            </Button>
        </div>
    )
}

export default SubscriptionCard;