import NoGeolocationIcon from '../../assets/NoGeolocationIcon.svg';

export default function NoGeo() {
    return (
        <section className="w-full min-h-[360px] grid place-items-center select-none">
            <div className="flex flex-col gap-4 items-center">
                <img
                    src={NoGeolocationIcon}
                    alt="geo-icon"
                    className="size-[120px]"
                />
                <h3 className="text-grey-050 font-medium">
                    Turn on Geolocation to get forecasts
                </h3>
            </div>
        </section>
    );
}
