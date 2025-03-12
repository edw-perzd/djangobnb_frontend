'use client'

import Modal from "./Modal"
import { useState } from "react"
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <>
            <form action="" className="space-y-4">
                <input placeholder="Correo electrónico" type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Contraseña" type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input placeholder="Confirmar contraseña" type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Error message
                </div>

                <CustomButton 
                    label="Registrarme"
                    onClick={() => console.log("Click Sign up!!!")}
                />
            </form>
        </>
    )

    return(
        <Modal
            isOpen = {signupModal.isOpen}
            close = {signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}
export default SignupModal