'use client'

import useWebSocket, { ReadyState } from "react-use-websocket"
import CustomButton from "../forms/CustomButton"
import { ConversationType } from "@/app/inbox/page"
import { useEffect } from "react"

interface ConversationDetailProps {
    userId: string,
    token: string,
    conversation: ConversationType,
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    conversation,
    token,
    userId
}) =>{
    const myUser = conversation.users?.find((user) => user.id == userId)
    const otherUser = conversation.users?.find((user) => user.id != userId)

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
        share: false,
        shouldReconnect: () => true
    })

    useEffect(() => {
        console.log('Connection state changed', readyState)
    }, [readyState])
    return(
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">Edd Perz</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, itaque? Ipsum doloribus dolores magnam voluptas iure magni necessitatibus exercitationem impedit corporis cum explicabo animi itaque facilis quidem, veritatis quia quasi!</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">IDGS 8C</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, itaque? Ipsum doloribus dolores magnam voluptas iure magni necessitatibus exercitationem impedit corporis cum explicabo animi itaque facilis quidem, veritatis quia quasi!</p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input 
                    type="text" 
                    placeholder="Escribe tu mensaje..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

                <CustomButton
                    label="Enviar"
                    onClick={() =>
                        console.log("Clicked")}
                    className="w-[90px]"
                />
            </div>
        </>
    )
}

export default ConversationDetail