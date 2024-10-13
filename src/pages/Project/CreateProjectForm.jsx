import React from 'react';
import {Form, FormControl, FormField, FormItem, FormMessage,} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {DialogClose} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {tags} from "@/pages/ProjectList/ProjectList";
import {Cross1Icon} from "@radix-ui/react-icons";
import {useDispatch} from "react-redux";
import {createProject} from "@/Redux/Project/Action";


const CreateProjectForm = () => {
    const dispatch = useDispatch();

    const handleTagsChange = (newValue) => {
        const currentTags = form.getValues("tags") || [];
        const updatedTags = currentTags.includes(newValue) ?
            currentTags.filter(tag => tag !== newValue) : [...currentTags, newValue];
        form.setValue("tags", updatedTags);
    }

    const form = useForm({
        // resolver: zodResolver(undefined, undefined, undefined,undefined),
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: []
        }
    });
    const onSubmit = (data) => {
        dispatch(createProject(data))
        console.log(data);
    };
    return (
        <div>CreateProjectForm
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                               name="name"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input {...field}
                                                  type="text"
                                                  className="border w-full border-gray-700 py-5 px-5"
                                                  placeholder="project name..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name="description"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input {...field}
                                                  type="text"
                                                  className="border w-full border-gray-700 py-5 px-5"
                                                  placeholder="project description..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name="category"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Select
                                               defaultValue="fullstack"
                                               value={field.value}
                                               onValueChange={(value) => {
                                                   field.onChange(value)
                                               }}
                                               // className="border w-full border-gray-700 py-5 px-5"
                                           >
                                               <SelectTrigger className="w-full">
                                                   <SelectValue placeholder="project category..."/>
                                               </SelectTrigger>
                                               <SelectContent>
                                                   <SelectItem value="fullstack">Full Stack</SelectItem>
                                                   <SelectItem value="frontend">Frontend</SelectItem>
                                                   <SelectItem value="backend">Backend</SelectItem>
                                               </SelectContent>
                                           </Select>
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <FormField
                        control={form.control}
                        name="tags"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            handleTagsChange(value)
                                        }}
                                        // className="border w-full border-gray-700 py-5 px-5"
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Tags..."/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {tags.map((item) => (
                                                <SelectItem key={item} value={item}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <div className="flex flex-wrap gap-1">
                                    {(Array.isArray(field.value) ? field.value : []).map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => handleTagsChange(item)}
                                            className="flex cursor-pointer rounded-full items-center border gap-2 py-1 px-4"
                                        >
                                            <span className="text-sm">{item}</span>
                                            <Cross1Icon className="h-3 w-3"/>
                                        </div>
                                    ))}
                                </div>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <DialogClose asChild>
                        {false ? (<div><p>you can create only 3 projects with free plan, upgrade plan</p></div>)
                            : (
                                <Button type="submit" className="w-[200px] py-5">
                                    Create Project
                                </Button>)}
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}
export default CreateProjectForm;