import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

// /
export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold tracking-tight">
        Welcome to the Home Page
      </h1>

      <div className="flex gap-x-2 mt-4">
        <Button size="lg" asChild>
          <LoginLink>Sign in</LoginLink>
        </Button>

        <Button size="lg" asChild>
          <RegisterLink>Sign up</RegisterLink>
        </Button>
      </div>
    </main>
  );
}
