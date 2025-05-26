import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UserList from "@/pages/ProjectDetails/UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue, fetchIssuesByProjectId } from "@/Redux/Issue/Action";

const IssueCard = ({ item, projectId, onIssueDelete }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIssueDelete = async () => {
    await dispatch(deleteIssue(item.id));
    dispatch(fetchIssuesByProjectId(projectId));
    onIssueDelete();
  };

  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1 text-center">
        <div className="flex justify-between items-center ">
          <CardTitle onClick={() => navigate(`/project/${projectId}/issue/${item.id}`)} className="cursor-pointer">
            {item.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleIssueDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP - {1}</p>
          <DropdownMenu className="w-[30rem] border border-red-400">
            <DropdownMenuTrigger asChild>
              <Button size="icon" className="bg-gray-900 hover:text-black text-white rounded-full">
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <UserList issueDetails={item} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
