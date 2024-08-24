// import { Rocket01Icon } from 'hugeicons-react';
// import { useState } from 'react';

// export default function SettingsFragment() {
//     const [selectedTheme, setSelectedTheme] = useState('Dark');
//     const [selectedUnits, setSelectedUnits] = useState('Celsius');

//     return (
//         <main className="w-full">
//             <h2 className="text-2xl mb-4 font-bold text-primary">Settings</h2>
//             <section className="mb-4">
//                 {/* THEME SETTINGS */}
//                 <h4 className="text-grey-050 font-medium mb-2">Theme</h4>
//                 <select
//                     name="theme-dd"
//                     id="theme-dd"
//                     value={selectedTheme}
//                     onChange={(ev) => setSelectedTheme(ev.target.value)}
//                     className="w-full border-2 border-lighter-border bg-card-bg p-4 rounded-lg"
//                 >
//                     <option value="dark" className="select-none">
//                         Dark
//                     </option>
//                     <option value="light" className="select-none">
//                         Light
//                     </option>
//                 </select>

//                 {/* TEMPERATURE SETTINGS */}
//                 <h4 className="text-grey-050 font-medium mt-4 mb-2">
//                     Temperature Unit
//                 </h4>
//                 <select
//                     name="temp-dd"
//                     id="temp-dd"
//                     value={selectedUnits}
//                     onChange={(ev) => setSelectedUnits(ev.target.value)}
//                     className="w-full border-2 border-lighter-border bg-card-bg p-4 rounded-lg"
//                 >
//                     <option value="celsius" className="select-none">
//                         Celsius
//                     </option>
//                     <option value="fahrenheit" className="select-none">
//                         Fahrenheit
//                     </option>
//                 </select>
//             </section>
//             <div className="w-full h-[1px] bg-[#181B2C] my-8"></div>
//             <section>
//                 <section>
//                     <h3 className="my-2 text-primary text-xl flex gap-2 items-center">
//                         <Rocket01Icon />
//                         <span>About</span>
//                     </h3>
//                     <section className="text-[#B8C0E2] font-normal mt-4 leading-[26px]">
//                         <p>
//                             <span className="font-bold">WeatherMax</span> is a
//                             modern, full-featured, weather prediction and
//                             analysis software built from the ground up to be
//                             hyper efficient. It uses reverse geocoding to
//                             estimate user's location and provide a wide range of
//                             accurate weather statistics.
//                         </p>
//                         <p className="mt-4">
//                             WeatherMax is made possible by the amazing APIs
//                             provided by{' '}
//                             <a
//                                 className="underline hover:text-primary transition underline-offset-4"
//                                 href="https://locationiq.com/geocoding"
//                                 target="_blank"
//                             >
//                                 LocationIQ
//                             </a>{' '}
//                             and{' '}
//                             <a
//                                 href="https://open-meteo.com"
//                                 target="_blank"
//                                 className="underline hover:text-primary transition underline-offset-4"
//                             >
//                                 OpenMeteo.
//                             </a>
//                         </p>
//                         <p className="mt-4">
//                             Designed and Engineered by Xero and Fiope.
//                         </p>
//                     </section>
//                 </section>
//             </section>
//         </main>
//     );
// }

import { Rocket01Icon } from 'hugeicons-react';
import { useState, useEffect } from 'react';

export default function SettingsFragment() {
    const [selectedTheme, setSelectedTheme] = useState('dark');
    const [selectedUnits, setSelectedUnits] = useState('celsius');

    // Apply theme change
    useEffect(() => {
        document.body.className = selectedTheme === 'dark' ? 'dark-theme' : 'light-theme';
    }, [selectedTheme]);

    // Function to convert temperature (for demonstration purposes)
    // const convertTemperature = (value: number, toUnit: string) => {
    //     if (toUnit === 'fahrenheit') {
    //         return (value * 9/5) + 32;
    //     } else {
    //         return (value - 32) * 5/9;
    //     }
    // };

    return (
        <main className="w-full">
            <h2 className="text-2xl mb-4 font-bold text-primary">Settings</h2>
            <section className="mb-4">
                {/* THEME SETTINGS */}
                <h4 className="text-grey-050 font-medium mb-2">Theme</h4>
                <select
                    name="theme-dd"
                    id="theme-dd"
                    value={selectedTheme}
                    onChange={(ev) => setSelectedTheme(ev.target.value)}
                    className="w-full border-2 border-lighter-border bg-card-bg p-4 rounded-lg"
                >
                    <option value="dark" className="select-none">
                        Dark
                    </option>
                    <option value="light" className="select-none">
                        Light
                    </option>
                </select>

                {/* TEMPERATURE SETTINGS */}
                <h4 className="text-grey-050 font-medium mt-4 mb-2">
                    Temperature Unit
                </h4>
                <select
                    name="temp-dd"
                    id="temp-dd"
                    value={selectedUnits}
                    onChange={(ev) => setSelectedUnits(ev.target.value)}
                    className="w-full border-2 border-lighter-border bg-card-bg p-4 rounded-lg"
                >
                    <option value="celsius" className="select-none">
                        Celsius
                    </option>
                    <option value="fahrenheit" className="select-none">
                        Fahrenheit
                    </option>
                </select>
            </section>
            <div className="w-full h-[1px] bg-[#181B2C] my-8"></div>
            <section>
                <h3 className="my-2 text-primary text-xl flex gap-2 items-center">
                    <Rocket01Icon />
                    <span>About</span>
                </h3>
                <section className="text-[#B8C0E2] font-normal mt-4 leading-[26px]">
                    <p>
                        <span className="font-bold">WeatherMax</span> is a
                        modern, full-featured, weather prediction and
                        analysis software built from the ground up to be
                        hyper efficient. It uses reverse geocoding to
                        estimate user's location and provide a wide range of
                        accurate weather statistics.
                    </p>
                    <p className="mt-4">
                        WeatherMax is made possible by the amazing APIs
                        provided by{' '}
                        <a
                            className="underline hover:text-primary transition underline-offset-4"
                            href="https://locationiq.com/geocoding"
                            target="_blank"
                        >
                            LocationIQ
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://open-meteo.com"
                            target="_blank"
                            className="underline hover:text-primary transition underline-offset-4"
                        >
                            OpenMeteo.
                        </a>
                    </p>
                    <p className="mt-4">
                        Designed and Engineered by Xero and Fiope.
                    </p>
                </section>
            </section>
        </main>
    );
}

