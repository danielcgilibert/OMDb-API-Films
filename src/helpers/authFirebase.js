import { firebase } from '../firebase/config'

export const crearUsuario = (datosRegistro) => {
    const {emailRegistro, passwordRegistro} = datosRegistro;
    console.log(emailRegistro,passwordRegistro);

    firebase.auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then(userCredential => {
        return userCredential;
    })
}

export const loginUsuario = (datosUsuario) => {
    const {email, password} = datosUsuario;

    return firebase.auth().signInWithEmailAndPassword(email, password)
    
}

export const loginGoogle = () => {

     const provider = new firebase.auth.GoogleAuthProvider();
     return provider;
    //  return firebase.auth().signInWithPopup(provider);
    
}