import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ContactPage = () => {
  return (
    <div className="w-full px-4 sm:w-12/12 sm:px-16 py-8">
      <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
      <p className="text-base mb-2">
        For all technical support and sales enquiries please email or phone us
        to speak with one of our friendly staff.
      </p>
      <p className="text-base mb-4">
        Your view is important to us. Get in touch with our team so that we can
        improve our service to you.
      </p>
      <hr className="my-4 border-gray-300" />

      {/* Phone Section */}
      <div className="flex flex-col sm:flex-row items-center mb-4">
        <div className="flex items-center justify-center p-2">
          <FontAwesomeIcon
            icon={faPhone}
            style={{
              backgroundColor: "#009bde",
              color: "white",
              padding: "6px",
              borderRadius: "4px",
              fontSize: "12px",
              width: "20px",
              height: "20px",
              display: "inline-block",
            }}
          />
        </div>
        <div className="ml-4 flex">
          <p className="text-xl font-medium m-0">
            Australia Wide <strong>(03) 9001 4888</strong>
          </p>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex items-center justify-center p-2 border-4 border-text-blue rounded-lg">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              backgroundColor: "#009bde",
              color: "white",
              padding: "6px",
              borderRadius: "4px",
              fontSize: "12px",
              width: "20px",
              height: "20px",
              display: "inline-block",
            }}
          />
        </div>
        <div className="sm:ml-4 mt-2 items-center">
          <a
            href="mailto:info@siliconewristbandsaustralia.com.au"
            className="text-md sm:text-lg text-blue-500 underline"
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
