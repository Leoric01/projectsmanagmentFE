import React from 'react';
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {DialogClose} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

const InviteUserForm = () => {
    const form = useForm({
        // resolver: zodResolver(undefined, undefined, undefined,undefined),
        defaultValues: {
            email: "",
        }
    });
    const onSubmit = (data) => {
        console.log("Invite user: ", data);
    };
    return (
        <>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control}
                                   name="email"
                                   render={({field}) => (
                                       <FormItem>
                                           <FormControl>
                                               <Input
                                                   {...field}
                                                   type="text"
                                                   className="border w-full border-gray-700 py-5 px-5"
                                                   placeholder="user email..."
                                               />
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>
                                   )}
                        />
                        <DialogClose asChild>
                            <Button type="submit" className="w-full py-5">
                                Invite User
                            </Button>
                        </DialogClose>
                    </form>
                </Form>
            </div>
        </>
    )
}
export default InviteUserForm