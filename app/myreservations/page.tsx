import Image from "next/image"

const MyReservationsPage = () => {
    return(
        <div className="max-w-[1500px] mx-auto px-6">
            <h1 className="my-6 text-2xl">My reservations</h1>

            <div className="space-y-4">
                <div className="p-5 grid grids-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full" 
                                alt="Beach house"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date: </strong>27/02/2025</p>
                        <p className="mb-2"><strong>Check out date: </strong>01/03/2025</p>

                        <p className="mb-2"><strong>Numbers of nights: </strong>2</p>
                        <p className="mb-2"><strong>Total price: </strong>$200</p>

                        <div className="mt-6 inline-block pointer-cursor py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
                    </div>
                </div>
                
                <div className="p-5 grid grids-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/beach_1.jpg"
                                className="hover:scale-110 object-cover transition h-full w-full" 
                                alt="Beach house"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date: </strong>27/02/2025</p>
                        <p className="mb-2"><strong>Check out date: </strong>01/03/2025</p>

                        <p className="mb-2"><strong>Numbers of nights: </strong>2</p>
                        <p className="mb-2"><strong>Total price: </strong>$200</p>

                        <div className="mt-6 inline-block pointer-cursor py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyReservationsPage 