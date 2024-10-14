import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {TrashIcon} from "@radix-ui/react-icons";
import {useDispatch} from "react-redux";
import {deleteComment} from "@/Redux/Comment/Action";
import {EditIcon} from "lucide-react";


const CommentCard = ({item}) => {
    const dispatch = useDispatch();
    const handleDelete = async () => {
        await dispatch(deleteComment(item.id));
    }
    const handleEdit = () => {

    }
    return (
        <div className="flex justify-between ">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarFallback>{item.user.fullName[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <p>{item.user.fullName}</p>
                    <p>{item.content || "No content"}</p>
                </div>
            </div>
            <div className="">
                <Button onClick={handleEdit} className="rounded-full" variant="ghost" size="icon">
                    <EditIcon className="w-5 h-5 rounded-full"/>
                </Button>
                <Button onClick={handleDelete} className="rounded-full" variant="ghost" size="icon">
                    <TrashIcon className="w-5 h-5 rounded-full"/>
                </Button>
            </div>
        </div>
    )
}
export default CommentCard;