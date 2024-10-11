import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {TrashIcon} from "@radix-ui/react-icons";


const CommentCard = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarFallback>Z</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <p>Change this</p>
                    <p>How is this issue progressing?</p>
                </div>
            </div>
            <Button className="rounded-full" variant="ghost" size="icon">
                <TrashIcon className="w-5 h-5 rounded-full"/>
            </Button>
        </div>
    )
}

export default CommentCard;