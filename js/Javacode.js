var data = {
    chatinit: {
        title: ["Olá! Eu sou o seu Assistente Fiscal <span class='emoji'> &#128075;</span>", "O que posso te ajudar?"],
        options: ["Tributação Atualizada", "Regra de Transição", "Comparativo Tributário"],
        prox: "perg1"
    },

    perg1:
    {
        title: ["Qual Operação?"],
        options: ['Entrada', 'Saída'],
        url: {},
        prox: "perg2"
    },

    perg2:
    {
        title: ["Qual finalidade?"],
        //options:['Importação, Compra para Industrialização, Compra para Revenda, Uso e Consumo'],
        options: ['Venda de Industrialização', 'Revenda', 'Exportação'],
        url: {},
        prox: "perg3"
        //    prox: "end"
    },

    perg3:
    {
        title: ["Qual é a sua UF Origem?"],
        options: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO', 'EX'],
        url: {},
        prox: "perg4"
    },

    perg4:
    {
        title: ["Qual é a sua UF Destino?"],
        options: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO', 'EX'],
        url: {},
        prox: "perg5"
    },

    perg5:
    {
        title: ["Qual Regime Tributário de Origem?"],
        options: ['Indústria', 'Comércio', 'Exterior'],
        url: {},
        prox: "perg6"
    },

    perg6:
    {
        title: ["Qual Regime Tributário de Origem?"],
        options: ['Indústria', 'Comércio', 'Consumidor Final', 'Exterior'],
        url: {},
        prox: "perg7"
    },

    perg7:
    {
        title: ["Qual NCM do produto?"],
        //options:[''],
        url: {},
        prox: "end"
    },

}


document.getElementById("cmdIniciar").addEventListener("click", showChatBot);
// var cbot= document.getElementById("chat-box");
var cbot = document.getElementById("messages");

var len1 = data.chatinit.title.length;

function showChatBot() {
    // console.log(this.innerText);
    if (this.innerText == 'Iniciar Assistente') {
        document.getElementById('test').style.display = 'block';
        document.getElementById('cmdIniciar').innerText = 'Encerrar Assistente';
        initChat();
    }
    else {
        location.reload();
    }
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 1000));
    }
    setTimeout(function () {


        //console.log(data);

        showOptions(data.chatinit.options, data.chatinit.prox)
    }, ((len1 + 1) * 1000))
}

var j = 0;
function handleChat() {

    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();

    //console.log(elm);
}

function showOptions(options, prox) {

    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.setAttribute("prox", prox);
        opt.addEventListener("click", handleOpt);

        //console.log(opt);

        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {

    //console.log(this);
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];
    var prox = this.attributes.prox.value

    //console.log(prox);

    document.querySelectorAll(".opt").forEach(el => {
        el.remove();
    })
    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    //var sp= '<span class="rep">'+this.innerText+'</span>';
    //var sp= '<span class="rep">'+this.innerText+'</span>';

    //var sp = '<span style="font-weight:bold;font-size: 16px" class="rep">' + this.innerText + '</span>';

    //var sp = '<span style="font-weight:bold;font-size: 16px;float: left;">' + this.innerText + '</span>';
    var sp = '<span style="font-weight:bold;font-size:15px;text-align: left;">' + this.innerText + '</span>';

    elm.innerHTML = sp;
    cbot.appendChild(elm);


    // var tempObj= data[findText.toLowerCase()];

    var tempObj = data[prox.split(" ")];

    
    // aqui
    if (tempObj.prox == "end") {
        console.log("end");
        txtNCM.setAttribute("type", "text");
        bttcalcular.hidden = false;

        handleDelay(tempObj.title);

        return;
    }

    handleResults(tempObj.title, tempObj.options, tempObj.url, tempObj.prox);
}

function handleDelay(title) {
    var elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
}


function handleResults(title, options, url, prox) {

    //console.log(title)

    for (let i = 0; i < title.length; i++) {
        setTimeout(function () {
            handleDelay(title[i]);
        }, i * 1000)

    }


    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }


    if (isObjectEmpty(url) == true) {
        // console.log("having more options");
        setTimeout(function () {
            showOptions(options, prox);
        }, title.length * 1000)

    }
    else {
        // console.log("end result");
        setTimeout(function () {
            handleOptions(options, url, prox);
        }, title.length * 1000)

    }
}
function handleOptions(options, url, prox) {

    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<a class="m-link" href="' + url.link[i] + '">' + options[i] + '</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.setAttribute("prox", prox);
        cbot.appendChild(opt);
    }

    var opt = document.createElement("span");
    //var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';


    // const isObjectEmpty= (url)=>{
    //     return JSON.stringify(url)=== "{}";
    // }

    // console.log(isObjectEmpty(url));
    // console.log(url);
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    opt.setAttribute("prox", prox);


    console.log(opt);

    cbot.appendChild(opt);
    handleScroll();
}
function handleScroll() {
    var elem = document.getElementById('messages');
    elem.scrollTop = elem.scrollHeight;

    //var elem= document.getElementById('chat-box');
    //elem.scrollTop= elem.scrollHeight;
}







