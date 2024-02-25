import Image from "next/image"

export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <Image className="block mx-auto" src={"/pizza.png"} width={100} height={100} alt={"Pizza"} />
            </div>
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="py-2">$ 12.99</p>
            <button className="bg-primary text-white rounded-full px-8 py-2">Add to Cart</button>
        </div>
    );
}