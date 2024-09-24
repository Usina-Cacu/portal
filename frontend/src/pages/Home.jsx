import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/screens/header"
import { ArrowRight } from "lucide-react"

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex space-y-4 items-center justify-center">
                <div className="grid grid-cols-1 items-start justify-between text-white gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardContent className="flex flex-col gap-4 p-6">
                            <div>
                                <h3 className="text-xl font-semibold">Aspen</h3>
                                <p className="text-muted-foreground">Gerenciador de bags.</p>
                            </div>
                            <Button disabled>Em breve</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col gap-4 p-6">
                            <div>
                                <h3 className="text-xl font-semibold">LDB (Lei do Bem)</h3>
                                <p className="text-muted-foreground">Gerenciador de projetos.</p>
                            </div>
                            <Button asChild>
                                <a href="http://192.168.168.151:3000">
                                    Acessar LDB <ArrowRight />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col gap-4 p-6">
                            <div>
                                <h3 className="text-xl font-semibold">QTH</h3>
                                <p className="text-muted-foreground">Gerenciador de rádios.</p>
                            </div>
                            <Button asChild>
                                <a href="http://192.168.168.151:3001">
                                    Acessar QTH <ArrowRight />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col gap-4 p-6">
                            <div>
                                <h3 className="text-xl font-semibold">QR Code</h3>
                                <p className="text-muted-foreground">Gerador de QR Codes.</p>
                            </div>
                            <Button asChild>
                                <a href="http://192.168.168.151:3003">
                                    Acessar QR Code <ArrowRight />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main >
        </>
    )
}