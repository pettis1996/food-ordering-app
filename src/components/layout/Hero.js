import Image from "next/image"
import Right from "@/components/icons/right";

export default function Hero() {
    return (
        <section className="grid grid-cols-2">
            <div>    
                <h1 className="text-4xl font-semibold">Everything is better with a Pizza!</h1>
                <p className="my-4 text-gray-500">
                    Pizza is the missing piece that makes every day complete, a simple yet so delicious joy in life.
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary text-white flex items-center gap-2 rounded-full px-4 py-2">
                        Order Now
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn More
                        <Right />    
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={"/pizza.png"} layout={"fill"} objectFit={"contain"} alt={"Pizza"} />
            </div>
        </section>
    );
}