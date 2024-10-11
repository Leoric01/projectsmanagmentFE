import SubscriptionCard from "@/pages/Subscription/subscriptioncard";

const monthlyPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Unlimited team members",
];
const annualPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Unlimited team members",
    "All that with 30% off in compare to monthly plan"
]
const freePlan = [
    "Add only 3 projects",
    "Cannot access live chat",
    "Limited team members size to 4"
]

const Subscription = () => {
    return (
        <div className="p-10 ">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
            <div className="flex flex-col lg:flex-row justify-center align-top gap-9">
                <SubscriptionCard
                    data={{
                        planName: "Free",
                        features: freePlan,
                        planType: "FREE",
                        price: 0,
                        buttonName: true ? "CurrentPlan" : "Get Started",
                    }}
                />
                <SubscriptionCard
                    data={{
                        planName: "Monthly Paid Plan",
                        features: monthlyPlan,
                        planType: "MONTHLY",
                        price: 330,
                        buttonName: true ? "CurrentPlan" : "Get Started",
                    }}
                />
                <SubscriptionCard
                    data={{
                        planName: "Annual Paid Plan",
                        features: annualPlan,
                        planType: "ANNUALLY",
                        price: 2999,
                        buttonName: true ? "CurrentPlan" : "Get Started",
                    }}
                />
            </div>
        </div>
    )
}

export default Subscription;