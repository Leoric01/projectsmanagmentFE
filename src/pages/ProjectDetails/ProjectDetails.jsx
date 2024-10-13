import {ScrollArea} from "@/components/ui/scroll-area";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {PlusIcon} from "@radix-ui/react-icons";
import InviteUserForm from "./inviteUserForm";
import IssueList from "@/pages/ProjectDetails/issuelist";
import ChatBox from "@/pages/ProjectDetails/chatbox";
import {useEffect} from "react";
import {fetchProjectById} from "@/Redux/Project/Action.js";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const ProjectDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {project} = useSelector((state) => state.project);
    const handleProjectInvitation = () => {

    }
    useEffect(() => {
        dispatch(fetchProjectById(id));
    }, [dispatch, id]);
    if (!project) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="mt-5 lg:px-8">
                <div className="lg:flex gap-5 justify-between pb-4">
                    <ScrollArea className="h-screen lg:w-[70%] pr-2">
                        <div className="pb-10 w-full text-gray-400">
                            <h1 className="text-lg font-semibold pb-5">
                                {project.name}
                            </h1>

                            <div className="space-y-5 pb-10 text-sm">
                                <p className="w-full md:max-w-lg lg:max-w-xl">{project.description}</p>
                                <div className="flex">
                                    <p className="w-36">Project Lead: </p>
                                    <Badge>{project.owner.fullName.toUpperCase()}</Badge>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Members: </p>
                                    <div className="flex items-center gap-2">
                                        {project.teamMembers.map((item) => (
                                            <Avatar key={item} className="cursor-pointer">
                                                <AvatarFallback>{item.fullName.charAt(0).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>
                                    <Dialog>
                                        <DialogTrigger>
                                            <DialogClose asChild>
                                                <Button className="ml-2" size="sm" variant="outline"
                                                        onClick={handleProjectInvitation}>
                                                    <span>invite</span>
                                                    <PlusIcon className="w-3 h-3"/>
                                                </Button>
                                            </DialogClose>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>Invite User</DialogHeader>
                                            <InviteUserForm/>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Category: </p>
                                    <p>{project.category}</p>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Status: </p>
                                    <p>{project.status}</p>
                                </div>
                                <div>
                                    <div className="flex">
                                        <p className="w-36">Deployed at: </p>
                                        {project.deployedUrl ? (
                                            <Badge className="cursor-pointer">
                                                <a href={project.deployedUrl}>Yes</a>
                                            </Badge>
                                        ) : (
                                            <Badge>Not Yet</Badge>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <section>
                                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                                <div className="lg:flex md:flex gap-3 justify-normal py-5">

                                    <IssueList status="pending" title="Todo List" projectId={id}/>
                                    <IssueList status="inprogres" title="In Progress" projectId={id}/>
                                    <IssueList status="done" title="Done" projectId={id}/>

                                </div>
                            </section>
                        </div>
                    </ScrollArea>
                    <div className="lg:w-[28%] rounded-md sticky right-1 top-0">
                        <ChatBox/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails;