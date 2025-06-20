import { useState } from "react";
import Signup from "@/pages/Auth/Signup";
import Login from "@/pages/Auth/Login";
import { Button } from "@/components/ui/button";
import "./Auth.css";

const Auth = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-5">
            {active ? <Signup /> : <Login />}
            <div>
              {active ? <span>already have account?</span> : <span>Dont have an account yet?</span>}
              <Button variant="ghost" onClick={() => setActive(!active)}>
                {active ? "signing" : "signup"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
