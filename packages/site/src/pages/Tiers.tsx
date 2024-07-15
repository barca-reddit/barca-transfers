export const Tiers = () => {
    return (
        <main className='flex max-w-[70ch] grow flex-col py-12'>
            <h1 className='mb-4 text-left text-2xl font-medium tracking-tighter'>Tier definitions</h1>
            <div className='my-5 flex items-start'>
                <h2 className='w-32 shrink-0 text-left text-2xl font-medium tracking-tighter'>Tier 1</h2>
                <span>As close as it gets to receiving the news from an official source. You can guarantee that the information presented is verified and coming from a reputable source, not just speculation.</span>
            </div>
            <div className='my-5 flex items-start'>
                <h2 className='w-32 shrink-0 text-left text-2xl font-medium tracking-tighter'>Tier 2</h2>
                <span>By no means a bad source, just a level below Tier 1. Information shared by the source can be seen as trustworthy, just not as much as Tier 1. Occasionally it can also be interpreted as Tier 1.5 with some asterisks attached.</span>
            </div>
            <div className='my-5 flex items-start'>
                <h2 className='w-32 shrink-0 text-left text-2xl font-medium tracking-tighter'>Tier 3</h2>
                <span>We're entering the hit and miss, 50/50 territory here. Source might have some insider information, but might as well have a rich history of wrong reports. You wouldn't trust them by all means, information could very well be false. Critical reader discretion and common sense here is strongly advised.</span>
            </div>
            <div className='my-5 flex items-start'>
                <h2 className='w-32 shrink-0 text-left text-2xl font-medium tracking-tighter'>Tier 4</h2>
                <span>Untrustworthy journalists or media sources who could occasionally be right once in a while, but usually not the case. clickbait, sensational titles and so on.</span>
            </div>
            <div className='my-5 flex items-start'>
                <h2 className='w-32 shrink-0 text-left text-2xl font-medium tracking-tighter'>Tier 5</h2>
                <span>This is the worst tier reserved for media and so called journalists which are only interested in clickbait and have no insight or credibility whatsoever.</span>
            </div>
        </main>
    );
};