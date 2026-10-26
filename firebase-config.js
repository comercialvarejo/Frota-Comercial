// 1) Cole aqui o bloco de configuração do seu app Web do Firebase
//    (Firebase Console > Configurações do projeto > Seus apps > Configuração).
 const firebaseConfig = {
  apiKey: "AIzaSyCu0Km0NZRzEN7gLgAfTS_7oq-uo4M_P_8",
  authDomain: "frota-comercial2.firebaseapp.com",
  projectId: "frota-comercial2",
  storageBucket: "frota-comercial2.firebasestorage.app",
  messagingSenderId: "706758740650",
  appId: "1:706758740650:web:82d4111297d9c992fcded3"
};

// 2) E-mail(s) da GTF de quem administra o app (cadastra as pessoas).
//    Precisa ser IGUAL ao e-mail colocado nas regras (firestore.rules).
export const ADMINS = ["comercial.varejo@gtf.com.br"];

// 3) E-mail que recebe o aviso das solicitações.
export const EMAIL_APROVACAO = "comercial.varejo@gtf.com.br";
