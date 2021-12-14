import Image from 'next/image';
function Latest() {
    return (
        <div>
            <div className="flex space-x-3 py-5">
                {/* Left side */}
                <div>
                <Image src="/images/greece.jpg" height={100} width={150} objectFit="cover"/>
                </div>
                {/* Right side */}

                <div className="flex-col space-y-4">
                    <h2 className="subheading-2">Exploring Athens</h2>

                    <h5 className="date">December 13, 2021</h5>
                </div>
            </div>
        </div>
    )
}

export default Latest
