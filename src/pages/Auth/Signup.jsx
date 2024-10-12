import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {useDispatch} from "react-redux";
import {register} from "@/Redux/Auth/Action";

const Signup = () => {
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            password_confirmation: "",
            fullName: ""
        }
    });
    const onSubmit = (data) => {
        const {password, password_confirmation} = data;

        if (password !== password_confirmation) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            email: data.email,
            password: data.password,
            fullName: data.fullName
        };

        dispatch(register(userData));
        console.log("Register user: ", userData);
    };
    return (
        <div className="space-y-5">
            <h1>Register</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                               name="email"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input
                                               {...field}
                                               type="email"
                                               className="border w-full border-gray-700 py-5 px-5"
                                               placeholder="user email..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name="fullName"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input
                                               {...field}
                                               type="text"
                                               className="border w-full border-gray-700 py-5 px-5"
                                               placeholder="user name..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name="password"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input
                                               {...field}
                                               type="password"
                                               className="border w-full border-gray-700 py-5 px-5"
                                               placeholder="password..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <FormField control={form.control}
                               name="password_confirmation"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input
                                               {...field}
                                               type="password"
                                               className="border w-full border-gray-700 py-5 px-5"
                                               placeholder="confirm password..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />
                    <Button type="submit" className="w-full py-5">
                        Register
                    </Button>
                </form>
            </Form>
        </div>
    )
}
export default Signup;