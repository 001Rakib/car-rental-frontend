const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h2 className="text-3xl text-orange-600 leading-tight font-bold mb-4 text-center">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At Ride Flex, we're dedicated to providing the best car rental
          experience possible. Here are just a few reasons why you should choose
          us for your next adventure:
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <i className="fas fa-money-bill-wave text-3xl text-gray-600 mb-4"></i>
              <h3 className="text-lg text-orange-600 font-bold mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600 mb-4">
                We offer competitive pricing for all our vehicles, ensuring you
                get the best deal. Our prices are transparent, and we don't
                charge any hidden fees.
              </p>
              <ul className="list-disc text-gray-600 mb-4 ml-5">
                <li>No hidden fees</li>
                <li>Competitive pricing</li>
                <li>Transparent pricing</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <i className="fas fa-car text-3xl text-gray-600 mb-4"></i>
              <h3 className="text-lg text-orange-600 font-bold mb-2">
                Wide Selection
              </h3>
              <p className="text-gray-600 mb-4">
                Our fleet includes a wide range of vehicles, from economy to
                luxury, to suit your needs. Whether you're traveling solo or
                with a group, we have the perfect car for you.
              </p>
              <ul className="list-disc text-gray-600 mb-4 ml-5">
                <li>Economy cars</li>
                <li>Luxury cars</li>
                <li>SUVs and vans</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <i className="fas fa-clock text-3xl text-gray-600 mb-4"></i>
              <h3 className="text-lg text-orange-600 font-bold mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 mb-4">
                Our dedicated customer support team is available 24/7 to assist
                you with any queries or concerns. We're always here to help.
              </p>
              <ul className="list-disc text-gray-600 mb-4 ml-5">
                <li>24/7 support</li>
                <li>Dedicated customer support team</li>
                <li>Quick response times</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
