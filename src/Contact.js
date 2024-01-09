const Contact = () => {
    return (
        <div className="Contact" id="contacts">
            <div className="bg-gray-50 py-40">
                <div className="mx-auto rounded-xl lg:w-9/12">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h1 className="mb-8 text-center text-3xl lg:text-5xl font-heading font-extrabold tracking-tight leading-none underline decoration-wavy decoration-amber-400 underline-offset-4">Let's Connect!</h1>
                    <p className="mb-10 text-center text-lg text-gray-500">I am enthusiastic for any collaborations with like-minded people. Hit me with a message if you have any inquiries!</p>
                    <form action="mailto:alicia.kirana@ui.ac.id" method="post" enctype="text/plain" className="space-y-8">
                        <div>
                            <label for="email" className="block mb-2   font-medium text-gray-900">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900   rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2   font-medium text-gray-900">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full   text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Give a title to your message" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2   font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full   text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment ..."></textarea>
                        </div>

                        <button type="submit" className="mx-auto flex items-center px-3 py-2 font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Send Email
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;