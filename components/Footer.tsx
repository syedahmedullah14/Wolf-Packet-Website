import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>Copyright 2022 xenoferite All Rights Reserved.</p>
          </div>
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10.JPG-AaRpCy7HYyaAWeGXVlflG7HDgSqNZ5.jpeg"
              alt="Partner Logo"
              width={100}
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

