import SubscriptionCard from "@/pages/Subscription/subscriptioncard";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const monthlyPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows",
];

const annualPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything which monthly plan has",
];

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control",
];
const Subscription = () => {
    const {subscription} = useSelector((state) => state.subscription);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="p-10 ">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
            <div className="flex flex-wrap justify-start lg:flex-row lg:justify-center  align-top gap-9">
                <SubscriptionCard
                    data={{
                        planName: "Free",
                        features: freePlan,
                        planType: "FREE",
                        price: 0,
                        buttonName: subscription?.userSubscription?.planType==="FREE" ? "CurrentPlan" : "Get Started"
                    }}
                />
                <SubscriptionCard
                    data={{
                        planName: "Monthly Paid Plan",
                        features: monthlyPlan,
                        planType: "MONTHLY",
                        price: 330,
                        buttonName: subscription?.userSubscription?.planType==="MONTHLY" ? "CurrentPlan" : "Get Started",
                    }}
                />
                <SubscriptionCard
                    data={{
                        planName: "Annual Paid Plan",
                        features: annualPlan,
                        planType: "ANNUALLY",
                        price: 2999,
                        buttonName: subscription?.userSubscription?.planType==="ANNUALLY" ? "CurrentPlan" : "Get Started",
                    }}
                />
            </div>
        </div>
    )
}

export default Subscription;