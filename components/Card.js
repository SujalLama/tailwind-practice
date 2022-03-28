import Image from "next/image"
import { useAppContext } from "../context/AppContext"


const Card = () => {
  const {state, dispatch} = useAppContext();
  return (
    <div className="mt-8 font-body">
      <h4>
        {state.number}
      </h4>
      <button className="btn" onClick={() => dispatch({type: "ADD_NUMBER", value: 3})}>Add number</button>
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