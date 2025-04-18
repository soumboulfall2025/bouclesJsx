
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './components/Message.jsx';
import ListeDesArticles from './components/ListeDesArticles.jsx';
import StatutUtilisateur from './components/StatutUtilisateur.jsx';


function App() {
  const articles = ["ordi", "tele", "montre"]
  const articles2 = [
    { titre: 'Article 1', description: 'Description de l\'article 1', prix: 10 , stocke : 10 , image: 'https://sportal.es/wp-content/uploads/2025/04/cristiano-ronaldo_1311285Photogallery-1.webp' },
    { titre: 'Article 2', description: 'Description de l\'article 2', prix: 20 ,  stocke : 10, image: 'https://sportal.es/wp-content/uploads/2025/04/cristiano-ronaldo_1311285Photogallery-1.webp' },
    { titre: 'Article 3', description: 'Description de l\'article 3', prix: 15 ,  stocke : 10, image: 'https://sportal.es/wp-content/uploads/2025/04/cristiano-ronaldo_1311285Photogallery-1.webp' },
    { titre: 'Article 4', description: 'Description de l\'article 4', prix: 25 ,  stocke : 10, image: 'https://sportal.es/wp-content/uploads/2025/04/cristiano-ronaldo_1311285Photogallery-1.webp' },
    { titre: 'Article 5', description: 'Description de l\'article 5', prix: 30 ,  stocke : 10, image: 'https://sportal.es/wp-content/uploads/2025/04/cristiano-ronaldo_1311285Photogallery-1.webp' },
    { titre: 'Article 6', description: 'Description de l\'article 6', prix: 12 ,  stocke : 10, image: 'https://sportal.es/wp-content/uploads/2025/04/cristiano-ronaldo_1311285Photogallery-1.webp' },
    { titre: 'Article 7', description: 'Description de l\'article 7', prix: 18 ,  stocke : 10, image: 'https://sportal.es/wp-content/uploads/2025/04/cristiano-ronaldo_1311285Photogallery-1.webp' },
  ];
    const estconnecte = false;
  
  return (
    <div>
      <StatutUtilisateur estConnecte={estconnecte} />
      <Message user="SOULEYMANE DIOP " />
      <ListeDesArticles  articles2 = {articles2}/>
      

    </div>
  );
}

export default App;
