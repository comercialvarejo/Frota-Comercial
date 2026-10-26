// 1) Cole aqui o bloco de configuração do seu app Web do Firebase
//    (Firebase Console > Configurações do projeto > Seus apps > Configuração).
export const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

// 2) E-mail(s) da GTF de quem administra o app (cadastra as pessoas).
//    Precisa ser IGUAL ao e-mail colocado nas regras (firestore.rules).
export const ADMINS = ["SEU.EMAIL@gtf.com.br"];

// 3) E-mail que recebe o aviso das solicitações.
export const EMAIL_APROVACAO = "comercial.varejo@gtf.com.br";
