function NavCard({title, body}) {
    return (
            <div className="absolute w-[300px] left-16 top-12 md:mx-[370px] md:my-[50px] flex justify-center bg-gray-100 shadow-lg py-5 px-2 md:w-[500px] md:h-[200px]">
                    <div className="flex flex-col space-y-5">
                        <div className="flex justify-center">
                            <p className="text-xs text-gray-500 font-serif">Travel</p>
                        </div>

                        <div className="flex justify-center">
                            <h1 className="text-xl text-gray-700">{title}</h1>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500 leading-5 ">
                               {body}
                               </p>
                        </div>

                    </div>
        </div>
    )
}

export default NavCard
