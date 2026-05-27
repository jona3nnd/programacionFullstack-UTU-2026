/* ============================================================
   MOTO WORLD — app.js
   ============================================================ */

'use strict';

/* ============================================================
   1. BASE DE DATOS DE MOTOS
   ============================================================ */
const MOTOS = [
  // ---- 50–125 cc ----
  {id:1,  marca:'Honda',          modelo:'CB125R',              año:2023, cc:125,  tipo:'naked',
   color:'#CC0000', color2:'#111',
   specs:{Motor:'125cc mono',        Potencia:'15 CV',   Torque:'11 Nm',   Peso:'127 kg', Depósito:'10.1 L', Vel:'110 km/h'},
   desc:'La Honda CB125R es la neo-naked de entrada perfecta. Chasis ligero, motor fiable y estética agresiva heredada de la familia CB. Ideal para ciudad y primeras experiencias en moto.',
   badge:'ENTRY', precio:'$3,200'},

  {id:2,  marca:'Yamaha',         modelo:'MT-125',              año:2023, cc:125,  tipo:'naked',
   color:'#1A1A2E', color2:'#0077CC',
   specs:{Motor:'125cc mono',        Potencia:'15 CV',   Torque:'11.5 Nm', Peso:'142 kg', Depósito:'11 L',   Vel:'112 km/h'},
   desc:'La Yamaha MT-125 es el "Maestro del Torque" en miniatura. Diseño intimidante inspirado en la MT-07, motor de 4 válvulas y frenos ABS. La naked más oscura del segmento 125.',
   badge:'DARK', precio:'$3,500'},

  {id:3,  marca:'KTM',            modelo:'Duke 125',            año:2023, cc:125,  tipo:'naked',
   color:'#FF6600', color2:'#111',
   specs:{Motor:'125cc mono',        Potencia:'15 CV',   Torque:'12 Nm',   Peso:'149 kg', Depósito:'13.4 L', Vel:'115 km/h'},
   desc:'La KTM Duke 125 trae el ADN racing de Mattighofen al segmento de iniciación. Chasis trellis en acero, horquilla WP y motor de alta tecnología. Lista para la pista desde el primer día.',
   badge:'RACE', precio:'$4,100'},

  {id:4,  marca:'Kawasaki',       modelo:'Z125 Pro',            año:2022, cc:125,  tipo:'naked',
   color:'#00AA00', color2:'#222',
   specs:{Motor:'125cc mono',        Potencia:'9.7 CV',  Torque:'9.6 Nm',  Peso:'102 kg', Depósito:'7 L',    Vel:'100 km/h'},
   desc:'La Kawasaki Z125 Pro es diminuta pero feroz. Su bajo peso la hace increíblemente ágil en ciudad. Estética Z-series en formato micro, perfecta para motociclistas jóvenes.',
   badge:'MINI', precio:'$2,900'},

  {id:5,  marca:'Honda',          modelo:'Grom 125',            año:2023, cc:125,  tipo:'naked',
   color:'#FF0000', color2:'#333',
   specs:{Motor:'125cc mono',        Potencia:'9.7 CV',  Torque:'11 Nm',   Peso:'102 kg', Depósito:'5.5 L',  Vel:'105 km/h'},
   desc:'La Honda Grom es un fenómeno cultural. Ultra personalizable, divertidísima y con una comunidad enorme. No la juzgues por su tamaño: en manos expertas humilla motos mucho más grandes.',
   badge:'FUN', precio:'$3,400'},

  // ---- 126–300 cc ----
  {id:6,  marca:'Honda',          modelo:'CBR300R',             año:2023, cc:300,  tipo:'sport',
   color:'#CC0000', color2:'#1A1A1A',
   specs:{Motor:'286cc mono',        Potencia:'30.4 CV', Torque:'27 Nm',   Peso:'159 kg', Depósito:'13.1 L', Vel:'160 km/h'},
   desc:'La CBR300R es el escalón perfecto hacia las sportbikes de mayor cilindrada. Aerodinámica agresiva, motor monocilíndrico suave y ABS de serie. Una iniciación con estilo MotoGP.',
   badge:'SPORT', precio:'$4,500'},

  {id:7,  marca:'Yamaha',         modelo:'R3',                  año:2023, cc:321,  tipo:'sport',
   color:'#000066', color2:'#0055CC',
   specs:{Motor:'321cc bicilíndrico', Potencia:'41.4 CV', Torque:'29.6 Nm', Peso:'169 kg', Depósito:'14 L',  Vel:'175 km/h'},
   desc:'La Yamaha R3 redefine las supersport de 300. Motor bicilíndrico parallel twin suave y lineal, chasis semidoble cuna y estética réplica de la R1. Ganadora de múltiples premios de diseño.',
   badge:'TWIN', precio:'$5,200'},

  {id:8,  marca:'KTM',            modelo:'Duke 390',            año:2023, cc:399,  tipo:'naked',
   color:'#FF6600', color2:'#1A1A1A',
   specs:{Motor:'399cc mono',        Potencia:'44 CV',   Torque:'37 Nm',   Peso:'163 kg', Depósito:'13.4 L', Vel:'180 km/h'},
   desc:'La KTM Duke 390 es el juguete más peligroso que puedes tener. Motor sobrealimentado para su cilindrada, TFT de 5" con navegación, control de tracción y suspensiones WP. Nada la toca en su segmento.',
   badge:'TECH', precio:'$5,800'},

  {id:9,  marca:'Kawasaki',       modelo:'Ninja 400',           año:2023, cc:399,  tipo:'sport',
   color:'#00AA00', color2:'#111111',
   specs:{Motor:'399cc parallel twin', Potencia:'44.8 CV', Torque:'38 Nm', Peso:'167 kg', Depósito:'14 L',  Vel:'180 km/h'},
   desc:'La Kawasaki Ninja 400 es la mejor moto de 400cc del mercado. Motor twin suave pero potente, chasis aluminio ultraligero y carenado de Ninja H2. Velocista del segmento mediano.',
   badge:'BEST', precio:'$5,400'},

  {id:10, marca:'Royal Enfield',  modelo:'Meteor 350',          año:2023, cc:349,  tipo:'cruiser',
   color:'#8B4513', color2:'#C0A060',
   specs:{Motor:'349cc mono',        Potencia:'20.2 CV', Torque:'27 Nm',   Peso:'191 kg', Depósito:'15 L',   Vel:'130 km/h'},
   desc:'La Royal Enfield Meteor 350 es un crucero clásico para las nuevas generaciones. Motor moderno en vestimenta retro, ergonomía relajada y el sonido incomparable del "thump" británico.',
   badge:'RETRO', precio:'$4,900'},

  // ---- 301–600 cc ----
  {id:11, marca:'Kawasaki',       modelo:'Z400',                año:2023, cc:399,  tipo:'naked',
   color:'#00AA00', color2:'#333',
   specs:{Motor:'399cc parallel twin', Potencia:'44.8 CV', Torque:'37 Nm', Peso:'167 kg', Depósito:'14 L',  Vel:'182 km/h'},
   desc:'La Kawasaki Z400 tiene la actitud de la Z1000 en formato accesible. Diseño sugestivo, motor twin agresivo y precio competitivo. La naked de 400cc que todos quieren.',
   badge:'NAKED', precio:'$5,200'},

  {id:12, marca:'Yamaha',         modelo:'MT-07',               año:2023, cc:689,  tipo:'naked',
   color:'#1A1A2E', color2:'#FF6600',
   specs:{Motor:'689cc CP2 twin',    Potencia:'73.4 CV', Torque:'68 Nm',   Peso:'184 kg', Depósito:'13 L',   Vel:'210 km/h'},
   desc:'La Yamaha MT-07 es la naked que lo cambió todo. Su motor CP2 de 689cc produce un torque bestial a bajas RPM que te arranca la sonrisa de la cara. La moto más vendida del mundo por años consecutivos.',
   badge:'LEGEND', precio:'$7,800'},

  {id:13, marca:'Honda',          modelo:'CB650R',              año:2023, cc:649,  tipo:'naked',
   color:'#990000', color2:'#222',
   specs:{Motor:'649cc i4',          Potencia:'95 CV',   Torque:'64 Nm',   Peso:'202 kg', Depósito:'15.4 L', Vel:'215 km/h'},
   desc:'La Honda CB650R es una neo-naked con alma de supersport. Cuatro cilindros en línea que cantan a 10.000 rpm, diseño musculoso y tecnología Honda Selectable Torque Control.',
   badge:'4CYL', precio:'$8,400'},

  {id:14, marca:'Triumph',        modelo:'Street Triple R',     año:2023, cc:765,  tipo:'naked',
   color:'#FFFFFF', color2:'#FF4D00',
   specs:{Motor:'765cc triple',      Potencia:'118 CV',  Torque:'79 Nm',   Peso:'166 kg', Depósito:'17.4 L', Vel:'225 km/h'},
   desc:'La Triumph Street Triple R es la naked más emotiva de su segmento. Motor triple de 765cc con ese sonido característico Triumph imposible de olvidar. Ligera, precisa y absolutamente adictiva.',
   badge:'TRIPLE', precio:'$10,500'},

  {id:15, marca:'BMW',            modelo:'F900R',               año:2023, cc:895,  tipo:'naked',
   color:'#1C3C6E', color2:'#FFFFFF',
   specs:{Motor:'895cc parallel twin', Potencia:'105 CV', Torque:'92 Nm',  Peso:'211 kg', Depósito:'13 L',   Vel:'220 km/h'},
   desc:'La BMW F900R combina tecnología alemana con diversión naked. Motor twin de contraejé, electrónica BMW avanzada y ese estilo anguloso característico de Múnich. Premium sin ser exagerada.',
   badge:'BMW', precio:'$11,200'},

  {id:16, marca:'Ducati',         modelo:'Monster 937',         año:2023, cc:937,  tipo:'naked',
   color:'#CC0000', color2:'#1A1A1A',
   specs:{Motor:'937cc L-twin Testastretta', Potencia:'111 CV', Torque:'93 Nm', Peso:'188 kg', Depósito:'14.5 L', Vel:'230 km/h'},
   desc:'El Ducati Monster 937 renació más liviano, más tecnológico y más ágil que nunca. Chasis monocasco de aluminio, motor Testastretta 11° y electrónica Cornering ABS.',
   badge:'DUCATI', precio:'$13,000'},

  // ---- 601–1000 cc ----
  {id:17, marca:'Yamaha',         modelo:'R1',                  año:2023, cc:998,  tipo:'sport',
   color:'#0033AA', color2:'#CCCCCC',
   specs:{Motor:'998cc CP4 crossplane', Potencia:'200 CV', Torque:'113 Nm', Peso:'201 kg', Depósito:'17 L',  Vel:'300 km/h'},
   desc:'La Yamaha R1 es una réplica directa de la MotoGP M1 para la calle. Motor crossplane CP4 con torque no lineal único, aerodinámica de túnel de viento y electrónica de última generación.',
   badge:'R-SERIES', precio:'$17,500'},

  {id:18, marca:'Kawasaki',       modelo:'ZX-10R',              año:2023, cc:998,  tipo:'sport',
   color:'#006600', color2:'#111',
   specs:{Motor:'998cc i4',          Potencia:'203 CV',  Torque:'114.9 Nm', Peso:'207 kg', Depósito:'17 L', Vel:'300 km/h'},
   desc:'La Kawasaki ZX-10R KRT Edition es la superbike verde más temida del Campeonato Mundial SBK. Tecnología directamente extraída de las motos de Jonathan Rea: ABS cornering y launch control.',
   badge:'SBK', precio:'$18,000'},

  {id:19, marca:'Honda',          modelo:'CBR1000RR-R Fireblade', año:2023, cc:1000, tipo:'sport',
   color:'#CC0000', color2:'#AAAAAA',
   specs:{Motor:'1000cc i4',         Potencia:'214 CV',  Torque:'113 Nm',  Peso:'201 kg', Depósito:'16.1 L', Vel:'300 km/h'},
   desc:'La Honda CBR1000RR-R Fireblade SP recupera el trono. Motor inspirado en la RC213V de MotoGP, aerodinámica con winglets activos y electrónica Öhlins Smart EC 2.0.',
   badge:'FIREBLADE', precio:'$19,500'},

  {id:20, marca:'BMW',            modelo:'S1000RR',             año:2023, cc:999,  tipo:'sport',
   color:'#1C3C6E', color2:'#CC0000',
   specs:{Motor:'999cc i4 ShiftCam', Potencia:'210 CV',  Torque:'113 Nm',  Peso:'197 kg', Depósito:'16.5 L', Vel:'300 km/h'},
   desc:'La BMW S1000RR es la superbike alemana más sofisticada del mercado. Tecnología ShiftCam variable, DDC semi-active suspension y M-Package opcional.',
   badge:'M-SPORT', precio:'$20,000'},

  {id:21, marca:'Ducati',         modelo:'Panigale V4',         año:2023, cc:1103, tipo:'sport',
   color:'#CC0000', color2:'#1A1A1A',
   specs:{Motor:'1103cc Desmosedici V4', Potencia:'214 CV', Torque:'124 Nm', Peso:'195 kg', Depósito:'16 L', Vel:'300+ km/h'},
   desc:'La Ducati Panigale V4 es la obra maestra de Borgo Panigale. Motor Desmosedici Stradale V4 de 90°, aerodinámica de MotoGP y el paquete de electrónica más avanzado del mercado de serie.',
   badge:'V4', precio:'$24,000'},

  {id:22, marca:'Aprilia',        modelo:'RSV4 1100 Factory',   año:2023, cc:1099, tipo:'sport',
   color:'#990000', color2:'#222',
   specs:{Motor:'1099cc V4 65°',     Potencia:'217 CV',  Torque:'125 Nm',  Peso:'199 kg', Depósito:'18.5 L', Vel:'300+ km/h'},
   desc:'La Aprilia RSV4 1100 Factory es el arma secreta italiana. Con 217 CV y suspensiones Öhlins electrónicas, es la superbike más potente de su segmento.',
   badge:'V4', precio:'$22,000'},

  // ---- 1001+ cc ----
  {id:23, marca:'Kawasaki',       modelo:'H2R',                 año:2023, cc:998,  tipo:'sport',
   color:'#333333', color2:'#AAAAAA',
   specs:{Motor:'998cc supercharged i4', Potencia:'310 CV', Torque:'165 Nm', Peso:'216 kg', Depósito:'17 L', Vel:'400 km/h'},
   desc:'La Kawasaki Ninja H2R es la moto de producción más rápida del planeta. Motor sobrealimentado con compresor centrífugo, 310 CV que solo existen en pista.',
   badge:'SUPERCHARGED', precio:'$55,000'},

  {id:24, marca:'Ducati',         modelo:'Multistrada V4 S',    año:2023, cc:1158, tipo:'adventure',
   color:'#CC0000', color2:'#888',
   specs:{Motor:'1158cc Granturismo V4', Potencia:'170 CV', Torque:'125 Nm', Peso:'215 kg', Depósito:'22 L', Vel:'250 km/h'},
   desc:'La Ducati Multistrada V4 S redefine el concepto de moto de aventura. Radar frontal y trasero, DCC electrónico y pantalla 6.5" TFT. La aventura nunca fue tan sofisticada.',
   badge:'ADVENTURE', precio:'$25,000'},

  {id:25, marca:'BMW',            modelo:'GS 1250 Adventure',   año:2023, cc:1254, tipo:'adventure',
   color:'#1C3C6E', color2:'#FFFFFF',
   specs:{Motor:'1254cc Boxer twin', Potencia:'136 CV',  Torque:'143 Nm',  Peso:'268 kg', Depósito:'30 L',   Vel:'220 km/h'},
   desc:'La BMW R1250GS Adventure es la reina indiscutida del segmento adventure. Motor Boxer con ShiftCam, depósito XXL de 30 litros y electrónica BMW Pro. Ha recorrido más continentes que cualquier otra moto del mundo.',
   badge:'GS', precio:'$22,000'},

  {id:26, marca:'Harley-Davidson', modelo:'Fat Boy 114',        año:2023, cc:1868, tipo:'cruiser',
   color:'#2C2C2C', color2:'#C0A060',
   specs:{Motor:'1868cc Milwaukee-Eight 114', Potencia:'95 CV', Torque:'162 Nm', Peso:'317 kg', Depósito:'18.9 L', Vel:'175 km/h'},
   desc:'La Harley-Davidson Fat Boy es un ícono americano indestructible. Reconocida por su perfil macizo, llantas de disco sólido y motor V-Twin Milwaukee-Eight que resuena en el pecho.',
   badge:'ICON', precio:'$21,000'},

  {id:27, marca:'Indian',         modelo:'Chief Dark Horse',    año:2023, cc:1811, tipo:'cruiser',
   color:'#111111', color2:'#333',
   specs:{Motor:'1811cc Thunder Stroke 111', Potencia:'78 CV', Torque:'161 Nm', Peso:'329 kg', Depósito:'20 L', Vel:'170 km/h'},
   desc:'La Indian Chief Dark Horse es el lado oscuro del sueño americano. Total blackout, motor Thunder Stroke y líneas del histórico Chief de 1922.',
   badge:'DARK', precio:'$19,000'},

  {id:28, marca:'Triumph',        modelo:'Rocket 3 R',          año:2023, cc:2458, tipo:'cruiser',
   color:'#2C2C2C', color2:'#888888',
   specs:{Motor:'2458cc triple en línea', Potencia:'167 CV', Torque:'221 Nm', Peso:'291 kg', Depósito:'18 L', Vel:'220 km/h'},
   desc:'La Triumph Rocket 3 R ostenta el motor de producción en serie más grande del mundo: 2458cc triple. Produce 221 Nm de torque, más que muchos coches deportivos.',
   badge:'BIGGEST', precio:'$24,000'},

  // ---- Enduro ----
  {id:29, marca:'KTM',            modelo:'EXC-F 500',           año:2023, cc:510,  tipo:'enduro',
   color:'#FF6600', color2:'#111',
   specs:{Motor:'510cc mono DOHC',   Potencia:'65 CV',   Torque:'53 Nm',   Peso:'111 kg', Depósito:'9 L',    Vel:'175 km/h'},
   desc:'La KTM 500 EXC-F es la moto de enduro más reconocida del mundo. Homologada para calle y campo, liga la versatilidad extrema con la potencia de un monoplaza.',
   badge:'ENDURO', precio:'$11,500'},

  {id:30, marca:'Honda',          modelo:'CRF450L',             año:2023, cc:449,  tipo:'enduro',
   color:'#CC0000', color2:'#FFFFFF',
   specs:{Motor:'449cc mono',        Potencia:'34 CV',   Torque:'41.9 Nm', Peso:'134 kg', Depósito:'7.6 L',  Vel:'145 km/h'},
   desc:'La Honda CRF450L trae el motor del motocross a la calle. Basada en la legendaria CRF450R de competición, lista para devorar cualquier sendero.',
   badge:'DUAL', precio:'$9,200'},

  // ---- Scooters ----
  {id:31, marca:'Honda',          modelo:'Forza 750',           año:2023, cc:745,  tipo:'scooter',
   color:'#CC0000', color2:'#1A1A1A',
   specs:{Motor:'745cc parallel twin', Potencia:'58 CV', Torque:'69 Nm',   Peso:'235 kg', Depósito:'13.2 L', Vel:'200 km/h'},
   desc:'La Honda Forza 750 redefine el maxi-scooter. Motor twin de 745cc, almacenamiento enorme bajo el asiento, pantalla TFT de 5" y la practicidad máxima para la ciudad.',
   badge:'MAXI', precio:'$11,000'},

  {id:32, marca:'Yamaha',         modelo:'TMAX 560',            año:2023, cc:562,  tipo:'scooter',
   color:'#1A1A1A', color2:'#555555',
   specs:{Motor:'562cc parallel twin', Potencia:'46.8 CV', Torque:'55.7 Nm', Peso:'220 kg', Depósito:'15 L', Vel:'185 km/h'},
   desc:'La Yamaha TMAX 560 es el "supersport scooter". Referencia absoluta del segmento de maxi-scooters premium, con una dinámica que avergüenza a muchas motocicletas.',
   badge:'T-MAX', precio:'$12,500'},

  // ---- Touring ----
  {id:33, marca:'Honda',          modelo:'Gold Wing Tour',      año:2023, cc:1833, tipo:'touring',
   color:'#1A1A1A', color2:'#C0A060',
   specs:{Motor:'1833cc boxer 6',    Potencia:'126 CV',  Torque:'170 Nm',  Peso:'379 kg', Depósito:'21.1 L', Vel:'200 km/h'},
   desc:'La Honda Gold Wing Tour es el trono de los viajeros. Motor boxer 6 cilindros de seda, sistema de audio Apple CarPlay y airbag frontal. La primera clase de las dos ruedas.',
   badge:'6CYL', precio:'$30,000'},

  {id:34, marca:'Harley-Davidson', modelo:'Road Glide Ultra',   año:2023, cc:1868, tipo:'touring',
   color:'#1C1C1C', color2:'#CC8800',
   specs:{Motor:'1868cc Milwaukee-Eight 114', Potencia:'97 CV', Torque:'162 Nm', Peso:'388 kg', Depósito:'22.7 L', Vel:'175 km/h'},
   desc:'La Harley-Davidson Road Glide Ultra es la faratera definitiva. Carenado de marco integrado, sistema Boom! Stage I de sonido y pantalla táctil de 12.3".',
   badge:'TOURING', precio:'$34,000'},

  // ---- Retro / Café ----
  {id:35, marca:'Triumph',        modelo:'Thruxton RS',         año:2023, cc:1200, tipo:'retro',
   color:'#2C2C2C', color2:'#CC0000',
   specs:{Motor:'1200cc HT Bonneville twin', Potencia:'105 CV', Torque:'112 Nm', Peso:'199 kg', Depósito:'14.5 L', Vel:'220 km/h'},
   desc:'La Triumph Thruxton RS es el café racer moderno definitivo. Motor Bonneville High-Torque de 1200cc, suspensiones Öhlins y frenos Brembo. Británico hasta la médula.',
   badge:'CAFE', precio:'$16,000'},

  {id:36, marca:'Ducati',         modelo:'Scrambler Icon',      año:2023, cc:803,  tipo:'retro',
   color:'#FFD700', color2:'#111',
   specs:{Motor:'803cc L-twin',      Potencia:'73 CV',   Torque:'67 Nm',   Peso:'186 kg', Depósito:'13.5 L', Vel:'205 km/h'},
   desc:'El Ducati Scrambler Icon es diversión en estado puro. Diseño neo-retro de los 70s con motor moderno L-twin Ducati. Customizable hasta el infinito.',
   badge:'SCRAMBLER', precio:'$11,500'},

  {id:37, marca:'Royal Enfield',  modelo:'Interceptor 650',     año:2023, cc:648,  tipo:'retro',
   color:'#CC6600', color2:'#C0A060',
   specs:{Motor:'648cc parallel twin', Potencia:'47 CV', Torque:'52 Nm',   Peso:'202 kg', Depósito:'13.7 L', Vel:'170 km/h'},
   desc:'La Royal Enfield Interceptor 650 es la moto más divertida por dinero del mercado. Motor twin 650 con sonido estratosférico y precio accesible.',
   badge:'TWIN', precio:'$5,800'},

  {id:38, marca:'BMW',            modelo:'R NineT Scrambler',   año:2023, cc:1170, tipo:'retro',
   color:'#5C5C5C', color2:'#C0A060',
   specs:{Motor:'1170cc Boxer twin', Potencia:'110 CV',  Torque:'116 Nm',  Peso:'222 kg', Depósito:'18 L',   Vel:'200 km/h'},
   desc:'La BMW R NineT Scrambler combina heritage alemán con espíritu de aventura retro. Motor Boxer de 1170cc y el inconfundible ADN de la Airhead BMW original.',
   badge:'HERITAGE', precio:'$14,500'},

  // ---- Sport extras ----
  {id:39, marca:'Suzuki',         modelo:'GSX-R1000R',          año:2023, cc:999,  tipo:'sport',
   color:'#1155CC', color2:'#FFFFFF',
   specs:{Motor:'999cc i4 MotoGP',   Potencia:'202 CV',  Torque:'117 Nm',  Peso:'203 kg', Depósito:'16 L',   Vel:'300 km/h'},
   desc:'La Suzuki GSX-R1000R es la heredera directa del trono GSX-R. Motor de tracería MotoGP, sistema S-IRIS y aerodinámica de winglets. La GSXR nunca pasa de moda.',
   badge:'GIXXER', precio:'$16,800'},

  {id:40, marca:'Aprilia',        modelo:'RS 660',              año:2023, cc:659,  tipo:'sport',
   color:'#990000', color2:'#FFFFFF',
   specs:{Motor:'659cc parallel twin', Potencia:'100 CV', Torque:'67 Nm',  Peso:'169 kg', Depósito:'15 L',   Vel:'240 km/h'},
   desc:'La Aprilia RS 660 es la supersport más innovadora de su generación. Motor twin derivado del V4 RSV4, chasis en aluminio y electrónica de 6 ejes.',
   badge:'RS', precio:'$11,000'},

  {id:41, marca:'Honda',          modelo:'CBR600RR',            año:2023, cc:599,  tipo:'sport',
   color:'#CC0000', color2:'#111',
   specs:{Motor:'599cc i4',          Potencia:'118 CV',  Torque:'66 Nm',   Peso:'194 kg', Depósito:'18.1 L', Vel:'260 km/h'},
   desc:'La Honda CBR600RR volvió con fuerza. Con ABS cornering, control de tracción y el motor 600 cuatro cilindros más refinado del mercado. La supersport de 600 que definió una era.',
   badge:'CBR', precio:'$12,500'},

  {id:42, marca:'MV Agusta',      modelo:'F4 RR',               año:2022, cc:998,  tipo:'sport',
   color:'#AAAAAA', color2:'#CC0000',
   specs:{Motor:'998cc i4 radial',   Potencia:'201 CV',  Torque:'111 Nm',  Peso:'193 kg', Depósito:'17 L',   Vel:'300 km/h'},
   desc:'La MV Agusta F4 RR es escultura en movimiento. Diseño de Massimo Tamburini que marcó el siglo, motor radial de 4 cilindros y el pedigrí de una marca con más de 75 campeonatos mundiales.',
   badge:'MV', precio:'$28,000'},

  // ---- Adventure extras ----
  {id:43, marca:'KTM',            modelo:'1290 Super Adventure R', año:2023, cc:1301, tipo:'adventure',
   color:'#FF6600', color2:'#111',
   specs:{Motor:'1301cc V-twin LC8', Potencia:'160 CV',  Torque:'138 Nm',  Peso:'229 kg', Depósito:'23 L',   Vel:'240 km/h'},
   desc:'La KTM 1290 Super Adventure R es el arma off-road más capaz del mercado. Motor LC8, suspensiones WP semi-activas y electrónica Ready to Race.',
   badge:'ADV-R', precio:'$23,000'},

  {id:44, marca:'Honda',          modelo:'Africa Twin CRF1100L', año:2023, cc:1084, tipo:'adventure',
   color:'#CC0000', color2:'#FFFFFF',
   specs:{Motor:'1084cc parallel twin', Potencia:'100 CV', Torque:'105 Nm', Peso:'226 kg', Depósito:'24.2 L', Vel:'220 km/h'},
   desc:'La Honda Africa Twin es la aventurera que todos respetan. Con DCT opcional, depósito de 24L y un legado indestructible en el Dakar original.',
   badge:'AFRICA', precio:'$14,500'},

  {id:45, marca:'Yamaha',         modelo:'Ténéré 700',          año:2023, cc:689,  tipo:'adventure',
   color:'#1A1A2E', color2:'#FFFFFF',
   specs:{Motor:'689cc CP2 twin',    Potencia:'72 CV',   Torque:'68 Nm',   Peso:'205 kg', Depósito:'16 L',   Vel:'195 km/h'},
   desc:'La Yamaha Ténéré 700 democratizó el adventure serio. Motor CP2 fiable y torquero, chasis ligero y sin complicaciones electrónicas innecesarias.',
   badge:'T7', precio:'$11,000'},

  {id:46, marca:'Suzuki',         modelo:'V-Strom 1050XT',      año:2023, cc:1037, tipo:'adventure',
   color:'#FF6600', color2:'#111',
   specs:{Motor:'1037cc V-twin',     Potencia:'107 CV',  Torque:'100 Nm',  Peso:'247 kg', Depósito:'20 L',   Vel:'210 km/h'},
   desc:'La Suzuki V-Strom 1050XT es la aventurera más versátil del mercado. Motor V-twin con modos de marcha, neumáticos adventure de serie y precio competitivo.',
   badge:'VSTROM', precio:'$12,800'},

  // ---- Eléctricas ----
  {id:47, marca:'Energica',       modelo:'Ego+ RS',             año:2023, cc:0,    tipo:'sport',
   color:'#00AAFF', color2:'#111',
   specs:{Motor:'Motor eléctrico 145 CV', Potencia:'145 CV', Torque:'200 Nm', Peso:'260 kg', Depósito:'N/A', Vel:'240 km/h'},
   desc:'La Energica Ego+ RS es la superbike eléctrica italiana que participó en la Copa MotoE. 145 CV, autonomía de 420 km y carga rápida DC de 22 kW. El futuro de las superbikes.',
   badge:'ELECTRIC', precio:'$28,000'},

  {id:48, marca:'Harley-Davidson', modelo:'LiveWire One',       año:2023, cc:0,    tipo:'naked',
   color:'#FF6600', color2:'#111',
   specs:{Motor:'Motor eléctrico Revelation', Potencia:'105 CV', Torque:'116 Nm', Peso:'201 kg', Depósito:'N/A', Vel:'180 km/h'},
   desc:'La LiveWire One es la Harley-Davidson eléctrica que nadie esperaba pero todos quieren. 0-100 en 3 segundos, conectividad por app y el silencio que solo el futuro puede ofrecer.',
   badge:'EV', precio:'$22,000'},
];

