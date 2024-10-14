import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {useDispatch} from "react-redux";
import {createComment} from "@/Redux/Comment/Action";

const CreateCommentForm = ({issueId}) => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            content: ""
        }
    });
    const onSubmit = (data) => {
        dispatch(createComment({content:data.content, issueId}));
        console.log("Create comment: ", data);
    };
    return (
        <div>
            <Form {...form}>
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <Avatar>
                        <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <FormField control={form.control}
                               name="content"
                               render={({field}) => (
                                   <FormItem>
                                       <FormControl>
                                           <Input
                                               {...field}
                                               type="text"
                                               className="border lg:w-[20rem] border-gray-700 py-5 px-5"
                                               placeholder="comment content..."
                                           />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                    />

                    <Button type="submit" className="px-5 py-5 rounded-b-md">
                        Save
                    </Button>
                </form>
            </Form>
        </div>
    )
}
export default CreateCommentForm;