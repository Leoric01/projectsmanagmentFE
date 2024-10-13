import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import IssueCard from "@/pages/ProjectDetails/issuecard";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "@radix-ui/react-icons";
import CreateIssueForm from "@/pages/ProjectDetails/createissueform";

const IssueList = ({title, status, projectId}) => {
    return (
        <div>
            <Dialog>
                <Card className="w-full md:w-[300px] lx:w-[310px]">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                        <div className="space-y-2">
                            {[1, 2, 3].map((item) => <IssueCard key={item}/>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <DialogTrigger>
                            <Button
                                variant="outline"
                                className="w-full border flex items-center gap-2"
                            >
                                <PlusIcon/>
                                Create issue
                            </Button>
                        </DialogTrigger>
                    </CardFooter>
                </Card>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create new Issue</DialogTitle>
                    </DialogHeader>
                    <CreateIssueForm projectId={projectId} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IssueList