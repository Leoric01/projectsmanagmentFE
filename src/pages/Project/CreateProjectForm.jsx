import React from 'react';
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "postcss";
import {DialogClose} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

const CreateProjectForm = () => {

    const form = useForm({
        // resolver:
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: ["javascript", "react"]
        }
    });
    const onSubmit = (data) => {
        console.log("create project data: ", data);
    }
    return (
        <div>CreateProjectForm
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onsubmit)}>
                    <FormField control={form.control}
                               name="name"
                               render={({field}) => <FormItem>
                                   <FormControl>
                                       <Input {...field}
                                              type="text"
                                              className="border w-full border-gray-700 py-5 px-5"
                                              placeholder="project name..."></Input>
                                   </FormControl>
                                   <FormMessage/>
                               </FormItem>
                               }
                    />
                    <DialogClose>
                        {false ? (<div><p>you can create only 3 projects with free plan, upgrade plan</p></div>) :
                            <Button type="submit" variant="ghost" className="w-full py-5">
                                Create Project
                            </Button>}
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}
export default CreateProjectForm;