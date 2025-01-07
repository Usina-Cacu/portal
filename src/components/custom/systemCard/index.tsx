import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type CardProps = {
    name: string,
    description: string,
    url: string
}

export default function SystemCard({ name, description, url }: CardProps) {
    const goTo = () => window.location.replace(url);

    return (
        <Card>
            <CardContent className="flex flex-col gap-2 p-6">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-muted-foreground">{description}</p>
                <Button onClick={goTo}>
                    Acessar {name} <ArrowRight />
                </Button>
            </CardContent>
        </Card>
    );
}