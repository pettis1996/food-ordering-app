import Image from "next/image"

export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center">
            <Image src={"/pizza.png"} width={400} height={150} alt={"Pizza"} />
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="py-2">$ 12.99</p>
            <button className="bg-primary text-white rounded-full px-8 py-2">Add to Cart</button>
        </div>
    );
}