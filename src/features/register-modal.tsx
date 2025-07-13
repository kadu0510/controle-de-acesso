"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { useActionState, useEffect, useId, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RegisterForm } from "@/features/register-form";
import { registerAction } from "@/actions";

export function RegisterModal() {
  const [registerState, registerFormAction] = useActionState(registerAction, {
    tagId: "",
    name: "",
  });
  const [openModal, setOpenModal] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const registerFormId = useId();

  function handleClose() {
    router.push("/");
  }

  useEffect(() => {
    setOpenModal(searchParams.has("register"));
  }, [searchParams]);

  useEffect(() => {
    if (registerState.tagId) {
      router.push("/");
    }
  }, [registerState]);

  return (
    <Modal show={openModal} onClose={handleClose}>
      <ModalHeader>Registrar usuario</ModalHeader>
      <ModalBody>
        <form id={registerFormId} action={registerFormAction}></form>
        <RegisterForm registerFormId={registerFormId} />
      </ModalBody>
      <ModalFooter>
        <Button
          as={"input"}
          type={"submit"}
          form={registerFormId}
          value={"Registrar"}
        />
        <Button color="alternative" onClick={handleClose}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
