import {
  FormFiscalia,
  ListadoFiscalias,
  Header
} from './components'
import {useState, useEffect} from 'react';
import { ApiService } from './api/api.service';


function App() {

  const [fiscalias, setFiscalias] = useState([]);
  const [fiscalia, setFiscalia] = useState({});
  useEffect(()=> {
    getFiscalias()
  },[])

  const getFiscalias = async () =>{
    const url = 'fiscalia';
    const apiFiscalia = new ApiService()
    const response = await apiFiscalia.getFiscalias(url);
    setFiscalias([...response])
  }

  const deleteFiscalia = async (id) =>
  {
    const url = 'fiscalia';
    const apiFiscalia = new ApiService()
    const response = await apiFiscalia.deleteFiscalia(url,id);
    if(response.status === 200){
      const deletedFiscalia = fiscalias.filter((fiscalia)=> fiscalia.id !== id )
      setFiscalias(deletedFiscalia);
    }

  }


  return (
 <>
    <Header/>
    <div className="container mx-auto">
      <div className='mt-12 md:flex'>
        <FormFiscalia setFiscalias={setFiscalias} fiscalias={fiscalias} fiscalia={fiscalia} setFiscalia={setFiscalia}/>
        <ListadoFiscalias fiscalias={fiscalias} setFiscalia={setFiscalia} deleteFiscalia={deleteFiscalia} />
      </div>
    </div>  
 </>
 )
}

export default App
