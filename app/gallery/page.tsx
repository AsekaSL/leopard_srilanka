import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import galleryHero from '@/public/gallery_hero.png'
import { tw, colors } from "@/lib/theme";

export const metadata: Metadata = {
    title: "Yala National Park Photo & Video Gallery",
    description: "Visual journey into the heart of Yala's wilderness. Experience the raw beauty, from elusive leopards to majestic elephants.",
};

export default function GalleryPage() {
    return (
        <div className={`${tw.bgBackgroundDark} text-white font-display antialiased overflow-x-hidden`}>

            {/* Hero Section */}
            <div className="relative w-full h-[70vh] min-h-[650px] flex items-end justify-start overflow-hidden group">
                <div className="absolute inset-0 z-0 transition-transform duration-[20s] ease-linear group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181611] to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <Image
                        src={galleryHero}
                        alt="Majestic Sri Lankan leopard resting on a tree branch in Yala National Park"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 lg:px-10 pb-16">
                    <div className="max-w-3xl animate-fade-in-up">
                        <span className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider ${tw.textPrimary} uppercase ${tw.bgPrimary}/10 rounded-full border ${tw.borderPrimary}/20 backdrop-blur-sm`}>
                            Immersion in the Wild
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4 text-white drop-shadow-xl">
                            A Visual Journey into the Heart of Yala’s Wilderness
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mb-8 leading-relaxed">
                            Photo & Video Gallery of Sri Lanka’s Most Iconic National Park. Experience the raw beauty, from elusive leopards to majestic elephants.
                        </p>
                        <button className="flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white h-12 px-6 transition-all duration-300 group/btn">
                            <span className="text-sm font-bold tracking-wide">Start Exploring</span>
                            <span className="material-symbols-outlined text-lg group-hover/btn:translate-y-1 transition-transform">arrow_downward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="layout-container flex flex-col items-center py-12 px-6">
                <div className="max-w-[800px] text-center">
                    <span className={`material-symbols-outlined text-4xl ${tw.textPrimary} mb-4 opacity-80`}>photo_camera</span>
                    <p className="text-xl md:text-2xl font-display font-medium text-gray-200 leading-relaxed">
                        "Discover the raw beauty of Yala through our curated collection of high-quality images and videos. From the elusive leopards to the majestic elephants, immerse yourself in the stories of the wild."
                    </p>
                </div>
            </div>

            {/* Sticky Category Navigation */}
            <div className={`sticky top-16 z-40 ${tw.bgBackgroundDark}/95 border-b border-[#393328] backdrop-blur-sm shadow-lg`}>
                <div className="max-w-[1280px] mx-auto overflow-x-auto no-scrollbar">
                    <div className="flex px-6 lg:px-10 min-w-max gap-8 md:gap-10">
                        {['All', 'Leopards', 'Elephants', 'Birds', 'Landscapes', 'Videos'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative py-4 text-gray-400 hover:text-white font-medium text-sm tracking-wide transition-colors group"
                            >
                                {item}
                                <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-transparent group-hover:${tw.bgPrimary} rounded-t-sm transition-colors`} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Gallery Container */}
            <div className="flex-1 w-full max-w-[1280px] mx-auto px-6 lg:px-10 py-12 flex flex-col gap-24">

                {/* Leopards Section */}
                <section id="leopards" className="scroll-mt-36">
                    <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#393328]">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Leopards of Yala</h2>
                            <p className="text-gray-400 text-sm">The highest density of leopards in the world.</p>
                        </div>
                        <button className={`hidden md:flex items-center ${tw.textPrimary} text-sm font-bold hover:underline`}>
                            View All Leopards <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
                        {/* Large Feature */}
                        <div className="group relative overflow-hidden rounded-lg md:col-span-2 lg:row-span-2 lg:h-full">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC85kfkZxHR0fJdL6q8uA5p6vjZFUoIiXoccfb8oKsXyQ5RVcfUCP-HAuTphRTtpW2gLF-4fFQWYczJ0DSk1hnDz7S97Tf9UBL9Lu_Cys00Z-nWC01frxD1jzTXH0vrgjyz5CcTRDgSkABZtgo-FFKJqQXsHsaEZGStptTQ6GFRkCiy3VMAYlRfpD-X--u7jBpGmhYUqTE4GnIUcD2Zg392k2SvMZHKNbU1kPsjJNLr_pfO-I8jffwiwxAgpR2JnIc1p34ZbW3dWwzG"
                                alt="Close up portrait of a Sri Lankan leopard walking towards camera"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                <span className={`${tw.textPrimary} text-xs font-bold uppercase tracking-wider mb-1 block`}>Panthera pardus kotiya</span>
                                <h3 className="text-xl font-bold text-white">The Prince of the Jungle</h3>
                            </div>
                        </div>
                        {/* Side Items */}
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0aWotfCR04MbkH3PAIm6la5Ey96ETjbG0JUQqwFXrsvw29xGoncVJuFeF6f6947ckNrzhKgxzy7uj7_mdP6LMauU9h0r-zt-KMvYt-NLUNvgM3O56T7po23y-GWqg4Wqgkpm-1tAY2-pC9_v3tUYxeZvWJy3u1GWhSk5FVoHs3G5Dd9z7DroKHwOIlH7UynCFzY7_u5vsSh_YIR8QTxoxA8b45uO4IwjGyCI1ra2v7vc8KKk8H-wP0TjGRKqANruAlERYa5MAjVGr"
                                alt="Leopard sleeping on a large rock formation"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                        </div>
                        <div className="group relative overflow-hidden rounded-lg">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0c-Lp9KEyYt6OJAPU3cX7JH1S3mwkFWede_wkGwx_9xWBsEPeZtZ2Dl_zJaCmGRRqq0--3Cmy9dB_bHX1hMRUraD3EAM8AtqqWA9QUyAlJMi-5Xk-6RoMxHJ8VrwdCJxTe_mM5f9doWjC4bwNbqUMIUh7BqCFneKBHn8QsQpJrJMjttAolhuaD9V_0eLTgTVbG6orODgpUYlE1HOCHj4-6b4ADFELFcNx3Z3kMVkf5e1HZ8ZwQK_T9j3JA5i1n_BWYhj48DxoR8KR"
                                alt="Leopard hiding in the tall dry grass"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* Elephants Section */}
                <section id="elephants" className="scroll-mt-36">
                    <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#393328]">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Gentle Giants</h2>
                            <p className="text-gray-400 text-sm">Herds, tuskers, and playful calves.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="group relative overflow-hidden rounded-lg h-64 lg:col-span-2">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz9-DsUd6brNHCg23J3lkT_4zb7XunzM8IudYJlmG8p5tspjd3wHJkslCj09KCu6F2eT51EHiSgysWw5OiyUDlLWEmlsIMCGjGf3ME-fp5HHfiJKnvN6cBng8Ww-ug0aSXcq78FbX4Mhowr2IPi8NXpaa5pIT34HWei4uMTl8zrufNDyqNhpkLKLQCaIaY1KvrgjQOP8vghEyGEaAI3nCvEeRaZtKZGH5wg4f2ywPhMbOXTaenRWdwlFlqRLVHF_YDFMwhHtbmxbCq"
                                alt="Elephant herd crossing a dirt road in Yala"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md">
                                <p className="text-xs font-bold text-white">Family Herd</p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg h-64">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvCIAMyzdNP0u0ELcmvSa1uWd0Z5EfU1YQ_W9v-nAARmhH4PswOQahYbZSomA0Y1Zzs1H33xNaRWp3r6JfGhwaIm4IEj4ukx6RouY9k7I0yUSVD1KyQ9jY4XSPUzYH13HzGX-7LlBmIL9ylyZIDT3M6ShI4Cdzpq0EMdBDgAw-CVnZaI5lnCYVwcHPVK7e4CEqmvN2OIv8bEuM7_3eXgrhF5Ol6QImje-6_tdNqG_cJoggjyu_TqLEOTSQk-7wZgT2OTdiKHmY1moK"
                                alt="Close up of elephant eye and textured skin"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="group relative overflow-hidden rounded-lg h-64">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO8ZM_lFXabjjMy1vNrShaMA9HBTv00Iaj3sifFekViX8lFKH2lwrPSUQocCBp6hquNxXefQnNXyqir-cCKPRz2BPaKsX21hq0hQ7Di8dE6uwAgsQTcfGLC7bxZCe9eaV2czs2nms7tyQbK4BSgHabuVX2k2FNxxfIGp1DZUAyubHXamo4VY2APgz5TcA9X-2yzTulDj-BQQQ4EEPxLtlYEGNnrczJOZ7YjAFZBYRZErpyhnyVxlNvAqmjA2llYhtR7uJeXWb3XyH2"
                                alt="Elephant dusting itself with dirt"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* Birds & Reptiles (Masonry feel) */}
                <section id="birds" className="scroll-mt-36">
                    <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#393328]">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Avian & Reptilian Life</h2>
                            <p className="text-gray-400 text-sm">From peacocks to crocodiles.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {/* Tall Item */}
                        <div className="group relative overflow-hidden rounded-lg row-span-2 bg-surface-dark">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe0RxV4eGMpS_Io-U4ujzVivULwHGdekw90gd2JwDq5eJPB97OjjTl347Yta8TP6TuF89nHwBz1VlKKGzge07TXEWHngxKMYfTEFg4EkRCy5ServVuxZMMiEwbO8G5GkCYFZmiclfivxw4nsjnXXrq3Br-d-6YN0QbwD6txaZKYkwOb3_WRYEBiODFx1Q0g1hWGkfidQFWosLOvCS4mebxWnGgxYKVmh3Ny12lNfzzQil_AwTF5ZCaR1VJ65o9E3_QUCcx1IrI0D37"
                                alt="Peacock displaying colorful feathers"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white font-bold text-sm">Indian Peafowl</p>
                            </div>
                        </div>
                        {/* Standard Items */}
                        <div className="group relative overflow-hidden rounded-lg bg-surface-dark">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMMeCitbZ5_P73TYiJcW0HNMwDPVc0woKs0YHZm_tdEV0LnsULg1mucbKJvenZnIVWi594rMhjXVcEm7nk_L8jvdcSwKqRpZFGE6DuzipR2nrgN4j01KAxnrPV-T4dROcH_CrrkZ-ji96AP3QmuGrz-oePJTaXzySiuNFGsNjrvVOruNey0QFCsJuY58j46T_pYwwwzSXNKV3KD5kp5HkNKcgP30aDf2WNzwiDUvONvDOoXhAiiCgnyqpCTz1yQ7grQagwwoZHQ_X4"
                                alt="Green Bee-eater bird on a branch"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="group relative overflow-hidden rounded-lg bg-surface-dark col-span-2">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrwJyuIMAAbgxkkasczgn55e8DigeE_0MLXNhtNd1fitCCvi65nvT-LDy_u8io2XQPD1J3YPUz7sHDCSp5KHg0_88SPUcqj4hCI2qEAFP216V7cUPMCErBBsuFqlX2CzTNcBchUWcnMQ2v427W55zHn4wqJQdJjY5cwONDaP3PL2o3GLp5ntsOdXGoVDHItxoIQhEVj71WmTntZzltq5pRnDlxhG33RumHPE82e7TP-RclHl0MDapWMYzxMmEigeBUwtgRXA5ogkz"
                                alt="Mugger crocodile basking on the river bank with mouth open"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-[10px] text-white uppercase tracking-wide">Predator</div>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg bg-surface-dark col-span-2">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmeqR4009S1Z_X7pt_gxP3e-hvdbvZ7rgvFjyy542I16GVDFKtdH1KvIVrSmMwsa01x24qPcLEy0Q9EphmreHKMgvjt9z4RRL4AOQu8KFZmmAAWBYfhdZbO9eH00JrykUtfbh7Cg5dmEsWwBDlWt3EgZ-rJ63O7JLvTNpK2NMH_To-oDwZxf1KyouiFOQ8WfZLiFJ2Q6QP1hUngPMUtXd0p9ZAFU0PzCJbAseplgYUxyD8fTYlu0adbXxjXaQbApiTMgA-2MBPhPSm"
                                alt="Monitor lizard climbing a tree trunk"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="group relative overflow-hidden rounded-lg bg-surface-dark">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvYr5oZumUzKM1Ut7es0eyvliZKOwyUEIBLgj2PqErbtDja5_asH_JnL9xGCXS5EcwL1chR78bnF9z1QQkKW9G4fRu3SrTQRF8EXVlcf2vIgq-Nb_lxptX_Ysxxs2wS0VdS4Fzy1SSfwn51aR7aqD1wEhz7myO2zsJm6RvPjZCX7DjsOgdO9ElV7rGh7yFEIjkpwojR-E1fSQXc-emB04rQPSrOLu-gJyAvtLGE6EQcygYNp8XrY7BO9TSTLARachxaRnvDelWzySo"
                                alt="Hornbill bird perched in foliage"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* Video Gallery */}
                <section id="videos" className="scroll-mt-36">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-primary text-3xl">videocam</span>
                        <h2 className="text-3xl font-bold text-white">Explore the Wild in Motion</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "The Morning Roar", desc: "An early morning encounter with a dominant male.", duration: "03:45", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pgde9Zr2Bq6ZItN0JwmPX3ICuXCXL36ho-oxoEtrpB39pzBIazR_J6KWd3M8Oh83yZ40bMpiqLI4frryPHwBVKq8OQyqu5JeABAnxlQb0NabYa9xSmtuetS7Im5JhHEsbhhX5QP8EqO-Qk2cRzsxH68cUn2yp6paJb-VPL29pAniVniiy6BrYbH16AwzZ0Fqub-l9TuIoUTxElRyEctn0CTWRs4zYUw5VIgNgGCWKGa5VHkVwi4kZFYMIIByvN5AeV1C8VsUCTTU" },
                            { title: "Playful Giants", desc: "Elephants cooling off in the local watering hole.", duration: "01:20", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQK0SZQT8XrwZM6Bo32qyfSF4uqWzDZJkgjPMlLtNT5gwaoPrv2xPGRe27py47Fw-lDduopE5Uz1gzMqE53F2l55zsjFosW3XeBQkcrfXbaGLa4Bm8OzE_k160tgHmczefqDFQsJY55KVRfAwyoOFayawRkY5S6nlAflqLCYl6BD4-_1rS2ZjMOHzH_Cp4ljb9T9mhVL_ZoVG8ufqoQaW3yIsHfdZEIAFnN_skEPirpDFryap_WVWPhLWckG64IP4XYBeTuk8JPDc" },
                            { title: "Yala From Above", desc: "Drone footage capturing the diverse landscapes.", duration: "05:12", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8y2kMZGC3OfFvpG0_B9mI0ezeCpu2KwDaAiwbnyB7yNQN5fvSHq3kAn212pY2gfu7MJ2irWx2UjE7uGrfKZpXA85gwCr8aUOPI2lSyUccDmUTFsrwEpXaaJ0RHlGa04fVyoQ-J2iOKjoz9yTj7RLNLFxX4pJg7L88iP7OfZOUE-YQ3UJLHhiVlarwr4KXpXniluaPOjnkfLqM0WodPjyZ0YXFS5-TKgPWOXLhkKSDZCuIZDjxtPnyr8mdm_E8HqKdoYyFGiDFoUdN" }
                        ].map((video, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl aspect-video mb-3 shadow-lg bg-surface-dark">
                                    <Image
                                        src={video.img}
                                        alt={`Video thumbnail of ${video.title}`}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`size-14 rounded-full ${tw.bgPrimary}/90 ${tw.textDark} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl`}>
                                            <span className="material-symbols-outlined text-3xl">play_arrow</span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-0.5 rounded text-xs font-mono">{video.duration}</div>
                                </div>
                                <h3 className={`text-lg font-bold text-white ${tw.hoverTextPrimary} transition-colors`}>{video.title}</h3>
                                <p className="text-sm text-gray-400">{video.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Share Your Moments Highlight Box */}
                <section className={`relative overflow-hidden rounded-2xl border ${tw.borderPrimary}/20 bg-gradient-to-br from-[#2a2418] to-[${colors.backgroundDark}] p-8 md:p-12 text-center`}>
                    <div className={`absolute -top-12 -right-12 size-40 ${tw.bgPrimary}/10 rounded-full blur-3xl`}></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <span className={`material-symbols-outlined text-5xl ${tw.textPrimary} mb-4`}>add_a_photo</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Share Your Yala Moments</h2>
                        <p className="text-gray-300 max-w-lg mb-8">
                            Have you captured something incredible? Share your photos with us for a chance to be featured in our upcoming "Explorer’s Corner".
                        </p>
                        <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border ${tw.borderPrimary} ${tw.textPrimary} font-bold hover:bg-[#ecb213] ${tw.hoverTextDark} transition-all`}>
                            Upload Your Photo
                            <span className="material-symbols-outlined text-lg">upload</span>
                        </button>
                    </div>
                </section>
            </div>

            {/* Inspiration Quote */}
            <div className={`w-full ${tw.bgBackgroundDark} py-20 px-6`}>
                <blockquote className="text-center max-w-4xl mx-auto">
                    <p className="text-3xl md:text-5xl font-display font-medium italic text-gray-400 leading-tight">
                        "Every image tells a story from the wild, where nature writes the script and we are merely the witnesses."
                    </p>
                </blockquote>
            </div>

            {/* Final CTA Section */}
            <div className="relative w-full py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQDyuFBMBiN_oGNIzTWU8a4zZ73GMa0y4QNEl4OOVSF_Sx8C2rq9uSSyBx-DYpDpdcul8-KQ8DiP4ma8jOHnli0jBkjCOdWyfuY_GdvDfpPayZGsLd8jN_TrUnDESzVLyQ76tDpzy-mjkthOCn87vjSu_IkkYi0E6EMg6IIUvr-utj_7G4seIVBMMxGwAambr05ktMnKkoN9ixxznbia7tuh1fe2UVLMc5Qzneg5geIjvEfOkG9SqECfQUXR4x6D50YISObs32n-4m"
                        alt="Safari jeep silhouette against a dramatic sunset"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10" />
                <div className="relative z-20 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Witness the Magic <span className={tw.textPrimary}>In Person</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 font-light">
                            Don't just look at the pictures. Feel the ground tremble and hear the jungle breathe. Your adventure awaits.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto min-w-[300px]">
                        <button className={`w-full py-4 px-6 rounded-lg ${tw.bgPrimary} hover:bg-[#ecb213]/90 ${tw.textDark} text-lg font-bold shadow-lg transition-transform hover:-translate-y-1`}>
                            Book Your Yala Safari Now
                        </button>
                        <button className="w-full py-4 px-6 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg font-bold transition-transform hover:-translate-y-1">
                            Learn Wildlife Photography
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
