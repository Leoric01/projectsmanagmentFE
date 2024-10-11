import React from "react";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {DotFilledIcon, DotsVerticalIcon} from "@radix-ui/react-icons";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import { LoremIpsum } from 'react-lorem-ipsum';

const ProjectCard = () => {
    return <Card className="p-5 w-full lg:max-w-3xl">
        <div className="space-y-5">
            <div className="space-y-2">
                <div className="flex justify-between ">
                    <div className="flex items-center gap-5">
                        <h1 className="cursor-pointer font-bold text-lg">Create Project</h1>
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
                    <LoremIpsum avgSentencesPerParagraph={1} />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    {[1,1,1,1].map((item) => <Badge key={item} variant="outline">Frontend</Badge>)}
                </div>
            </div>
        </div>
    </Card>
}

export default ProjectCard;