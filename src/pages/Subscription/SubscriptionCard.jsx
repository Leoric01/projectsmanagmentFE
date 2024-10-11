import {BanknoteIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {CheckCircledIcon} from "@radix-ui/react-icons";

const SubscriptionCard = ({data}) => {
    return (
        <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]">
            <p>{data.planName}</p>
            <p>
                <span>{data.price} CZK<BanknoteIcon className="inline w-4 pb-1"/>/</span>
                <span>{data.planType}</span>
            </p>
            {data.planType === "ANNUALLY" && <p className="text-green-500">30% off</p>}
            <Button className="w-full">
                {data.buttonName}
            </Button>
            <div>
                <div className="flex align-top gap-2">
                    <CheckCircledIcon/>
                    <p>{"features"}</p>
                </div>
            </div>

        </div>
    )
}

export default SubscriptionCard;