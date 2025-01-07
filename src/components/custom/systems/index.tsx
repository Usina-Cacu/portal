import SystemCard from "../systemCard";

const systms = [
    { name: "Aspen", description: "Gerenciador de bags.", url: "http://192.168.168.90:3002" },
    { name: "LDB", description: "Gerenciador de projetos.", url: "http://192.168.168.90:3000" },
    { name: "QTH", description: "Gerenciador de rádios.", url: "http://192.168.168.90:3001" },
    { name: "QR Code", description: "Gerador de QR Codes.", url: "http://192.168.168.90:3003" },
]

export default function Systems() {
    return (
        <div className="p-5">
            <div className="grid grid-cols-1 justify-between text-white gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {systms.map((s) => <SystemCard {...s} />)}
            </div>
        </div>
    );
}