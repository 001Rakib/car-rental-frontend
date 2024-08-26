const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review:
      "I rented a car from this company and it was a great experience. The car was clean and well-maintained, and the staff was friendly and helpful.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    review:
      "I was a bit skeptical at first, but the car rental process was smooth and easy. The car was comfortable and reliable, and the price was very competitive.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    rating: 5,
    review:
      "I have rented cars from several companies before, but this one was by far the best. The staff was knowledgeable and friendly, and the car was in excellent condition.",
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    rating: 4,
    review:
      "I rented a car for a week and it was a great experience. The car was clean and comfortable, and the staff was very helpful. I would definitely recommend this company to others.",
  },
  {
    id: 5,
    name: "David Lee",
    rating: 5,
    review:
      "I was very impressed with the service I received from this company. The staff was friendly and knowledgeable, and the car was in excellent condition. I would definitely rent from them again.",
  },
];
const Testimonial = () => {
  return (
    <div>
      <section className="bg-white py-12">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
          <h2 className="text-3xl text-gray-900 leading-tight font-bold mb-4">
            Customer Testimonials
          </h2>
          <div className="flex flex-wrap -mx-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/2 xl:w-1/3 p-4"
              >
                <div className="bg-white rounded shadow-md p-4">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg text-gray-900 font-bold mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">
                        {Array(testimonial.rating).map((_, index) => (
                          <i
                            key={index}
                            className="fas fa-star text-orange-500"
                          ></i>
                        ))}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
