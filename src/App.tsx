import Logo from '/logocacu.png';
import './App.css'
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { ArrowRight } from 'lucide-react';
import Snowfall from 'react-snowfall';
import { isWithinInterval } from 'date-fns';

export default function App() {
  const host = 'http://82.25.68.156';

  return (
    <main>
      <header className="flex flex-row items-center justify-center p-2 bg-[#43846d] bg-opacity-15 text-white gap-2">
        <img src={Logo} className="w-12 h-11" alt={Logo} />
        <h1 className="text-3xl font-sans font-semibold">Portal de Sistemas</h1>
      </header>

      {isWithinInterval(new Date(), {
        start: `${new Date().getFullYear()}-12-23`,
        end: `${new Date().getFullYear() + 1}-01-01`
      }) && <Snowfall color='white' style={{ opacity: 70 }} />}

      <div className="w-full h-full flex flex-col items-center justify-center p-5">
        <div className="grid grid-cols-1 justify-between text-white gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Aspen",
              description: "Sistema de gerenciamento e controle de bags.",
              url: `${host}:3002`
            },
            {
              name: "CHB",
              description: "Sistema integrado de gestão empresarial (ERP).",
              url: 'https://cacu.cloud.inf.br/chbweb/chblogin.aspx'
            },
            {
              name: "Contratos",
              description: "Plataforma para criação, gestão e acompanhamento de contratos.",
              url: `${host}:3004`
            },
            {
              name: "LDB",
              description: "Sistema de gerenciamento de projetos.",
              url: `${host}:3000`
            },
            {
              name: "QTH",
              description: "Sistema de controle e gerenciamento de rádio.",
              url: `${host}:3001`
            },
            {
              name: "QR Code",
              description: "Ferramenta para geração e customização de QR Codes.",
              url: `${host}:3003`
            },
          ].map((s, idx) => (
            <Card key={idx}>
              <CardContent className="flex flex-col gap-2 p-6">
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="text-muted-foreground">{s.description}</p>
                <Button
                  className='flex items-center gap-1 font-medium text-md'
                  onClick={() => window.open(s.url)}
                >
                  Acessar {s.name} <ArrowRight size={20} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
};