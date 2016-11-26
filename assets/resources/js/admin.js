var URL = window.location,
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

// Sidebar
$(function () {
    var setContentHeight = function () {
        // reseta altura
        $RIGHT_COL.css('min-height', $(window).height());

        var bodyHeight = $BODY.height(),
            leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
            contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // configura página de conteúdo
        contentHeight -= $NAV_MENU.height() + $FOOTER.height();

        $RIGHT_COL.css('min-height', contentHeight);
    };

    $SIDEBAR_MENU.find('a').on('click', function (ev) {
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active');
            $('ul:first', $li).slideUp(function () {
                setContentHeight();
            });
        } else {
            // previse que o menu seja fechado estando nos itens de menus filhos.
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active');
                $SIDEBAR_MENU.find('li ul').slideUp();
            }

            $li.addClass('active');

            $('ul:first', $li).slideDown(function () {
                setContentHeight();
            });
        }
    });

    // menu responsivo
    $MENU_TOGGLE.on('click', function () {
        if ($BODY.hasClass('nav-md')) {
            $BODY.removeClass('nav-md').addClass('nav-sm');
            $LEFT_COL.removeClass('scroll-view').removeAttr('style');

            if ($SIDEBAR_MENU.find('li').hasClass('active')) {
                $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
            }
        } else {
            $BODY.removeClass('nav-sm').addClass('nav-md');

            if ($SIDEBAR_MENU.find('li').hasClass('active-sm')) {
                $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
            }
        }
        setContentHeight();
    });

    // vefica se o meno esta ativo ou não e qual pagina está
    $SIDEBAR_MENU.find('a[href="' + URL + '"]').parent('li').addClass('current-page');

    $SIDEBAR_MENU.find('a').filter(function () {
        return this.href == URL;
    }).parent('li').addClass('current-page').parents('ul').slideDown(function () {
        setContentHeight();
    }).parent().addClass('active');

    // organiza a diminsão do conteúdo.
    $(window).smartresize(function () {
        setContentHeight();
    });

});

function insereSelect() {
    console.log("quququq");
    var x = document.getElementsByTagName('select')[0].length;
    document.getElementsByName("selecionandofotos")[0].innerHTML = "Quantide de clientes: " + x;
}

function verFotosSelecionadas() {
    var variaveleSelect = $('select');
    for (chave in localStorage) {
        if (chave.indexOf("FotosSalvasDe") >= 0) { //esta é a chave de um cliente que enviou fotos
            console.log("dentro do if");
            var chaveDoCliente = chave.replace("FotosSalvasDe", "");
            console.log("dentro do if chaveDoCliente" + chaveDoCliente);
            //botar no select
            variaveleSelect.append('<option val="' + chaveDoCliente + '">' + chaveDoCliente + '</option>');
        }
    }
}
//teste
function verSeLogado() {
    var estaLogado = sessionStorage.getItem('logouAdmin');
    //localStorage.setItem("logou", "231");
    console.log("esta logado " + estaLogado);
    if (estaLogado == '007700') {
        return true;
    } else {
        alert("Você precisa fazer o login.");
        // deslogar(); //pra este caso limpar Pra dar certo qdo logar 
        window.location = "index.html";
        return false;
    }
    return false;
}

function deslogar() {
    sessionStorage.removeItem("logouAdmin");
    window.location = "index.html";
}