import DefaultLayout from "@/components/DefaultLayout";


export default function Home() {
    return (
        <DefaultLayout>
            <main className="w-full mt-12">
                <section className="w-full flex justify-center items-center h-16 bg-blue-200">
                    <h3 className="text-blue-600 text-center text-xs">Save the date for Demo Day to see what's new and what's possible with Firebase! Learn more.</h3>
                </section>
                <div className="bg-blue-600 w-full grid grid-rows-2 justify-center sm:grid-rows-[1fr,3fr] md:grid-rows-[1fr,3fr] lg:grid-cols-2 lg:grid-rows-1">
                    <div className="ml-6 md:self-center text-center md:text-left mt-8 md:mt-0">
                        <h3 className="text-xl md:text-5xl md:text-center lg:text-4xl text-white font-bold">
                            Make your app the
                            best it can be
                        </h3>
                        <p className="text-md md:text-lg text-white tracking-wider mt-5">Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.</p>
                    </div>
                    <div>
                        <video src="/video/Hero_Loop.webm" autoPlay muted/>
                    </div>
                </div>
            </main>
        </DefaultLayout>
    );
}
