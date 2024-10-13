import React from 'react';
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {DialogClose} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useDispatch} from "react-redux";
import {createIssue} from "@/Redux/Issue/Action.js";
import {useParams} from "react-router-dom";

const CreateIssueForm = ({projectId}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const form = useForm({
        defaultValues: {
            issueName: "",
            description: ""
        }
    });
    const onSubmit = (data) => {
        dispatch(createIssue({
            title: data.issueName,
            description: data.description,
            projectId: projectId
        }));
        console.log("Create issue: ", data);
    };
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                               name="issueName"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input
                                               {...field}
                                               type="text"
                                               className="border w-full border-gray-700 py-5 px-5"
                                               placeholder="issue name..."
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
                                           <Input
                                               {...field}
                                               type="text"
                                               className="border w-full border-gray-700 py-5 px-5"
                                               placeholder="description..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <DialogClose>
                        <Button type="submit" className="w-full py-5">
                            Create Issue
                        </Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}
export default CreateIssueForm;