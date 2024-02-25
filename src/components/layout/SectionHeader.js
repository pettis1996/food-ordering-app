export default function SectionHeader({ subHeader, mainHeader }) {
    return (
        <div className="text-center py-4 mt-4 mb-4">
            <h3 className="uppercase text-gray-600 font-semibold leading-4">{subHeader}</h3>
            <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
        </div>
    );
}