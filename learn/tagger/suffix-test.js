import getAll from './parse.js'

let suffixes = [
  'grafe',
  'ochi',
  'senso',
  'efici',
  'ani',
  'ans',
  'anchi',
  'esoro',
  'loni',
  'ntina',
  'ntini',
  'lone',
  'zi',
  'zo',
  'za',
  'acoli',
  'ze',
  'hiere',
  'hiera',
  'ema',
  'emi',
  'atti',
  'reni',
  'reno',
  'rrore',
  'orno',
  'mmi',
  'orni',
  'mma',
  'enica',
  'enico',
  'siti',
  'sone',
  'ndi',
  'nda',
  'vizio',
  'assa',
  'agli',
  'fetti',
  'fetto',
  'mone',
  'dì',
  'moni',
  'rolli',
  'voro',
  'razze',
  'overi',
  'onari',
  'schio',
  'alo',
  'ala',
  'verno',
  'verni',
  'monio',
  'uana',
  'lario',
  'bus',
  'ion',
  'bitri',
  'atino',
  'atina',
  'atine',
  'lessi',
  'obili',
  'tela',
  'DENTE',
  'mblea',
  'tieri',
  'nze',
  'nza',
  'una',
  'nario',
  'agne',
  'agni',
  'agno',
  'emia',
  'isura',
  'isure',
  'genda',
  'onate',
  'alice',
  'noni',
  'cipio',
  'lusso',
  'afia',
  'venti',
  'vento',
  'anie',
  'archi',
  'arche',
  'pio',
  'pie',
  'pia',
  'omba',
  'ombe',
  'idio',
  'lori',
  'lore',
  'cello',
  'cella',
  'celle',
  'iccio',
  'quami',
  'estri',
  'rsi',
  'ngoli',
  'hie',
  'hio',
  'tine',
  'ting',
  'tina',
  'tino',
  'tini',
  'ssi',
  'sso',
  'xport',
  'dezza',
  'diere',
  'mia',
  'dore',
  'ostro',
  'tri',
  'diani',
  'lberi',
  'olore',
  'olori',
  'uli',
  'dri',
  'ule',
  'rtine',
  'lezza',
  'larme',
  'tume',
  'ffici',
  'ffico',
  'nchi',
  'dello',
  'della',
  'adini',
  'etria',
  'adina',
  'icidi',
  'mbino',
  'grati',
  'ratti',
  'ratto',
  'iochi',
  'ice',
  'ndola',
  'ATORE',
  'llite',
  'unale',
  'taggi',
  'nzia',
  'uadri',
  'patia',
  'ppe',
  'ppa',
  'ppo',
  'ogli',
  'pione',
  'pioni',
  'udine',
  'udini',
  'resse',
  'ei',
  'eo',
  'odo',
  'ee',
  'oto',
  'oti',
  'ote',
  'ota',
  'corsi',
  'imone',
  'avi',
  'torie',
  'toria',
  'ave',
  'ioco',
  'conto',
  'conti',
  'uenza',
  'uenze',
  'inari',
  'chi',
  'rcito',
  'azza',
  'gismo',
  'omani',
  'iami',
  'tità',
  'dio',
  'dia',
  'die',
  'cenza',
  'mpio',
  'lie',
  'lio',
  'utori',
  'utore',
  'hegge',
  'sacro',
  'arte',
  'setta',
  'arto',
  'sette',
  'sie',
  'forzo',
  'iardi',
  'onimo',
  'uerra',
  'igo',
  'igore',
  'otti',
  'otto',
  'otta',
  'rtone',
  'otte',
  'ilone',
  'toio',
  'liani',
  'ositi',
  'egia',
  'enso',
  'egio',
  'ecina',
  'uglio',
  'teusi',
  'lture',
  'tiera',
  'tiere',
  'gi',
  'go',
  'istra',
  'istro',
  'zetta',
  'istri',
  'ovo',
  'coni',
  'lanti',
  'niere',
  'igili',
  'uità',
  'nità',
  'uadro',
  'ruppo',
  'ntore',
  'ntori',
  'azze',
  'azzo',
  'azzi',
  'ine',
  'asti',
  'asto',
  'sia',
  'egole',
  'egola',
  'arzo',
  'ORE',
  'vanza',
  'rsone',
  'gioni',
  'cità',
  'gione',
  'rtura',
  'oggio',
  'naio',
  'naia',
  'eca',
  'omi',
  'netta',
  'odio',
  'sini',
  'hino',
  'oghi',
  'inta',
  'stero',
  'inti',
  'nnio',
  'umero',
  'cidi',
  'lisi',
  'saggi',
  'io',
  'ie',
  'ia',
  'ome',
  'rice',
  'opi',
  'izi',
  'rollo',
  'lanza',
  'atoi',
  'mini',
  'mino',
  'mine',
  'stume',
  'ista',
  'iste',
  'isti',
  'rgia',
  'razzo',
  'ssore',
  'ampo',
  'ssori',
  'ndite',
  'olli',
  'ollo',
  'olla',
  'ofono',
  'ZIONE',
  'otore',
  'rdia',
  'teri',
  'irata',
  'ier',
  'bone',
  'schia',
  'eoria',
  'usola',
  'dario',
  'iazza',
  'uardi',
  'uardo',
  'copi',
  'udore',
  'netto',
  'edia',
  'atria',
  'ichi',
  'uency',
  'udi',
  'gista',
  'gisti',
  'ncino',
  'ela',
  'rbone',
  'ort',
  'oro',
  'lievo',
  'ore',
  'lievi',
  'gore',
  'chio',
  'chia',
  'chie',
  'apore',
  'eche',
  'ovina',
  'rche',
  'brica',
  'nanza',
  'nanze',
  'iardo',
  'cismo',
  'lino',
  'lina',
  'ntoni',
  'ologo',
  'lonne',
  'smi',
  'NTI',
  'salto',
  'messa',
  'eria',
  'forte',
  'forti',
  'uola',
  'uolo',
  'ulti',
  'rdite',
  'schi',
  'oio',
  'nnoni',
  'zina',
  'nimo',
  'beri',
  'iggio',
  'senza',
  'ma',
  'me',
  'gli',
  'mi',
  'tomi',
  'urgia',
  'monia',
  'segna',
  'segne',
  'segni',
  'uttle',
  'rezzo',
  'rezze',
  'rezza',
  'campo',
  'resa',
  'canto',
  'canti',
  'vità',
  'veri',
  'tanze',
  'tanza',
  'nanti',
  'ranti',
  'petti',
  'petto',
  'ntola',
  'cende',
  'eneri',
  'cche',
  'atore',
  'atori',
  'cchi',
  'daggi',
  'llari',
  'nione',
  'nioni',
  'sidi',
  'ffiti',
  'abyte',
  'ttini',
  'ttino',
  'vieto',
  'inesi',
  'tenza',
  'tenze',
  'nto',
  'nti',
  'oi',
  'gne',
  'gno',
  'gni',
  'loghi',
  'lieri',
  'liere',
  'mina',
  'este',
  'esta',
  'esto',
  'edoni',
  'amma',
  'erche',
  'erra',
  'forma',
  'forme',
  'canza',
  'orum',
  'tie',
  'rotti',
  'rgie',
  'vio',
  'esia',
  'LO',
  'ampi',
  'dizi',
  'sorzi',
  'amere',
  'oscia',
  'nio',
  'ndita',
  'nie',
  'ienze',
  'ienza',
  'tegno',
  'ENTO',
  'estra',
  'imana',
  'estre',
  'estro',
  'logo',
  'giati',
  'udizi',
  'ghe',
  'ghi',
  'iaia',
  'iri',
  'mbre',
  'mbri',
  'usura',
  'rco',
  'rca',
  'cenni',
  'viste',
  'NE',
  'NA',
  'iesta',
  'ieste',
  'itoli',
  'itolo',
  'irati',
  'lazzi',
  'tero',
  'ase',
  'cini',
  'atona',
  'nor',
  'ture',
  'tura',
  'rchi',
  'tismo',
  'cordi',
  'rasso',
  'rassi',
  'ibuto',
  'ogo',
  'eità',
  'oga',
  'ramma',
  'ergie',
  'ergia',
  'iole',
  'iolo',
  'ande',
  'naro',
  'igli',
  'gnore',
  'ndio',
  'cino',
  'cine',
  'cina',
  'pero',
  'itto',
  'itti',
  'itte',
  'itta',
  'si',
  'ammi',
  'terio',
  'ping',
  'ragio',
  'ipo',
  'ipi',
  'ità',
  'oneta',
  'lismo',
  'llaio',
  'ranze',
  'ranza',
  'sioni',
  'sione',
  'inale',
  'zetto',
  'rovie',
  'nsole',
  'tress',
  'orzio',
  'bra',
  'bre',
  'occhi',
  'cchie',
  'cchio',
  'ianza',
  'alata',
  'ssina',
  'olici',
  'ISTA',
  'ugli',
  'ione',
  'ioni',
  'ibuti',
  'lotto',
  'lione',
  'lioni',
  'cesso',
  'cessi',
  'sfera',
  'tessa',
  'eggi',
  'egge',
  'afie',
  'tizie',
  'tizia',
  'sulti',
  'gnosi',
  'orso',
  'orsi',
  'mba',
  'orsa',
  'mbe',
  'nente',
  'azia',
  'alco',
  'azie',
  'zeria',
  'agine',
  'agina',
  'agini',
  'lite',
  'arere',
  'onne',
  'RE',
  'nture',
  'emica',
  't.',
  'ardi',
  'ardo',
  'nco',
  'aglio',
  'aglie',
  'oco',
  'acche',
  'oce',
  'acchi',
  'luogo',
  'dite',
  'dita',
  'oppa',
  'aio',
  'ieri',
  'iere',
  'iera',
  'fitta',
  'amate',
  'tleta',
  'tteri',
  'mbio',
  'edie',
  'uetto',
  'ttura',
  'tture',
  'edute',
  'massi',
  'rtuna',
  'ieria',
  'icina',
  'scesa',
  'ncoli',
  'izzo',
  'ENTI',
  'orme',
  'orma',
  'ltori',
  'lette',
  'letta',
  'bligo',
  'rme',
  'rma',
  'rmi',
  'ezzi',
  'zione',
  'ezza',
  'ezze',
  'zioni',
  'passo',
  'litti',
  'TI',
  'TO',
  'TA',
  'TE',
  'sseri',
  'ssere',
  'acati',
  'fondo',
  'uncia',
  'tioni',
  'tione',
  'usi',
  'getto',
  'getti',
  'rutta',
  'esa',
  'esi',
  'parti',
  'parto',
  'anni',
  'astro',
  'sino',
  'astri',
  'astre',
  'sina',
  'antra',
  'cita',
  'alori',
  'itro',
  'viere',
  'teche',
  'oste',
  'ori',
  'retto',
  'fista',
  'eno',
  'eni',
  'ficio',
  'rdine',
  'llina',
  'risti',
  'lline',
  'rista',
  'llino',
  'spiro',
  'ssuti',
  'ssuto',
  'abato',
  'ltà',
  'rino',
  'rine',
  'rina',
  'tiero',
  'scita',
  'enda',
  'ievo',
  'ancio',
  'ancia',
  'utela',
  'tista',
  'tisti',
  'nnine',
  'ciami',
  'rello',
  'età',
  'tetto',
  'oquio',
  'stori',
  'SIONE',
  'ami',
  'ame',
  'stri',
  'stro',
  'stra',
  'stre',
  'rte',
  'rti',
  'rto',
  'osito',
  'ducia',
  'lutei',
  'nce',
  'ction',
  'tema',
  'oria',
  'anzia',
  'orie',
  'alone',
  'rio',
  'ria',
  'elo',
  'eli',
  'dità',
  'loppo',
  'cambi',
  'uario',
  'ondi',
  'ondo',
  'itori',
  'itore',
  'genza',
  'tanti',
  'nenza',
  'dieri',
  'lmini',
  'lmine',
  'cenda',
  'atari',
  'appe',
  'lenze',
  'rore',
  'sagli',
  'aggio',
  'asi',
  'lzoni',
  'tro',
  'rammi',
  'rra',
  'tre',
  'tra',
  'oteca',
  'gili',
  'demia',
  'tion',
  'rafie',
  'rafia',
  'bri',
  'llo',
  'ini',
  'lli',
  'ino',
  'bro',
  'lle',
  'ina',
  'lla',
  'ing',
  'nesto',
  'line',
  'piego',
  'teca',
  'ologi',
  'nore',
  'nori',
  'nzata',
  'nzate',
  'ation',
  'notte',
  'richi',
  'punto',
  'mbi',
  'ume',
  'umi',
  'umo',
  'smo',
  'hiavi',
  'STA',
  'ietra',
  'ncia',
  'ncio',
  'egozi',
  'roina',
  'oppie',
  'ischi',
  'bi',
  'bo',
  'ionfo',
  'adino',
  'nome',
  'iglie',
  'iglia',
  'iglio',
  'iani',
  'quile',
  'arica',
  'sità',
  'arcia',
  'arico',
  'gini',
  'gina',
  'gine',
  'china',
  'chino',
  'chini',
  'icche',
  'erbi',
  'uoco',
  'mante',
  'embri',
  'embre',
  'tegia',
  'nacce',
  'cetto',
  'trini',
  'agio',
  'neria',
  'anze',
  'enni',
  'nauti',
  'vallo',
  'valli',
  'zista',
  'zisti',
  'atura',
  'ature',
  'tore',
  'tori',
  'da',
  'occo',
  'cie',
  'cia',
  'cio',
  'mista',
  'pore',
  'rità',
  'cista',
  'cisti',
  'sure',
  'sura',
  'sta',
  'ste',
  'sti',
  'sto',
  'rismo',
  'onna',
  'porto',
  'porti',
  'ntura',
  'blemi',
  'hetta',
  'hette',
  'hetti',
  'regua',
  'liaia',
  'venza',
  'ambio',
  'pping',
  'port',
  'ietà',
  'pecie',
  'enzai',
  'etari',
  'sofia',
  'corte',
  'eghe',
  'rieri',
  'riera',
  'riere',
  'delli',
  'ressi',
  'resso',
  'anti',
  'rtà',
  'fe',
  'gge',
  'fa',
  'fo',
  'ggi',
  'fi',
  'iorno',
  'poli',
  'ritti',
  'tezze',
  'tezza',
  'di',
  'asso',
  'assi',
  'ffa',
  'eting',
  'rada',
  'uogo',
  'aglia',
  'nomia',
  'nomie',
  'edi',
  'dditi',
  'nter',
  'oline',
  'olino',
  'erno',
  'oci',
  'estie',
  'estia',
  'mismo',
  'nisti',
  'nista',
  'niste',
  'ietto',
  'ietti',
  'iette',
  'llone',
  'lloni',
  'ltura',
  'empo',
  'empi',
  'scoli',
  'niera',
  'scolo',
  'nieri',
  'ollah',
  'hi',
  'ifici',
  'ONE',
  'omia',
  'aia',
  'stolo',
  'izio',
  'izia',
  'izie',
  'alle',
  'alla',
  'allo',
  'alli',
  'alti',
  'rzo',
  'ulati',
  'sole',
  'sola',
  'zzi',
  'zzo',
  'zza',
  'zze',
  'lti',
  'pante',
  'ttore',
  'ttori',
  'fitto',
  'ciolo',
  'neta',
  'cioli',
  'averi',
  'omini',
  'ole',
  'ola',
  'olo',
  'oli',
  'ronte',
  'pelli',
  'pello',
  'ighi',
  'regio',
  'tà',
  'umore',
  'tia',
  'aggi',
  'nso',
  'MENTO',
  'alto',
  'denza',
  'denze',
  'gnor',
  'ogia',
  'ogie',
  'ssido',
  'ssidi',
  'vince',
  'colo',
  'coli',
  'sista',
  'sisti',
  'rtito',
  'rtiti',
  'rtita',
  'endio',
  'tello',
  'telli',
  'telle',
  'doni',
  'rghi',
  'olaio',
  'icolo',
  'icoli',
  'icola',
  'sore',
  'listi',
  'sori',
  'idi',
  'rcolo',
  'lenza',
  'oltà',
  'letto',
  'letti',
  'fonia',
  'lighi',
  'genti',
  'cione',
  'erie',
  'alore',
  'scia',
  'esina',
  'tagno',
  'tagni',
  'oni',
  'one',
  'mpi',
  'mpo',
  'vitù',
  'emico',
  'trada',
  'trade',
  'hetto',
  'vello',
  'colta',
  'teuti',
  'menti',
  'mento',
  'acere',
  'ordi',
  'egno',
  'egni',
  'ziani',
  'icio',
  'acolo',
  'la',
  'lo',
  'razia',
  'razie',
  'oglio',
  'oglia',
  'ziere',
  'zieri',
  'ntro',
  'ntri',
  'omma',
  'ecie',
  'zzina',
  'zzino',
  'uvole',
  'rado',
  'IO',
  'avola',
  'avolo',
  'mpero',
  'nismo',
  'fera',
  'nismi',
  'mani',
  'dosso',
  'vviso',
  'ardia',
  'alini',
  'sismi',
  'scio',
  'metti',
  'ussi',
  'enti',
  'ento',
  'orter',
  'alisi',
  'basso',
  'ni',
  'ne',
  'na',
  'sigli',
  'tola',
  'tole',
  'cco',
  'orzi',
  'cce',
  'steri',
  'silio',
  'rdi',
  'rdo',
  'ontri',
  'ontro',
  'ertà',
  'minio',
  'cerca',
  'ozza',
  'ersi',
  'agoga',
  'onie',
  'onio',
  'poste',
  'rafo',
  'sario',
  'neri',
  'latoi',
  'tolo',
  'amine',
  'amino',
  'ccia',
  'ccio',
  'arco',
  'adio',
  'anga',
  'onte',
  'onti',
  'onto',
  'ezzo',
  'TORIA',
  'mori',
  'more',
  'bbia',
  'ntela',
  'metri',
  'metro',
  'ttime',
  'roga',
  'nello',
  'buti',
  'logie',
  'logia',
  'grafi',
  'grafo',
  'enze',
  'benza',
  'enza',
  'tria',
  'sensi',
  'anza',
  'iso',
  'isi',
  'atto',
  'tone',
  'toni',
  'gia',
  'pe',
  'ndina',
  'gie',
  'pa',
  'ndine',
  'po',
  'pi',
  'gio',
  'elli',
  'ello',
  'elle',
  'NTO',
  'onaca',
  'orto',
  'orti',
  'orte',
  'edì',
  'rdino',
  'rbi',
  'empio',
  'rete',
  'isore',
  'reti',
  'inaio',
  'inaia',
  'uppo',
  'laio',
  'zia',
  'nni',
  'oschi',
  'cendi',
  'imali',
  'ncite',
  'hezza',
  'hezze',
  'odi',
  'ode',
  'tesi',
  'entri',
  'entro',
  'zurri',
  'volo',
  'parsa',
  'corso',
  'afo',
  'vedì',
  'mità',
  'rdini',
  'luppo',
  'acco',
  'acce',
  'ra',
  'ri',
  'ro',
  'ismi',
  'ismo',
  'torio',
  'rutto',
  'rutti',
  'glia',
  'glie',
  'glio',
  'fono',
  'eggio',
  'dismo',
  'nezza',
  'occia',
  'mando',
  'tempo',
  'ance',
  'dizio',
  'tismi',
  'collo',
  'nari',
  'rnici',
  'leria',
  'lerie',
  'igono',
  'ada',
  'uista',
  'ade',
  'adi',
  'uisto',
  'teria',
  'terie',
  'fici',
  'vetta',
  'inio',
  'ssini',
  'fie',
  'osso',
  'fia',
  'rchia',
  'riato',
  'stie',
  'stia',
  'ti',
  'ambi',
  'trice',
  'alogo',
  'litto',
  'agnia',
  'enati',
  'ntesi',
  'onero',
  'cidio',
  'renza',
  'renze',
  'stino',
  'imoni',
  'suolo',
  'sesso',
  'gnale',
  'AGGI',
  'relli',
  'relle',
  'liera',
  'rella',
  'rno',
  'rni',
  'ttiti',
  'lizia',
  'accia',
  'accio',
  'ecche',
  'ennio',
  'esti',
  'nsori',
  'etro',
  'etri',
  'etra',
  'trina',
  'ndati',
  'cetta',
  'lità',
  'celta',
  'rcati',
  'teste',
  'testo',
  'dista',
  'disti',
  'iseno',
  'pagna',
  'pagne',
  'essi',
  'adre',
  'adri',
  'ignor',
  'ure',
  'rani',
  'uri',
  'abbia',
  'itura',
  'iture',
  'IONE',
  'ility',
  'fiuto',
  'avoro',
  'asco',
  'eta',
  'eti',
  'illo',
  'illa',
  'zoni',
  'ianti',
  'ianto',
  'catto',
  'etti',
  'etto',
  'etta',
  'ette',
  'ario',
  'cacia',
  'iamma',
  'inee',
  'ggio',
  'zie',
  'zio',
  'onder',
  'arti',
  'eusi',
  'acia',
  'panti',
  'diera',
  'stema',
  'stemi',
  'otere',
  'titi',
  'rreni',
  'tacco',
  'rreno',
  'bio',
  'iorni',
  'dine',
  'dina',
  'dino',
  'dini',
  'fiche',
  'meria',
  'utti',
  'utto',
  'tto',
  'tti',
  'tte',
  'tta',
  'atoio',
  'iario',
  'presa',
  'prese',
  'ituta',
  'ura',
  'uro',
  'enari',
  'pasto',
  'icole',
  'era',
  'eri',
  'rvizi',
  'ecord',
]