/* ============================================================
   2. PALETA DE COLORES PARA PERSONALIZAR
   ============================================================ */
const COLORS = [
  {name:'Rojo',      hex:'#CC0000'},
  {name:'Azul',      hex:'#003399'},
  {name:'Negro',     hex:'#111111'},
  {name:'Blanco',    hex:'#EEEEEE'},
  {name:'Naranja',   hex:'#FF6600'},
  {name:'Verde',     hex:'#006600'},
  {name:'Amarillo',  hex:'#CCCC00'},
  {name:'Gris',      hex:'#777777'},
  {name:'Morado',    hex:'#660099'},
  {name:'Turquesa',  hex:'#007777'},
  {name:'Chrome',    hex:'chrome', cls:'chrome'},
  {name:'Dorado',    hex:'gold',   cls:'gold'},
  {name:'Carbono',   hex:'carbon', cls:'carbon'},
];

/* ============================================================
   3. ESTADO GLOBAL DEL PERSONALIZADOR
   ============================================================ */
let activeMoto  = null;
let bodyColor   = null;
let frameColor  = null;
let wheelType   = 'standard';

/* ============================================================
   4. DIBUJO EN CANVAS
   ============================================================ */

/** Resuelve colores especiales (chrome, gold, carbon) a hex. */
function resolveColor(hex) {
  if (hex === 'chrome') return '#c0c0c0';
  if (hex === 'gold')   return '#c9a227';
  if (hex === 'carbon') return '#2a2a2a';
  return hex;
}

