'use client'

import {useActionState, useId} from "react";
import {readTagAction, registerAction} from "@/actions";
import { Button } from "flowbite-react";

export function RegisterForm() {
    const [readState, readFormAction, readPending] = useActionState(readTagAction, {uid: ''})
    const [registerState, registerFormAction, registerPending] = useActionState(registerAction, {tagId: '', name: ''})
    const readFormId = useId()
    const registerFormId = useId()

    return (
        <div>
            <form id={readFormId} action={readFormAction}></form>
            <form id={registerFormId} action={registerFormAction}></form>
            <div className="mb-6">
                <label htmlFor={'name-input'}
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                <input type="text" id={'name-input'} form={registerFormId} defaultValue={registerState.name} name={"name"}
                       className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className={'mb-6'}>
                <label htmlFor={"tag-id-input"}
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">

                    <input type="text" id={"tag-id-input"} value={readState.uid} readOnly form={registerFormId} name={"tagId"}
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required/>
                    <input type="submit" disabled={readPending} form={readFormId}
                           className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                           value={"Ler"}/>
                </div>
            </div>
            <div className="mb-6">
                <Button  type={"submit"} disabled={registerPending} form={registerFormId}>Registrar</Button>
            </div>
        </div>

    )
}