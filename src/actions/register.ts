'use server'

import {database} from "@/database";

export async function registerAction(initialState: { tagId: string; name?: string }, form: FormData): Promise<{ tagId: string; name: string }> {
    const tagId = form.get("tagId") as string;
    const name = form.get("name") as string;

    await database.set("tag:" + tagId, name);

    return { tagId, name };
}