/** Dibuja una rueda en (cx, cy) con radio r. */
function drawWheel(ctx, cx, cy, r, wType, frameHex) {
  const color = resolveColor(frameHex);
  ctx.save();

  // Neumático
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#1a1a1a';
  ctx.fill();
  ctx.strokeStyle = '#333';
  ctx.lineWidth = r * 0.32;
  ctx.stroke();

  // Aro interior
  const ir = r * 0.68;
  ctx.beginPath();
  ctx.arc(cx, cy, ir, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = r * 0.08;
  ctx.stroke();

  if (wType === 'spoke') {
    // 12 rayos finos
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * ir * 0.85, cy + Math.sin(a) * ir * 0.85);
      ctx.lineTo(cx + Math.cos(a) * r  * 0.15, cy + Math.sin(a) * r  * 0.15);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  } else if (wType === 'sport') {
    // 5 radios anchos
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a)        * ir * 0.85, cy + Math.sin(a)        * ir * 0.85);
      ctx.lineTo(cx + Math.cos(a + 0.25) * ir * 0.85, cy + Math.sin(a + 0.25) * ir * 0.85);
      ctx.lineTo(cx + Math.cos(a)        * r  * 0.12, cy + Math.sin(a)        * r  * 0.12);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }
  } else if (wType === 'fat') {
    // Disco sólido con agujeros decorativos
    ctx.beginPath();
    ctx.arc(cx, cy, ir * 0.9, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * ir * 0.55,
              cy + Math.sin(a) * ir * 0.55, ir * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = '#1a1a1a';
      ctx.fill();
    }
  } else {
    // Standard – 3 radios dobles
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * ir * 0.9, cy + Math.sin(a) * ir * 0.9);
      ctx.lineTo(cx, cy);
      ctx.strokeStyle = color;
      ctx.lineWidth = r * 0.12;
      ctx.stroke();
    }
  }

  // Centro
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.12, 0, Math.PI * 2);
  ctx.fillStyle = '#888';
  ctx.fill();
  ctx.restore();
}

