import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProject } from "@/Redux/Project/Action";

const ProjectCard = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteProject(item.id));
    };

    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div className="space-y-5">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-5">
                            <h1 onClick={() => navigate(`/project/` + item.id)}
                                className="cursor-pointer font-bold text-lg">{item.name}</h1>
                            <DotFilledIcon />
                            <p className="text-sm text-gray-400">{item.category}</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    {/* Wrapping the icon directly without a button */}
                                    <span className="cursor-pointer">
                                        <DotsVerticalIcon />
                                    </span>
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
                    <div className="flex justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                            {item.tags.map((tag) => (
                                <Badge key={tag} variant="outline">{tag}</Badge>
                            ))}
                        </div>
                        <div>
                            <Badge>{item.status}</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
