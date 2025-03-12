import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"

const PropertyDetailPage = () => {
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
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guest - 2 bedrooms - 1 badroom
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/profile_pic_1.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The user name"
                        />
                        <p><strong>Edd Perz</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus unde aliquid ex totam doloremque nesciunt aliquam, placeat consequatur numquam incidunt officiis necessitatibus repellat atque possimus explicabo eaque. Eveniet, asperiores tenetur.
                    </p>
                </div>
                <ReservationSidebar />
            </div>
        </div>
    )
}

export default PropertyDetailPage