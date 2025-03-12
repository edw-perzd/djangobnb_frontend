'use client'

import Modal from "./Modal"
import { useState } from "react"
import useLoginModal from "@/app/hooks/useLoginModal"
import CustomButton from "../forms/CustomButton"

const LoginModal = () => {
    const loginModal = useLoginModal()

    const content = (
        <>
            <form action="" className="space-y-4">
                <input placeholder="Correo electrónico" type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Contraseña" type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Error message
                </div>

                <CustomButton 
                    label="Ingresar"
                    onClick={() => console.log("Click Log in!!!")}
                />
            </form>
        </>
    )

    return(
        <Modal
            isOpen = {loginModal.isOpen}
            close = {loginModal.close}
            label="Log in"
            content={content}
        />
    )
}
export default LoginModal