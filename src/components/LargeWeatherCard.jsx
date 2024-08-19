import { Location04Icon } from 'hugeicons-react';

export default function LargeWeatherCard({ location }) {
    return (
        <section className="bg-[#0F1017] p-4 border-2 border-[#181B2C] flex gap-4 rounded-xl">
            {/* LOCATION MARKER */}
            <p className="flex items-center gap-2">
                <Location04Icon size={18} />
                <span className="text-sm">{location}</span>
            </p>
        </section>
    );
}
