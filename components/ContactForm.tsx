import { MapPin, Mail, Phone } from "lucide-react"

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Our Contacts</h2>
            <div className="flex items-start mb-4">
              <MapPin className="w-6 h-6 text-red-500 mr-4" />
              <p>
                WOLF PACK ELECTRONICS TRADING LLC   
                <br />
                PO Box 27724, OF13-585, Arabian Sky 9th Floor
                <br />
                City Bank Building, Oud Metha, Dubai, UAE
              </p>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-red-500 mr-4" />
              <a href="mailto:info@xenoferite.com" className="hover:underline">
              info@wolfpacket.net              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-red-500 mr-4" />
              <a href="tel:+97143901646" className="hover:underline">
                +97158 5814358
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Request A Quote</h2>
            <p className="mb-6">
              Drop us a line and our representative will contact you as soon as possible to arrange an initial meeting.
            </p>
            <form>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
                <input type="tel" placeholder="Cell Phone" className="w-full px-4 py-2 border rounded-md" />
                <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md mb-4"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

