const PAGE_TIMEOUT = 10000

export default class BasePage {

    get title(){return $('#page-title')}
   /**
    * Abrir página
    * @param {String} ruta a la cual acceder
    */
    async abrir(ruta) {
        await browser.url(`${ruta}`);
        await browser.maximizeWindow()
    }


   /**
    * Esperar a que un elemento sea clickeable y hacer click
    * @param {Object} elemento a clickear
    */
   async clickearElemento(elemento) {
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.click();
     
   }

 
   /**
    * Método para enviar texto a un elemento
    * @param {Object} elemento que recibirá el texto
    * @param {String} texto a envíar 
    */
    async vaciarCampoYEnviarTexto(elemento, texto){
        await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
        await elemento.setValue(texto);
        
      }




}