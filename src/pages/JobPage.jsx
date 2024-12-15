import { useEffect } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const JobPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      location: "Remoto",
      type: "Tiempo completo",
      description:
        "Únete a nuestro equipo para desarrollar interfaces innovadoras para los amantes del anime.",
    },
    {
      id: 2,
      title: "Diseñador UI/UX",
      location: "Lima, Perú",
      type: "Tiempo parcial",
      description:
        "Buscamos un diseñador con pasión por el anime y experiencia en diseño web moderno.",
    },
    {
      id: 3,
      title: "Gestor de Contenido",
      location: "Remoto",
      type: "Freelance",
      description:
        "Ayúdanos a mantener nuestro catálogo de anime actualizado con los últimos lanzamientos.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <FaBriefcase className="text-orange-500 text-5xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Únete a nuestro equipo</h1>
          <p className="text-gray-400 mt-2">
            Explora nuestras oportunidades laborales y trabaja con nosotros en
            el mundo del anime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <p className="flex items-center text-sm text-gray-400 mb-1">
                <FaMapMarkerAlt className="text-orange-500 mr-2" />
                {job.location}
              </p>
              <p className="flex items-center text-sm text-gray-400 mb-3">
                <FaClock className="text-orange-500 mr-2" />
                {job.type}
              </p>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <button className="flex items-center justify-center w-full bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-600 transition">
                <FaPaperPlane className="mr-2" /> Aplicar ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPage;
