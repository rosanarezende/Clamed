// // // // EXEMPLOS DE IMPORTAÇÃO

// // // // // default
// // // import funcaoB from "./funcoes.js";

// // // default com outro nome
// // import funcaoBDoOutroArquivo from "./funcoes.js";

// // // // // comum
// // // import { funcaoC, funcaoD, nomeDoUsuario } from "./funcoes.js";

// // // comum com apelido
// // import { 
// //     funcaoC, 
// //     funcaoD as apelidoDaFuncaoD, 
// //     nomeDoUsuario as nomeDoMelhorUsuario 
// // } from "./funcoes.js";

// // // // default + comum
// // // import funcaoB, { funcaoC, funcaoD, nomeDoUsuario } from "./funcoes.js";


// // // // USANDO AS FUNÇOES IMPORTADA
// // function funcaoA() {
// //     console.log(`Executando função A que o ${nomeDoMelhorUsuario} gosta muito`);
// //     funcaoBDoOutroArquivo();
// //     funcaoC();
// //     apelidoDaFuncaoD();
// // }
// // funcaoA()

// // function funcaoB(){
// //     console.log("Sou a função B no arquivo principal");
// // }


// // // IMPORTAR COM ALIAS/APELIDO
// // import { funcaoC as minhaFuncaoC } from './funcoes.js'
// // function funcao() {
// //     console.log("Eu sou uma função");
// //     minhaFuncaoC();
// // }
// // funcao()

// // // IMPORTAR TUDO *
// // import * as minhasFuncoes from './funcoes.js'

// // function funcao() {
// //     console.log("Eu sou uma função");
// //     minhasFuncoes.default();
// //     minhasFuncoes.funcaoC();
// // }
// // funcao()


// // // IMPORTAR O DEFAULT E TODO O RESTO COM O *
// import funcaoB, * as minhasFuncoes from './funcoes.js'

// function funcao() {
//     console.log("Eu sou uma função");
//     funcaoB();
//     minhasFuncoes.funcaoC();
// }
// funcao()
