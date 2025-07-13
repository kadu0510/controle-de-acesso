"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import removeAction from "@/actions/remove";
import { useActionState } from "react";

export function RegisteredUsers(props: {
  users: { name: string; tagId: string }[];
}) {
  const [_, removeFormAction] = useActionState(removeAction, {
    tagId: "",
  });

  return (
    <div className="overflow-x-auto">
      <form id={"remove-item-form"} action={removeFormAction}></form>
      <Table striped>
        <TableHead>
          <TableRow>
            <TableHeadCell>Id</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Remover</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {props.users.map((user) => {
            return (
              <TableRow
                key={user.tagId}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.tagId}
                  <input
                    type={"hidden"}
                    name={"tagId"}
                    value={user.tagId}
                    form={"remove-item-form"}
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <Button
                    as={"input"}
                    type={"submit"}
                    form={"remove-item-form"}
                    value={"Remover"}
                    outline
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
