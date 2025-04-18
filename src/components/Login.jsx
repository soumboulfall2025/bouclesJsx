import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin" && password === "admin") {
            setIsLoggedIn(true);
            setError(null);
        } else {
            setError("Email ou mot de passe incorrect");
        }
    };

    // Fonction pour gérer la déconnexion
    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
        setError(null);
    };

    // Fonction couleur pour le bouton de connexion
    const buttonStyle = {
        backgroundColor: isLoggedIn ? 'blue' : 'teal',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',

    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Bienvenue!</h2>
                    <button onClick={handleLogout}>Se déconnecter</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Connexion</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Entrez votre email"
                        />
                    </div>

                    <div>
                        <label>Mot de passe:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                    <button style={buttonStyle} type="submit">Se connecter</button>
                </form>
            )}
        </div>
    );
};

export default Login;