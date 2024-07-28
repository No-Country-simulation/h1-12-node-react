import React, { useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon, CalendarIcon, UserGroupIcon, ChevronLeftIcon, PencilIcon, DocumentTextIcon} from '@heroicons/react/24/solid';

const TratamientoPaciente = () => {
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showNewTreatmentModal, setShowNewTreatmentModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreatingNewTreatment, setIsCreatingNewTreatment] = useState(false);
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: 'Lucía Reinoso', dni: '35296874', adherencia: 'Nula', color: 'bg-red-500' },
    { id: 2, nombre: 'María González', dni: '45382948', adherencia: 'Buena', color: 'bg-green-500' },
    { id: 3, nombre: 'Juan Pérez', dni: '37482917', adherencia: 'Sin tratamiento', color: '' },
    // Otros pacientes...
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPacientes = pacientes.filter(paciente =>
    paciente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateNew = () => {
    setShowNewTreatmentModal(true);
  };

  const handleConfirmCreateNew = () => {
    // Cambiar a la vista de creación de nuevo tratamiento
    setIsCreatingNewTreatment(true);
    setShowNewTreatmentModal(false);
  };

  const handleFinalizarClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmFinalizar = () => {
    setPacientes(pacientes.filter(p => p.id !== selectedPaciente.id));
    setShowConfirmModal(false);
    setSelectedPaciente(null);
  };

  const handleCancelFinalizar = () => {
    setShowConfirmModal(false);
  };

  if (isCreatingNewTreatment) {
    return <TratamientoNuevo onBack={() => setIsCreatingNewTreatment(false)} />;
  }

  return (
    <div className="p-4 md:max-w-2xl mx-auto">
      {selectedPaciente ? (
        <DetallePaciente
          paciente={selectedPaciente}
          onBack={() => setSelectedPaciente(null)}
          onCreateNew={handleCreateNew}
          onFinalizar={handleFinalizarClick}
        />
      ) : (
        <>
          <div className="flex items-center mb-4">
            <h2 className="flex items-center text-xl font-semibold text-blue-700">
              <UserGroupIcon className="w-5 h-5 mr-2" /> PACIENTES
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="flex items-center border rounded-lg border-gray-300 px-3 py-2 bg-white w-full sm:w-auto">
              <MagnifyingGlassIcon className="w-5 h-5 text-purple-500" />
              <input
                type="text"
                placeholder="Buscar pacientes"
                value={searchTerm}
                onChange={handleSearchChange}
                className="flex-1 pl-3 outline-none"
              />
            </div>
            <button className="flex items-center row bg-gradient-to-r from-blue-600 to-fuchsia-600 rounded-lg p-1.5  text-white">
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {filteredPacientes.map((paciente) => (
              <div
                key={paciente.id}
                className="p-4 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer"
                onClick={() => setSelectedPaciente(paciente)}
              >
                <div>
                  <h3 className="text-lg font-medium text-blue-800">{paciente.nombre}</h3>
                  <p className="text-sm text-gray-500">{paciente.dni}</p>
                  {paciente.adherencia !== 'Sin tratamiento' && (
                    <div className="flex items-center mt-2">
                      <p className="text-sm text-gray-500 mr-2">Adherencia al Tratamiento</p>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div className={`h-full  ${paciente.color}`}></div>
                        </div>
                        <span className="ml-2 text-sm">{paciente.adherencia}</span>
                      </div>
                    </div>
                  )}
                </div> 
                <div className='flex '>
                <DocumentTextIcon className="w-6 h-6 text-blue-500" />
                <CalendarIcon className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {showConfirmModal && (
        <ModalConfirmacion
          onClose={handleCancelFinalizar}
          onConfirm={handleConfirmFinalizar}
          paciente={selectedPaciente}
        />
      )}

      {showNewTreatmentModal && (
        <ModalConfirmacionNuevoTratamiento
          onClose={() => setShowNewTreatmentModal(false)}
          onConfirm={handleConfirmCreateNew}
        />
      )}
    </div>
  );
};

const DetallePaciente = ({ paciente, onBack, onCreateNew, onFinalizar }) => {
  return (
    <div className="p-4 md:max-w-2xl mx-auto">
      <div className="flex items-center mb-4">
        <button onClick={onBack}>
          <ChevronLeftIcon className="w-6 h-6 text-blue-700" />
        </button>
        <h2 className="text-xl font-semibold text-blue-700 ml-2">PACIENTE</h2>
      </div>
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 p-1.5  text-white">Historia Clínica</button>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 p-1.5  text-white">Receta</button>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 p-1.5  text-white">...</button>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg mb-4 relative">
        <h3 className="text-lg font-medium text-blue-800">{paciente.nombre}</h3>
        <p className="text-sm text-gray-500">{paciente.dni}</p>
        <p className="text-sm text-gray-500">Género: Femenino</p>
        <p className="text-sm text-gray-500">Obra social: Sancor</p>
        <p className="text-sm text-gray-500">Fecha de nacimiento: 14/06/1991</p>
        <p className="text-sm text-gray-500">Domicilio: Sta. María de Oro 5321 (sur) Bº</p>
        <p className="text-sm text-gray-500">Email: luciareinoso@gmail.com</p>
        <p className="text-sm text-gray-500">Grupo Sanguíneo: 0 RH +</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800">Tratamiento</h3>
        <p className="text-sm text-gray-500">Tratamiento inmunodepresor</p>
        <p className="text-sm text-gray-500">Diagnóstico:</p>
        {['Activo', 'Suspendido', 'Finalizado'].map((estado, index) => (
          <div key={index} className="flex items-center mt-2">
            <PencilIcon className="w-5 h-5 text-purple-500" />
            <p className="text-sm text-gray-500 ml-2">Ciclosporina 10mg</p>
            <span className={`ml-auto px-2 py-1 rounded-lg ${estado === 'Activo' ? 'bg-green-500' : estado === 'Suspendido' ? 'bg-red-500' : 'bg-purple-500'} text-white`}>{estado}</span>
          </div>
        ))}
        <div className='flex justify-around'>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={onCreateNew}>Nuevo tratamiento</button>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={onFinalizar}>Finalizar tratamiento</button>
        </div>
      </div>
    </div>
  );
};

const ModalConfirmacion = ({ onClose, onConfirm, paciente }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Confirmar Finalización</h2>
        <p className="mb-4">¿Estás seguro de que deseas finalizar el tratamiento de {paciente.nombre}?</p>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-gray-300 rounded-lg mr-2" onClick={onClose}>Cancelar</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg" onClick={onConfirm}>Finalizar</button>
        </div>
      </div>
    </div>
  );
};

const ModalConfirmacionNuevoTratamiento = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Crear Nuevo Tratamiento</h2>
        <p className="mb-4">¿Estás seguro de que deseas crear un nuevo tratamiento para este paciente?</p>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-gray-300 rounded-lg mr-2" onClick={onClose}>Cancelar</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg" onClick={onConfirm}>Crear</button>
        </div>
      </div>
    </div>
  );
};

const TratamientoNuevo = ({ onBack }) => {
  const [formData, setFormData] = useState({
    nombreTratamiento: '',
    diagnostico: '',
    medicamentos: '',
    adherencia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del tratamiento:', formData);
  };

  return (
    <div className="p-4 md:max-w-2xl mx-auto">
      <div className="flex items-center mb-4">
        <button onClick={onBack}>
          <ChevronLeftIcon className="w-6 h-6 text-blue-700" />
        </button>
        <h2 className="text-xl font-semibold text-blue-700 ml-2">TRATAMIENTO NUEVO</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="nombreTratamiento" className="font-semibold text-blue-700">Diagnostico</label>
          
          <input
            type="serch"
            id="nombreTratamiento"
            name="nombreTratamiento"
            value={formData.nombreTratamiento}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Nombre del Tratamiento"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="diagnostico" className="font-semibold text-blue-700">Diagnóstico</label>
          <textarea
            id="diagnostico"
            name="diagnostico"
            value={formData.diagnostico}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Descripción del diagnóstico"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="medicamentos" className="font-semibold text-blue-700">Medicamentos</label>
          <textarea
            id="medicamentos"
            name="medicamentos"
            value={formData.medicamentos}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Medicamentos prescritos"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="adherencia" className="font-semibold text-blue-700">Adherencia</label>
          <select
            id="adherencia"
            name="adherencia"
            value={formData.adherencia}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Seleccionar adherencia</option>
            <option value="Buena">Buena</option>
            <option value="Regular">Regular</option>
            <option value="Nula">Nula</option>
          </select>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-700 text-white rounded-lg">Guardar Tratamiento</button>
      </form>
    </div>
  );
};

export default TratamientoPaciente;
