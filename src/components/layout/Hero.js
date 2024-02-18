import Image from "next/image"
import Right from "@/components/icons/Right";

export default function Hero() {
    return (
        <section className="hero">
            <div className="py-12">    
                <h1 className="text-4xl font-semibold">Everything<br /> is better<br /> with a <span className="text-primary">Pizza</span>!</h1>
                <p className="my-6 text-gray-500 text-sm">
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