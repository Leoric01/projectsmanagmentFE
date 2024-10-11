import {useParams} from "react-router-dom";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CreateCommentForm from "@/pages/IssueDetails/createcommentform";
import CommentCard from "@/pages/IssueDetails/commentcard";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";


const IssueDetails = () => {
    const {projectId, issueId} = useParams();
    const handleUpdateIssueStatus = (status) => {
        console.log(status);
    }
    return (
        <div className="px-20 py-8 text-gray-400">
            <div className="flex justify-between border p-10 rounded-lg">
                <ScrollArea className="h-[78vh] w-[70%]">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-400">create navbar</h1>
                        <div className="py-5">
                            <h2 className="font-semibold">Description</h2>
                            <p className="text-sm text-gray-400 mt-3">afbjskalbgfjlskaddbgljasdbljkgbsdaljkbgjsdak;ljgb;sdakljgbk;
                                sadjb s;kgjbdj;ksabg as;h
                                sagp;gh spag hpas
                            </p>
                        </div>
                        <div className="mt-5">
                            <h1 className="font-semibold">Activity</h1>
                            <Tabs defaultValue="comments" className="w-[400px]">
                                <TabsList className="mb-5">
                                    <TabsTrigger value="all">
                                        All
                                    </TabsTrigger>
                                    <TabsTrigger value="comments">
                                        Comments
                                    </TabsTrigger>
                                    <TabsTrigger value="history">
                                        History
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    all Make changes to your account here
                                </TabsContent>
                                <TabsContent value="comments">
                                    <CreateCommentForm issueId={issueId}/>
                                    <div className="mt-8 space-y-6">
                                        {[1, 2, 3].map((item) => (
                                                <CommentCard key={item}/>
                                            )
                                        )}
                                    </div>
                                </TabsContent>
                                <TabsContent value="history">
                                    history Make changes to your account here
                                </TabsContent>

                            </Tabs>
                        </div>
                    </div>
                </ScrollArea>
                <div className="w-full lg:w-[30%] space-y-2">
                    <Select onValueChange={handleUpdateIssueStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="To do"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pending">To Do</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="border rounded-lg ">
                        <p className="border-b py-3 px-5">Details</p>
                        <div className="p-5">
                            <div className="space-y-7">
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Assignee</p>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 text-xs">
                                            <AvatarFallback>R</AvatarFallback>
                                        </Avatar>
                                        <p>Change it</p>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Labels</p>
                                    <div className="flex items-center gap-3">
                                        <p>None</p>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Status</p>
                                    <div className="flex items-center gap-3">
                                        <Badge>in_progress</Badge>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Release</p>
                                    <div className="flex items-center gap-3">
                                        <p>19-01-2025</p>
                                    </div>
                                </div>
                                <div className="flex gap-10 items-center">
                                    <p className="w-[7rem]">Reporter</p>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8 text-xs">
                                            <AvatarFallback>Z</AvatarFallback>
                                        </Avatar>
                                        <p>Change it</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueDetails;