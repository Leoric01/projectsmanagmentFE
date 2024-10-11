import {ScrollArea} from "@/components/ui/scroll-area";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger} from "@/components/ui/dialog";
import {PlusIcon} from "@radix-ui/react-icons";
import InviteUserForm from "./inviteUserForm";
import IssueList from "@/pages/ProjectDetails/issuelist";
import ChatBox from "@/pages/ProjectDetails/chatbox";

const ProjectDetails = () => {
    const handleProjectInvitation = () => {

    }
    return (
        <>
            <div className="mt-5 lg:px-8">
                <div className="lg:flex gap-5 justify-between pb-4">
                    <ScrollArea className="h-screen lg:w-[90%] pr-2">
                        <div className="pb-10 w-full text-gray-400">
                            <h1 className="text-lg font-semibold pb-5">Create Ecommerce Website</h1>

                            <div className="space-y-5 pb-10 text-sm">
                                <p className="w-full md:max-w-lg lg:max-w-xl">Lorem ipsum worrd jaskfbash
                                    aksfjsanbgfka</p>
                                <div className="flex">
                                    <p className="w-36">Project Lead: </p>
                                    <p>Johns Name</p>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Members: </p>
                                    <div className="flex items-center gap-2">
                                        {[1, 1, 1, 1, 1].map((item) => (
                                            <Avatar key={item} className="cursor-pointer">
                                                <AvatarFallback>Z</AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>
                                    <Dialog>
                                        <DialogTrigger>
                                            <DialogClose>
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
                                    <p>FullStack</p>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Status: </p>
                                    <p> Pending </p>
                                </div>
                                <div className="flex">
                                    <p className="w-36">Project Lead: </p>
                                    <Badge>LEADER</Badge>
                                </div>
                            </div>
                            <section>
                                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                                <div className="lg:flex md:flex gap-3 justify-between py-5">

                                    <IssueList status="pending" title="Todo List"/>
                                    <IssueList status="inprogres" title="In Progress"/>
                                    <IssueList status="done" title="Done"/>

                                </div>
                            </section>
                        </div>
                    </ScrollArea>
                    <div>
                        <ChatBox/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails;