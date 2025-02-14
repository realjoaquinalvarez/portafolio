import { useState, useCallback } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy, FaWhatsapp, FaArrowLeft } from "react-icons/fa"
import { ClipLoader } from "react-spinners"
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      })
      const [copied, setCopied] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
        
      const navigate = useNavigate();
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
      }
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulamos una carga de 2 segundos
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Formulario enviado:", formData)
        setIsLoading(false)
        // Aquí puedes agregar la lógica real para enviar el formulario
      }
    
      const copyEmail = useCallback(() => {
        navigator.clipboard.writeText("clcflecha@gmail.com").then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        })
      }, [])
    
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
    <div className="mb-6 flex items-center">
      <button
        onClick={() => navigate('/')}
        className="text-black hover:bg-gray-100 p-2 rounded-full transition duration-300"
      >
        <FaArrowLeft />
      </button>
      <h2 className="text-3xl font-bold ml-4 text-black">Contáctame</h2>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? <ClipLoader color="#ffffff" size={20} /> : "Enviar mensaje"}
      </button>
    </form>

    <div className="flex justify-center items-center space-x-6 mt-8">
      <a
        href="https://www.linkedin.com/in/realjoaquinalvarez/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-600 transition duration-300"
      >
        <FaLinkedin className="text-2xl" />
      </a>
      <a
        href="https://github.com/realjoaquinalvarez"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-600 transition duration-300"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a
        href="https://wa.link/v55aj6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-600 transition duration-300"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <div className="relative">
        <button
          onClick={copyEmail}
          className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-black py-1 px-3 rounded-full transition duration-300"
        >
          <FaEnvelope className="text-lg" />
          <span className="text-sm">clcflecha@gmail.com</span>
          <FaCopy className="text-sm" />
        </button>
        {copied && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded">
            Copiado!
          </div>
        )}
      </div>
    </div>
  </div>
  )
}


