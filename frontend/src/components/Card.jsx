export const Card = ({fiscalia,setFiscalia,deleteFiscalia}) => {

    const { name, ubication,phone,id} = fiscalia;

    const handleDelete =() => {
        const response = confirm('Desea Eliminar esta Fiscalia');
        if(response){
            deleteFiscalia(id);
        }
    }

    return (
    <div className="mx-5 my-5 bg-white rounded-lg shadow-md  p-10">
        <p className="font-bold mb-3 text-gray-700 uppercase" >Nombre:  <span className="font-normal normal-case">{name}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase" >Ubicacion:  <span className="font-normal normal-case">{ubication}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase" >Telefono:  <span className="font-normal normal-case">{phone}</span></p>
        <div className="flex justify-between mt-5">
             <button onClick={()=> setFiscalia(fiscalia)} className="text-white uppercase font-bold py-2 px-10 bg-blue-600 rounded hover:bg-blue-500" >Editar</button>
             <button onClick={handleDelete} className="text-white uppercase font-bold py-2 px-10 bg-red-600 rounded hover:bg-red-500" >Eliminar</button>
        </div>
    </div>
    )
  }