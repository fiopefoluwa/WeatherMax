import Sunrise from '../assets/weather/Sunrise.svg';
import Sunset from '../assets/weather/Sunset.svg';
import ChanceOfRain from '../assets/weather/ChanceOfRain.svg';
import UV from '../assets/weather/UV.svg';

export default function DailyWeatherPill() {
    return (
        <>
            <div className="p-2 flex flex-col justify-center items-center rounded-lg border-2 border-[#181B2C] bg-[#0F1017]  w-[200px] h-[160px] cursor-pointer flex-shrink-0 transition-all hover:bg-[#31A9ED] hover:border-[#31A9ED] hover:w-[220px] group">
                <p className="text-xl -translate-x-6">Sunday</p>
                <section className="translate-y-2 flex flex-col">
                    <div className="flex gap-2 text-[#949AB5] text-sm">
                        <img src={Sunrise} alt={Sunrise} size={30} />
                        <span>Sunrise :</span>
                    </div>
                    <div className="flex gap-2 text-[#949AB5] text-sm">
                        <img src={Sunset} alt={Sunset} size={30} />
                        <span>Sunset :</span>
                    </div>
                    <div className="flex gap-2 text-[#949AB5] text-sm">
                        <img src={UV} alt={UV} size={30} />
                        <span>UV Index :</span>
                    </div>
                    <div className="flex gap-2 text-[#949AB5] text-sm">
                        <img src={ChanceOfRain} alt={ChanceOfRain} size={30} />
                        <span>Chance of rain :</span>
                    </div>
                </section>
            </div>
        </>
    );
}
