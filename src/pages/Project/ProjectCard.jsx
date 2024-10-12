import React from "react";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {DotFilledIcon, DotsVerticalIcon} from "@radix-ui/react-icons";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteProject} from "@/Redux/Project/Action";

const ProjectCard = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteProject(item.id));
    };
    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between ">
                        <div className="flex items-center gap-5">
                            <h1 onClick={() => navigate(`/project/${item.id}`)}
                                className="cursor-pointer font-bold text-lg">{item.name}</h1>
                            <DotFilledIcon/>
                            <p className="text-sm text-gray-400">{item.category}</p>
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
                                    <DropdownMenuItem onClick={handleDelete}>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm text-left">
                        <p>{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {item.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">{tag}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
