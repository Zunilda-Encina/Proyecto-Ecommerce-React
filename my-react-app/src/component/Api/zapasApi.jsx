const ModelosDeZapatillas = [
    {
        nombre: "Nike AirUptempo",
        color: "brown",
        imagen:"https://nikearprod.vtexassets.com/arquivos/ids/532475-800-800?v=638161393876100000&width=800&height=800&aspect=true",
        precio: "120 USD",
        talle: ["11", "10", "9", "8"],
        id: "Uptempo",
        Description:"Nada refleja tanto el amor como el Air. El cuero café premium perforado y los detalles rosas de ensueño crean un calzado realmente llamativo. Nunca tímido, el siempre llamativo Air More Uptempo ha sido cálido desde su debut en el 96. La amortiguación Nike Air visible mantiene la ligereza y la ventilación en cada paso, mientras que las agujetas elásticas te permiten moverte con comodidad."
    },
    {
        nombre: "Nike Court",
        color: "White And Green",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531729-1000-1000?v=1781196477&width=1000&height=1000&aspect=true",
        precio: "100 USD",
        talle: ["11", "10", "9", "8"],
        id: "Court",
        Description:"Honrando una historia arraigada en la cultura del tenis, el Nike Court Legacy te trae un básico probado por el tiempo. La parte superior rugosa, las costuras tradicionales y un Swoosh retro permiten combinar deporte y moda. Y puedes hacer el bien luciendo bien"
    },
    {
        nombre: "Nike Dunk",
        color: "Black And White",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/452120-800-800?v=638149279121200000&width=800&height=800&aspect=true",
        precio: "110 USD",
        talle: ["11", "10", "9", "8"],
        id: "Dunk",
        Description:"El ícono ochentero del básquetbol, que se creó para la cancha pero conquistó las calles, vuelve con revestimientos suaves y vibras de básquetbol clásico. Regresamos un estilo vintage a las calles; su cuello high y acolchonado te permite llevar tu juego cómodamente a cualquier lugar."
    },
    {
        nombre: "Nike DunkLow",
        color: "White",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531941-800-800?v=638161386217600000&width=800&height=800&aspect=true",
        precio: "105 USD",
        talle: ["11", "10", "9", "8"],
        id: "DunkLow",
        Description:"El ícono del básquetbol, creado para la cancha y adaptado al estilo urbano, vuelve con detalles clásicos y un estilo de básquetbol retro. Con un diseño que lleva el estilo de los 80, la zona del tobillo acolchada de corte low te permite ir cómodamente a cualquier parte."
    },
    {
        nombre: "Air Jordan 4 Retro",
        color: "White",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/529566-1000-1000?v=1781177554&width=1000&height=1000&aspect=true",
        precio: "115 USD",
        talle: ["11", "10", "9", "8"],
        id: "Jordan4",
        Description:"Obtén tu parte de la historia y herencia de Jordan con el Air Jordan 4 Retro. Inspirado en el clásico calzado de juego de 1990, cuenta con todos los detalles icónicos, como el cuello desigual, los cordones con bloqueo regulable y las líneas de diseño inspiradas en los aviones de combate."
    },
    {
        nombre: "Air Jordan 1 Zoom",
        color: "brown",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532304/DV1307_205_A_PREM.jpg?v=638161391318030000",
        precio: "130 USD",
        talle: ["11", "10", "9", "8"],
        id: "Jordan1",
        Description:"La gamuza premium y la espuma Formula 23 exclusiva de la marca Jordan se unen para brindarte un AJ1 mucho más lujoso (y cómodo). Con este calzado no necesitas elegir entre estilo o comodidad, lo cual está bien porque te mereces las dos cosas."
    },
    {
        nombre: "Nike SB Pogo",
        color: "black",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/454990-800-800?v=638149318633730000&width=800&height=800&aspect=true",
        precio: "124 USD",
        talle: ["11", "10", "9", "8"],
        id: "Pogo",
        Description:"Patina cómodamente con el Nike SB Pogo. Ofrece un ajuste cómodo desde el momento en que lo sacas de la caja. La parte superior de lona y cuero envejece para conseguir un tacto perfecto. La cinta elevada aumenta el control para lograr el movimiento perfecto.Beneficios•La lona y el cuero se amoldan naturalmente y se adaptan al pie para brindar un rendimiento óptimo.•La cinta elevada y el área reforzada de la punta brindan durabilidad y un excelente control de la patineta.•La unidad Zoom Air proporciona una amortiguación eficaz.•La confección vulcanizada une la suela a la parte superior para aportar flexibilidad y comodidad desde el primer momento.Datos del producto•Suela de goma•Detalles de gamuza"
    },
    {
        nombre: "Nike SB Blazer",
        color: "brown",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532562-800-800?v=638161395095770000&width=800&height=800&aspect=true",
        precio: "122 USD",
        talle: ["11", "10", "9", "8"],
        id: "Blazer",
        Description:"El Zoom Blazer Mid es un calzado de básquetbol icónico pensado para las necesidades del skater moderno. Los materiales duraderos se combinan con goma adherente para brindar un agarre y una comodidad que perduran. Los detalles ocultos (como la guía de instrucciones en la plantilla) están inspirados en el aire libre y los detalles de tela y la marca retro hacen alusión a tus mochilas favoritas de los 90.",
    },
    {
        nombre: "Nike DunkLow SE",
        color: "violet",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532581-1000-1000?v=1781153799&width=1000&height=1000&aspect=true",
        precio: "90 USD",
        talle: ["11", "10", "9", "8"],
        id: "Se",
        Description:"El ícono del básquetbol, creado para la cancha y adaptado al estilo urbano, vuelve con detalles clásicos y un estilo de básquetbol retro. Con un diseño que lleva el estilo de los 80, la zona del tobillo acolchada de corte low te permite ir cómodamente a cualquier parte."
    },
    {
        nombre: "Nike DunkLow LX",
        color: "white and blue",
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/455572-800-800?v=638149328029270000&width=800&height=800&aspect=true",
        precio: "99 USD",
        talle: ["11", "10", "9", "8"],
        id: "LX",
        Description:"El ícono del básquetbol, creado para la cancha y adaptado al estilo urbano, vuelve con detalles clásicos y un estilo de básquetbol retro. Con un diseño que lleva el estilo de los 80, la zona del tobillo acolchada de corte low te permite ir cómodamente a cualquier parte."
    }
];
export default ModelosDeZapatillas;