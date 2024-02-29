import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

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
        <section id="menu">
            <SectionHeader subHeader={"Check Out our New"} mainHeader={"Menu"} />
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