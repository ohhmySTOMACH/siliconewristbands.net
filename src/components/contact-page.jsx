export const ContactPage = () => {
    return (

        <div className="w-full sm:w-12/12 px-16 py-8">
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <p className="text-base mb-2">
                For all technical support and sales enquiries please email or phone us to speak with one of our friendly staff.
            </p>
            <p className="text-base mb-4">
                Your view is important to us. Get in touch with our team so that we can improve our service to you.
            </p>
            <hr className="my-4 border-gray-300" />

            {/* Phone Section */}
            <div className="flex items-center mb-4">
                <div className="flex items-center justify-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#009bde" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#009bde" className="size-6">
                        <rect
                            width="24"
                            height="24"
                            rx="4"
                            fill="#009bde"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div className="ml-4 flex">
                    <p className="text-xl font-medium m-0">
                        Australia Wide <strong>(03) 9001 4888</strong>
                    </p>
                </div>
            </div>

            {/* Email Section */}
            <div className="flex items-start">
                <div className="flex items-center justify-center p-2 border-4 border-text-blue rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" color="#009bde" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#009bde" className="size-6">
                        <rect
                            width="24"
                            height="24"
                            rx="4"
                            fill="#009bde"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div className="ml-4 mt-2">
                    <a
                        href="mailto:info@siliconewristbandsaustralia.com.au"
                        className="text-lg text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        info[at]siliconewristbandsaustralia.com.au
                    </a>
                </div>
            </div>
        </div>
    );
};