/* ---- Estilos de moto ---- */

function drawSport(ctx, W, H, bc, fc, wt) {
  const s = Math.min(W, H);
  const cx = W / 2, cy = H / 2;
  const wr = s * 0.16;
  const rx = cx - s * 0.25, ry = cy + s * 0.2;
  const fx = cx + s * 0.25, fy = cy + s * 0.2;

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur  = 20;

  // Chasis
  ctx.beginPath();
  ctx.moveTo(rx + wr * 0.6, ry - wr * 0.5);
  ctx.lineTo(cx - s * 0.1,  cy - s * 0.22);
  ctx.lineTo(cx + s * 0.12, cy - s * 0.25);
  ctx.lineTo(fx - wr * 0.4, fy - wr * 0.6);
  ctx.strokeStyle = fc; ctx.lineWidth = s * 0.025; ctx.stroke();

  // Tanque
  ctx.beginPath();
  ctx.ellipse(cx - s * 0.05, cy - s * 0.12, s * 0.12, s * 0.07, -0.2, 0, Math.PI * 2);
  ctx.fillStyle = bc; ctx.fill();

  // Colín
  ctx.beginPath();
  ctx.moveTo(cx - s * 0.14, cy - s * 0.08);
  ctx.quadraticCurveTo(cx - s * 0.05, cy - s * 0.18, cx + s * 0.1, cy - s * 0.15);
  ctx.quadraticCurveTo(cx + s * 0.14, cy - s * 0.1,  cx + s * 0.05, cy - s * 0.08);
  ctx.closePath(); ctx.fillStyle = bc; ctx.fill();

  // Carenado delantero
  ctx.beginPath();
  ctx.moveTo(cx + s * 0.12, cy - s * 0.22);
  ctx.quadraticCurveTo(cx + s * 0.25, cy - s * 0.15, fx - wr * 0.3, fy - wr * 0.5);
  ctx.quadraticCurveTo(cx + s * 0.18, cy - s * 0.18, cx + s * 0.12, cy - s * 0.22);
  ctx.fillStyle = bc; ctx.fill();

  // Carenado lateral
  ctx.beginPath();
  ctx.moveTo(rx + wr * 0.5, ry - wr * 0.6);
  ctx.quadraticCurveTo(cx - s * 0.15, cy - s * 0.05, cx + s * 0.05, cy - s * 0.05);
  ctx.quadraticCurveTo(cx + s * 0.02, cy + s * 0.05, rx + wr * 0.5, ry - wr * 0.3);
  ctx.closePath(); ctx.fillStyle = bc; ctx.fill();

  // Escape
  ctx.beginPath();
  ctx.moveTo(rx + wr * 0.7, ry - wr * 0.1);
  ctx.quadraticCurveTo(cx, cy + s * 0.1, cx + s * 0.22, cy);
  ctx.strokeStyle = '#888'; ctx.lineWidth = s * 0.018; ctx.stroke();

  ctx.restore();

  drawWheel(ctx, rx, ry, wr, wt, fc);
  drawWheel(ctx, fx, fy, wr, wt, fc);

  // Horquilla
  ctx.beginPath();
  ctx.moveTo(cx + s * 0.17, cy - s * 0.22);
  ctx.lineTo(fx, fy - wr);
  ctx.strokeStyle = '#aaa'; ctx.lineWidth = s * 0.018; ctx.stroke();

  // Faro
  ctx.beginPath();
  ctx.ellipse(fx - s * 0.02, fy - wr * 1.2, s * 0.04, s * 0.03, -0.3, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffaa'; ctx.fill();
}

function drawCruiser(ctx, W, H, bc, fc, wt) {
  const s = Math.min(W, H);
  const cx = W / 2, cy = H / 2 + s * 0.05;
  const wr = s * 0.18;
  const rx = cx - s * 0.28, ry = cy + s * 0.15;
  const fx = cx + s * 0.30, fy = cy + s * 0.15;

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 20;

  // Motor V-twin
  ctx.beginPath();
  ctx.moveTo(cx - s*0.04, cy - s*0.02);
  ctx.lineTo(cx - s*0.10, cy - s*0.16);
  ctx.lineTo(cx - s*0.06, cy - s*0.16);
  ctx.lineTo(cx,          cy - s*0.02);
  ctx.closePath(); ctx.fillStyle = '#555'; ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cx + s*0.04, cy - s*0.02);
  ctx.lineTo(cx + s*0.02, cy - s*0.18);
  ctx.lineTo(cx + s*0.06, cy - s*0.18);
  ctx.lineTo(cx + s*0.08, cy - s*0.02);
  ctx.closePath(); ctx.fillStyle = '#666'; ctx.fill();

  // Tanque largo
  ctx.beginPath();
  ctx.moveTo(cx - s*0.22, cy - s*0.08);
  ctx.quadraticCurveTo(cx - s*0.05, cy - s*0.20, cx + s*0.12, cy - s*0.12);
  ctx.quadraticCurveTo(cx + s*0.10, cy - s*0.04, cx - s*0.22, cy - s*0.04);
  ctx.closePath(); ctx.fillStyle = bc; ctx.fill();

  // Alforjas
  ctx.beginPath();
  ctx.roundRect(rx + wr*0.8, ry - wr*0.9, s*0.14, s*0.10, 4);
  ctx.fillStyle = bc; ctx.fill();

  // Guardabarros
  ctx.beginPath();
  ctx.arc(rx, ry, wr + s*0.02, Math.PI*1.1, Math.PI*1.9);
  ctx.strokeStyle = bc; ctx.lineWidth = s*0.025; ctx.stroke();

  // Escape
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.quadraticCurveTo(cx + s*0.10, cy + s*0.08, fx - wr*0.5, fy - wr*0.1);
  ctx.strokeStyle = '#aaa'; ctx.lineWidth = s*0.025; ctx.stroke();

  ctx.restore();

  drawWheel(ctx, rx, ry, wr,        wt, fc);
  drawWheel(ctx, fx, fy, wr * 0.85, wt, fc);

  // Horquilla
  ctx.beginPath();
  ctx.moveTo(cx + s*0.10, cy - s*0.12);
  ctx.lineTo(fx, fy - wr*0.85);
  ctx.strokeStyle = '#bbb'; ctx.lineWidth = s*0.020; ctx.stroke();
}

