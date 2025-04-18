import React from "react";








const ListeDesArticles = ({ articles2 }) => {

    //console.log(props.articles);
    return (
        <>
        <h1>Liste des articles</h1>
        <p>Voici la liste des articles disponibles à la vente :</p>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Stocke</th>
                    <th scope="col">Image</th>

                </tr>
            </thead>
            <tbody>
                {articles2.map((article) => (
                    <tr>
                        <td>{article.titre}</td>
                        <td>{article.description}</td>
                        <td>{article.prix}</td>
                        <td>{article.stocke}</td>
                        <td><img src={article.image} alt={article.titre} style={{ width: '50px', height: '50px' }} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ListeDesArticles;