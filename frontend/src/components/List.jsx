import { Card} from './Card'


export const ListadoFiscalias = ({fiscalias,setFiscalia,deleteFiscalia}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className="font-black text-center text-3xl mt-5 mb-5">Listado de <span className='font-bold text-blue-800'>Fiscalias </span></h2>
      {fiscalias && fiscalias.length ? (
        <>
          {fiscalias.map((fiscalia)=> {
            return <Card key={fiscalia.id} fiscalia={fiscalia} setFiscalia={setFiscalia} deleteFiscalia={deleteFiscalia} />
          })}
        </>
        ) : (
          <>
            <h2 className='mt-10 text-center'>Cargando .....</h2>
          </>
        )      
      }
    </div>
  )
}
