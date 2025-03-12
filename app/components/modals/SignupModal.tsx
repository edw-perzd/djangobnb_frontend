'use client'

import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"
import useSignupModal from "@/app/hooks/useSignupModal"
import CustomButton from "../forms/CustomButton"
import apiService from "@/app/services/apiService"
import { handleLogin } from "@/app/lib/actions"

const SignupModal = () => {
    // Variables
    const router = useRouter()
    const signupModal = useSignupModal()
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState<string[]>([])

    //Submit functionality
    const submitSignUp = async () =>{
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }
        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData))

        if(response.access){
            handleLogin(response.user_pk, response.access, response.refresh)

            signupModal.close()
            router.push('/')
            
        }else{
            const tmtErrors: string[] = Object.values(response).map((error: any) =>{
                return error
            })

            setErrors(tmtErrors)
        }
    }
    
    const content = (
        <>
            <form action={submitSignUp} className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" type="email" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Contraseña" type="password" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Confirmar contraseña" type="password" name="" id="" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                {errors.map((error, index) => {
                    return(
                        <div
                            key={`error-${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    )}
                )}

                <CustomButton 
                    label="Registrarme"
                    onClick={submitSignUp}
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