function calcularTributacao() {

    var opt = document.createElement("span");
    var inp = '<span style="font-weight:bold;font-size:15px;text-align: left;">' + txtNCM.value + '</span>';
    opt.innerHTML = inp;

    cbot.appendChild(opt);
    handleScroll();

    txtNCM.setAttribute("type", "hidden");
    bttcalcular.hidden = true;

    // //var perguntaNCM = document.getElementById('messages');
    // var opt = document.createElement("span");
    // var sp = '<span style="font-weight:bold;font-size:16px;text-align: left;">' + txtNCM.value + '</span>';

    // perguntaNCM.innerHTML = sp;
    // cbot.appendChild(sp);

    var texto = `
    <p><span style="font-size:14px"><strong>NCM</strong></span></p>
    <p><span style="font-size:14px">C&oacute;digo: 2202.10.00</span></p>
    <p><span style="font-size:14px">Descri&ccedil;&atilde;o: &Aacute;guas, incluindo as minerais e gaseificadas, adicionadas de a&ccedil;&uacute;car ou de outros edulcorantes ou aromatizadas, e outras bebidas n&atilde;o alco&oacute;licas, exceto sucos de frutas ou de produtos hort&iacute;colas.</span></p>
    <p><span style="font-size:14px"><strong>Exemplos de produtos</strong></span></p>
    <ul>
        <li><span style="font-size:14px">&Aacute;guas saborizadas (com adi&ccedil;&atilde;o de a&ccedil;&uacute;car, ado&ccedil;antes ou aromatizantes):</span>
            <ul>
                <li><span style="font-size:14px">Bonafont Lev, H2OH!</span></li>
            </ul>
        </li>
        <li><span style="font-size:14px">Refrigerantes (&agrave; base de &aacute;gua gaseificada e a&ccedil;&uacute;car/ado&ccedil;antes):</span>
            <ul>
                <li><span style="font-size:14px">Coca-Cola, Pepsi</span></li>
            </ul>
        </li>
        <li><span style="font-size:14px">Ch&aacute;s prontos para consumo (com a&ccedil;&uacute;car ou ado&ccedil;antes):</span>
            <ul>
                <li><span style="font-size:14px">Lipton Ice Tea, Matte Le&atilde;o pronto para beber</span></li>
            </ul>
        </li>
    </ul>
    <p><span style="font-size:14px"><strong>Tributa&ccedil;&atilde;o</strong></span></p>
    <ul>
        <li><span style="font-size:14px">CBS: 9,3%</span></li>
        <li><span style="font-size:14px">IBS: 18,7%</span></li>
        <li><span style="font-size:14px">IS: 0%</span></li>
        <li><span style="font-size:14px">IVA Total: 28%</span></li>
    </ul>
    <p><span style="font-size:14px"><strong>Vig&ecirc;ncia</strong></span></p>
    <p><span style="font-size:14px">De: 01/01/2026</span></p>
    <p><span style="font-size:14px">At&eacute;: sem data definida (vig&ecirc;ncia em aberto)</span></p>
    <p><span style="font-size:14px"><strong>Informa&ccedil;&otilde;es complementares</strong></span></p>
    <p><span style="font-size:14px">De acordo com a reforma, produtos como bebidas a&ccedil;ucaradas estar&atilde;o sujeitos ao Imposto Seletivo (IS), que visa desestimular o consumo de itens prejudiciais &agrave; sa&uacute;de.</span></p>
    <p><span style="font-size:14px">Portanto, al&eacute;m das al&iacute;quotas padr&atilde;o da CBS e do IBS, as bebidas classificadas no NCM 2202 estar&atilde;o sujeitas ao Imposto Seletivo. As al&iacute;quotas espec&iacute;ficas do IS para essas bebidas ainda n&atilde;o foram definidas e dever&atilde;o ser estabelecidas em legisla&ccedil;&atilde;o complementar. &Eacute; importante ressaltar que a implementa&ccedil;&atilde;o desses tributos ser&aacute; gradual, com a transi&ccedil;&atilde;o completa prevista para 2033.</span></p>
    <p><span style="font-size:14px"><strong>Refer&ecirc;ncias</strong></span></p>
    <p><span style="font-size:14px"><a href="https://www12.senado.leg.br/noticias/materias/2025/01/17/pais-tera-nova-tributacao-sobre-consumo-a-partir-de-2026">https://www12.senado.leg.br/noticias/materias/2025/01/17/pais-tera-nova-tributacao-sobre-consumo-a-partir-de-2026</a></span></p>
    <p><span style="font-size:14px"><a href="https://pt.wikipedia.org/wiki/Reforma_tribut%C3%A1ria_do_Brasil">https://pt.wikipedia.org/wiki/Reforma_tribut%C3%A1ria_do_Brasil</a></span></p>
    <p><span style="font-size:14px"><a href="https://cosmos.bluesoft.com.br/ncms/22021000-aguas-incluindo-as-aguas-minerais-e-as-aguas-gaseificadas-adicionadas-de-acucar-ou-de-outrosedulcorantes-ou-aromatizadas">https://cosmos.bluesoft.com.br/ncms/22021000-aguas-incluindo-as-aguas-minerais-e-as-aguas-gaseificadas-adicionadas-de-acucar-ou-de-outrosedulcorantes-ou-aromatizadas</a></span></p>
    <p><span style="font-size:14px"><a href="https://saipos.com/ncm/ncm-refrigerante">https://saipos.com/ncm/ncm-refrigerante</a></span></p>
    <p><span style="font-size:14px"><a href="https://mixfiscal.com.br/tributacao-em-geral/ncm-iguais-com-cests-diferentes">https://mixfiscal.com.br/tributacao-em-geral/ncm-iguais-com-cests-diferentes</a></span></p>
    <p>&nbsp;</p>
    `;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = texto;

}