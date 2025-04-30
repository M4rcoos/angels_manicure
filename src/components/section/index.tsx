
import mulher from "@/assets/mulher.png"
import InstagramEmbed from "../ui/instagram-embed";

export const Section = () => {

    return (
        <div className="bg-white p-6 flex flex-col items-center">
            <h1 className="font-baloo font-bold text-3xl text-purple-dark">Fique por dentro das novidades</h1>
            <p className="text-base font-roboto m-4">
                Descontos e novidades sobre cuidados. Débora Anjos sempre traz o melhor atendimento pra voce se sentir confortavel.
            </p>
            <div className="md:w-1/2 flex justify-center">
                <div className="w-full max-w-md">
                    <InstagramEmbed
                        url="https://www.instagram.com/p/DHubT8WsGJI"
                        caption="SEU VIDEO OU INSTA AQUI"
                        className="rounded-lg shadow-lg"
                    />
                </div>


            </div>

        </div>
    );
};
