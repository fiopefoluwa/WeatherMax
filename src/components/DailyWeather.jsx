import DailyWeatherPill from "./DailyWeatherPill";

export default function DailyWeather() {
    
   
    return (
        <div className="max-w-lg overflow-hidden">
            <h2 className="text-xl font-bold py-6">Daily Forecast</h2>
            <section
                className="flex gap-2 flex-nowrap items-center overflow-y-hidden overflow-x-auto"
                id="daily-pills"
            >          
                <DailyWeatherPill/>
            </section>
        </div>
    );
}
