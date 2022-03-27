import Image from "next/image"

const Card = () => {
  return (
    <div className="mt-8 font-body">
        {/* card goes here */}
            <div className="card hover:shadow-lg">
            <Image
                  src="/images/laptop.jpg"
                  alt="laptop"
                  width="600"
                  height="200"
                  objectFit="cover"
                  objectPosition="center"
                  layout="responsive"
                />
            <div className="m-4">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-sm text-gray-500">Recipe By Mario</span>
            </div>
            <div className="badge">
              <span>25 mins</span>
            </div>
            </div>
    </div>
  )
}

export default Card