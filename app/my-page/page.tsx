import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div>
      <pre className="text-xs m-4 p-3 rounded border max-w-7xl">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
