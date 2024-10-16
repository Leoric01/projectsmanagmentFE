import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/pages/Project/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProjects, fetchProjects, searchProjectsByKeyword } from "@/Redux/Project/Action";
import { debounce } from "lodash";  // Assuming lodash is installed

export const tags = [
    "all", "react", "nextjs", "spring boot", "mysql", "mongodb", "angular", "python", "flask"
];

const ProjectList = () => {
    const [keyword, setKeyword] = React.useState("");
    const dispatch = useDispatch();
    const { projects, searchProjects } = useSelector((state) => state.project);

    const debouncedSearch = debounce((value) => {
        dispatch(searchProjectsByKeyword(value));
    }, 300);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setKeyword(value);
        debouncedSearch(value);
    };

    const handleFilterCategory = (value) => {
        if (value === "all") {
            dispatch(fetchAllProjects());
        } else {
            dispatch(fetchProjects({ category: value }));
        }
    };

    const handleFilterTags = (value) => {
        if (value === "all") {
            dispatch(fetchAllProjects());
        } else {
            dispatch(fetchProjects({ tag: value }));
        }
    };

    useEffect(() => {
        dispatch(fetchAllProjects());
    }, [dispatch]);

    return (
        <>
            <div>ProjectList</div>
            <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-items-start py-5">
                <section className="filterSection ml-4">
                    <Card className="sticky p-5 top-10">
                        <div className="flex justify-between lg:w-[20rem]">
                            <p className="text-xl -tracking-wider">Filters</p>
                            <Button variant="ghost" size="icon">
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className="mt-5">
                            <ScrollArea className="space-y-7 h-[70vh]">
                                <div>
                                    <h1 className="pb-3 text-gray-400 border-b text-left">Category</h1>
                                    <div className="pt-5">
                                        <RadioGroup
                                            className="space-y-3 pt-5"
                                            defaultValue="all"
                                            onValueChange={handleFilterCategory}>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="all" id="r1" />
                                                <Label htmlFor="r1">All</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="fullstack" id="r2" />
                                                <Label htmlFor="r2">Fullstack</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="frontend" id="r3" />
                                                <Label htmlFor="r3">Frontend</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="backend" id="r4" />
                                                <Label htmlFor="r4">Backend</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="pt-9">
                                    <h1 className="pb-3 text-gray-400 border-b text-left">Tag</h1>
                                    <div className="pt-5">
                                        <RadioGroup
                                            className="space-y-7 pt-5"
                                            defaultValue="all"
                                            onValueChange={handleFilterTags}>
                                            {tags.map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <RadioGroupItem value={item} id={`r1-${item}`} />
                                                    <Label htmlFor={`r1-${item}`}>{item}</Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </section>
                <section className="projectListSection w-full lg:w-[48rem]">
                    <div className="flex gap-2 items-center pb-5 justify-between">
                        <div className="relative p-0 w-full">
                            <Input
                                className="40% px-9"
                                placeholder="Search projects..."
                                onChange={handleSearchChange}
                            />
                            <MagnifyingGlassIcon className="absolute top-3 left-4" />
                        </div>
                    </div>
                    <div>
                        <div className="space-y-5 min-h-[74vh]">
                            {keyword.length > 0 && searchProjects && searchProjects.length > 0
                                ? searchProjects.map((item) => <ProjectCard key={item.id} item={item} />)
                                : projects && projects.length > 0
                                    ? projects.map((item) => <ProjectCard key={item.id} item={item} />)
                                    : <p>No projects found.</p>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProjectList;
