const Seken = () => {
    return (
        <div className="Seken">
            <div className="py-40">
                <div className="mx-5 lg:mx-auto lg:w-6/12">
                    <h1 className="font-extrabold text-center text-3xl lg:text-5xl tracking-tight leading-none"> SEKEN: The First Indonesian Thrifting Application</h1>
                    <img className="my-10 mx-auto" src="/assets/project-1.png" alt="" />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">About SEKEN</h2>
                        <p className="text-justify">
                        SEKEN is an application prototype for a UI/UX Design National Competition entry, as a group project.
                        SEKEN is an e-commerce platform dedicated to accommodate and simplify the process of buying or selling personal
                        used clothes. SEKEN is committed to create a supporting environment for local businesses, upholding sustainability,
                        and reducing fast-fashion. 
                        </p>
                    </div>

                    <div className="lg:flex mb-5">
                        {/* DELIVS */}
                        <div className="lg:w-6/12 lg:mr-3">
                            <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">
                                Deliverables
                            </h2>
                            <p className="text-justify">
                                Document format:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Questionnaires</li>
                                <li>User Personas</li>
                                <li>Information Architecture</li>
                            </ul>
                            <br />
                            <p className="text-justify">
                                Visual design format:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Low Fidelity Prototype (Wireframe)</li>
                                <li>High Fidelity Prototype</li>
                            </ul>
                            <br />
                            <p className="text-justify">
                                Deployment: SEKEN company profile website
                            </p>
                        </div>

                        {/* SPECS */}
                        <div className="lg:w-6/12 lg:mr-3">
                            <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">
                                Specifications
                            </h2>
                            <p className="text-justify">
                                Duration: 3 weeks
                            </p>
                            <br />
                            <p className="text-justify">
                                Team: 3 individuals
                            </p>
                            <br />
                            <p className="text-justify">
                                Tools:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Figma</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Background</h2>
                        <p className="text-justify">
                        The rise of fast fashion in a globalized world has sparked concerns about sustainability, leading to the popularity
                        of thrifting. Thrifting, once a means of fundraising, has evolved into a trend, particularly in the resale of stylish,
                        imported clothing in places like Indonesia. This trend offers affordability and the thrill of discovering unique, vintage
                        pieces. Buying used clothes not only saves money but also provides an opportunity to discover one-of-a-kind items.
                        Conversely, selling personal used clothes serves as both a source of income and a way to declutter
                        living spaces while contributing to sustainability by extending clothing lifecycles.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Research</h2>
                        <p className="text-justify">
                            We have shared a questionnaire that has amassed over 75 responses. The questionnaire covers data involving:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>The demographic of respondents (age and domicile)</li>
                            <li>The frequency of buying used clothes</li>
                            <li>The reasons of buying used clothes*</li>
                            <li>The locations of buying used clothes</li>
                            <li>The cost of buying used clothes</li>
                            <li>The level of interest in the features needed in a thrifting application</li>
                        </ul>
                        <p className="text-justify">
                        <sub>*Questionnaire offers the opposite question for respondents that have never bought used clothes</sub>
                        <br />
                        <br />
                        Other than questionnaires, we also conduct thorough research by benchmarking similar applications, such as: Carousell, Tokopedia, and Shopee. This was done to gain a nuanced understanding and insights on industry trends and user preferences.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Key Findings</h2>
                        <div className="lg:flex">
                            <div className="lg:w-4/12 mb-5 lg:mr-3 lg:text-center lg:mb-0">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Demographics</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-justify lg:my-2">Respondents range in age from <strong>16 up to 51 years old</strong> with the most being <strong>22 years old</strong></li>
                                    <li className="text-justify lg:my-2">Respondents come from various domicile in Indonesia with the most based in <strong>Greater Jakarta Area</strong></li>
                                    <li className="text-justify lg:my-2"><strong>60.8% respondents</strong> have tried thrifting before, where <strong>39.2% respondents</strong> haven't</li>
                                    <li className="text-justify lg:my-2">Respondents mostly spend around <strong>Rp50.000,00 to Rp100.000,00</strong> when thrifting</li>
                                </ul>
                            </div>
                            <div className="lg:w-4/12 mb-5 lg:mx-3 lg:text-center lg:mb-0">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Problems</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-justify lg:my-2">Arduous process of selling or buying used clothes</li>
                                    <li className="text-justify lg:my-2">Unused clothes are pilling up and taking up closet space</li>
                                    <li className="text-justify lg:my-2">Expensive cost of clothes with mediocre quality</li>
                                    <li className="text-justify lg:my-2">Existing e-commerce platform doesn't offer secure payment system</li>
                                    <li className="text-justify lg:my-2">Fear of unhygienic products</li>
                                </ul>
                            </div>
                            <div className="lg:w-4/12 lg:ml-3 lg:text-center">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Needs</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-justify lg:my-2">A platform with simplified process of selling or buying used clothes</li>
                                    <li className="text-justify lg:my-2">A platform that accommodates selling unused clothes</li>
                                    <li className="text-justify lg:my-2">A platform that offers high quality clothes with an affordable price</li>
                                    <li className="text-justify lg:my-2">A platform that offers safe and secure payment system</li>
                                    <li className="text-justify lg:my-2">A platform that curates products before they are sold</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">User Personas</h2>
                        <p className="text-justify">
                        The target users for SEKEN are Gen Z individuals based in Indonesia. This consideration stems from Gen Z being the most trend-sensitive generation and adept in technological usage. Thrifting represents a current trend due to its pull of high quality products, renowned brands, and affordable prices. Gen Z places significant emphasis on appearance, and through thrifting, Gen Z can acquire fashionable clothing at affordable prices.
                        <br />
                        <br />
                        Here are two user personas we've created based on our previous research and findings:
                        </p>

                        <p className="mt-5 text-lg text-center font-bold">Seller</p>
                        <img className="my-3 mx-auto" src="/assets/seken-seller.png" alt="" />
                        <p className="mt-5 text-lg text-center font-bold">Buyer</p>
                        <img className="my-3 mx-auto" src="/assets/seken-buyer.png" alt="" />
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Information Architecture</h2>
                        <p className="text-justify">
                        Information architecture aims to organize, manage and structure information so that it can be accessed, understood and used efficiently. It focuses on the structure and layout of information in a system, website, application, or other information environment, where the goal is to ensure that users can easily navigate, search, and get the information they need.
                        
                        <br />
                        <br />

                        Here are the information architecture we've created based on our previous research and findings:
                        </p>

                        <img className="my-3 mx-auto" src="/assets/seken-ia.png" alt="" />
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Low Fidelity Prototype (Wireframe)</h2>
                        <p className="text-justify">
                        Wireframing is the process of creating a sketch or basic framework of the User Interface (UI) of a digital product, such as a website, mobile application, or software. The main goal of wireframing is to plan and describe the visual structure and layout of the main elements in a product design without paying attention to any visual details, colors, or decorative elements.
                        
                        <br />
                        <br />

                        Here are the wireframes we've created based on our previous research and findings:
                        </p>

                        <img className="my-3 mx-auto" src="/assets/seken-lofi.png" alt="" />
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">High Fidelity Prototype</h2>
                        <p className="text-justify">
                        High fidelity prototyping is used to describe how users will interact with the digital product. The goal is to test and validate the design concept, layout, workflow, and product functionality before developing the final version.
                        
                        <br />
                        <br />

                        Here is the prototype we've created based on the wireframe:
                        </p>

                        <img className="my-3 mx-auto" src="/assets/seken-hifi.png" alt="" />
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Closing</h2>
                        <p className="text-justify">
                        Thus, we have detailed the concept of a thrifting application (SEKEN) that will be equipped with features such as product searching, user reviews, product selection based on user preferences, as well as an integrated and secure payment system. We have also considered marketing strategies, financial sustainability and steps to build an active community that shares sustainability values.
                        
                        <br />
                        <br />

                        SEKEN will not only benefit users by providing access to quality used clothes at affordable prices, but will also have a positive impact on the environment by extending product life and reducing textile waste. Apart from that, we believe that this can also be a promising business opportunity.
                        </p>
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-center text-lg lg:text-2xl tracking-tight leading-none">External Links</h2>
                        <div className="flex flex-wrap justify-center">
                            <a href="https://seken.vercel.app/" className="inline-block mx-2 my-2 lg:my-0 text-md font-bold px-4 py-2 text-sm text-blue-700 bg-blue-200 rounded-full">SEKEN Company Profile Website</a>
                            <a href="http://ristek.link/PrototypeHologyPancong" className="inline-block mx-2 my-2 lg:my-0 text-md font-bold px-4 py-2 text-sm text-pink-700 bg-pink-200 rounded-full">Low Fidelity Prototype</a>
                            <a href="http://ristek.link/WireframeHologyPancong" className="inline-block mx-2 my-2 lg:my-0 text-md font-bold px-4 py-2 text-sm text-emerald-700 bg-emerald-200 rounded-full">High Fidelity Prototype</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Seken;