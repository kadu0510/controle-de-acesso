"use server";

import { database } from "@/database";
import { redirect } from "next/navigation";

export default async function removeAction(
  _initialState: { tagId: string },
  form: FormData,
): Promise<{ tagId: string }> {
  const tagId = form.get("tagId") as string;
  await database.del("tag:" + tagId);
  redirect("/");
}
