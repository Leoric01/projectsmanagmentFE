import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {login} from "@/Redux/Auth/Action";
import {useDispatch} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = (data) => {
        console.log("Login user: ", data);
        dispatch(login(data));
    };
    return (
        <div className="space-y-5">
            <h1>Login</h1>
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
                    <Button type="submit" className="w-full py-5">Login</Button>
                </form>
            </Form>
        </div>
    )
}
export default Login;