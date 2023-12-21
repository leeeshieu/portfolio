const ForGoodSpace = () => {
    return (
        <div className="ForGoodSpace">
            <div className="py-40">
                <div className="mx-5 lg:mx-auto lg:w-6/12">
                    <h1 className="font-extrabold text-center text-3xl lg:text-5xl tracking-tight leading-none">
                    For Good Space: Space Booking Application
                    </h1>
                    <img className="my-10 mx-auto" src="/assets/project-2.png" alt="" />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">
                            About For Good Space
                        </h2>
                        <p className="text-justify">
                        For Good Space is a mobile application that assists users in finding and making spaces reservations. It aims to facilitate the process of booking spaces that align with the user's preferences. Through this app, users can freely select their desired location based on various criteria such as proximity, price, amenities, schedules, availability, and other relevant factors.
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
                                <li>Business Model Canvas</li>
                                <li>Market & Competitor Analysis</li>
                                <li>Marketing & Sales Strategies</li>
                                <li>Financial Strategies</li>
                                <li>Business Risks & Mitigations</li>
                                <li>User Flow</li>
                            </ul>
                            <br />
                            <p className="text-justify">
                                Visual design format: High Fidelity Prototype
                            </p>
                        </div>

                        {/* SPECS */}
                        <div className="lg:w-6/12 lg:mr-3">
                            <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">
                                Specifications
                            </h2>
                            <p className="text-justify">
                                Duration: 2 months
                            </p>
                            <br />
                            <p className="text-justify">
                                Team: 5 individuals
                            </p>
                            <br />
                            <p className="text-justify">
                                Tools:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Microsoft Excel</li>
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
                        Lately, many people have been opting to rent or make reservations for various events or their respective needs. They chose to rent a place due to several reasons such as not having their own space, having a space that lacks adequacy in terms of facilities or capacity, or needing a fresh ambiance. However, when making these reservations, they often encounter difficulties that ultimately hinder their ability to secure a spot. In fact, there are individuals who end up not completing the reservation process due to its complexity.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Research</h2>
                        <p className="text-justify">
                            We have shared a questionnaire that has amassed over 105 responses. The questionnaire covers data involving:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>The demographic of respondents (age and profession)</li>
                            <li>The type of spaces respondents have booked</li>
                            <li>The method of booking</li>
                            <li>The frequency of booking</li>
                            <li>The pains & problems of booking</li>
                            <li>The level of interest in the features needed in a co-working space booking application</li>
                        </ul>
                        <p className="text-justify">
                        <sub>*Questionnaire offers the opposite question for respondents that have never booked any spaces</sub>
                        </p>
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Key Findings</h2>
                        <p className="text-justify">
                        We utilized Google Forms as our survey platform and received data from 105 respondents, aiming to support the analysis material for our market research platform, For Good Space. Based on the survey, several conclusions can be drawn:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>52%</strong> of respondents are from Jakarta, while <strong>29%</strong> are from Depok.</li>
                            <li><strong>76%</strong> respondents have previously made place reservations.</li>
                            <li>Most respondents reserved places for weddings, parties, sports, and photo studios.</li>
                            <li>Only <strong>9.5% of respondents</strong> expressed reluctance to use reservation apps or websites.</li>
                            <li>Respondents indicated their expectations for comprehensive reservation place information, user-friendliness, live chat feature, "near me" functionality, and sorting features.</li>
                        </ul>
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">Business Model Canvas</h2>
                        <div className="lg:flex">
                            <div className="lg:w-4/12 mb-5 lg:mr-3 lg:mb-0">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Value Proposition</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-start lg:my-2">Booking Space/Office</li>
                                    <li className="text-start lg:my-2">Booking Event Hall</li>
                                    <li className="text-start lg:my-2">Booking Seminar Venue</li>
                                    <li className="text-start lg:my-2">Booking Sports Hall</li>
                                    <li className="text-start lg:my-2">Booking Private Gym Room/Studio</li>
                                </ul>

                                <br />

                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Key Activities</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-start lg:my-2">Public space booking</li>
                                    <li className="text-start lg:my-2">Advertisement</li>
                                    <li className="text-start lg:my-2">Marketing</li>
                                </ul>

                                <br />

                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Revenue Stream</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-start lg:my-2">10% fee on space booking</li>
                                    <li className="text-start lg:my-2">Advertisement</li>
                                </ul>
                            </div>
                            <div className="lg:w-4/12 mb-5 lg:mr-3 lg:mb-0">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Key Partners</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-start lg:my-2">Investors</li>
                                    <li className="text-start lg:my-2">Space renting company</li>
                                    <li className="text-start lg:my-2">Payment system company (ex: banks, e-money, e-wallet)</li>
                                    <li className="text-start lg:my-2">App distribution company (ex: Google Play Store &App Store)</li>
                                </ul>

                                <br />

                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Key Resources</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-start lg:my-2">Application & website</li>
                                    <li className="text-start lg:my-2">Server & database</li>
                                    <li className="text-start lg:my-2">Algorithm</li>
                                    <li className="text-start lg:my-2">Online marketing tools</li>
                                    <li className="text-start lg:my-2">Office</li>
                                    <li className="text-start lg:my-2">Investors</li>
                                </ul>
                            </div>
                            <div className="lg:w-4/12 mb-5 lg:mr-3 lg:mb-0">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Customer Segment</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-start lg:my-2">Event organizers</li>
                                    <li className="text-start lg:my-2">Individuals, organizations, or companies</li>
                                    <li className="text-start lg:my-2">General public</li>
                                </ul>

                                <br />

                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">Customer Relationship</h2>
                                <ul className="list-disc list-inside">
                                    <li className="text-start lg:my-2">Membership card</li>
                                    <li className="text-start lg:my-2">Reward points</li>
                                    <li className="text-start lg:my-2">Live assistance</li>
                                    <li className="text-start lg:my-2">Awareness</li>
                                    <li className="text-start lg:my-2">Evaluation</li>
                                    <li className="text-start lg:my-2">Purchase</li>
                                    <li className="text-start lg:my-2">Reviews & complaints</li>
                                </ul>
                            </div>
                        </div> 
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">User Flow</h2>
                        <div className="lg:flex">
                            <div className="lg:w-6/12 mb-5 lg:mr-3 lg:mb-0">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">In-App Activities</h2>
                                <ol className="list-decimal list-inside">
                                    <li className="text-start lg:my-2">Customer makes a registration on the For Good Space application</li>
                                    <li className="text-start lg:my-2">Customer opens the explore tab chooses an avalable space</li>
                                    <li className="text-start lg:my-2">Customer clicks on the available space and fills reservation details</li>
                                    <li className="text-start lg:my-2">Customer creates a reservation</li>
                                    <li className="text-start lg:my-2">Customer checks reservation summary</li>
                                    <li className="text-start lg:my-2">Customer picks a payment method and completes payment</li>
                                    <li className="text-start lg:my-2">Reservation is done and customer may come to the designated space according to the time of reservation</li>
                                </ol>
                            </div>
                            <div className="lg:w-6/12 mb-5 lg:mr-3 lg:mb-0">
                                <h2 className="mb-3 font-extrabold lg:text-md tracking-tight leading-none">On The Spot Activities</h2>
                                <ol className="list-decimal list-inside">
                                    <li className="text-start lg:my-2">Customer comes to the reserved space</li>
                                    <li className="text-start lg:my-2">Customer checks-in</li>
                                    <li className="text-start lg:my-2">Customer uses the space according to the reservation</li>
                                    <li className="text-start lg:my-2">Customer checks-out</li>
                                </ol>
                            </div>
                        </div>

                        <img className="my-3 mx-auto" src="/assets/fgs-flowchart.png" alt="" />
                    </div>

                    <hr className="border-1 border-slate-600"/>
                    <br />

                    <div className="mb-5">
                        <h2 className="mb-3 font-extrabold text-lg lg:text-2xl tracking-tight leading-none">High Fidelity Prototype</h2>
                        <p className="text-justify">
                        High fidelity prototyping is used to describe how users will interact with the digital product. The goal is to test and validate the design concept, layout, workflow, and product functionality before developing the final version.
                        
                        <br />
                        <br />

                        Here is the prototype we've created:
                        </p>

                        <img className="my-3 mx-auto" src="/assets/fgs-hifi.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ForGoodSpace;