function drawAdventure(ctx, W, H, bc, fc, wt) {
  const s = Math.min(W, H);
  const cx = W / 2, cy = H / 2;
  const wr = s * 0.17;
  const rx = cx - s * 0.24, ry = cy + s * 0.18;
  const fx = cx + s * 0.26, fy = cy + s * 0.18;

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 20;

  // Chasis tubular
  ctx.beginPath();
  ctx.moveTo(rx + wr*0.5, ry - wr);
  ctx.lineTo(cx - s*0.05, cy - s*0.28);
  ctx.lineTo(cx + s*0.05, cy - s*0.28);
  ctx.lineTo(fx - wr*0.5, fy - wr);
  ctx.strokeStyle = fc; ctx.lineWidth = s*0.022; ctx.stroke();

  // Tanque
  ctx.beginPath();
  ctx.moveTo(cx - s*0.15, cy - s*0.08);
  ctx.quadraticCurveTo(cx, cy - s*0.28, cx + s*0.10, cy - s*0.18);
  ctx.quadraticCurveTo(cx + s*0.08, cy - s*0.06, cx - s*0.15, cy - s*0.06);
  ctx.closePath(); ctx.fillStyle = bc; ctx.fill();

  // Pico frontal
  ctx.beginPath();
  ctx.moveTo(fx - wr*0.3, fy - wr*1.3);
  ctx.quadraticCurveTo(fx + s*0.08, fy - wr*1.0, fx - wr*0.5, fy - wr*0.6);
  ctx.closePath(); ctx.fillStyle = bc; ctx.fill();

  // Maletas
  ctx.beginPath();
  ctx.roundRect(rx + wr*0.8, ry - wr*1.0, s*0.12, s*0.12, 4);
  ctx.fillStyle = bc === '#111111' ? '#333' : '#111';
  ctx.fill();
  ctx.strokeStyle = bc; ctx.lineWidth = 2; ctx.stroke();

  // Escape alto
  ctx.beginPath();
  ctx.moveTo(cx + s*0.02, cy + s*0.08);
  ctx.quadraticCurveTo(cx + s*0.15, cy - s*0.10, cx + s*0.22, cy - s*0.20);
  ctx.strokeStyle = '#999'; ctx.lineWidth = s*0.020; ctx.stroke();

  ctx.restore();

  drawWheel(ctx, rx, ry, wr, 'spoke', fc);
  drawWheel(ctx, fx, fy, wr, 'spoke', fc);

  // Horquillas largas
  ctx.beginPath();
  ctx.moveTo(cx + s*0.08, cy - s*0.25);
  ctx.lineTo(fx, fy - wr);
  ctx.strokeStyle = '#ccc'; ctx.lineWidth = s*0.020; ctx.stroke();
}

