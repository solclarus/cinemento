import { SidebarFooter } from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { getUser } from "@/app/data/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AppSidebarFooter = async () => {
  const user = await getUser();

  return (
    <SidebarFooter>
      {user ? (
        <NavUser />
      ) : (
        <Button asChild>
          <Link href="/sign-in">ログイン</Link>
        </Button>
      )}
    </SidebarFooter>
  );
};
