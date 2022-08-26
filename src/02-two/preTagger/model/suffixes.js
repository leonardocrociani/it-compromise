const rb = 'Adverb'
const nn = 'Noun'
const fn = 'FemaleNoun'
const mn = 'MaleNoun'
const vb = 'Verb'
const jj = 'Adjective'
// const cond = 'ConditionalVerb'
const fut = 'FutureTense'
const inf = 'Infinitive'
const g = 'Gerund'
const ref = 'Reflexive'
const imp = 'Imperative'
const pres = 'PresentTense'
const val = ['TextValue', 'Cardinal']
// const first = 'FirstPerson'

export default [
  null,
  {
    // one-letter suffixes
  },
  {
    // two-letter suffixes
    io: nn,
    tà: fn,
    tù: fn,
    rà: fut,
    uo: jj,
    na: nn,
    ta: nn,
    ne: nn,
    ze: nn,
    pi: nn,
    // ti: nn,
    bo: nn,
    fo: nn,
    lo: nn,
    to: nn,
  },
  {
    // three-letter suffixes

    uno: val,
    due: val,
    tre: val,
    tré: val,
    sei: val,

    are: inf,
    ire: inf,
    ere: inf,
    umi: nn,
    ine: nn,
    età: nn,
    ico: jj,
    one: nn,
    oni: nn,
    ore: mn,
    ema: mn,
    eva: vb,
    arà: fut,
    erà: fut,
    irà: fut,
    rrà: fut,
    vrà: fut,
    irò: fut,
    ava: imp,
    bbe: vb,
    sce: vb,
    ono: vb,
    oso: jj,
    ior: jj,

    mba: nn,
    ada: nn,
    fia: nn,
    mia: nn,
    tia: nn,
    mma: nn,
    rra: nn,
    cce: nn,
    fie: nn,
    gie: nn,
    nie: nn,
    sie: nn,
    tie: nn,
    zie: nn,
    ule: nn,
    ame: nn,
    ing: nn,
    adi: nn,
    odi: nn,
    udi: nn,
    uli: nn,
    ami: nn,
    emi: nn,
    mmi: nn,
    omi: nn,
    smi: nn,
    nni: nn,
    dri: nn,
    iri: nn,
    zzi: nn,
    ion: nn,
    rco: nn,
    odo: nn,
    igo: nn,
    ogo: nn,
    smo: nn,
    umo: nn,
    gno: nn,
    ipo: nn,
    mpo: nn,
    bro: nn,
    zzo: nn,
    ier: nn,
    ans: nn,
    bus: nn,
    ort: nn,
  },
  { // four-letter suffixes
    otto: val,
    nove: val,
    mila: val,

    arsi: ref,
    irsi: ref,
    ersi: ref,
    endo: g,
    ando: g,
    ante: jj,
    iere: nn,
    icci: nn,//or adj
    ezze: nn,
    ista: nn,
    tore: nn,
    zolo: nn,
    lino: nn,
    zone: nn,
    eone: nn,
    lone: nn,
    cone: nn,
    lona: nn,
    ione: fn,

    enga: vb,
    para: vb,
    ntra: vb,
    tata: vb,
    izza: vb,
    iace: vb,
    duce: vb,
    cede: pres,
    iede: pres,
    lude: pres,
    inge: vb,
    iene: vb,
    enne: vb,
    dete: vb,
    vete: vb,
    duto: vb,
    vuto: vb,
    cevo: vb,
    terò: vb,
    vrei: vb,
    sati: vb,
    iamo: vb,
    vamo: vb,
    emmo: vb,
    vano: vb,
    anno: vb,
    zato: vb,
    sero: vb,

    sivo: jj,
    pica: jj,
    sima: jj,
    iosa: jj,
    tosa: jj,
    siva: jj,
    nghe: jj,
    cale: jj,
    gale: jj,
    pale: jj,
    bile: jj,
    cile: jj,
    mile: jj,
    sime: jj,
    cane: jj,
    iane: jj,
    iore: jj,
    dese: jj,
    lese: jj,
    iose: jj,
    nose: jj,
    rose: jj,
    tose: jj,
    uose: jj,
    sive: jj,
    gici: jj,
    pici: jj,
    sici: jj,
    cali: jj,
    iali: jj,
    rali: jj,
    bili: jj,
    timi: jj,
    iori: jj,
    rosi: jj,
    sivi: jj,
    gico: jj,
    tico: jj,
    lido: jj,
    anea: jj,

    teca: nn,
    iaia: nn,
    naia: nn,
    acia: nn,
    rdia: nn,
    egia: nn,
    ogia: nn,
    rgia: nn,
    glia: nn,
    eria: nn,
    oria: nn,
    tria: nn,
    esia: nn,
    azia: nn,
    tela: nn,
    sola: nn,
    tola: nn,
    uola: nn,
    orma: nn,
    oppa: nn,
    iera: nn,
    etra: nn,
    sura: nn,
    tura: nn,
    anza: nn,
    azza: nn,
    ezza: nn,
    ombe: nn,
    ance: nn,
    inee: nn,
    rche: nn,
    eghe: nn,
    erie: nn,
    stie: nn,
    iole: nn,
    sole: nn,
    nome: nn,
    tume: nn,
    appe: nn,
    mbre: nn,
    adre: nn,
    sure: nn,
    ture: nn,
    onte: nn,
    arte: nn,
    ordi: nn,
    aggi: nn,
    eggi: nn,
    rchi: nn,
    ighi: nn,
    igli: nn,
    alli: nn,
    poli: nn,
    reni: nn,
    agni: nn,
    egni: nn,
    cini: nn,
    gini: nn,
    mini: nn,
    sini: nn,
    orni: nn,
    atoi: nn,
    mbri: nn,
    neri: nn,
    lori: nn,
    mori: nn,
    sori: nn,
    tori: nn,
    etri: nn,
    ntri: nn,
    lisi: nn,
    ussi: nn,
    eusi: nn,
    dizi: nn,
    orzi: nn,
    orum: nn,
    alco: nn,
    ioco: nn,
    uoco: nn,
    reno: nn,
    mino: nn,
    fono: nn,
    uppo: nn,
    naro: nn,
    pero: nn,
    voro: nn,
    itro: nn,
    orso: nn,
    ievo: nn,
    arzo: nn,
    nter: nn,
    gnor: nn,
    port: nn,
    vedì: nn,
    vitù: nn,
  },
  { // five-letter suffixes

    sette: val,
    cento: val,
    esimo: ['TextValue', 'Ordinal'],

    mente: rb,
    tipie: nn,
    toria: nn,
    ucchi: nn,
    ucoli: nn,
    gioni: nn,
    celli: nn,
    celle: nn,
    astri: nn,
    archi: nn,
    arche: nn,
    acchi: nn,
    nauta: nn,
    crate: nn,
    zione: nn,
    mento: nn,
    dromo: nn,
    accio: nn,
    cetto: nn,

    tacca: vb,
    plica: vb,
    nvoca: vb,
    calda: vb,
    uarda: vb,
    corda: vb,
    ambia: vb,
    rolla: vb,
    sogna: vb,
    embra: vb,
    ndata: vb,
    sulta: vb,
    senta: vb,
    venta: vb,
    porta: vb,
    catta: vb,
    dotta: vb,
    ciuta: vb,
    rriva: vb,
    lizza: vb,
    rizza: vb,
    piace: vb,
    fende: vb,
    pende: vb,
    rende: vb,
    tende: vb,
    ponde: vb,
    sorge: vb,
    prime: vb,
    rompe: vb,
    mpare: vb,
    corre: vb,
    iasse: vb,
    cesse: imp,
    vesse: imp,
    usate: vb,
    edete: vb,
    ndete: vb,
    irete: vb,
    rrete: vb,
    otete: vb,
    guite: vb,
    siste: vb,
    mette: vb,
    crive: vb,
    muove: vb,
    derai: fut,
    herai: fut,
    nosci: vb,
    orrei: vb,
    ntati: vb,
    nosco: vb,
    pongo: vb,
    gnamo: vb,
    aremo: vb,
    dremo: vb,
    eremo: vb,
    iremo: vb,
    rremo: vb,
    vremo: vb,
    ccano: vb,
    ncano: vb,
    ndano: vb,
    rlano: vb,
    inano: vb,
    orano: vb,
    trano: vb,
    rtano: vb,
    stano: vb,
    ttano: vb,
    utano: vb,
    avano: vb,
    evano: vb,
    ivano: vb,
    ovano: vb,
    bbero: vb,
    rdato: vb,
    agato: vb,
    biato: vb,
    ciato: vb,
    viato: vb,
    llato: vb,
    amato: vb,
    gnato: vb,
    rnato: vb,
    prato: vb,
    ntato: vb,
    otato: vb,
    stato: vb,
    ovato: vb,
    scito: vb,
    ntito: vb,
    tuito: vb,
    iunto: vb,
    iesto: vb,
    visto: vb,
    enuto: vb,
    ttuto: vb,
    otevo: vb,
    ovevo: vb,
    crivo: vb,
    overò: vb,


    pleto: jj,
    sueto: jj,
    ggior: jj,
    ibica: jj,
    afica: jj,
    agica: jj,
    olica: jj,
    omica: jj,
    irica: jj,
    orica: jj,
    trica: jj,
    isica: jj,
    ntica: jj,
    otica: jj,
    tesca: jj,
    alida: jj,
    maria: jj,
    naria: jj,
    raria: jj,
    inima: jj,
    ltima: jj,
    rbana: jj,
    icana: jj,
    derna: jj,
    terna: jj,
    inosa: jj,
    erosa: jj,
    orosa: jj,
    carsa: jj,
    guata: jj,
    osita: jj,
    itiva: jj,
    utiva: jj,
    apace: jj,
    plice: jj,
    rande: jj,
    ranee: jj,
    iache: jj,
    diche: jj,
    giche: jj,
    piche: jj,
    esche: jj,
    darie: jj,
    iarie: jj,
    rarie: jj,
    tarie: jj,
    idale: jj,
    ciale: jj,
    diale: jj,
    niale: jj,
    ziale: jj,
    rmale: jj,
    orale: jj,
    urale: jj,
    rsale: jj,
    ssale: jj,
    ntale: jj,
    guale: jj,
    nuale: jj,
    suale: jj,
    tuale: jj,
    utile: jj,
    evole: jj,
    ltime: jj,
    ovane: jj,
    terne: jj,
    leare: jj,
    ustre: jj,
    onese: jj,
    zzese: jj,
    tense: jj,
    olose: jj,
    cente: jj,
    uente: jj,
    leste: jj,
    fette: jj,
    ntive: jj,
    apaci: jj,
    afici: jj,
    plici: jj,
    omici: jj,
    onici: jj,
    erici: jj,
    irici: jj,
    etici: jj,
    stici: jj,
    egali: jj,
    rmali: jj,
    enali: jj,
    onali: jj,
    ipali: jj,
    rsali: jj,
    ntali: jj,
    guali: jj,
    nuali: jj,
    suali: jj,
    abili: jj,
    ibili: jj,
    evoli: jj,
    ssimi: jj,
    terni: jj,
    leari: jj,
    ziari: jj,
    olari: jj,
    ecisi: jj,
    tensi: jj,
    giosi: jj,
    siosi: jj,
    ziosi: jj,
    inosi: jj,
    benti: jj,
    uenti: jj,
    stivi: jj,
    afico: jj,
    olico: jj,
    amico: jj,
    imico: jj,
    omico: jj,
    onico: jj,
    drico: jj,
    irico: jj,
    trico: jj,
    tesco: jj,
    ccolo: jj,
    ibero: jj,
    manti: jj,


    onaca: nn,
    oteca: nn,
    cerca: nn,
    cenda: nn,
    genda: nn,
    mblea: nn,
    agoga: nn,
    abbia: nn,
    occia: nn,
    ancia: nn,
    arcia: nn,
    oscia: nn,
    ducia: nn,
    ardia: nn,
    rchia: nn,
    agnia: nn,
    fonia: nn,
    lizia: nn,
    tizia: nn,
    anzia: nn,
    cella: nn,
    della: nn,
    rella: nn,
    egola: nn,
    avola: nn,
    sfera: nn,
    diera: nn,
    niera: nn,
    riera: nn,
    antra: nn,
    estra: nn,
    atura: nn,
    itura: nn,
    ltura: nn,
    ntura: nn,
    rtura: nn,
    scesa: nn,
    regua: nn,
    benza: nn,
    cenza: nn,
    denza: nn,
    genza: nn,
    ienza: nn,
    lenza: nn,
    nenza: nn,
    renza: nn,
    senza: nn,
    tenza: nn,
    uenza: nn,
    venza: nn,
    alice: nn,
    trade: nn,
    grafe: nn,
    hegge: nn,
    erche: nn,
    aglie: nn,
    iglie: nn,
    nomie: nn,
    lerie: nn,
    terie: nn,
    estie: nn,
    rovie: nn,
    gnale: nn,
    quile: nn,
    relle: nn,
    telle: nn,
    egole: nn,
    nsole: nn,
    uvole: nn,
    uttle: nn,
    larme: nn,
    stume: nn,
    embre: nn,
    diere: nn,
    hiere: nn,
    riere: nn,
    tiere: nn,
    ziere: nn,
    amere: nn,
    arere: nn,
    otere: nn,
    amate: nn,
    rdite: nn,
    llite: nn,
    corte: nn,
    forte: nn,
    ieste: nn,
    teste: nn,
    hette: nn,
    iette: nn,
    notte: nn,
    abyte: nn,
    ollah: nn,
    cambi: nn,
    efici: nn,
    ffici: nn,
    rnici: nn,
    ssidi: nn,
    iardi: nn,
    cordi: nn,
    lutei: nn,
    grafi: nn,
    ologi: nn,
    occhi: nn,
    richi: nn,
    ischi: nn,
    oschi: nn,
    lighi: nn,
    sigli: nn,
    igili: nn,
    delli: nn,
    pelli: nn,
    relli: nn,
    telli: nn,
    rolli: nn,
    acoli: nn,
    icoli: nn,
    ncoli: nn,
    scoli: nn,
    cioli: nn,
    itoli: nn,
    rreni: nn,
    segni: nn,
    adini: nn,
    udini: nn,
    chini: nn,
    alini: nn,
    lmini: nn,
    omini: nn,
    trini: nn,
    ttini: nn,
    verni: nn,
    iorni: nn,
    latoi: nn,
    atari: nn,
    embri: nn,
    lberi: nn,
    dieri: nn,
    lieri: nn,
    zieri: nn,
    sseri: nn,
    tteri: nn,
    averi: nn,
    alori: nn,
    olori: nn,
    ssori: nn,
    bitri: nn,
    istri: nn,
    sensi: nn,
    cessi: nn,
    ressi: nn,
    lievi: nn,
    udizi: nn,
    rvizi: nn,
    egozi: nn,
    sorzi: nn,
    tacco: nn,
    ffico: nn,
    arico: nn,
    ssido: nn,
    iardo: nn,
    uardo: nn,
    piego: nn,
    onimo: nn,
    rreno: nn,
    mbino: nn,
    ncino: nn,
    rdino: nn,
    amino: nn,
    verno: nn,
    iorno: nn,
    loppo: nn,
    luppo: nn,
    ruppo: nn,
    sacro: nn,
    uadro: nn,
    umero: nn,
    stero: nn,
    spiro: nn,
    esoro: nn,
    avoro: nn,
    metro: nn,
    senso: nn,
    basso: nn,
    passo: nn,
    cesso: nn,
    sesso: nn,
    lusso: nn,
    lievo: nn,
    forzo: nn,
    onder: nn,
    orter: nn,
    ignor: nn,
    tress: nn,
    xport: nn,
    uency: nn,
    ility: nn,
  },
  {
    // six-letter suffixes
    cinque: val,

    andoci: g,//reflexive gerund
    endoci: g,
    endomi: g,
    icelli: nn,
    icelle: nn,
    erelli: nn,
    erelle: nn,
    grafia: nn,
    ellino: nn,
    itorio: nn,
    logico: jj,
  },
  {
    // seven-letter suffixes
    quattro: val,

    grafico: jj,
    ectomia: nn,
  }
]