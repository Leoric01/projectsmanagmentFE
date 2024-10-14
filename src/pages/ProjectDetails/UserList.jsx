import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {useDispatch, useSelector} from "react-redux";
import {assignedUserToIssue} from "@/Redux/Issue/action";

const UserList = ({issueDetails}) => {
    const {project} = useSelector((state) => state.project);
    const dispatch = useDispatch();
    const handleAssignIssueToUser = (userId) => {
        dispatch(assignedUserToIssue({issueId: issueDetails.id, userId}));
    };

    return (
        <div className="space-y-2">
            {issueDetails.assignee ? (
                <div className="border rounded-md">
                    <p className="py-2 px-3">{issueDetails.assignee.username}</p>
                </div>
            ) : (
                <div className="border rounded-md">
                    <p className="py-2 px-3">Unassigned</p>
                </div>
            )}

            {project.owner.id !== issueDetails.assignee?.id && (
                <div
                    onClick={() => handleAssignIssueToUser(project.owner.id)}
                    key={project.owner.id}
                    className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
                >
                    <Avatar>
                        <AvatarFallback>
                            {project.owner.fullName[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-sm leading-none">{project.owner.fullName}</p>
                        <p className="text-sm text-muted-foreground">@{project.owner.fullName.toLowerCase()}</p>
                    </div>
                </div>
            )}

            {project.teamMembers.map((item) => (
                item.id !== issueDetails.assignee?.id && (
                    <div
                        onClick={() => handleAssignIssueToUser(item.id)}
                        key={item.id}
                        className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md border px-4"
                    >
                        <Avatar>
                            <AvatarFallback>
                                {item.fullName[0].toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <p className="text-sm leading-none">{item.fullName}</p>
                            <p className="text-sm text-muted-foreground">@{item.fullName.toLowerCase()}</p>
                        </div>
                    </div>
                )
            ))}
        </div>
    )
};

export default UserList;