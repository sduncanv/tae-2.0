function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "última vez activo a las " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

var first = 0;

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
}
var name="";
function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "escribiendo...";
    
    const state = ["no me siento bien",
        "me siento mal",
        "no sé qué hacer", 
        "estoy triste",
        "soy maltratado por mis padres",
         "soy maltratado por mi familia",
         "soy maltratado por mis compañeros",
        "en mi familia no  toman encuentran mis opiniones",
        "sufro de bullying",
         "nadie me entiende",
        "todo el mundo se mete conmigo",
        "me siento solo",
        "me siento como un estorbo",
        "me siento ignorado por la gente",
        "no me gusta ser amigos",
        "no me gusta mi físico",
        "la vida no merece la pena",
        "pronto dejaré de sufrir",
        "podría morir ahora y nadie se daría cuenta",
        "ya no puedo más",
        "no logro hacer amigos" 
    ];
    const danger = [
        'fue abusado sexualmente',
        'me quiero morir',
        'me siento cansado de la vida',
        'me golpean constantemente en mi casa',
        'No puedo hablar de mis problemas con nadie ',
        'me van a matar ',
        'me quiero hacer daño',
        'me quiero suicidar',
        'en mi casa hay violencia familiar',
        'mi madre me golpea',
        'mi padre me golpea ',
        'fui amenazado ',
        'fui amenazada'
    ];
    const bad = [
        'tuve un mal día',
        'no quiero hablar',
        'me siento sola',
        'me siento solo',
        'me siento mal',
        'estoy muy mal',
        'no me siento bien',
        'mi día ni fue el mejor',
        'no me puedo expresar',
        'estoy muy triste',
    ];
    const confused = [
        '¿no sé qué siento?',
        '¿no sé qué tengo?',
        '¿no sé qué hacer con mi vida?',
        '¿no tengo un propósito en esta vida?',
        '¿no tengo un propósito?'
    ];
    if(state.includes(inputText.toLowerCase())){
        inputText="estado";
    }

    if(danger.includes(inputText.toLowerCase())){
        inputText="peligro";
    }

    if(bad.includes(inputText.toLowerCase())){
        inputText="bad";
    }

    if(confused.includes(inputText.toLowerCase())){
        inputText="confused";
    }

    if(inputText.toLowerCase().includes("me llamo")){
        name=inputText.substring(inputText.indexOf("llamo")+5);
        if(name.toLowerCase().includes("TAE")){
            sendTextMessage("Ohh! Ese es mi nombre también");
        }
        inputText="input";
    }

    if(first==1){
        name=inputText.substring();
        inputText="input";
    }

    if(inputText.toLowerCase().includes("bien")){
        inputText="bien";
    } else if(inputText.toLowerCase().includes("mal")){
        inputText="mal";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Holaa👋🏻,<br><br>Soy Tu Asistente Emocional <span class='bold'><a class='alink'>TAE</a>.</span><br><br>Soy un chatbot especialista en las emociones, el manejo y la mejora de ellas👨🏻‍💻📚</span><br><br>En ningún momento estaré capacitado para reemplazar a un profesional y te invito a contactar con alguno luego de esta asesoría.<br>Sé que hablar de nuestra salud emocional puede ser algo muy personal y valoro enormemente la confianza que estas teniendo en mí.<br>Por eso, quiero que tengamos mucha confianza, ten por seguro cuando escribas todo quedará entre tú y yo.<br>Suficiente de mí,  <span class='bold'>hablemos de ti.</span> ¿Cómo te llamas?<br>");
            }, 2000);
            break;

        case "opciones":
            sendTextMessage("<span class='sk'>Dime de qué te gustaría averiguar un poco más...<br>e.g<br><span class='bold'>'Inicio'</span> - para volver a la página principal<br><span class='bold'>'Emociones'</span> - para saber qué es la inteligencia emocional<br><span class='bold'>'Bullying'</span> - para conocer las consecuencias del bullying<br><span class='bold'>'Mejorar'</span> - Para aprender como mejorar la gestión de emociones <br><span class='bold'>'Escolar'</span> - para saber como mejorar la convivencia en la escuela<br><span class='bold'>'Familiar'</span> - para saber como mejorar la convivencia en el hogar<br><span class='bold'>'Clear'</span> - para limpiar el chat<br>");
            break;
        case "emociones":
            sendTextMessage("<p>La <strong>estabilidad emocional</strong> es la suficiencia que tiene la persona para llevar a cabo un mejo correcto de sus emociones de manera positiva para que este no afecte en su d&iacute;a a d&iacute;a.</p><p>Esto permite que nuestras emociones no se dejen llevar de manera negativa, incluso cuando no te est&eacute;s pasando por un buen momento en tu vida; es importante que tengamos buen manejo de nuestras emociones porque si actuamos de manera equivocada con las personas, podemos ocasionar da&ntilde;os en su estabilidad emocional.</p><p>Es considerable resaltar que la estabilidad emocional juega un papel fundamental en nuestra salud debido a que si damos un mal majo de ellas nos puede ocasionar da&ntilde;os como depresi&oacute;n, infartos y dependencia, entre otros.</p>");
            break;
        case "bullying":
            sendTextMessage("<p>El <strong>bullying</strong> puede ocasionar en las personas consecuencias muy graves como lo pueden ser la ansiedad y de esta puede desprenderse la depresi&oacute;n lo cual puede llevar a ocasionar problemas sociales, salud mental adaptaci&oacute;n en el colegio. Tocando el tema de los colegios, gracias al bullying los ni&ntilde;os y adolescentes pueden presentar una decadencia de rendimiento acad&eacute;mico, lo cual puede verse afectado en un futuro.</p>");
            break;

        case "confused":
            sendTextMessage("Recuerda que no tiene nada de malo sentir. De hecho, es de las cosas más bonitas que tiene el ser humano, así que no te asustes si tienes ganas de llorar solo déjalo salir ☺️.Sentirnos mal es normal, pero debe ser pasajero, si sientes que llevas mal más de dos semanas, por favor busca ayuda profesional.No podemos con todo solos y no tendríamos por qué poder.")
            break;

        case "bad":
            sendTextMessage("Vaya...que triste saber que estás pasando por un mal momento, estas en toda tu libertad de sentirte tan mal como lo necesites, pero solo por un momento 🤏. <br>¿Quieres que te diga por qué?<br><br>Normalmente los demás nos dicen frases como 'no estés triste',  o 'no te enojes', e incluso 'no dejes que esas cosas te afecten'.Pero eso no es verdad, la forma más rápida de dejar de sentir algo es ✨sintiéndolo ✨. Claro, hay emociones que son muy feas pero ¿te has preguntado si realmente te permites sentirlas? Y es súper normal pensar que si no estamos muy  bien es porque algo estamos haciendo mal, entonces lo primero que hacemos es huir de esas emociones. Por eso me gustaría que hicieras cosas que te gusten, para que distraigas tu mente y veras como ✨todo pasa✨")
            break; 

        case "mejorar":
            sendTextMessage("<p>&iquest;Como puedo mejorar mis emociones?</p><p>Existen distintas estrategias que nos pueden llevar a tener un mejor control de nuestras emociones, estas estrategias pueden ser:</p><ol><li>Entiende tus emociones.</ol><p>Esto hace referencia al tiempo que debemos tomar como personas para reflexionar sobre como nos sentimos al respecto y el porque de ciertas reacciones que tuvimos en momentos donde nuestras emociones tuvieron m&aacute;s poder que nuestro razonamiento, es decir, actuar de manera correcta para as&iacute; evitarnos el sentimiento de culpa.</p><p>&nbsp;</p><ol><li>Pr&aacute;ctica la escucha activa.</li></ol><p>Es importante la escucha activa ya que esta nos permite relacionarnos con las dem&aacute;s personas de nuestro entorno y as&iacute; prestar atenci&oacute;n no solo a lo que dicen con sus palabras sino tambi&eacute;n lo que expresan con su cuerpo. &nbsp;</p><p>&nbsp;</p><ol><li>No te tomes mal las cr&iacute;ticas.</li></ol><p>Aprender a recibir las cr&iacute;ticas de buena manera nos ayuda a tener un buen manejo de las emociones por ello el estar pendiente de lo que los dem&aacute;s dices sobre ti es un indicio de que no manejas la autoconfianza y no te has encargado de buscar tu paz interior.</p><ol><li>Trabaja la autoaceptaci&oacute;n.</li></ol><p>Actualmente se presenta el problema de o aceptarse a uno mismo tal y como somos, y al no auto aceptarnos nos lleva a adquirir una mentalidad defensiva que nos deja como consecuencia un descontrol emocional. Aceptarte tal y como eres te har&aacute; sentirte una persona mas segura y esto te ayudar&aacute; a tratar los conflictos interpersonales de la mejor manera posible.</p>");
            break;

        case "escolar":
            sendTextMessage("<p>Convivencia Escolar.</p><p>La convivencia escolar es un &aacute;rea muy amplia donde solo no est&aacute; enfocada en los estudiantes, en ella tambi&eacute;n est&aacute; incluida el &aacute;rea de los profesores y directivos del colegio. Algunas estrategias para mejorar la convivencia escolar son:</p><ul><li>Hacer proyectos de cooperaci&oacute;n.</li></ul><p>Esto ayudar&aacute; a que los alumnos interact&uacute;en entre ellos logrando as&iacute; formar un v&iacute;nculo que har&aacute; que se mejore la convivencia entre ellos.</p><p>&nbsp;</p><ul><li>Establecer reglas de trato hacia los compa&ntilde;eros.</li></ul><p>Todos somos iguales y debemos ser tratados por igual, por lo que las reglas contra el mal comportamiento o el acoso escolar ayudar&aacute;n a promover la idea de una sana convivencia ya sea en el aula de clase o en el colegio en general.</p><ul><li>Promover actividades din&aacute;micas y de participaci&oacute;n.</li></ul><p>La participaci&oacute;n de los estudiantes es fundamental en el aula para crear una buena convivencia entre ellos, lo cual les permitir&aacute; a aquellos estudiantes introvertidos inicien a comunicarse de manera mas eficaz.</p>");
            break;   
        
        case "estado":
            sendTextMessage("Primero tienes que mantener la calma, estoy aquí para escucharte en las buenas y en las malas, para compartir contigo técnicas para cuidar y manejar tus emociones y, sobre todo, para ayudarte a utilizar tus fortalezas para construir la vida que quieres para ti.<br>En casos como este, creo que ayudará mucho enfocar tu mente, en que primero tú estés bien.<br>Ahora bien, en esta vida para todo hay solución.")
            break; 
            
        case "peligro":
            sendTextMessage("¡Espera!🆘Estoy detectando una emergencia y no soy el encargado para esto, te sugiero que te comuniques directamente con un experto, aquí te dejo las líneas. <br><ul></ul><li>Doctora Heledis Escobar Munive, teléfono 3014151738.</li><li>Orientación a mujeres víctimas de violencia: 155</li><li>Hacer una denuncia o pedir orientación sobre casos de maltrato infantil: 141</li><li>Línea de la vida: 3399999  funciona las 24 horas del día atendiendo a las personas que sientan algún requerimiento entorno a salud emocional.</li></ul>")
            break;

        case "familiar":
            sendTextMessage("<p>Convivencia Familiar.</p><p>Los valores son inculcados en el hogar, por lo que tener una excelente convivencia familiar representar&aacute; un magnifico desarrollo en el ni&ntilde;o o adolescente, entendiendo como este distingue su entorno. Algunas estrategias para mejorar la convivencia familiar son:</p><ul><li>Respetar el tiempo de cada miembro.</li></ul><p>Cada miembro de la familia debe tener sus propias responsabilidades y un tiempo determinado para su cumplimiento. Esto promueve que se rompa alg&uacute;n circulo de favoritismo y haya m&aacute;s espacio para la convivencia.</p><ul><li>Tiempo en el que se puede convivir en familia.</li></ul><p>Al pasar tiempo con una persona, hablar y conocerse, las personas pueden entenderse mejor. Estas actividades hacen que las personas tengan una mayor empat&iacute;a por los dem&aacute;s, lo que mejora la convivencia familiar.</p><ul><li>Comunicarse con los otros miembros de la familia.</li></ul><p>El tener un buen trato con los dem&aacute;s miembros de la familia ayudara que la comunicaci&oacute;n este siempre presente. Es importante la b&uacute;squeda de temas interesantes ya que esto ayudara a conocer cada uno de los puntos de vista de los miembros.</p><ul><li>Comprende los gustos de los dem&aacute;s.</li></ul><p>Aunque son familia, cada uno es diferente. Es fundamental aprender a tolerar los gustos de cada uno. Lo mejor que se podr&iacute;a hacer es realizar un esfuerzo por conectarse con los dem&aacute;s, compartir gustos o simplemente respetar las cosas que quiz&aacute;s no te hayan llamado la atenci&oacute;n del otro.</p>");
            break;

        case "clear":
            clearChat();
            break;
        
        case "bien":
            sendTextMessage("<span class='sk'>Me alegra mucho leer eso😄<br>🤔Revisemos cómo puedo ayudarte a mantener el buen animo...<br>Escribe <span class='bold'>'Juegos'</span> para que puedas divertirte y mantener una sonrisa</span>")
            break;
        
        case "en ocasiones me aislo cuando estoy rodeado por muchas personas":
            sendTextMessage("Te recomiendo comentarle a la persona con quien tengas más confianza, con respecto a lo que me comentaste, o buscar ayuda profesional.");
            break;
        
        case "me frustro con facilidad cuando no logro alcanzar lo que deseo":
            sendTextMessage("Mantén una actitud pacífica y ten en cuenta que no siempre podemos alcanzar las cosas de manera inmediata o positiva. Coméntales a tus padres o personas de confianza acerca de tu comportamiento.");
            break;
        
        case "siento pánico escénico":
            sendTextMessage("Recuerda que posees muchas capacidades, las cuales debes poner en práctica para combatir tus miedos. Te recomiendo exponer el caso a tus padres, profesores y psicóloga Heledis Escolar, teléfono 3014151738");
            break;

        case "estoy desesperado por mi situación familiar, mis padres se divorciarán y emocionalmente me siento muy afectado":
            sendTextMessage("Debes concientizarte que al principio de una separación, te sentirás triste, pero ten en cuenta que el amor de tus padres hacia ti siempre estará presente, aunque no convivan. Juntos, dialoga con ellos, respecto a cómo te ha afectado este cambio. ");
            break;

        case "hay días en que lloro con facilidad, siento poco interés en realizar mis compromisos, para mí nada tiene sentido":
            sendTextMessage("Analiza, si hay en particular algo que despierte este comportamiento te sugiero comentarle a tus padres o profesionales.<br> Heledis Escolar, teléfono 3014151738")
            break;

        case "mal":
            sendTextMessage("<span class='sk'>Me entristece mucho leer eso😞<br><br>🤔Revisemos cómo puedo ayudarte a recuperar el buen animo...<br><br>💙Escribe <span class='bold'>'Juegos'</span> para que puedas distraerte y quizás te logre sacar una sonrisa<br>💙Tambien puedes escribir <span class='bold'>'Opciones'</span> para recibir algunos consejos<br>💙Finalmente, puedes escribir <span class='bold'>'Ayuda'</span> para contactarte con mi aliada que estará feliz de escucharte...</span>")
            break;

        case "hola":
            sendTextMessage("Holaaa👋🏻");
            break;   
        
        case "ayuda":
            sendTextMessage("Dra. <span class='bold'><a class='alink'> Heledis Escobar Munive</a>.</span><br>Tel. 313967382");
            break;

        case "TAE":
            sendTextMessage("Sí, ese soy yo :)");
            break;
        case "Asistente Emocional":
            sendTextMessage("Sí, ese soy yo :)");
            break;
        
        case "inicio":
            sendTextMessage("Click aqui para volver al inicio <a href='../index.html'>Home</a>");
            break;

        case "juegos":
            sendTextMessage("Click aqui para ver los juegos que tengo para ti <a href='../games.html'>Juegos</a>");
            break;
        
        case "s":
            sendTextMessage("Holaaa👋🏻 ¿Cómo estás?");
            break;
        
        case "Hey":
            sendTextMessage("Holaaa👋🏻 ¿Cómo estás?");
            break;

        case "Buenos Dias":
            sendTextMessage("Holaaa👋🏻 ¿Cómo estás?");
            break;

        case "Buenas Tardes":
            sendTextMessage("Holaaa👋🏻 ¿Cómo estás?");
            break;

        case "Buenas Noches":
            sendTextMessage("Holaaa👋🏻 ¿Cómo estás?");
            break;

        case "Buenas":
            sendTextMessage("Holaaa👋🏻 ¿Cómo estás?");
            break;
            
        case "input":
            setTimeout(()=>{
                sendTextMessage("Hola "+name+"! Como estas?");
            },2000);
            
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Es un gusto hablar contigo, "+name+"<br>Escribe 'opciones' para mostrarte cómo puedo ayudarte el día de hoy.");
            }, 2000);
            break;
    }

    first++;

}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
}