function drawRetro(ctx, W, H, bc, fc, wt) {
  const s = Math.min(W, H);
  const cx = W / 2, cy = H / 2 + s * 0.02;
  const wr = s * 0.17;
  const rx = cx - s * 0.25, ry = cy + s * 0.18;
  const fx = cx + s * 0.25, fy = cy + s * 0.18;

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 20;

  // Chasis doble cuna
  ctx.beginPath();
  ctx.moveTo(rx + wr*0.5, ry - wr*0.5);
  ctx.lineTo(cx, cy - s*0.20);
  ctx.lineTo(fx - wr*0.5, fy - wr*0.5);
  ctx.strokeStyle = fc; ctx.lineWidth = s*0.020; ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(rx + wr*0.5, ry - wr*0.3);
  ctx.quadraticCurveTo(cx, cy + s*0.10, fx - wr*0.5, fy - wr*0.3);
  ctx.strokeStyle = fc; ctx.lineWidth = s*0.018; ctx.stroke();

  // Tanque redondeado
  ctx.beginPath();
  ctx.ellipse(cx - s*0.05, cy - s*0.10, s*0.14, s*0.08, -0.1, 0, Math.PI*2);
  ctx.fillStyle = bc; ctx.fill();

  // Asiento plano
  ctx.beginPath();
  ctx.roundRect(cx - s*0.18, cy - s*0.04, s*0.24, s*0.05, 20);
  ctx.fillStyle = '#2a1a0a'; ctx.fill();

  // Motor clásico
  ctx.beginPath();
  ctx.roundRect(cx - s*0.07, cy - s*0.01, s*0.14, s*0.10, 4);
  ctx.fillStyle = '#555'; ctx.fill();
  ctx.beginPath();
  ctx.roundRect(cx - s*0.04, cy + s*0.09, s*0.08, s*0.03, 2);
  ctx.fillStyle = '#444'; ctx.fill();

  // Faro redondo
  ctx.beginPath();
  ctx.arc(fx + s*0.02, fy - wr*1.1, s*0.05, 0, Math.PI*2);
  ctx.strokeStyle = '#aaa'; ctx.lineWidth = 3; ctx.stroke();
  ctx.beginPath();
  ctx.arc(fx + s*0.02, fy - wr*1.1, s*0.03, 0, Math.PI*2);
  ctx.fillStyle = '#ffffaa'; ctx.fill();

  ctx.restore();

  drawWheel(ctx, rx, ry, wr, 'spoke', fc);
  drawWheel(ctx, fx, fy, wr, 'spoke', fc);

  // Escape clásico
  ctx.beginPath();
  ctx.moveTo(cx + s*0.05, cy + s*0.09);
  ctx.quadraticCurveTo(cx + s*0.18, cy + s*0.14, fx - wr*0.3, fy - wr*0.2);
  ctx.strokeStyle = '#bbb'; ctx.lineWidth = s*0.025; ctx.stroke();
}

