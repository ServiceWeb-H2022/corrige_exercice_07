# Exercice 07 - L'état local

Pour mettre en pratique ce qu'on a vu à propos de l'état local d'un composant (l'objet state), nous allons créer les trois composant suivant qui vont interagir entre eux en modifiant les titres de chacun.

![exercice07_01](\img\exercice07_01.png)

## Mise en place

Vous devez créer les trois composants suivant : 

- MainBox
- MiddleBox
- EditBox

Chaque composante contient le suivant (MainBox est le parent de MiddleBox qui est lui-même parent de EditBox). Je vous donne <u>une partie</u> du code HTML que la fonction **render()** va retourner ainsi que le style css.

App.js

``````react
import './App.css';
import MainBox from './MainBox';

function App() {
  return (
    <div className="App">
        <MainBox />
    </div>
  );
}

export default App;
``````



MainBox.js

``````react
render() {
    return (
        <div className='box'>
            <h1>{this.state.boxTitle}</h1>
            <div className='box_saisie box_saisie_main'>
                <label htmlFor='titreMainBox'>Titre Box </label>
                <input
                    type="text"
                    id="titreMainBox"
                    name="titreMainBox"
                    />
            </div>

            <MiddleBox />

        </div>
    );
}
``````

MiddleBox.js

``````react
render() {
    return (
        <div className='box'>
            <h2>{this.state.boxTitle}</h2>
            <div className='box_saisie box_saisie_middle'>
                <label htmlFor='titreMiddleBox'>Titre Box </label>
                <input
                    type="text"
                    id="titreMiddleBox"
                    name="titreMiddleBox"
                    />
            </div>

            <EditBox />
        </div>
    );
}
``````

EditBox.js

``````react
render() {
	return (
        <div className='box'>
            <h3>{this.state.boxTitle}</h3>
            <div>
                <div className='box_saisie'>
                    <label htmlFor='titreMainBox'>Titre MainBox </label>
                    <input
                        type="text"
                        id="titreMainBox"
                        name="titreMainBox"
                    />
        		</div>

                <div className='box_saisie'>
                    <label htmlFor='titreMiddleBox'>Titre MiddleBox </label>
                    <input
                        type="text"
                        id="titreMiddleBox"
                        name="titreMiddleBox"
                    />    
                </div>

                <div className='box_saisie'>
                    <label htmlFor='boxTitle'>Titre EditBox </label>
                    <input
                        type="text"
                        id="boxTitle"
                        name="boxTitle"
                    />
                </div>
			</div>
		</div>
	);
}
``````

App.css

``````css
.App {
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.box {
  border: 2px solid #61dafb;
  padding: 10px;
  border-radius: 5px;
}

.box_saisie {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2px;
  gap: 10px
}

.box_saisie_main {
  padding: 0 20px 10px 20px;
}

.box_saisie_middle {
  padding: 0 10px 10px 10px;
}

h1, h2, h3 {
  margin: 20px 0;
}
``````

## Instruction

- Dès qu'on modifie la valeur d'une des zones de saisie, le texte doit être modifié dans tous les champs correspondants (zone de saisie, titre). Ex si je modifie dans le composant EditBox la valeur dans le champ de saisie pour le composant MainBox, la valeur sera aussi modifié dans le champ de saisie du composant MainBox ainsi que son titre.
- Complétez les fonctions render() de chaque composant avec ce qui manque et ajouter les fonctions de retour au bon endroit.
- Inspirez-vous des notes de cours, toutes les réponses y sont.