// let suff = 'eva'



let docs = getAll()
const convert = {
  ProperNoun: 'Noun',
  Singular: 'Noun',
  Plural: 'Noun',
  Auxiliary: 'Verb',
  Modal: 'Verb',
  PresentTense: 'Verb',
  PastTense: 'Verb',
  FutureTense: 'Verb',
  Gerund: 'Verb',
  Imperative: 'Verb',
  Negative: 'Adverb',
  SingularAdjective: 'Adjective',
}
function doSuffix(suff) {
  let all = {}
  // let counts = {}
  const testOne = function (obj) {
    obj.words.forEach(o => {
      if (o.w.endsWith(suff) && o.w.length > suff.length) {
        let tag = convert[o.tag] || o.tag
        // let str = o.w.toLowerCase()
        all[tag] = all[tag] || 0
        all[tag] += 1
        // if (tag === 'Adjective') {
        //   counts[o.w] = counts[o.w] || 0
        //   counts[o.w] += 1
        // }
      }
      // console.log(o)
    })
  }


  docs.forEach(obj => {
    testOne(obj)
  })

  all = Object.entries(all).sort((a, b) => {
    if (a[1] > b[1]) {
      return -1
    } else if (a[1] < b[1]) {
      return 1
    }
    return 0
  })
  // add percent
  let total = all.reduce((h, a) => {
    h += a[1]
    return h
  }, 0)

  all = all.map(a => {
    let num = (a[1] / total || 1) * 100
    let per = Math.round(num * 10) / 10
    return [a[0], a[1], per]
  })

  if (all[0] && all[0][0] === 'Noun' && all[0][2] >= 92) {
    console.log(suff)
    // console.log(all)
  } else {
    // console.log('-')
  }
}


suffixes.forEach(suff => doSuffix(suff))