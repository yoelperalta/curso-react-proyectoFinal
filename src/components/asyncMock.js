//import productos from "../products.json";

const productos = [
    {
        id: '1',
        nombre: 'Caña mosca fenwick AETOS 2 manos #8',
        precio: 235000,
        img: 'https://www.gonzalogalan.com.ar/wp-content/uploads/2017/10/aetos-2-manos0.jpg',
        categoria: 'canas',
        descripcion: 'La serie  AETOS se basa en la rica tradición de Fenwick, que históricamente ha desarrollado cañas de la más alta calidad. Este modelo tiene una acción rápida, y un gran rendimiento en el cast. Especialmente diseñada para dar la mayor sensación de ligereza. Tanto en agua dulce como salada, AETOS ofrece la caña perfecta para cualquier situación de pesca.',
        stock: 43
    },
    {
        id: '2',
        nombre: 'Caña mosca TFO 10 pies #3',
        precio: 545000,
        img: 'https://aventuraflyshop.com.ar/wp-content/uploads/2022/02/610949-MLA46807263209_072021-900x1001.jpg',
        categoria: 'canas',
        descripcion: 'La serie Blue Ribbon es perfecta para el pescador de agua dulce que necesita cubrir el agua de manera efectiva con lances repetidos a lo largo del día. En estas situaciones, el pescador exitoso es aquel cuya mosca está más en el agua. Por esta razón, la serie Blue Ribbon está diseñada para cargarse fácilmente con un mínimo back cast, lo que permite al pescador realizar lanzamientos rápidos y precisos con muy poco esfuerzo. Entonces, ya sea que se trate de indicadores de lanzamiento, o dropers de multiples moscas desde un bote a la deriva, o patrones de peces forrajeros en el banco todo el día, la serie Blue Ribbon está diseñada para entregar lanzamiento tras lanzamiento con facilidad.',
        stock: 21
    },
    {
        id: '3',
        nombre: 'REEL MOSCA FLY CAST GREY GULL SERIE L LINEA 3/4-5/6 ALUMINIO',
        precio: 210000,
        img: 'https://pescar.info/media/catalog/product/cache/40d1c302e28e18381788f97e05108739/i/n/inkedreel-grey-gull-serie-l-3_li.jpg',
        categoria: 'reels',
        descripcion: 'Rulemanes: 2 + 1 de acero inoxidable. Freno: A disco de alta precisión. Carretel tipo: Large Harbor, elaborado con aluminio grado premium. Cuerpo y carrete de aluminio fabricado por computadora CNC con tecnología de control numérico. Uso para mano derecha e Izquierda. Eje Principal: Acero Inoxidable. Carretel con Borde exterior para mejor control de freno.',
        stock: 11
    },
    {
        id: '4',
        nombre: 'REEL DE MOSCA KUNNAN MUSTER LINEA 5/6 + 1 SPOOL',
        precio: 194100,
        img: 'https://www.triestina.com.ar/wp-content/uploads/2017/12/muster-500x500.jpg',
        categoria: 'reels',
        descripcion: 'Cuerpo de Aluminio torneado y anodizado. Carretel inyectado ultra liviano. Exclusivo carrete de desarme rápido y balanceado. Sistema de freno regulable para mayor control. Recoge la línea a mayor velocidad. Apto para agua salada. Con Funda.',
        stock: 4
    },
    {
        id: '5',
        nombre: 'SCIENTIFIC ANGLERES TEXTURED SHOOTING LINE .032”/.035”',
        precio: 87500,
        img: 'https://d22fxaf9t8d39k.cloudfront.net/f50ebfb95b6bd593f6af2dbba867090af9913d54c4ab6134808e145df2c1029c102157.webp',
        categoria: 'lineas',
        descripcion: 'Bucle grande de 8 pulgadas para cambios rápidos de cabezal de disparo. Shooting Texture ofrece lances más largos sin abrasión. Núcleo de multifilamento trenzado con revestimiento de PVC duro',
        stock: 23
    },
    {
        id: '6',
        nombre: 'LINEA MOSCA WATERDOG CLASSIC FLOATING',
        precio: 17300,
        img: 'https://www.triestina.com.ar/wp-content/uploads/2022/11/classic_floating_waterdog-1200x1200-1.jpg',
        categoria: 'lineas',
        descripcion: 'Flotación – Color: naranja – Longitud 27 m. Las líneas de flote son muy versátiles, pudiendo usarse también todo tipo de moscas húmedas. Si deseamos hundirlas más velozmente de lo que normalmente hacen, basta con poner un plomo en el leader cerca de la mosca.',
        stock: 36
    },
    {
        id: '7',
        nombre: 'Wader Respirable Patagonia Swiftcurrent Expedition',
        precio: 1076000,
        img: 'https://www.capitanyo.com.ar/33216-large_default/wader-respirable-patagonia-swiftcurrent-expedition-.jpg',
        categoria: 'waders',
        descripcion: 'Tela exterior duradera de microfibra de poliéster H2No® Performance Standard con una barrera impermeable/respirable y un acabado DWR (Repelente al agua de larga duración). El sistema de suspensión de liberación rápida totalmente ajustable permite la conversión de la altura del pecho a la cintura, cincha con cordón en el dobladillo superior, cinturón de vadeo seguro, elástico y sin enganches.',
        stock: 2
    },
    {
        id: '8',
        nombre: 'Wader Orvis Ultralight convertible',
        precio: 718000,
        img: 'https://www.mendozaflyshop.com/media/1188/wader.jpg',
        categoria: 'waders',
        descripcion: 'El wader Orvis Ultralight convertible para hombres son notablemente versátiles e innovadores diseñados en un paquete liviano sin sacrificar la durabilidad y el rendimiento. Modern Fit increíblemente cómodo ofrece un rendimiento superior sin el peso y el volumen tradicionales. Innovador sistema de suspensión que utiliza sujetadores magnéticos FIDLOCK® SNAP para una conversión rápida y sin esfuerzo a la altura de la cintura en los días más cálidos y volver rápidamente a wader de pecho completo en segundos.',
        stock: 11
    },
    {
        id: '9',
        nombre: 'Black Superb Elk Hair Caddis mosca seca',
        precio: 3310,
        img: 'https://www.lavaguada.cl/reportajes/10-moscas-para-trucha/trout10.jpg',
        categoria: 'moscas',
        descripcion: 'Cada temporada tenemos la mayor calidad y variedad de moscas en nuestros fly shop de Chile y Argentina, ponemos en sus manos nuestra experiencia, no publicamos todos los modelos por que son interminables, confíenos su lista de moscas y le armamos su pedido especial.',
        stock: 112
    },
    {
        id: '10',
        nombre: 'Silvermans Crystal Stimulator',
        precio: 2294,
        img: 'https://www.lavaguada.cl/reportajes/10-moscas-para-trucha/trout03.jpg',
        categoria: 'moscas',
        descripcion: 'Cada temporada tenemos la mayor calidad y variedad de moscas en nuestros fly shop de Chile y Argentina, ponemos en sus manos nuestra experiencia, no publicamos todos los modelos por que son interminables, confíenos su lista de moscas y le armamos su pedido especial.',
        stock: 87
    }
]

export const getProducts = () =>{
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 500);   
        });
}

export const getProductsById = (productId) =>{
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(producto => producto.id === productId));
            }, 500);   
        });
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.filter
                    (producto => producto.categoria === categoryId));
            }, 500);   
        });
}