import { MyButton } from './components/button';
import { Search01Icon } from 'hugeicons-react';
import GreyCloudIcon from './assets/grey-cloud.svg';

export const Homepage = () => {
    return (
        <>
            <div className="w-full max-w-md p-4">
                {/* HEADER */}
                <div className="flex justify-center text-4xl font-semibold">
                    <p>Weather</p>
                    <p className="text-[#31A9ED]">Max</p>
                </div>
                <div className="py-2 text-[#7E839A]">
                    <p className="text-md font-normal text-center">
                        Fast, precise weather prediction and forecasts
                    </p>
                </div>

                {/* SEARCH BOX */}
                <div className="relative">
                    <div className="relative flex translate-y-6 transform">
                        <input
                            type="text"
                            placeholder="City or state"
                            className="text-md  w-screen px-10 py-1  border-2 border-[#181B2C] rounded-lg  text-[#CACACA] bg-[#11131C] outline-none font-normal focus:border-[#31A9ED] transition-all"
                        />
                        <Search01Icon
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                            color="#CACACA"
                            size={20}
                        />
                        <MyButton textContent="Go" />
                    </div>
                    <div className="translate-y-14">
                        <div className="justify-center flex select-none">
                            <img
                                src={GreyCloudIcon}
                                alt="Cloud Image"
                                width={72}
                            />
                        </div>
                        <div className="text-center text-[#7E839A] font-normal transform translate-y-2">
                            <p>Type in your city to get</p>
                            <span>weather forecasts.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
