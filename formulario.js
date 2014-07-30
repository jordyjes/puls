var $form       =$('#formulario'),
	$titulo     =$('#titulo'),
	$url        =$('#link'),
	$lista      =$("#contenido"),
	$primerPost =$('.item').first();
     ss         = sessionStorage,
     ls         = localStorage;

if (ls.getItem('autosave'))
{
    $titulo.val(ss.getItem('titulo'));
    $url.val(ss.getItem('url'));
}

var id = setInterval(function()
    {
        ss.setItem('titulo', $titulo.val());
        ss.setItem('url', $url.val())
    },1000);


function mostrarOcultarFormulario()
{
	$form.slideToggle();/*slidetoggle hace un efecto de mostrar cuando el elemento esta oculto y ocultar cuan el elemento esta mostrado*/
    
    $lista.slideToggle();
	return false;
}

function agregarPost(e)
{
    e.preventDefault();
    var titulo = $titulo.val(),
    url = $url.val(),
    $clone =$primerPost.clone();
 
    $clone.find('.titulo_item a')
    	.text(titulo)
    	.attr('href', url);

    	$clone.hide();

     $lista.prepend($clone);
     mostrarOcultarFormulario();
     $titulo.val('');
     $url.val('');
     $clone.slideDown();
     return false;
}
function grabarInformacion(e)
{
    e.preventDefault();
    var titulo = $titulo.val(),
    url = $url.val(),
    
    ls= localStorage,
    ss=sessionStorage;

    ls.setItem('titulo',titulo);
    ls.setItem('url',url);

    ss.setItem('titulo',titulo);
    ss.setItem('url',url);

    mostrarOcultarFormulario();
     $titulo.val('');
     $url.val('');
}
$('#publicar_nav a').click( mostrarOcultarFormulario )
$('#formulario').on('submit',agregarPost)
/*$('#formulario').on('submit',grabarInformacion)*/


/*rony 961 150 1860. 
gonzalez

un termico se esta botando bodega de teran.*/