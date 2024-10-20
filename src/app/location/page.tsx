import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

export default function Location() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-foreground mb-4">Localisation</h2>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Découvrez comment nous pouvons vous aider à atteindre vos objectifs avec nos solutions digitales innovantes.
					</p>
				</div>
				<section className="relative">
					<div className="absolute inset-0">
						<iframe
							width="100%"
							height="100%"
							frameborder="0"
							marginheight="0"
							marginwidth="0"
							title="map"
							scrolling="no"
							src="https://maps.google.com/maps?width=100%&height=600&hl=fr&q=Abidjan,Côte+d'Ivoire&ie=UTF8&t=&z=14&iwloc=B&output=embed"
						/>
					</div>
					<div className="container px-5 py-24 mx-auto flex">
						<div
							className="lg:w-1/3 md:w-1/2 bg-card rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg border">
							<h2 className="text-2xl font-bold text-card-foreground mb-4">Contactez-nous</h2>
							<p className="leading-relaxed mb-5 text-muted-foreground">
								Nous sommes là pour répondre à vos questions et discuter de vos projets digitaux.
							</p>
							<div className="relative mb-4">
								<Label htmlFor="email" className="text-sm font-medium text-card-foreground">
									Email
								</Label>
								<Input
									type="email"
									id="email"
									name="email"
									className="w-full bg-background"
								/>
							</div>
							<div className="relative mb-4">
								<Label htmlFor="message" className="text-sm font-medium text-card-foreground">
									Message
								</Label>
								<Textarea
									id="message"
									name="message"
									className="w-full bg-background rounded-md border min-h-[120px] px-3 py-2 text-card-foreground"
								/>
							</div>
							<div className="flex space-x-4">
								<Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
									Envoyer
								</Button>
							</div>
							<p className="text-xs text-muted-foreground mt-3">
								Notre équipe vous répondra dans les plus brefs délais.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}