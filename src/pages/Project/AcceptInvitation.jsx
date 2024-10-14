import {Button} from "@/components/ui/button";
import {useDispatch} from "react-redux";
import {acceptInvitation} from "@/Redux/Project/Action";
import {useNavigate, useParams} from "react-router-dom";

const AcceptInvitation = () => {
    const dispatch = useDispatch();
    const urlParams = new URLSearchParams();
    const token = urlParams.get("token");
    const navigate = useNavigate();
    const handleAcceptInvitation= () => {
        dispatch(acceptInvitation({invitationToken:token, navigate}));
    }
    return (
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <h1 className="py-5 font-semibold text-xl">you are invited to join the project</h1>
            <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>
            <Button onClick={handleDeclineInvitation}>Decline</Button>
        </div>
    )
}
export default AcceptInvitation;