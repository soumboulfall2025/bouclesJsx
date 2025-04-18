import React from "react";


const StatutUtilisateur = ({ estConnecte }) => {

    return (
        <div className="alert alert-info" role="alert">
            {estConnecte ? "Vous êtes connecté" : "Vous n'êtes pas connecté"}
        </div>
    );
}

export default StatutUtilisateur;