import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CreateProjectForm from "@/pages/Project/CreateProjectForm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Auth/Action";

const Navbar = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    return (
        <div className="border-b py-4 px-5 flex justify-between">
            <div className="flex items-center gap-3">
                <p onClick={() => navigate("/")} className="cursor-pointer">Project Management</p>
                <Dialog>
                    <DialogTrigger asChild variant="ghost" className="nav-menu-button cursor-pointer">
                        <p >New Project</p>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>
                            Create New Project
                        </DialogTitle>
                        <CreateProjectForm className="flex flex-col g-4"/>
                    </DialogContent>
                </Dialog>

                <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">Upgrade Plan</Button>
            </div>

            <div className="flex items-center gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                            <PersonIcon variant="outline" size="icon" className="rounded-full border-2 border-gray-500"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => {
                            dispatch(logout());
                            navigate("/");
                        }}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>{user ? user.name : "Guest"}</p>
            </div>
        </div>
    );
};

export default Navbar;
