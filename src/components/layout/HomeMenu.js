import Image from "next/image"
import MenuItem from "../menu/MenuItem";

const menuItems = { 
    1: {
        name: "Pepperoni Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 12.00
    },
    2: {
        name: "Pepperoni Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 12.00
    },
    3: {
        name: "Pepperoni Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 12.00
    },
    4: {
        name: "Pepperoni Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 12.00
    },
    5: {
        name: "Pepperoni Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 12.00
    },
    6: {
        name: "Pepperoni Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 12.00
    },
}

export default function HomeMenu() {
    return (
        <section className="">
            <div className="absolute h-full left-0 right-0">
                <div className="h-44 w-48 absolute -left-12 -top-[95px] -z-10">
                    <Image src={"/sallad1.png"} layout={"fill"} objectFit={"contain"} alt={"Salad 1"} />
                </div>
                <div className="h-44 w-48 absolute -right-12 -top-[200px] -z-10">
                    <Image src={"/sallad2.png"} layout={"fill"} objectFit={"contain"} alt={"Salad 2"} />
                </div>
            </div>
            <div className="text-center py-4"> 
                <h3 className="uppercase text-gray-600 font-semibold leading-4">Check Out</h3>
                <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {Object.values(menuItems).map((item, index) => {
                    return (
                        <div key={index}>
                            <MenuItem />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}