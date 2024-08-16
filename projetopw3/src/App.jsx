/* Importa o CSS */
import './App.css'

/* importa o componente de card de livro */
import CardBooks from './components/CardBooks'

/* Importa o arquivo de imagem da capa do livro */
import capaLivro from './assets/livros/cavernas_aco.jpg'

function App() {

  return (
    <>
      
      <CardBooks 
        titulo = 'As Cavernas de Aço'
        autor = 'Isaac Asimov'
        imagem = {capaLivro}
      />
    
    </>
  )
}

export default App
