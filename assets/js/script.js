//IIFE PATRON DE MODULO
let moduloVideo = (() => {

    function functionPrivada(url, id){
        var iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    return {
        funcionPublica:  function(url,id) {
           functionPrivada(url,id);
        }
    }

})();


/// CLASE PADRE 
class Multimedia{
    _url;

    constructor(url){
        this._url = url;
    }

    get url(){
        return this._url
    }

    set url(url){
        this._url = url
    }

    setInicio(){
       return "Este método es para realizar un cambio en la URL del video";
    }
}


/// CLASE HIJO
class Reproductor extends Multimedia{
    _id;

    constructor(url, id){
        super(url);
        this._id = id  
    }

    playMultimedia(){
        moduloVideo.funcionPublica(super.url, this._id)
    }

    setInicio(tiempoInicio){
        const nuevaUrl = super.url + `?start=${tiempoInicio}`;
        super.url = nuevaUrl;
    }
}

 //instancias de la clase hija 
 let musica = new Reproductor("https://www.youtube.com/embed/OSFVTFZBWBo", "musica");
 let pelicula = new Reproductor("https://www.youtube.com/embed/kg3Q63gzF6I", "peliculas");
 let serie = new Reproductor("https://www.youtube.com/embed/nj5BvZeXvMQ", "series");


//invocar metodo para cada instancia creada 
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// metodo setInicio para modificar el tiempo
pelicula.setInicio(30);
pelicula.playMultimedia();