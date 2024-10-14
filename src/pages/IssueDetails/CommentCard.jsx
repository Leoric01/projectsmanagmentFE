import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {TrashIcon} from "@radix-ui/react-icons";


const CommentCard = ({item}) => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarFallback>{item.user.fullName[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <p>{item.user.fullName}</p>
                    <p>{item.content || "No content"}</p>
                </div>
            </div>
            <Button className="rounded-full" variant="ghost" size="icon">
                <TrashIcon className="w-5 h-5 rounded-full"/>
            </Button>
        </div>
    )
}

export default CommentCard;