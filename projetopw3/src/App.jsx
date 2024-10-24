/* importa os componente de navegação da aplicação */
import { BrowserRouter,Routes,Route } from 'react-router-dom'

/* Importa o CSS */
import './App.css'

/* importa o componente de meu */
import NavBar from './components/layout/NavBar'

/* importa o componente de container */
import Container from './components/layout/Container'

import Home from './components/pages/Home'
import ListBook from './components/pages/ListBook'
import CreateBooks from './components/pages/CreateBooks'
import DetailBook from './components/pages/DetailBook'


function App() {

  return (
    <>
      {/* estrutura de navegaçao */}
      <BrowserRouter>

        <Container>

        <Routes>
          <Route path= '/' element={<NavBar/>}>
            <Route path= '/' element={<Home/>}/>
            <Route path= '/listBook' element={<ListBook/>}/>
            <Route path= '/createBook' element={<CreateBooks/>}/>
            <Route path= '/DetailBook/:cod_livro' element={<DetailBook/>}/>
          </Route>

        </Routes>

        </Container>

      </BrowserRouter>
      

    
    </>
  )
}

export default App
