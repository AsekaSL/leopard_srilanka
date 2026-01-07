import { Badge, PackageDetail } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { tw, colors } from '@/lib/theme'

type PackageArticleProps = {
  pkg: PackageDetail
}

export default function PakageArticle ({pkg}: PackageArticleProps) {

    const styleforDiv = (): string => {
        const badge: Badge = pkg.badge ?? Badge.RECOMMENDED
        switch (badge) {
            case Badge.POPULAR:
                return 'bg-black/60 border-white/10 text-white'
            case Badge.BEST_VALUE:
                return `${tw.bgPrimary} border-white/10 text-[#171611]`
            case Badge.TOP_SELLER:
                return 'bg-black/60 border-white/10'
            default:
                return ''
        }
    }


  return (
    <article className={`glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${tw.hoverBorderPrimary} relative bg-[#2a271f]/40 backdrop-blur-lg border border-white/10`} style={{ boxShadow: `0 25px 50px -12px ${colors.primary}10` }}>
        <div className="relative h-64 overflow-hidden">
            {
                pkg.badge && pkg.badge !== Badge.TOP_SELLER && (
                <div className={"absolute top-3 left-3 z-10 backdrop-blur-sm px-3 py-1 rounded-full border " + styleforDiv()}>
                    <span className={"text-xs font-bold uppercase tracking-wider"}>{pkg.badge}</span>
                </div>
                )
            }
                 {
                    pkg.badge === Badge.TOP_SELLER && (
                        <div className="absolute top-3 right-3 z-10">
                                <span className={`material-symbols-outlined ${tw.textPrimary} drop-shadow-md`}>stars</span>
                        </div>
                    )
                 }           <Image
                                alt="Leopard resting on a tree branch in morning light"
                                src={pkg.heroImage}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171611] to-transparent opacity-80"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 relative">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className={`text-2xl font-bold text-white mb-1 ${tw.hoverTextPrimary} transition-colors`}>{pkg.title.split(" ").slice(2, 4).join(" ")}</h3>
                                    <div className="flex items-center text-gray-400 text-sm gap-1">
                                        <span className={`material-symbols-outlined text-[16px] ${tw.textPrimary}`}>location_on</span>
                                        Yala National Park
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                                {pkg.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className={`material-symbols-outlined text-[14px] ${tw.textPrimary}`}>schedule</span> {pkg.duration}
                                </span>
                                <span className="px-3 py-1 rounded-md bg-[#383429] text-xs font-medium text-gray-200 flex items-center gap-1">
                                    <span className={`material-symbols-outlined text-[14px] ${tw.textPrimary}`}>group</span> Families
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase">From</span>
                                    <span className="text-xl font-bold text-white">${pkg.pricingPerPerson ? pkg.pricingPerPerson[0].price : pkg.price.jeep} <span className="text-sm font-normal text-gray-400">/ {pkg.pricingPerPerson ? 'person' : 'jeep'}</span></span>
                                </div>
                                <Link href={`/packages/${pkg.id}`} className={`h-10 px-5 rounded-lg border ${tw.borderPrimary} ${tw.textPrimary} ${tw.bgPrimaryHover} hover:text-[#171611] text-sm font-bold transition-all duration-200 flex items-center gap-2`}>
                                    View Details
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </article>
  )
}