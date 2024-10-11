import React from "react";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {DotFilledIcon, DotsVerticalIcon} from "@radix-ui/react-icons";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";

const ProjectCard = () => {
    const navigate = useNavigate();
    return <Card className="p-5 w-full lg:max-w-3xl">
        <div className="space-y-5">
            <div className="space-y-2">
                <div className="flex justify-between ">
                    <div className="flex items-center gap-5">
                        <h1 onClick={() => navigate("/project/3")} className="cursor-pointer font-bold text-lg">Create
                            Project</h1>
                        <DotFilledIcon/>
                        <p className="text-sm text-gray-400">fullstack</p>
                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className="rounded-full" variant="ghost" size="icon">
                                    <DotsVerticalIcon/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="text-gray-500 text-sm text-left">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar ultricies auctor luctus felis nulla
                        commodo per neque.</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {[1, 1, 1, 1].map((item) => <Badge key={item} variant="outline">Frontend</Badge>)}
                </div>
            </div>
        </div>
    </Card>
}

export default ProjectCard;