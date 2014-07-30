var $form = $('#formulario'),
	$titulo=$('#titulo'),
	$url=$('#link'),
	$lista=$("#contenido"),
	$primerPost =$('.item').first();

function mostrarOcultarFormulario()
{
	$form.slideToggle();
	return false;
}

function agregarPost()
{
 var titulo = $titulo.val(),
    url = $url.val(),
    $clone =$primerPost.clone();
 
    $clone.find('.titulo_item a')
    	.text(titulo)
    	.attr('href', url);

    	$clone.hide();

    $lista.prepend($clone);
 
     $clone.fadeIn();
}
$('#publicar_nav a').click( mostrarOcultarFormulario )
$('#formulario').on('submit',agregarPost)


/*rony 961 150 1860. 
gonzalez

un termico se esta botando bodega de teran.*/