function drawScooter(ctx, W, H, bc, fc, wt) {
  const s = Math.min(W, H);
  const cx = W / 2, cy = H / 2 + s * 0.05;
  const wr = s * 0.14;
  const rx = cx - s * 0.22, ry = cy + s * 0.20;
  const fx = cx + s * 0.22, fy = cy + s * 0.20;

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 20;

  // Carenado principal
  ctx.beginPath();
  ctx.moveTo(rx + wr, ry - wr*0.5);
  ctx.quadraticCurveTo(cx - s*0.20, cy, cx - s*0.10, cy - s*0.28);
  ctx.quadraticCurveTo(cx + s*0.05, cy - s*0.32, cx + s*0.15, cy - s*0.20);
  ctx.quadraticCurveTo(fx - wr*0.8, fy - wr*1.2, fx - wr*0.5, fy - wr*0.5);
  ctx.quadraticCurveTo(cx, cy + s*0.10, rx + wr, ry - wr*0.5);
  ctx.fillStyle = bc; ctx.fill();

  ctx.restore();

  drawWheel(ctx, rx, ry, wr, wt, fc);
  drawWheel(ctx, fx, fy, wr, wt, fc);
}

/** Punto de entrada: elige el dibujador según tipo de moto. */
function drawMoto(canvas, moto, bColor, fColor, wType) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const bc = bColor || moto.color  || '#CC0000';
  const fc = fColor || moto.color2 || '#333333';
  const wt = wType  || 'standard';

  const W = canvas.width, H = canvas.height;

  switch (moto.tipo) {
    case 'cruiser':
    case 'touring':  drawCruiser(ctx, W, H, bc, fc, wt);  break;
    case 'scooter':  drawScooter(ctx, W, H, bc, fc, wt);  break;
    case 'enduro':
    case 'adventure':drawAdventure(ctx, W, H, bc, fc, wt); break;
    case 'retro':    drawRetro(ctx, W, H, bc, fc, wt);    break;
    default:         drawSport(ctx, W, H, bc, fc, wt);    break;
  }
}

/* ============================================================
   5. INTRO 3D (IIFE)
   ============================================================ */
(function () {
  const canvas = document.getElementById('intro-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [], t = 0;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        color: Math.random() > 0.7 ? '#ff4d00' : '#1e1e35',
      });
    }
  }

  function animate() {
    const intro = document.getElementById('intro');
    if (!intro || intro.style.display === 'none') return;
    requestAnimationFrame(animate);
    t++;

    ctx.fillStyle = 'rgba(5,5,8,0.15)';
    ctx.fillRect(0, 0, W, H);

    // Grilla con perspectiva
    const vanX = W * 0.5, vanY = H * 0.5;
    for (let i = 0; i < 20; i++) {
      const progress = ((i / 20) + t * 0.002) % 1;
      const alpha    = progress * 0.4;
      ctx.strokeStyle = `rgba(255,77,0,${alpha})`;
      ctx.lineWidth   = 0.5;
      const spread = 800 * progress;
      ctx.beginPath();
      ctx.moveTo(vanX - spread, vanY + 100 * progress);
      ctx.lineTo(vanX + spread, vanY + 100 * progress);
      ctx.stroke();
    }
    for (let i = -10; i <= 10; i++) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,77,0,0.15)';
      ctx.moveTo(vanX + i * 40,  vanY);
      ctx.lineTo(vanX + i * 500, H);
      ctx.stroke();
    }

    // Partículas
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    // Líneas entre partículas cercanas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.strokeStyle = `rgba(255,77,0,${(1 - d / 100) * 0.15})`;
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  window.addEventListener('resize', resize);
  init();
  animate();

  // Ocultar intro después de 3.5 s
  setTimeout(() => {
    const intro = document.getElementById('intro');
    intro.style.transition = 'opacity 0.8s';
    intro.style.opacity    = '0';
    setTimeout(() => { intro.style.display = 'none'; }, 800);
  }, 3500);
})();

/* ============================================================
   6. CURSOR PERSONALIZADO
   ============================================================ */
const cursorEl = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursorEl.style.left = e.clientX + 'px';
  cursorEl.style.top  = e.clientY + 'px';
});
document.addEventListener('mouseover', e => {
  if (e.target.matches('button,a,.moto-card,.swatch,.wheel-btn'))
    cursorEl.classList.add('hover');
  else
    cursorEl.classList.remove('hover');
});

