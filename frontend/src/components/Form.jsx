import { useState,useEffect} from 'react';
import { ApiService } from '../api/api.service';

export const FormFiscalia = ({setFiscalias,fiscalias,fiscalia, setFiscalia}) => {

const [name, setName] = useState('');
const [ubication, setUbication] = useState('');
const [phone, setPhone] = useState('');
const [error, setError] = useState(false);

useEffect(() => {
 
  if(Object.keys(fiscalia).length > 0)
  {
    setName(fiscalia.name);
    setUbication(fiscalia.ubication);
    setPhone(fiscalia.phone);
  }
}, [fiscalia])


const handleSubmit = async (e) => {
    e.preventDefault()
    if([name,ubication,phone].includes(''))
    {
      setError(true);
      return
    }
    setError(false);

    const newFiscalia = {
      nombre:name,
      ubicacion:ubication,
      telefono: phone
    }

    if(fiscalia.id){
      const updatedFiscalia =  await updateFiscalia(newFiscalia,fiscalia.id);
      const refreshFiscalias = fiscalias.map((item)=> item.id === fiscalia.id ? updatedFiscalia : item )
      setFiscalias(refreshFiscalias);
      setFiscalia({})
      
    }else{
      const fiscaliaNew = await postFiscalia(newFiscalia);
      setFiscalias([...fiscalias,fiscaliaNew])
    }
    cleanFields();
    
} 

const postFiscalia = async (newFiscalia) => {

  const url = 'fiscalia';
    const apiFiscalia = new ApiService()
    const response = await apiFiscalia.postFiscalia(url,newFiscalia);
    return response
}

const updateFiscalia = async (newFiscalia,id) => {

  const url = 'fiscalia';
    const apiFiscalia = new ApiService()
    const response = await apiFiscalia.updateFiscalia(url,newFiscalia,id);
    return response
}

const cleanFields = () =>{
  setName('');
  setPhone('');
  setUbication('');
}

  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-black mt-5 text-center mb-5"> Añade Fiscalias y <span className="font-bold text-blue-800"> Administralas</span></h2>
      <form className="bg-white shadow-md rounded-lg p-10" onSubmit={handleSubmit}>
        { error && (
          <div className='bg-red-600 text-center text-white font-bold mb-3 p-3'>
            <p className=''> Todos los campos deben estar llenos</p>
          </div>
        )

        }
        <div className="mb-5">
          <label className="block text-gray-800 uppercase font-bold" htmlFor="nombreFiscalia">Nombre de la fiscalia</label>
          <input 
            id="nombreFiscalia" 
            className="border border-gray-300 outline-blue-800  p-2 w-full mt-2 placeholder-gray-300 rounded-lg" 
            placeholder="Nombre" 
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)} 
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-800 uppercase font-bold" htmlFor="ubicacion">Ubicacion</label>
          <input 
            id="ubicacion" 
            className="border border-gray-300 outline-blue-800  p-2 w-full mt-2 placeholder-gray-300 rounded-lg" 
            placeholder="Guatemala" 
            type="text"
            value={ubication}
            onChange={(e)=> setUbication(e.target.value)}  
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-800 uppercase font-bold" htmlFor="telefono">Telefono</label>
          <input 
            id="telefono" 
            className="border border-gray-300 outline-blue-800  p-2 w-full mt-2 placeholder-gray-300 rounded-lg" 
            placeholder="Tel..." 
            type="text"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}  
          />
        </div>
        <input className="bg-blue-800 p-3 text-white uppercase font-bold rounded w-full cursor-pointer hover:bg-blue-700" value={fiscalia.id ? 'Editar Fiscalia': 'Agregar Fiscalia'} type="submit" />
      </form>
    </div>
  )
}
