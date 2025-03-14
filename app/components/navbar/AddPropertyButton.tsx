'use client'
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import useLoginModal from "@/app/hooks/useLoginModal"

interface AddPropertyButtonProps {
    userId?: string | null
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal()
    const addPropertyModal = useAddPropertyModal()
    const airbnbYoutHome = () =>{
        if(userId){
            addPropertyModal.open()
        } else{
            loginModal.open()
        }
    }

    return(
        <div 
            onClick={airbnbYoutHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Djangobnd yout home
        </div>
    )
}

export default AddPropertyButton