/* ============================================================
   7. CONTADOR ANIMADO DE ESTADÍSTICAS
   ============================================================ */
function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current  = 0;
    const step   = target / 60;
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) clearInterval(id);
    }, 16);
  });
}
setTimeout(animateCounters, 3800);

/* ============================================================
   8. FILTROS
   ============================================================ */
function populateFilters() {
  const marcas = [...new Set(MOTOS.map(m => m.marca))].sort();
  const sel    = document.getElementById('f-marca');
  marcas.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m; opt.textContent = m;
    sel.appendChild(opt);
  });
}

/* ============================================================
   9. RENDER DEL GRID DE MOTOS
   ============================================================ */
function renderMotos() {
  const search = document.getElementById('search').value.toLowerCase();
  const marca  = document.getElementById('f-marca').value;
  const cc     = document.getElementById('f-cc').value;
  const tipo   = document.getElementById('f-tipo').value;

  const filtered = MOTOS.filter(m => {
    if (search && !`${m.marca} ${m.modelo} ${m.tipo}`.toLowerCase().includes(search)) return false;
    if (marca  && m.marca !== marca)  return false;
    if (tipo   && m.tipo  !== tipo)   return false;
    if (cc) {
      if (cc === '50-125'   && (m.cc < 50   || m.cc > 125))  return false;
      if (cc === '126-300'  && (m.cc < 126  || m.cc > 300))  return false;
      if (cc === '301-600'  && (m.cc < 301  || m.cc > 600))  return false;
      if (cc === '601-1000' && (m.cc < 601  || m.cc > 1000)) return false;
      if (cc === '1001+'    && m.cc <= 1000)                  return false;
    }
    return true;
  });

  document.getElementById('moto-count').textContent = filtered.length;
  const grid = document.getElementById('motos-grid');
  grid.innerHTML = '';

  filtered.forEach((moto, i) => {
    const card = document.createElement('div');
    card.className = 'moto-card';
    card.style.animationDelay = (i * 0.05) + 's';

    card.innerHTML = `
      <div class="card-badge">${moto.badge}</div>
      <div class="card-cc-badge">${moto.cc === 0 ? 'ELÉCTRICA' : moto.cc + ' cc'}</div>
      <div class="card-img-wrap">
        <canvas class="moto-canvas-card" width="400" height="200"></canvas>
      </div>
      <div class="card-body">
        <div class="card-brand">${moto.marca}</div>
        <div class="card-name">${moto.modelo}</div>
        <div class="card-specs">
          <div class="card-spec">🏍️ <strong>${moto.tipo.charAt(0).toUpperCase() + moto.tipo.slice(1)}</strong></div>
          <div class="card-spec">⚙️ <strong>${moto.specs.Motor || ''}</strong></div>
          <div class="card-spec">⚡ <strong>${moto.specs.Potencia || ''}</strong></div>
        </div>
        <div class="card-desc">${moto.desc}</div>
      </div>
      <div class="card-footer">
        <div class="card-price">${moto.precio}</div>
        <div class="card-btns">
          <button class="btn-sm btn-secondary" data-id="${moto.id}">🔧 Personalizar</button>
          <button class="btn-sm btn-primary"    data-id="${moto.id}">Ver más</button>
        </div>
      </div>
    `;

    grid.appendChild(card);

    // Dibuja la moto en el canvas de la card
    const cvs = card.querySelector('.moto-canvas-card');
    drawMoto(cvs, moto, moto.color, moto.color2, 'standard');

    // Abre modal al hacer clic en imagen o botones
    card.querySelector('.card-img-wrap').addEventListener('click', () => openModal(moto.id));
    card.querySelectorAll('.btn-sm').forEach(btn =>
      btn.addEventListener('click', () => openModal(parseInt(btn.dataset.id)))
    );
  });
}

/* ============================================================
   10. MODAL
   ============================================================ */
function openModal(id) {
  activeMoto = MOTOS.find(m => m.id === id);
  if (!activeMoto) return;

  bodyColor  = activeMoto.color;
  frameColor = activeMoto.color2;
  wheelType  = 'standard';

  document.getElementById('m-brand').textContent = activeMoto.marca;
  document.getElementById('m-name').textContent  = activeMoto.modelo;
  document.getElementById('m-year').textContent  =
    `${activeMoto.año} · ${activeMoto.tipo.charAt(0).toUpperCase() + activeMoto.tipo.slice(1)} · ` +
    `${activeMoto.cc === 0 ? 'Eléctrica' : activeMoto.cc + ' cc'}`;
  document.getElementById('m-desc').textContent  = activeMoto.desc;

  // Especificaciones
  const sg = document.getElementById('m-specs');
  sg.innerHTML = '';
  Object.entries(activeMoto.specs).forEach(([k, v]) => {
    sg.innerHTML +=
      `<div class="spec-item">
         <div class="spec-key">${k}</div>
         <div class="spec-val">${v}</div>
       </div>`;
  });

  // Paletas de color
  buildColorSwatches('body-colors',  color => { bodyColor  = color; updateModalCanvas(); });
  buildColorSwatches('frame-colors', color => { frameColor = color; updateModalCanvas(); });

  // Resetear botones de llanta
  document.querySelectorAll('.wheel-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-wheel="standard"]').classList.add('active');

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  updateModalCanvas();
}

function buildColorSwatches(containerId, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  COLORS.forEach(c => {
    const sw = document.createElement('div');
    sw.className = 'swatch' + (c.cls ? ' ' + c.cls : '');
    if (!c.cls) sw.style.background = c.hex;
    sw.title = c.name;

    sw.addEventListener('click', () => {
      container.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      const hex = c.cls === 'chrome' ? '#c0c0c0'
                : c.cls === 'gold'   ? '#c9a227'
                : c.cls === 'carbon' ? '#2a2a2a'
                : c.hex;
      onSelect(hex);
    });

    container.appendChild(sw);
  });
}

function updateModalCanvas() {
  if (!activeMoto) return;
  const canvas = document.getElementById('modal-canvas');
  drawMoto(canvas, activeMoto, bodyColor, frameColor, wheelType);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  activeMoto = null;
}

/* ============================================================
   11. EVENTOS GLOBALES
   ============================================================ */

// Botón "Ver Catálogo" en el hero
document.getElementById('btn-ver-catalogo').addEventListener('click', () => {
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
});

// Cerrar modal
document.getElementById('btn-close-modal').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// Selector de llantas (delegación)
document.getElementById('wheel-options').addEventListener('click', e => {
  const btn = e.target.closest('.wheel-btn');
  if (!btn) return;
  document.querySelectorAll('.wheel-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  wheelType = btn.dataset.wheel;
  updateModalCanvas();
});

// Filtros en tiempo real
document.getElementById('search').addEventListener('input',  renderMotos);
document.getElementById('f-marca').addEventListener('change', renderMotos);
document.getElementById('f-cc').addEventListener('change',   renderMotos);
document.getElementById('f-tipo').addEventListener('change',  renderMotos);
document.getElementById('btn-filtrar').addEventListener('click', renderMotos);

/* ============================================================
   12. INIT
   ============================================================ */
populateFilters();
renderMotos();