import {Card} from "@/components/ui/card";
import {CheckCircleIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserSubscription, upgradeSubscription} from "@/Redux/Subscription/Action";

const UpgradeSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {subscription}=useSelector((state)=>state.subscription);
    const queryParams = new URLSearchParams(location.search);
    const paymentId = queryParams.get("payment_id");
    const planType = queryParams.get("planType");
    useEffect(() => {
        dispatch(upgradeSubscription({planType}));
        dispatch(getUserSubscription())
        console.log("SUBSCRIPTION-------",subscription);
    }, [dispatch, planType]);


    return(
        <div className="flex justify-center">
            <Card className="mt-20 space-y-5 p-5 flex flex-col items-center">
                <div className="flex items-center gap-4">
                    <CheckCircleIcon className="h-9 w-9 text-green-500"/>
                    <p className="text-xl">Plan Upgraded Successfully</p>
                </div>
                <div className="space-y-3">
                    <p className="text-green-500">start date: {subscription?.userSubscription?.subscriptionStartDate} </p>
                    <p className="text-red-500">end date: {subscription?.userSubscription?.subscriptionEndDate} </p>
                    <p className="text-gray-500">plan type: {subscription?.userSubscription?.planType} </p>
                </div>
                <Button onClick={() => navigate("/")}>Go to home</Button>
            </Card>
        </div>
    )

}
export default UpgradeSuccess;