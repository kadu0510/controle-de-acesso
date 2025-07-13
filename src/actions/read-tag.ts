'use server'

import {database} from "@/database";

let interval: NodeJS.Timeout | undefined;

export async function readTagAction(initialState: { uid?: string }, form: FormData): Promise<{ uid?: string }> {
    await database.set("status", "READING");

    return new Promise<{uid: string}>((res) => {
        interval = setInterval(async () => {
            const uid = await database.get("uid");

            if (uid) {
                clearInterval(interval)
                await database.set("status", "IDLE");
                await database.del("uid");
                res({uid});
            }
        }, 1000)
    })
}