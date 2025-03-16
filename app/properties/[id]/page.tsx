import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"

import apiService from "@/app/services/apiService"
import { getUserId } from "@/app/lib/actions"

const PropertyDetailPage = async ({params}: { params: { id: string } }) => {
    const property = await apiService.get(`/api/properties/${params.id}`)
    const userId = await getUserId()

    return(
        <div className="max-w-[1500px] mx-auto px-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src="/beach_1.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property.title}</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        {property.guests} guest - {property.bedrooms} bedrooms - {property.bathrooms} badroom
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        {property.landlord.avatar_url && (
                            <Image 
                                src={property.landlord.avatar_url}
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                        )}
                        <p><strong>{property.landlord.name}</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        {property.description}
                    </p>
                </div>
                <ReservationSidebar
                    property={property}
                    userId={userId}
                />
            </div>
        </div>
    )
}

export default PropertyDetailPage