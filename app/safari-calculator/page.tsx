'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SafariCalculatorPage() {
    // State
    const [park, setPark] = useState('yala');
    const [date, setDate] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(1); // 5-11 yrs
    const [infants, setInfants] = useState(0); // <5 yrs
    const [includeBreakfast, setIncludeBreakfast] = useState(false);
    const [includeLunch, setIncludeLunch] = useState(false);

    // Pricing Constants
    const JEEP_PRICE = 120.00;
    const TICKET_ADULT = 35.00;
    const TICKET_CHILD = 15.00;
    const MEAL_BREAKFAST = 10.00;
    const MEAL_LUNCH = 15.00;
    const SERVICE_CHARGE_RATE = 0.10;

    // Derived Values
    const ticketCost = (adults * TICKET_ADULT) + (children * TICKET_CHILD);
    const breakfastCost = includeBreakfast ? (adults + children) * MEAL_BREAKFAST : 0;
    const lunchCost = includeLunch ? (adults + children) * MEAL_LUNCH : 0;

    const subtotal = JEEP_PRICE + ticketCost + breakfastCost + lunchCost;
    const serviceCharge = subtotal * SERVICE_CHARGE_RATE;
    const total = subtotal + serviceCharge;

    const guestCount = adults + children + infants;

    // Helpers
    const formatCurrency = (amount: number) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
    };

    const handleGuestChange = (type: 'adults' | 'children' | 'infants', operation: 'add' | 'remove') => {
        if (type === 'adults') {
            if (operation === 'add') setAdults(prev => Math.min(prev + 1, 6)); // Jeep max 6 usually
            if (operation === 'remove') setAdults(prev => Math.max(prev + 1, 1)); // Min 1 adult
        } else if (type === 'children') {
            if (operation === 'add') setChildren(prev => Math.min(prev + 1, 5));
            if (operation === 'remove') setChildren(prev => Math.max(prev - 1, 0));
        } else if (type === 'infants') {
            if (operation === 'add') setInfants(prev => Math.min(prev + 1, 3));
            if (operation === 'remove') setInfants(prev => Math.max(prev - 1, 0));
        }
    };

    return (
        <div className="bg-background-light my-20 dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col">

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header & Progress */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#111811] dark:text-white mb-2">Safari Calculator</h1>
                            <p className="text-gray-500 dark:text-[#b7b19e] text-lg">Plan your luxury wildlife adventure in real-time.</p>
                        </div>
                        {/* Progress Indicator */}
                        <div className="w-full md:w-64">
                            <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-[#b7b19e] mb-2">
                                <span className="text-primary dark:text-white">Trip Details</span>
                                <span>Contact</span>
                                <span>Payment</span>
                            </div>
                            <div className="h-2 w-full bg-gray-200 dark:bg-[#383429] rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-1/3 rounded-full"></div>
                            </div>
                            <div className="text-right mt-1 text-xs text-gray-500 dark:text-[#b7b19e]">Step 1 of 3</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-8 flex flex-col gap-6">

                        {/* Section 1: Book Your Trip */}
                        <section className="bg-[#26241c] dark:bg-card-dark rounded-xl border border-gray-200 dark:border-[#383429] p-6 md:p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-[#383429] pb-4">
                                <span className="material-symbols-outlined text-primary">landscape</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Book Your Trip</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Location */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Select Park Location</label>
                                    <div className="relative">
                                        <select
                                            value={park}
                                            onChange={(e) => setPark(e.target.value)}
                                            className="w-full h-12 bg-[#383429] dark:bg-input-dark border border-gray-200 dark:border-transparent rounded-lg text-gray-900 dark:text-white px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none"
                                        >
                                            <option value="yala">Yala National Park</option>
                                            <option value="wilpattu">Wilpattu National Park</option>
                                            <option value="udawalawe">Udawalawe National Park</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-3 text-gray-400 dark:text-[#b7b19e] pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                                {/* Date */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Safari Date</label>
                                    <div className="relative">
                                        <input
                                            className="w-full h-12 bg-[#383429] dark:bg-input-dark border border-gray-200 dark:border-transparent rounded-lg text-gray-900 dark:text-white px-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder-gray-400 dark:placeholder-[#b7b19e]"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Guest Counters */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Adults */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Adults</label>
                                    <div className="flex items-center justify-between bg-[#383429] dark:bg-input-dark rounded-lg p-1 h-12 border border-gray-200 dark:border-transparent">
                                        <button
                                            onClick={() => handleGuestChange('adults', 'remove')}
                                            className="w-10 h-full flex items-center justify-center text-gray-500 dark:text-[#b7b19e] hover:bg-gray-200 dark:hover:bg-white/5 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">remove</span>
                                        </button>
                                        <span className="text-gray-900 dark:text-white font-bold">{adults}</span>
                                        <button
                                            onClick={() => handleGuestChange('adults', 'add')}
                                            className="w-10 h-full flex items-center justify-center text-primary hover:bg-primary/10 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">add</span>
                                        </button>
                                    </div>
                                </div>
                                {/* Children 5-11 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Children (5-11 yrs)</label>
                                    <div className="flex items-center justify-between bg-[#383429] dark:bg-input-dark rounded-lg p-1 h-12 border border-gray-200 dark:border-transparent">
                                        <button
                                            onClick={() => handleGuestChange('children', 'remove')}
                                            className="w-10 h-full flex items-center justify-center text-gray-500 dark:text-[#b7b19e] hover:bg-gray-200 dark:hover:bg-white/5 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">remove</span>
                                        </button>
                                        <span className="text-gray-900 dark:text-white font-bold">{children}</span>
                                        <button
                                            onClick={() => handleGuestChange('children', 'add')}
                                            className="w-10 h-full flex items-center justify-center text-primary hover:bg-primary/10 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">add</span>
                                        </button>
                                    </div>
                                </div>
                                {/* Children <5 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Children (Below 5)</label>
                                    <div className="flex items-center justify-between bg-[#383429] dark:bg-input-dark rounded-lg p-1 h-12 border border-gray-200 dark:border-transparent">
                                        <button
                                            onClick={() => handleGuestChange('infants', 'remove')}
                                            className="w-10 h-full flex items-center justify-center text-gray-500 dark:text-[#b7b19e] hover:bg-gray-200 dark:hover:bg-white/5 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">remove</span>
                                        </button>
                                        <span className="text-gray-500 dark:text-[#b7b19e] font-bold">{infants}</span>
                                        <button
                                            onClick={() => handleGuestChange('infants', 'add')}
                                            className="w-10 h-full flex items-center justify-center text-primary hover:bg-primary/10 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Contact Details */}
                        <section className="bg-[#26241c] dark:bg-card-dark rounded-xl border border-gray-200 dark:border-[#383429] p-6 md:p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-[#383429] pb-4">
                                <span className="material-symbols-outlined text-primary">contact_page</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Details</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Full Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Full Name</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-3 text-gray-400 dark:text-[#b7b19e]">person</span>
                                        <input
                                            className="w-full h-12 bg-[#383429] dark:bg-input-dark border border-gray-200 dark:border-transparent rounded-lg text-gray-900 dark:text-white pl-12 pr-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-[#b7b19e]/50 transition-all"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Email Address</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-3 text-gray-400 dark:text-[#b7b19e]">mail</span>
                                        <input
                                            className="w-full h-12 bg-[#383429] dark:bg-input-dark border border-gray-200 dark:border-transparent rounded-lg text-gray-900 dark:text-white pl-12 pr-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-[#b7b19e]/50 transition-all"
                                            placeholder="john@example.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                {/* Phone 1 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Phone (WhatsApp)</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-3 text-gray-400 dark:text-[#b7b19e]">call</span>
                                        <input
                                            className="w-full h-12 bg-[#383429] dark:bg-input-dark border border-gray-200 dark:border-transparent rounded-lg text-gray-900 dark:text-white pl-12 pr-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-[#b7b19e]/50 transition-all"
                                            placeholder="+94 77 123 4567"
                                            type="tel"
                                        />
                                    </div>
                                </div>
                                {/* Phone 2 */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Secondary Phone</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-3 text-gray-400 dark:text-[#b7b19e]">phone_iphone</span>
                                        <input
                                            className="w-full h-12 bg-[#383429] dark:bg-input-dark border border-gray-200 dark:border-transparent rounded-lg text-gray-900 dark:text-white pl-12 pr-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-[#b7b19e]/50 transition-all"
                                            placeholder="Alternative number"
                                            type="tel"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Notes */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-600 dark:text-[#b7b19e] text-sm font-medium">Special Notes / Dietary Requirements</label>
                                <textarea
                                    className="w-full bg-[#383429] dark:bg-input-dark border border-gray-200 dark:border-transparent rounded-lg text-gray-900 dark:text-white p-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-[#b7b19e]/50 resize-none transition-all"
                                    placeholder="Any allergies, specific jeep requirements..."
                                    rows={3}
                                ></textarea>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sticky Summary */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-24 flex flex-col gap-6">
                            <div className="bg-[#26241c] dark:bg-card-dark rounded-xl border border-gray-200 dark:border-[#383429] p-6 shadow-2xl shadow-black/5 dark:shadow-black/50 overflow-hidden relative">
                                {/* Decorative glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2 relative z-10">
                                    <span className="material-symbols-outlined text-primary">receipt_long</span>
                                    Amount to Be Paid
                                </h3>

                                {/* Toggles */}
                                <div className="flex flex-col gap-4 mb-8 relative z-10">
                                    {/* Toggle Item */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 dark:text-white font-medium text-sm">Park Entry Fees</span>
                                            <span className="text-gray-500 dark:text-[#b7b19e] text-xs">Tickets included automatically</span>
                                        </div>
                                        <div className="relative w-11 h-6 bg-primary/20 rounded-full">
                                            <div className="absolute top-[2px] right-[2px] bg-primary rounded-full h-5 w-5"></div>
                                        </div>
                                    </div>

                                    {/* Toggle Item */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 dark:text-white font-medium text-sm">Include Breakfast</span>
                                            <span className="text-gray-500 dark:text-[#b7b19e] text-xs">${MEAL_BREAKFAST} per person</span>
                                        </div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                checked={includeBreakfast}
                                                onChange={() => setIncludeBreakfast(!includeBreakfast)}
                                                type="checkbox"
                                                className="sr-only peer"
                                            />
                                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-input-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>

                                    {/* Toggle Item */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-gray-900 dark:text-white font-medium text-sm">Include Lunch</span>
                                            <span className="text-gray-500 dark:text-[#b7b19e] text-xs">${MEAL_LUNCH} per person</span>
                                        </div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                checked={includeLunch}
                                                onChange={() => setIncludeLunch(!includeLunch)}
                                                type="checkbox"
                                                className="sr-only peer"
                                            />
                                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-input-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        </label>
                                    </div>
                                </div>

                                {/* Breakdown */}
                                <div className="space-y-3 pb-6 border-b border-gray-100 dark:border-[#383429] mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-[#b7b19e]">Private Jeep (Half Day)</span>
                                        <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(JEEP_PRICE)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-[#b7b19e]">Park Entry ({adults + children} Guests)</span>
                                        <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(ticketCost)}</span>
                                    </div>
                                    {(breakfastCost > 0 || lunchCost > 0) && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 dark:text-[#b7b19e]">Meals</span>
                                            <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(breakfastCost + lunchCost)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-[#b7b19e]">Service Charge (10%)</span>
                                        <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(serviceCharge)}</span>
                                    </div>
                                </div>

                                {/* Payment Type */}
                                <div className="bg-gray-50 dark:bg-input-dark p-1 rounded-lg grid grid-cols-2 gap-1 mb-6">
                                    <button className="text-xs sm:text-sm font-bold bg-primary text-[#171611] py-2 rounded shadow-sm transition-all">
                                        Full Amount
                                    </button>
                                    <button className="text-xs sm:text-sm font-medium text-gray-500 dark:text-[#b7b19e] hover:text-gray-900 dark:hover:text-white py-2 rounded transition-all">
                                        Advance (20%)
                                    </button>
                                </div>

                                {/* Total */}
                                <div className="flex flex-col items-center mb-8">
                                    <span className="text-gray-500 dark:text-[#b7b19e] text-sm mb-1 uppercase tracking-wider font-semibold">Total Payable</span>
                                    <div className="text-4xl font-black text-gray-900 dark:text-white flex items-start gap-1">
                                        {formatCurrency(total)}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full bg-primary hover:bg-yellow-500 text-[#171611] font-bold text-lg py-4 rounded-lg shadow-lg shadow-yellow-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                                    Proceed to Checkout
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>

                                <p className="text-center text-gray-400 dark:text-[#b7b19e]/60 text-xs mt-4 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-sm">lock</span>
                                    Secure Payment Gateway
                                </p>
                            </div>

                            {/* Trust Signals / Support Card */}
                            <div className="bg-white/50 dark:bg-[#2a261a]/50 border border-gray-200 dark:border-[#383429] rounded-xl p-4 flex items-center gap-4">
                                <div className="size-10 rounded-full bg-gray-100 dark:bg-input-dark flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">support_agent</span>
                                </div>
                                <div>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium">Need Help?</p>
                                    <p className="text-gray-500 dark:text-[#b7b19e] text-xs">Call us at +94 77 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
