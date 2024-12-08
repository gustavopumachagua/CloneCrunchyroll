import ProfilePicture from "./ProfilePicture";

const EditProfile = () => {
  return (
    <div className="bg-black text-white max-w-md mx-auto md:max-w-lg lg:max-w-2xl rounded-lg overflow-hidden">
      {/* Encabezado */}
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold">Editar perfil</h1>
      </div>

      {/* Imagen de fondo y perfil */}
      <div
        className="relative bg-cover bg-center h-40 md:h-48"
        style={{
          backgroundImage: "url('https://via.placeholder.com/600x200')",
        }}>
        <ProfilePicture />
      </div>

      {/* Formulario */}
      <div className="p-6">
        {/* Nombre del perfil */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">
            Nombre del perfil
          </label>
          <input
            type="text"
            defaultValue="GussDev"
            className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Este es el nombre del grupo de tu hogar y puede cambiarse en
            cualquier momento.
          </p>
        </div>

        {/* Nombre de usuario */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">
            Nombre de usuario (Opcional)
          </label>
          <input
            type="text"
            defaultValue="GussDev"
            className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Crea un nombre de usuario para futuras experiencias que compartirán
            tu amor por el anime. ¡Elige uno que te encante, no se podrá
            cambiar!
          </p>
        </div>

        {/* Botones */}
        <div className="flex justify-between mt-6">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
            GUARDAR
          </button>
          <button className="bg-transparent text-orange-500 px-6 py-2 rounded-md border border-orange-500 hover:bg-orange-500 hover:text-black transition">
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
