import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discover Yala National Park | YalaSriLanka.co",
    description: "Explore the history, geography, and diverse wildlife of Yala National Park. From ancient ruins to thriving leopard populations, discover the jewel of Sri Lanka's wilderness.",
};

export default function DiscoverPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111811] dark:text-white font-display overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative flex min-h-[85vh] w-full flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        alt="Cinematic landscape of Yala National Park at dawn with golden light hitting the trees"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDttqbwbcRrF9OUJbDgh-qUQDuXmSBiEekysC0dgbxEwpbDzSkj-gbVxEMlrS5HacR0X1r-9pmYR-UgDeyIGy8sIQcCGH3AmyctlCoUaXZ5A5ey_ORHPvS51njLJwb4qLpIVFRKW-dD1lNPgcyM6e8IbNE2it-h_JsDe6lG2l-XenjO6yn7AofQOElM_n9bnx6j9-CLXkxgoAlfRaOstQcuElrb7gi6tvkg89eSyshG1DL7_C9uCNG0RADRe9B6xtMPyFPd62QFaTsG"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center max-w-4xl mx-auto mt-20">
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        Welcome to the Heart of <span className="text-primary">Sri Lankan Wilderness</span>
                    </h1>
                    <h2 className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl">
                        History, nature, wildlife, and our passion for Yala National Park. Experience the untamed beauty.
                    </h2>
                    <button className="mt-8 flex items-center justify-center rounded-full size-12 bg-white/10 text-white backdrop-blur-sm hover:bg-primary hover:text-black transition-all animate-bounce">
                        <span className="material-symbols-outlined">arrow_downward</span>
                    </button>
                </div>
            </div>

            {/* Introduction Content Block */}
            <section className="px-6 md:px-40 py-16 md:py-24 bg-background-dark">
                <div className="max-w-[960px] mx-auto text-center flex flex-col gap-6">
                    <div className="flex items-center justify-center gap-2 text-primary uppercase tracking-widest text-xs font-bold">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span>Introduction</span>
                        <span className="w-8 h-[1px] bg-primary"></span>
                    </div>
                    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">The Jewel of Sri Lanka's Wilderness</h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                        Yala National Park is a multifaceted marvel of nature. From its ancient roots as a civilization to its thriving biodiversity today, discover why this park is not just a destination, but a journey into the soul of the wild. It is where history whispers through the ruins and leopards roam the shadows.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="px-6 md:px-20 py-16 bg-surface-dark/30" id="history">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 order-2 md:order-1">
                        <div className="text-primary uppercase tracking-widest text-sm font-bold">Ancient Heritage</div>
                        <h2 className="text-white text-4xl font-bold leading-tight">History of Yala National Park</h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Long before it was a wildlife sanctuary, Yala was part of the ancient Ruhuna Kingdom. The jungle hides remnants of a glorious past, where civilizations thrived in harmony with nature.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed">
                            The park is dotted with ancient monasteries like Sithulpahuwa and Magul Vihara, which date back over 2000 years. These sacred sites, once home to thousands of meditating monks (Arahants), stand as silent witnesses to the passage of time, enveloped by the encroaching forest.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 h-[400px] w-full rounded-2xl relative overflow-hidden group">
                        <Image
                            alt="Ancient stone ruins of a temple within a dense forest setting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-VzmRp4F8GWMvyzgh6yvW18DiJoXyMuR5NMGh9QoWMDxhjVV13ZTUZCvBLO9WrGMBBptO5p2dEui7z2ucjjQFcAouGiVct7N4lX_-Fef6d6odcc_p3904QszFkMWcWxPhWfRo-Iif1Eg75s2VgVtNuQy5_Fy8rgPUJoA90K9H-Oi9J4lvyDtLPOI5I-9uIjI3TJFWl_rGh8VpYXu_A8zqEkjYW2MEkR4DLTgFnwnh3y10ZJol8KrHsxwckVQLxBJGAxZNCqxKKFFX"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                    </div>
                </div>
            </section>

            {/* Historical Landmarks Showcase */}
            <section className="px-6 md:px-20 py-16 bg-background-dark">
                <div className="max-w-[1280px] mx-auto">
                    <h3 className="text-white text-2xl font-bold mb-10">Historical Landmarks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-surface-dark rounded-xl overflow-hidden border border-[#283928] hover:border-primary/50 transition-colors">
                            <div className="h-48 relative">
                                <Image
                                    alt="Sithulpahuwa Rock Temple on a rocky outcrop"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-tzFyVkALX_XIjnc5TPb5xJRiyWOEOa9v6x3fI0ARtmamjZCo_BgIVnalEV0BQBE-wo_n_JWUUoC-uA2IRbzjmUpJo0yO0GsMkNPS-pWwl599Pz7POlNAUMY7Iq-RH_D8k8jQVnaufkTbimXRb1uO9kC4Jo0DbMEwb19ZaYAfdz1fb4rg4e-6KissUcF-_um32JwSH1pUgH3JMU-Sf9PNUOHgZqvGZIxZgMnObcoJwAT0kIW7QJUyTRvprfz73PaohXLjmFpnAiQ6"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-primary text-xs font-bold mb-2">2nd Century BC</div>
                                <h4 className="text-white text-xl font-bold mb-2">Sithulpahuwa Rock Temple</h4>
                                <p className="text-gray-400 text-sm">An ancient monastery believed to have housed 12,000 monks.</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-surface-dark rounded-xl overflow-hidden border border-[#283928] hover:border-primary/50 transition-colors">
                            <div className="h-48 relative">
                                <Image
                                    alt="Magul Vihara ancient ruins"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC52fJ9IegDE3IxAXhdOMc41E7U_m48LifQkdrwyTBQ811Z02u-essWEUueb7tn1GP7XjhVKlvNTGtR9a-d3baQZaWCHiltf-gGcx13gY8A03i-rlYXPZOjcWGV649glFbh-H55zA53ruAjagPUVaw2YXBrD_RgAcdPLMwIt6Ze_ASQvm4Bz3tzT_0MJLraTnIOmcWIrUQnTlwN1u9LW_y1H8SJ4B5UhB5nARpeWhT7NnBosrjDwjiuM8WK_d1DsVb6VhIH-4uF1QfJ"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-primary text-xs font-bold mb-2">Ancient Kingdom Era</div>
                                <h4 className="text-white text-xl font-bold mb-2">Magul Vihara</h4>
                                <p className="text-gray-400 text-sm">Historic temple ruins showcasing the architectural prowess of the Ruhuna Kingdom.</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-surface-dark rounded-xl overflow-hidden border border-[#283928] hover:border-primary/50 transition-colors">
                            <div className="h-48 relative">
                                <Image
                                    alt="Overgrown stone pillars in the jungle"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3GGPzKjdSjpLVf6SgwPBZCZ4sSQyBARsh528NzBeBDlCZrWiKy72AL2CObIH4mo6V6DPCwqaYHTUeUAK2XFyisnoTgMg0iXR_SX72S8oal5NqVdjjfN-Jr4AWcAkR4Ao9DY_CoiAmVn0iqxAyuntkxKIZQR98P3TO9lnuBSz2eUfBV8DjcotKDVemcihLmYTIB8_PYwJd8ms7hKBBjSsAPZiqYsFEUHnHZ23LmDE5JIJQcTzEkhYVXkGhnrDH16MnnGHoSHYbBej3"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-primary text-xs font-bold mb-2">Throughout the Park</div>
                                <h4 className="text-white text-xl font-bold mb-2">Monastic Ruins</h4>
                                <p className="text-gray-400 text-sm">Scattered stone pillars and caves used by ascetics for meditation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Geography & Location */}
            <section className="px-6 md:px-20 py-16 bg-surface-dark/20">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 aspect-video bg-surface-dark rounded-xl border border-[#283928] flex items-center justify-center relative overflow-hidden">
                        {/* Abstract Map Representation - Using a placeholder or appropriate image */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sri_Lanka_location_map.svg/1200px-Sri_Lanka_location_map.svg.png')] bg-cover bg-center"></div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-5xl">location_on</span>
                            <span className="text-white font-bold">Southeast Sri Lanka</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-white text-3xl font-bold">Geography & Location</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Located in the southeastern corner of Sri Lanka, Yala National Park spans across the Southern and Uva Provinces. It covers a vast area of 979 square kilometers (378 sq mi).
                        </p>
                        <div className="flex gap-8 mt-4">
                            <div>
                                <div className="text-primary text-3xl font-bold">979</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wide">Square Kilometers</div>
                            </div>
                            <div>
                                <div className="text-primary text-3xl font-bold">5</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wide">Main Blocks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Habitat Types */}
            <section className="px-6 md:px-20 py-16 bg-background-dark">
                <div className="max-w-[1280px] mx-auto">
                    <h3 className="text-white text-2xl font-bold mb-8 text-center">Diverse Habitat Types</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {/* Habitat Items */}
                        <div className="flex flex-col items-center text-center gap-3 p-4 bg-surface-dark rounded-lg border border-transparent hover:border-primary/30 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">forest</span>
                            <h4 className="text-white text-sm font-bold">Monsoon Forests</h4>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 p-4 bg-surface-dark rounded-lg border border-transparent hover:border-primary/30 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">grass</span>
                            <h4 className="text-white text-sm font-bold">Scrublands</h4>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 p-4 bg-surface-dark rounded-lg border border-transparent hover:border-primary/30 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                            <h4 className="text-white text-sm font-bold">Lagoons</h4>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 p-4 bg-surface-dark rounded-lg border border-transparent hover:border-primary/30 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">landscape</span>
                            <h4 className="text-white text-sm font-bold">Grasslands</h4>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 p-4 bg-surface-dark rounded-lg border border-transparent hover:border-primary/30 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">waves</span>
                            <h4 className="text-white text-sm font-bold">Beaches</h4>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 p-4 bg-surface-dark rounded-lg border border-transparent hover:border-primary/30 transition-all">
                            <span className="material-symbols-outlined text-primary text-3xl">water</span>
                            <h4 className="text-white text-sm font-bold">Rivers & Tanks</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Climate & Seasonality */}
            <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-surface-dark/40 to-background-dark border-y border-[#283928]">
                <div className="max-w-[1280px] mx-auto">
                    <h3 className="text-white text-2xl font-bold mb-10 text-center">Climate & Seasonality</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="relative pl-6 border-l-2 border-primary">
                            <h4 className="text-white font-bold text-lg">Avg Temp</h4>
                            <p className="text-gray-400 mt-2">27°C - 30°C</p>
                            <p className="text-xs text-gray-500">Warm & tropical year-round</p>
                        </div>
                        <div className="relative pl-6 border-l-2 border-primary/60">
                            <h4 className="text-white font-bold text-lg">Dry Season</h4>
                            <p className="text-gray-400 mt-2">May - August</p>
                            <p className="text-xs text-gray-500">Best for spotting Leopards</p>
                        </div>
                        <div className="relative pl-6 border-l-2 border-primary/40">
                            <h4 className="text-white font-bold text-lg">Monsoon</h4>
                            <p className="text-gray-400 mt-2">Oct - December</p>
                            <p className="text-xs text-gray-500">Lush green landscapes</p>
                        </div>
                        <div className="relative pl-6 border-l-2 border-primary/20">
                            <h4 className="text-white font-bold text-lg">Park Closure</h4>
                            <p className="text-gray-400 mt-2">September</p>
                            <p className="text-xs text-gray-500">Often closed for drought relief</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecological Significance & Wildlife Stats */}
            <section className="px-6 md:px-20 py-16 bg-background-dark" id="wildlife">
                <div className="max-w-[960px] mx-auto text-center mb-16">
                    <h2 className="text-white text-3xl font-bold mb-4">A Global Biodiversity Hotspot</h2>
                    <p className="text-gray-300">Yala boasts one of the highest leopard densities in the world. Its varied ecosystems support a rich abundance of wildlife, making it an ecological treasure.</p>
                </div>
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface-dark p-8 rounded-xl border border-[#283928] text-center group hover:border-primary transition-colors">
                        <div className="text-5xl font-black text-white mb-2 group-hover:text-primary transition-colors">44</div>
                        <div className="text-gray-400 uppercase text-sm tracking-widest font-bold">Mammal Species</div>
                    </div>
                    <div className="bg-surface-dark p-8 rounded-xl border border-[#283928] text-center group hover:border-primary transition-colors">
                        <div className="text-5xl font-black text-white mb-2 group-hover:text-primary transition-colors">Highest</div>
                        <div className="text-gray-400 uppercase text-sm tracking-widest font-bold">Leopard Density</div>
                    </div>
                    <div className="bg-surface-dark p-8 rounded-xl border border-[#283928] text-center group hover:border-primary transition-colors">
                        <div className="text-5xl font-black text-white mb-2 group-hover:text-primary transition-colors">215+</div>
                        <div className="text-gray-400 uppercase text-sm tracking-widest font-bold">Bird Species</div>
                    </div>
                </div>
            </section>

            {/* Mammals of Yala */}
            <section className="px-6 md:px-20 py-16 bg-surface-dark/30">
                <div className="max-w-[1280px] mx-auto">
                    <h3 className="text-white text-3xl font-bold mb-10">Mammals of Yala</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Leopard */}
                        <div className="group relative overflow-hidden rounded-xl h-[300px] md:h-[400px]">
                            <Image
                                alt="Sri Lankan Leopard resting on a tree branch"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIMDLQRwbgVLe2O6tYOH5tcOKbuZM-KQOkUEBtiHXqdQ1H9Uy5W_H_srehxSZ5FQq0h2eHtNl0RxIgflHzVKhGdbLYizFH3hLVqV2F92VtMJAjc2l_cSwl37gfsW0nNtJnA716pJQTfXMWYgOhjqN58pcsbsj-EKqFs5ExlH3zYTl7JwdEyFpbRbbn2D6koxxwhZloRu9FwQLty1y1_XSdGjlrn4BJQyugAmxz2VWLeSyrHzOlEHDTzkb8YkHHW1aqfYCyyPDUQtX7"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h4 className="text-white text-2xl font-bold">Sri Lankan Leopard</h4>
                                <p className="text-gray-300 mt-2 line-clamp-2">The apex predator of the island, known as 'Panthera pardus kotiya'.</p>
                            </div>
                        </div>
                        {/* Elephant */}
                        <div className="group relative overflow-hidden rounded-xl h-[300px] md:h-[400px]">
                            <Image
                                alt="Sri Lankan Elephant herd walking through scrubland"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOfBG_RYHbjilu6ikv5xeyfLceooPlBSFRzkv4ZBSV0FuvfeoHXaCp4Ql_ZCTZO9napNM6-UCcTZPi2jTzb76N54fyXwwZfFSiaG3InwzyE5mFglO8wmYJom-_R5W_KMrxW33JO7waYbZS0hK26tJ15TK7SOGWmyFfS5SglKLTxrzbl1BWMVjZCkPzLVK-wBWreALbK9TxdA-isIqfstrnGh6VZ7YOUBS8R5QXWURLNEV5q9rgXY4x3CmI7ICKfqndisT2JRdJaj8n"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h4 className="text-white text-2xl font-bold">Sri Lankan Elephant</h4>
                                <p className="text-gray-300 mt-2 line-clamp-2">Majestic giants that roam the park in herds, often seen near water tanks.</p>
                            </div>
                        </div>
                        {/* Sloth Bear */}
                        <div className="group relative overflow-hidden rounded-xl h-[300px] md:h-[400px]">
                            <Image
                                alt="Sloth bear foraging on the ground"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADJR_Fl8d_ll-yH7Am1OfovMxID3mVzPymsNJe6hpjCx6agQVpewQ0Gk0v5qKsqxh2tmVtIeaXgn23-w7h4XZLNSC7TLTS-PB_MJrYMMMRDq1V4UjcEbN3AHaclyENUvs2epG26CJftr9QTiCt71iq8DU5nBHU_AT8TxHOG4s31lWw5EQp8pnZWcrid6IV664DkWsii-Iq8SP5qQSv-ar38hlfl7xy3pKkfjFB5G3yHwaCUjDnHGIOfZBq3tskrxz5oqrhznurBRoY"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <h4 className="text-white text-2xl font-bold">Sloth Bear</h4>
                                <p className="text-gray-300 mt-2 line-clamp-2">A unique and shaggy insectivore, often spotted during the Palu fruit season.</p>
                            </div>
                        </div>
                        {/* Other Mammals */}
                        <div className="bg-surface-dark rounded-xl h-[300px] md:h-[400px] p-8 flex flex-col justify-center border border-[#283928]">
                            <h4 className="text-white text-2xl font-bold mb-4">More Wildlife</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span> Wild Water Buffalo
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span> Spotted Deer
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span> Mugger Crocodiles
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span> Golden Jackal
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Birdlife */}
            <section className="px-6 md:px-20 py-16 bg-background-dark">
                <div className="max-w-[1280px] mx-auto">
                    <h3 className="text-white text-3xl font-bold mb-10">Birdlife of Yala</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="aspect-square bg-surface-dark rounded-lg overflow-hidden relative group">
                            <Image
                                alt="Colorful peacock displaying feathers"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1wyI0neK6_b01ZK-BaaPKoDPiONv3jKgcROVx-kifwMNODFyFuf05U6lZsn80z8QFjE9yzFQZljcrxdxCczfaG5cqHB-Nws2AlDgVKmEdX5PomXZKCw0wZkOj2bGFYdFnjuoQqmOuJthH24_-xxQJWhFhOAUu3sf9KGPnFcJsSfW52v7gUoYlUsJot9w9OnzpsNYHfbQHbm7VIy-fBDjG6omNZ15L06QbXOvI41hGp9DmYRqfuivXhkX5n_HOCQSIOmlx-cT8iO7r"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white font-medium text-sm">Peacock</div>
                        </div>
                        <div className="aspect-square bg-surface-dark rounded-lg overflow-hidden relative group">
                            <Image
                                alt="Painted Stork wading in water"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGdRjn8EzLa9kuAILNrt5PQorFkPEEQbNRLwIl6ztxEPPuJqvTZbIk4EiyudTK6vtdX5nXwmED4mwAvaIeGOSk1XJgEz4a84feUjCypz4Xz9IrAHHbWB7YI5_MarYSFPkXFMWacJel-VdvcTYAzW8bHL7ViIvnJr-JWL9S2YgAsyhH06T8OoLno0dWnmOJ_Bqmsol25-KuOsJvLY8TzTOfAzi3u-d5_zi25quL3sFsnmmTcJeAiqGmhJW4-DVGS3tC_x_6astMsBCQ"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white font-medium text-sm">Painted Stork</div>
                        </div>
                        <div className="aspect-square bg-surface-dark rounded-lg overflow-hidden relative group">
                            <Image
                                alt="Green Bee-eater perched on a twig"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnUL4UTILm6Uq-TMYCTZx4xJx88qmKc__HK3HUrFo8csgHcPdLcajuGeLGeWYFy7C9v_klDQorypgFVNV_5DtakIiSWnYN1GMZwaDs_6lLpJPBq1QAe4zBjPp_D1jTVjlDqW7QvgfrWpT-uJOeeqxZSWVkz_WrS9C0VNf8pwDC8f4-xVBfpGpLKgYmbQMKlQ9RuhUOm-DaNBIT5eTO6eEH12qrW0_v4UV7B1RnKyljY5jd8-sIyciJOZG1taIkzOdoJTCAFy3uSsPT"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white font-medium text-sm">Green Bee-eater</div>
                        </div>
                        <div className="aspect-square bg-surface-dark rounded-lg overflow-hidden relative group flex flex-col items-center justify-center p-4 border border-[#283928]">
                            <div className="text-primary text-3xl font-bold">215+</div>
                            <div className="text-white text-center text-sm">Species Recorded</div>
                            <div className="mt-2 text-xs text-gray-500 text-center">Including 7 endemics</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="px-6 md:px-20 py-24 bg-surface-dark/20 border-t border-[#283928]" id="about">
                <div className="max-w-[800px] mx-auto text-center flex flex-col gap-6">
                    <h2 className="text-white text-3xl font-bold">Our Story – YalaSriLanka.com</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Born from a deep love for the Sri Lankan wilderness, we started as a small team of naturalists and photographers. Today, we are dedicated to sharing the raw beauty of Yala with the world, ensuring that every safari is not just a tour, but an education in conservation and respect for nature.
                    </p>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="px-6 md:px-20 py-16 bg-background-dark">
                <div className="max-w-[1280px] mx-auto">
                    <h3 className="text-white text-2xl font-bold mb-10 text-center">Our Mission & Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-surface-dark p-6 rounded-lg border border-[#283928] flex flex-col items-start gap-4 hover:border-primary transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <h4 className="text-white font-bold">Education First</h4>
                            <p className="text-gray-400 text-sm">Every guide is a teacher, sharing knowledge about behavior and ecology.</p>
                        </div>
                        <div className="bg-surface-dark p-6 rounded-lg border border-[#283928] flex flex-col items-start gap-4 hover:border-primary transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <span className="material-symbols-outlined">eco</span>
                            </div>
                            <h4 className="text-white font-bold">Responsible Tourism</h4>
                            <p className="text-gray-400 text-sm">We strictly adhere to park rules to minimize disturbance to wildlife.</p>
                        </div>
                        <div className="bg-surface-dark p-6 rounded-lg border border-[#283928] flex flex-col items-start gap-4 hover:border-primary transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <span className="material-symbols-outlined">visibility</span>
                            </div>
                            <h4 className="text-white font-bold">Ethical Viewing</h4>
                            <p className="text-gray-400 text-sm">No chasing animals. We wait, watch, and respect their space.</p>
                        </div>
                        <div className="bg-surface-dark p-6 rounded-lg border border-[#283928] flex flex-col items-start gap-4 hover:border-primary transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <span className="material-symbols-outlined">handshake</span>
                            </div>
                            <h4 className="text-white font-bold">Community Support</h4>
                            <p className="text-gray-400 text-sm">Empowering local communities through employment and fair trade.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsible Tourism Message */}
            <section className="w-full bg-[#ecb213] text-[#111811] py-20 px-6">
                <div className="max-w-[960px] mx-auto text-center flex flex-col gap-6">
                    <span className="material-symbols-outlined text-5xl">format_quote</span>
                    <h2 className="text-3xl md:text-5xl font-black leading-tight">"An informed visitor is a responsible visitor."</h2>
                    <p className="text-lg font-medium max-w-2xl mx-auto opacity-90">
                        Conservation is at the heart of what we do. By choosing to explore with us, you contribute to the protection of Yala's habitats and the well-being of its majestic inhabitants.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="px-6 md:px-20 py-24 bg-background-dark" id="visit">
                <div className="max-w-[1280px] mx-auto">
                    <h2 className="text-white text-3xl font-bold mb-12 text-center">Start Your Adventure</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* CTA 1 */}
                        <a className="group relative block h-64 bg-surface-dark rounded-xl overflow-hidden border border-[#283928] hover:border-primary transition-all hover:-translate-y-1" href="#">
                            <Image
                                alt="Dense forest canopy texture"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdbfcLDTSM8D0HyJLdc_mRTH81wLwpIbEYuRly7YPkRLTGGrefI8lUGpBzr88fTj9CyYzCIBcZq2IiWbGzUu4MOBYk65qCW6BC3mHRelRBGhujUVQ5Zl2P1Gsn1rqSWA5sqie4fEHvcRUxIcR7IoFW4NuV1Ri4eoR9vEPVt8-hkmBXlTLV15ds9I5akfszFrJHREMd-6VCEaaMZEUvPnm1xW1ZzWufWw0-AWolgNIYt6jRibYXMP9ATSmY-FCBj1uY4Kg5R1Pkdt6a"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-20 transition-opacity"
                            />
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                                <span className="material-symbols-outlined text-white text-4xl mb-4 group-hover:text-primary transition-colors">menu_book</span>
                                <h3 className="text-white text-xl font-bold mb-2">Learn About Yala Wildlife</h3>
                                <span className="text-primary text-sm font-bold uppercase tracking-wider">Read Guide →</span>
                            </div>
                        </a>
                        {/* CTA 2 */}
                        <a className="group relative block h-64 bg-surface-dark rounded-xl overflow-hidden border border-[#283928] hover:border-primary transition-all hover:-translate-y-1" href="#">
                            <Image
                                alt="Jeep safari in action"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8hI4sZhui3psGTyk3H52KYPTGHiDrFolczq1nBqxUF99TZTJa1GG_j-eEqhMYym4XhAPgJlwi3u66e87lCFwZURivvZ_iviF0Mh0pEDwBlZ-eAbaewOvZhI-YUm9wsxVWEXxqXrqt7jLcSay78Jk70WlDcoClg_HajKjzPIpwNn7qqalv_mA_GlC1baZd2AUMLAt736Ifn37UGM7kGM6G3e3PLNyJtAeIu_Vpqgw_kNViqceuzHNcnEGg3RUTpHf4ZVVcRoitogCC"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-20 transition-opacity"
                            />
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                                <span className="material-symbols-outlined text-white text-4xl mb-4 group-hover:text-primary transition-colors">calendar_month</span>
                                <h3 className="text-white text-xl font-bold mb-2">Plan Your Safari with Experts</h3>
                                <span className="text-primary text-sm font-bold uppercase tracking-wider">Book Now →</span>
                            </div>
                        </a>
                        {/* CTA 3 */}
                        <a className="group relative block h-64 bg-surface-dark rounded-xl overflow-hidden border border-[#283928] hover:border-primary transition-all hover:-translate-y-1" href="#">
                            <Image
                                alt="Abstract dark green pattern"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN6LekTxoZo_5V3p6S8sWkB4b8A-AbFCEfrtAfzc5OV-uLKQz-dghkZB1m9SHrNd_kZlgd5wxZWGDmta3cjNXwhH4r8BzWNUVDdIKXQMA0MZjVtuJshRz2I4zUykNSylyhsI9CIZgtxiu2a4Py4sqKcO6w00eWBfz4o86QhU3FAxsF-n-TUXnMYfY7DLPRv_x1g8lFBG-AlNuSby0Z7j6_adZZSgurHoQIgM_cj0JIai6AgReVqERGisdWdjlfBepA3TwVl33AynSo"
                                fill
                                className="object-cover opacity-40 group-hover:opacity-20 transition-opacity"
                            />
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                                <span className="material-symbols-outlined text-white text-4xl mb-4 group-hover:text-primary transition-colors">mail</span>
                                <h3 className="text-white text-xl font-bold mb-2">Contact Us for Custom Tours</h3>
                                <span className="text-primary text-sm font-bold uppercase tracking-wider">Get in Touch →</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
