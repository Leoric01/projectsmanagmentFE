import {useParams} from "react-router-dom";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CreateCommentForm from "@/pages/IssueDetails/createcommentform";
import CommentCard from "@/pages/IssueDetails/commentcard";


const IssueDetails = () => {
    const {projectId, issueId} = useParams();
    return (
        <div className="px-20 py-8 text-gray-400">
            <div className="flex justify-between border p-10 rounded-lg">
                <ScrollArea className="h-[78vh] w-[80%]">
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
            </div>
        </div>
    );
};

export default IssueDetails;