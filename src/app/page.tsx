import { RegisterModal } from "@/features/register-modal";
import { RegisteredUsers } from "@/features/registered-users";
import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  async function loadUsers() {
    "use server";

    const { database } = await import("@/database");

    const foundKeys = await database.keys("tag:*");
    const users: { tagId: string; name: string }[] = [];

    for (const key of foundKeys) {
      const user = await database.get(key);
      if (user) users.push({ tagId: key.split(":")[1], name: user });
    }

    return users;
  }
  const users = await loadUsers();

  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold">Controle de acesso</h1>
      <br />
      <div className={"mb-6"}>
        <RegisteredUsers users={users} />
      </div>
      <div className={"mb-6"}>
        <Button as={Link} href={"/?register=true"}>
          <HiPlus className="h-6 w-6" />
        </Button>
      </div>
      <Suspense fallback={<></>}>
        <RegisterModal />
      </Suspense>
    </main>
  );
}

export const dynamic = "force-dynamic";
