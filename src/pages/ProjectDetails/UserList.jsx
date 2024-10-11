import React from 'react';
import {Avatar, AvatarFallback} from "@/components/ui/avatar";

const UserList = () => {
    return (
        <div className="space-y-2">
            <div className="border rounded-md">
                <p className="py-2 px-3"> {"Leoric" || "Unassignee"} </p>
            </div>
            {[1, 2, 3, 4, 5].map((item) => <div className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center
            space-x-4 rounded-md border px-4">
                    <Avatar>
                        <AvatarFallback>
                            L
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-sm leading-none">Change It</p>
                        <p className="text-sm text-muted-foreground">@changeit</p>
                    </div>
                </div>
            )}
        </div>
    )
}
export default UserList;