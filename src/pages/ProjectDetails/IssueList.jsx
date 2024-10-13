import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import IssueCard from "@/pages/ProjectDetails/issuecard";
import {Button} from "@/components/ui/button";
import {PlusIcon} from "@radix-ui/react-icons";
import CreateIssueForm from "@/pages/ProjectDetails/createissueform";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchIssuesByProjectId} from "@/Redux/Issue/action";

const IssueList = ({title, status, projectId}) => {
    const dispatch = useDispatch();
    const { issues, loading } = useSelector((state) => state.issue);

    useEffect(() => {
        dispatch(fetchIssuesByProjectId(projectId))

    },[dispatch,projectId]);

    let issueContent;

    if (issues && issues.length > 0) {
        issueContent = issues.filter((item) => item.status === status).map((item) => (
            <IssueCard item={item} projectId={projectId} key={item.id} />
        ));
    } else {
        issueContent = <div>No issues found</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <Dialog>
                <Card className="w-full md:w-[300px] lx:w-[310px]">
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                        <div className="space-y-2">
                            {issueContent}
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
                    <CreateIssueForm status={status} projectId={projectId} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IssueList;