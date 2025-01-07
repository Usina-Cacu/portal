import Logo from '/logocacu.png';

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-center p-2 bg-[#43846d] bg-opacity-15 text-white gap-2">
            <img src={Logo} className="w-12 h-11" alt={Logo} />
            <h1 className="text-3xl font-sans font-semibold">Portal de Sistemas</h1>
        </header>
    );
}