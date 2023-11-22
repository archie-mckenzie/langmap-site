'use client'

import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist-min';

const data = {"fr": [[-0.10541761431661205, 0.01618793055724971, 0.1264187453278461], [-0.1362398594262612, 0.01627362670213061, 0.11353169788890419], [-0.09487900891779037, 0.013571244663229716, 0.09069283287685366], [-0.06483512318498459, -0.006810992107115506, 0.08560527118118999], [-0.106585410277775, -0.006339894054499458, 0.0886632348859093], [-0.08095493639215119, -3.4057387532574537e-06, 0.08422738419046291], [-0.09684387984762176, -0.015007936051129362, 0.10580027961799572], [-0.08304551154521704, -0.01825254112819985, 0.10650761004647973], [-0.12282504952549053, -0.009712885485807832, 0.09019777117590189], [-0.06967743524421743, 0.046183519869457464, 0.0685309918145501], [-0.09250273287489028, -0.006468828415156209, 0.13673708615131683], [-0.10621002621387708, 0.009784599525408475, 0.13052293530176773], [-0.056931471830949286, -0.006452699854687572, 0.08790517029040491], [-0.0522685862243981, -0.02984280778175634, 0.10374397525362669], [-0.12378421966378933, 0.007269095905879965, 0.13959768439872489], [-0.10313241855083163, 0.00508882086469156, 0.12647699647245414], [-0.09559326966142402, -0.0018795839807759613, 0.08608563915096892], [-0.10094587118239572, 0.030894053779556438, 0.13465484005900372], [-0.12469194986521542, 0.000360488185922046, 0.1309149138980523], [-0.0860068479495627, -0.021565677338162965, 0.10001842387803454], [-0.09025193984894551, 0.009919314610156358, 0.09462874520429003], [-0.10330188100048764, 0.036438956835511474, 0.08109821089771364], [-0.07792798363094858, -0.015860498799390214, 0.0836717389670929], [-0.10701141106592915, 0.004078315379215826, 0.15544319885930122], [-0.08159928601232853, 0.01881677714078353, 0.10869345633565927], [-0.06981521278944985, 0.0069680000444311985, 0.09856060059904498], [-0.0804681076127295, 0.01574780012507113, 0.08582739671158923], [-0.1120349827933466, 0.013353717042000363, 0.07783521136377718]], "es": [[-0.1388181414870176, -0.03199176334941948, -0.12124186257784918], [-0.15207068876354243, -0.08592320590780415, -0.09058982052475892], [-0.14577554168361662, -0.10418589121653482, -0.15821921925636964], [-0.143222267474203, -0.032999052772816694, -0.169688606190285], [-0.1283157012871293, -0.0754163600802709, -0.16885167249709762], [-0.10284798177162292, -0.096384581562043, -0.16246166000713355], [-0.11560747942903439, -0.07974717756371284, -0.1800805794445248], [-0.11806136354628365, -0.07878305343682411, -0.18647022252946815], [-0.12566538835164456, -0.04294756912302159, -0.12996588906457446], [-0.12226242553080202, -0.09109927944436239, -0.1517623248483774], [-0.1372723891154386, -0.07842193312280697, -0.15360050293944005], [-0.14937737450032523, -0.0989085391911557, -0.17533146080023448], [-0.16030686994827653, -0.0804564392016732, -0.15194154958398381], [-0.1366759652544652, -0.03433373629876492, -0.15704808178205953], [-0.1760776213560534, -0.06821179585307909, -0.13664889733079683], [-0.1186453620386292, -0.013677180053052842, -0.14100575604722265], [-0.16042269046545948, -0.10165839404043248, -0.19605490627396896], [-0.11707402966470205, -0.07936614349212341, -0.1400809558663165], [-0.11631512868113975, -0.03645560694343985, -0.13654067309417436], [-0.132518953750016, -0.07968208576058847, -0.16029952759211438], [-0.09735106250338188, -0.09180454312749543, -0.1896129012151465], [-0.10386739433201253, -0.055373896850926224, -0.1519390108456511], [-0.1308162861956512, -0.06940113860446825, -0.11684737054387301], [-0.12890790275293754, -0.03339887201355219, -0.13854748894015612], [-0.14751717167685802, -0.04829046011975027, -0.11921202543282879], [-0.14184319769604986, -0.03978794225909913, -0.11795993506174506], [-0.13697658754352574, -0.059738804599964695, -0.1181607942955041], [-0.14206592618085373, -0.06987840025087931, -0.12633455299140264], [-0.0931697209468044, -0.07510891866246908, -0.15571009994848717], [-0.11829453087989517, -0.0587124936447299, -0.13825500702855023], [-0.1542028071248121, -0.06636695438083194, -0.09691788957932572], [-0.1354289073890044, -0.079797193692525, -0.18659148029206138], [-0.14767338481114684, -0.07650610726199564, -0.10407788680531097], [-0.10835580433150385, -0.0729047863292867, -0.15078175574473712], [-0.12080445711344161, -0.041888993693049936, -0.1756100913186221]], "de": [[-0.08693483338643639, -0.024716239905078426, 0.185633023824029], [-0.11364100999646659, -0.01615052635422842, 0.17091460811004053], [-0.08295863046896848, -0.03213645984130587, 0.19857845386266418], [-0.07856085317159248, -0.013941174470964027, 0.14043764613008322], [-0.08347904004080588, -0.021871519782214268, 0.18870446951972236], [-0.13040057294436555, -0.04289370363688777, 0.13999306278670615], [-0.06662501676458729, -0.03272559081898564, 0.17051295333283117], [-0.09930375778827649, -0.025437004572289333, 0.19168743517380016], [-0.09023906491264731, -0.032691694988464845, 0.21842214660429066], [-0.11733075610482527, -0.02471698697269721, 0.19247313553283568], [-0.13466237317135843, -0.04132290947658186, 0.23965691901414543], [-0.10487170890707213, -0.012515700141719368, 0.19984387538451134], [-0.09767778249211773, -0.002546811187973693, 0.21250571132851298], [-0.1054744580798862, -0.03986909061445559, 0.15553658208687415], [-0.07346912075430967, -0.03972700254882416, 0.2190705926209421], [-0.06634671985458669, -0.036582341237501634, 0.1351920255266652], [-0.0488862817914566, -0.02421568199341503, 0.16630773075551342], [-0.12764481270503258, 0.008968131741846493, 0.21060653724843498], [-0.08053834677985497, -0.023175341039548446, 0.1696281420039951], [-0.07869323615056044, -0.029106220794978634, 0.19052247466175645], [-0.09437705044366608, -0.02187883212243935, 0.19661666973404304], [-0.0854212628919891, -0.0005762192994608601, 0.21249627754491465], [-0.10595972132275834, -0.01684477344720195, 0.20668701992010427], [-0.07824478681911629, -0.016289150120392754, 0.15750690936688022], [-0.08256555445195445, -0.014829582581129463, 0.2376263467938212], [-0.05514577704687966, -0.039731783166615436, 0.17451883235851207], [-0.08806628090938831, -0.03588700443020071, 0.17911676144285674], [-0.131670562125166, -0.01956358997076059, 0.20881585612834258], [-0.1046372297607835, -0.011818123942037602, 0.17024703630791108], [-0.13469227606823758, -0.015839833530996942, 0.25662903438571577]], "zh": [[0.04006271392980259, 0.10242728453890727, -0.05150918121944163], [0.013621177394741871, 0.1620853451959305, -0.06206052699158251], [0.08758262722344069, 0.17520821256534855, 0.024231476570333286], [0.0899799003289011, 0.10134464379565047, -0.07743320412091335], [0.08273960112037129, 0.09468888454476301, -0.09051553920311099], [0.08406985592155243, 0.2294458701525212, 0.008320199273311204], [0.07437521790166546, 0.228028018714468, -0.010458625704065947], [0.03513807613483707, 0.07365720871015034, 0.021599565860574235], [0.10301887755596266, 0.14985767319098148, -0.024716195796435744], [0.10541090653198801, 0.08756221738950982, -0.0792598936418199], [0.09453789750988237, 0.12123824192041299, -0.0293844747886095], [0.11472659340221598, 0.14278928894088364, -0.0311925602634341], [0.05786596097894852, 0.18020969465337577, 0.006439338852615691], [0.10389500546896377, 0.17891622629156598, -0.03984620483205932], [0.02531189033641432, 0.07068908096527661, -0.006569823384665303], [0.10075876147833403, 0.08536284841203098, -0.03676842873218292], [0.07773803262373903, 0.07842728476584188, -0.029551870456275945], [0.1020615383042007, 0.03736141026257055, -0.029336191366766934], [0.13720994711773846, 0.19200680302144923, -0.01646184178901378], [0.10540141755333217, 0.22081754978867327, -0.01516635662697371], [0.06998540973615539, 0.14124085797543892, -0.006416027072631712], [0.06608505561961837, 0.11229386142388495, -0.0026856644667403342], [0.040253198881534016, 0.12067716093330431, -0.08567469543330583], [0.07778177694886053, 0.17842193126552108, -0.014675854708777997], [0.11050692502125614, 0.04010993120078163, -0.051226794363249874], [0.07399571032015921, 0.11068222525607958, -0.019593702924982238], [0.09377965479880902, 0.06597284267977371, -0.040971294416038966], [0.02943490288966589, 0.060585888771731405, -0.02295194707957723], [0.06961830006600946, 0.173102112622559, -0.009519501134945948], [0.11916541146632292, 0.19068381255878417, -0.047611380189566385], [0.033938735588282525, 0.06674913691185494, -0.0041234589569657445]], "ja": [[0.08367200107995221, 0.17211389131728774, -0.021905162722529667], [0.12675834230985086, 0.19056088587172676, -0.06288823774535915], [0.0842028795651644, 0.1952834980542206, -0.00697827161593856], [0.09710322980971063, 0.19423670632061826, -0.039701920830894015], [0.12402027475686668, 0.14833314804506098, -0.04681603800546874], [0.080635583196646, 0.2343176385672029, -0.03429303872295102], [0.0814295205221605, 0.1672371582910401, -0.022749309383241857], [0.07137244795126463, 0.19727146095550901, 0.007710731138453515], [0.11845253957130569, 0.2406667507387997, -0.041920837165907075], [0.0891961768195779, 0.16537319026194247, -0.03804485999695165], [0.082742194742697, 0.21541890910067593, -0.05491829934056219], [0.07810533782352715, 0.21092588775536453, 3.878658932041785e-05], [0.09364663345375443, 0.16464219860746154, -0.031322984504990194], [0.1488777264879409, 0.1944598257739322, -0.08278848229484749], [0.1474741769204962, 0.18170632255570907, -0.020882393990284142], [0.1477686743067204, 0.16457209027142455, -0.011875878332911708], [0.07817614419914125, 0.18773041487056288, -0.04051953781322682], [0.04216345958931602, 0.1939410093284348, 0.0035651882130651163], [0.016084365054061935, 0.16172513839132582, 0.02876914199643513], [0.09456551069077568, 0.2042251307322765, -0.01576122985103086], [0.11326055001572079, 0.199552545861445, -0.03270588385672689], [0.08320603063690607, 0.18659500972957901, 0.0047499684407693605], [0.06435802509066052, 0.2190893863604355, -0.00590876241928214], [0.125149241578334, 0.20105920881669767, -0.05407771680642202], [0.09969490043663798, 0.23523147631049063, -0.05456814640979405], [0.07472724001116521, 0.20339362814000528, 0.003923866853013533], [0.08611570471593886, 0.15796621414402567, -0.011620512600930721], [0.10844340011904256, 0.18068504201016392, -0.05396531338160991], [0.0905487216858851, 0.19898172782219026, -0.017164398206598642], [0.08483102811497074, 0.19147669373383006, -0.02367259343144411], [0.15994147224183225, 0.22456974308159888, -0.07487460237360456], [0.09708683367481248, 0.21546745239250753, -0.04512379024238059], [0.13621908248324696, 0.21947951143143338, -0.04312050661711065], [0.09841558724537554, 0.2010384726817502, -0.01833671747912779]], "ru": [[0.2464809462684011, -0.21814563307695864, -0.0016603768459057119], [0.19827390374216947, -0.1951495443572929, 0.02079860129725298], [0.18382576970140144, -0.1617289480010372, 0.023071998886100925], [0.21805376398677517, -0.17877711319272835, 0.021622895591890887], [0.24128285709017672, -0.1741278922486857, 0.0034814187166997182], [0.22977699149545475, -0.17649984456720574, -0.02108203280951999], [0.06581953459737579, -0.07444140303614122, 0.03445257237617795], [0.20391605216571537, -0.18341759502002564, -0.002212466874668491], [0.1997991032641272, -0.20680128683706211, 0.06713108654435856], [0.20412693769436793, -0.2172724904101293, 0.029199961190202794], [0.2473184528042616, -0.16641647907347712, 0.01399105202154221], [0.22127772317054553, -0.19496387552088346, -0.002221730992976542], [0.2518513550408688, -0.22676170712111188, -0.00768081936840361], [0.2593228566387825, -0.13840371994918663, 0.010925273699017175], [0.21022744904921167, -0.18247697194564472, -0.002827748547260547], [0.25166706228327773, -0.20050122672608378, 0.024051330502988605], [0.16099599002032436, -0.15856828466620956, -0.016656211147468118], [0.24461340880320054, -0.18527905325983812, 0.0022761785756891238], [0.21711451558333736, -0.18718750697942016, -0.00035463221342063025], [0.2483634191233957, -0.23815071719042458, 0.001804270946953512], [0.22156473059568493, -0.18370803346164155, 0.03175200305405618], [0.23209990786041684, -0.1758876607990373, -0.008189973081368098], [0.2107527281567742, -0.1930592533522307, 0.010296540678431762], [0.23248438254070514, -0.17210444429873453, 0.007629336925096702], [0.22283612206153633, -0.19144163868623387, -0.013284167169434709], [0.21914750848821693, -0.20907048934999223, 0.04323041347552884], [0.22137206032747925, -0.18036757964316028, 0.010749225643465529], [0.2282770708954872, -0.19818896082821288, 0.02068849303051218], [0.21890728105526588, -0.18559750250593499, -0.015059706109730203], [0.23205582617776166, -0.19740941946835286, 0.05103616376238105], [0.24392951501255822, -0.20957610248750208, 0.013620411608956665], [0.1931026132857844, -0.14579048723794252, 0.030512162985525355], [0.22281979771533092, -0.19684689962631627, 0.037863999770483416], [0.27080689026810356, -0.19914450574001333, -0.005720564116468526], [0.23734265263086696, -0.196940291100225, 0.017839003312498266]], "pt": [[-0.13129436346251444, -0.057624237990135614, -0.10278450736121082], [-0.10186274499687216, -0.07172550271338417, -0.1483794238539976], [-0.0957902653770909, -0.04808900437957296, -0.11740200788553322], [-0.11521070329577553, -0.02081781472294961, -0.07035960372568588], [-0.12387289083274465, -0.02780666384382114, -0.07349781509313234], [-0.061629696974715924, -0.05334776862572944, -0.1272483985405129], [-0.11277745466235538, -0.03852521097423341, -0.08318534329810601], [-0.05765369858309191, -0.034900377010005056, -0.12358846083796636], [-0.15309896298571402, -0.09012880429716227, -0.09762471436184449], [-0.1167033577868682, -0.0656833226765056, -0.13639296866108935], [-0.12161544407787253, -0.07787974665514481, -0.09472016489706075], [-0.11898324824330156, -0.04672217001405782, -0.08467465536786217], [-0.07121024280034827, -0.027126758757291137, -0.11202332063444415], [-0.09943576622141442, -0.05745633232835979, -0.10171392020262866], [-0.10845007391794209, -0.05521008934241456, -0.13172636888634742], [-0.06883596604612241, -0.014076399755726233, -0.13352269285141563], [-0.1159210603692713, -0.03646718679296719, -0.09272763823101104], [-0.10662430849016935, -0.04750199655777273, -0.1210539681574794], [-0.1054336954242964, -0.011525097296845047, -0.09967572137756123], [-0.07570410239939811, -0.056690186387345035, -0.08165153292963777], [-0.0923554811559931, -0.08580266593574606, -0.13281160624751598], [-0.07052115488096355, -0.06134340411400399, -0.1332112810522009], [-0.07554225552789341, -0.07064534447294064, -0.1204699480611898], [-0.09268783740971213, -0.031055665379582757, -0.08648696354654625], [-0.10315731992651728, -0.010152794795601347, -0.08305661291280364], [-0.12539520742895005, -0.055601860883286246, -0.10121735633128585]], "en": [[-0.05877069180381697, 0.03524889514249498, 0.0010420857726182705], [-0.06680998588927001, 0.010967456167763784, 0.07135537110443706], [-0.05805581405091694, -0.00909907513636025, 0.03871956274047333], [-0.009526004366312981, 0.02083091460833616, 0.024128311200383126], [-0.059452032604569306, 0.021085510040637464, 0.05693862090128708], [-0.03858413097452076, 0.01501138052977489, 0.020051378752078762], [-0.025736390402160834, 0.00277075856319316, 0.05138747804455681], [-0.008510694403824773, 0.0029842867229534524, 0.014412859843810867], [0.005430589105027792, -0.000844376908300425, -0.0018308864451553589], [-0.013154058311710362, -0.009811077348883483, 0.018083702799633256], [-0.0032048852248392607, -0.012808345958683234, -0.023335408285636943], [-0.023192266882318083, 0.007780855132969962, -0.012406810692480506], [-0.04470590913335262, 0.006986922036142044, 0.036154087417673154], [-0.05789706324765319, -0.012210287730055242, 0.07206980617820896], [-0.031955050371720535, 0.006185161068195942, 0.07054182888199968], [0.015807825365511625, 0.019932926364703885, -0.013191618925854205], [0.00040035941174127614, -0.027204298688666053, 0.018476286356486023], [-0.00746207688825384, 0.014234725072116464, 0.001685346538401313], [-0.019212880694909062, 0.005775184311344452, 0.0292524553100493], [0.022893610257152724, 0.07678425451158705, -0.012897544225507037], [-0.046166990873435954, 0.003958450017640625, 0.025400092140292232], [-0.02057763509598868, -0.012329267895091669, 0.04757981967963023], [-0.04839338548009757, 0.017023458728883712, 0.0009880387643626599], [0.0021715550602645953, -0.011976940447474889, -0.0009919303359150137], [-0.046409102819488866, -0.006318296530300127, 0.033398228453267474], [-0.04016322729823583, -0.009069078618356404, 0.025829480080263263], [0.016725354504467632, -0.029481289156728954, 0.017725010814175886], [0.013557523598583724, -0.030865856543058047, 0.012691504353191704], [-0.036595125983490275, 0.010487568471016881, 0.042474112455352306], [-0.03521949043655794, -0.011916126095370063, 0.02281446370899608], [-0.036658506305656174, -0.014470795054325355, 0.04178784462795256]]}

const ScatterPlot = () => {
  useEffect(() => {
    const unpack = (rows, index) => rows.map(row => row[index]);

    const colors = {
      fr: 'red', 
      es: 'green', 
      de: 'blue', 
      zh: 'yellow', 
      jp: 'purple', 
      pt: 'orange', 
      ru: 'brown', 
      en: 'pink'
    };

    const traces = Object.keys(data).map(key => ({
      x: unpack(data[key], 0),
      y: unpack(data[key], 1),
      z: unpack(data[key], 2),
      mode: 'markers',
      marker: {
        size: 4,
        line: {
          color: 'rgba(217, 217, 217, 0.14)',
          width: 0.5
        },
        opacity: 0.8,
        color: colors[key]
      },
      type: 'scatter3d',
      name: key
    }));

    const layout = {
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
      }
    };

    Plotly.newPlot('scatter-plot', traces, layout);
  }, []);

  return <div id='scatter-plot' />;
};

export default ScatterPlot;