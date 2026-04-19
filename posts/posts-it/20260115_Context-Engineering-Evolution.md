---
title: Il prossimo capitolo dell'ecosistema - Quando il Context diventa il codice evolutivo dell'AGI
date: 2026-01-15 00:00:00
categories:
  - tech
tags:
  - AI
  - Context Engineering
  - AGI
---

> Autore: 0xWelt, kimi-k2-thinking-turbo

L'AGI non è mai stata la creazione dietro porte chiuse di una singola azienda, ma un viaggio a due vie tra ecosistema e intelligenza. In questo viaggio, il « Context » (contesto) sta evolvendo da un concetto tecnico a una teoria evolutiva co-scritta dall'intera comunità. Non è solo la finestra attraverso cui i modelli comprendono il mondo, ma anche la tela su cui l'ecosistema espande i confini dell'intelligenza.

Oggi, ci troviamo a un altro punto di svolta. Quando la comunità inizia a fornire Context strutturato e contestualizzato per l'IA, anziché semplici Prompt o strumenti, la traiettoria evolutiva dell'AGI sta venendo silenziosamente riscritta. Diamo prima uno sguardo retrospettivo al percorso compiuto, e vediamo come la strategia di gestione del Context sia arrivata dove è oggi.

## Capitolo 1: L'era degli incantesimi — L'esplorazione ingenua di System Prompt e User Input

Tutto è iniziato nell'inverno della fine del 2022 che ha infiammato il mondo. Il primo sistema ChatGPT era costruito su una semplice struttura binaria di « System Prompt + User Input », che definiva il modello di interazione uomo-macchina più fondamentale. La comunità scoprì presto che attraverso « formule magiche » attentamente progettate — quei User Prompt lunghi e precisi — i modelli potevano dimostrare prestazioni straordinarie al di là delle loro capacità di base in domini specifici.

Un caso tipico fu l'« Academic GPT », un tempo molto popolare: gli utenti dovevano inserire lunghe istruzioni, richiedere al modello di interpretare il ruolo di esperto nella revisione di articoli accademici, e stabilire decine di regole dettagliate dalla grammatica e dalla logica ai formati di citazione. Questi Prompt erano come le ricette degli alchimisti, trasmesse oralmente all'interno della comunità.

Ma il limite di questo approccio divenne presto evidente:

- **Limite di capacità basso**: All'epoca, la capacità di Instruction Following (seguire le istruzioni) del modello era ancora agli inizi, le istruzioni complesse venivano spesso eseguite in modo errato
- **Scarsa trasferibilità**: Le « formule » ottimizzate per il modello A fallivano spesso sul modello B, ogni nuovo modello significava ripartire da zero
- **Esperienza frammentata**: Gli utenti dovevano memorizzare e inserire un gran numero di modelli, l'interazione era naturalmente macchinosa

L'eredità di questa fase è quasi vuota, ma lascia un'indicazione cruciale: i modelli hanno bisogno di una guida alle capacità più strutturata, non di incantesimi testuali frammentati.

![Capitolo 1](https://pic1.zhimg.com/v2-f71be8249d714baa2ee5ccaab20ae8ba_r.jpg)

## Capitolo 2: L'avanzata del workflow — Il tentativo industrializzato del Fixed Agent Workflow

Nel 2023, piattaforme come Dify.ai, Coze e LlamaIndex emersero, portando il nuovo paradigma del « workflow fisso ». Gli sviluppatori costruivano Agent multi-turn e progettavano catene di chiamate di strumenti per scenari specifici attraverso interfacce visive, abbinati a basi di conoscenza esterne RAG, portando davvero i LLM nell'era dell'Agent.

Questo fu un salto qualitativo: i modelli passarono da conversazioni singole a compiti a lungo termine, da interazione testuale pura all'invocazione di strumenti. Sulla base di questo, la comunità costruì innumerevoli prodotti Agent, da assistenti open-source per l'automazione delle operazioni a sistemi di Q&A di basi di conoscenza industriali proprietarie. La tecnologia Workflow permise ai LLM di funzionare più a lungo e acquisire più capacità di interazione.

Tuttavia, i suoi difetti erano altrettanto evidenti:

- **Personalizzazione caso per caso**: Ogni funzionalità richiedeva un intero workflow pesante; per bere un caffè bisognava distribuire un intero sistema di ordinazione
- **Costi di migrazione elevati**: I workflow ottimizzati per GPT-4 potevano avere prestazioni molto diverse su Claude
- **Mancanza di flessibilità**: Una volta solidificato, il processo diventava difficile da adattare ai cambiamenti dinamici del mondo reale

Nonostante ciò, questa fase lasciò preziose risorse cognitive:

- Le interazioni multiple possono superare il limite di capacità di un singolo LLM — qui si manifesta il paradosso del « più artificiale, più intelligente »
- L'Agent Workflow non è scomparso, ma ha evoluto. Oggi usiamo harness (telai) o scaffold (ponteggi) per esprimere concetti simili, ma conferendo agli Agent un maggiore spazio decisionale autonomo

![Capitolo 2](https://picx.zhimg.com/v2-5680bd96bb7f5254d6f6c535f4b455d6_r.jpg)

## Capitolo 3: La rivoluzione MCP — Il carnevale degli strumenti degli agenti dinamici

Dalla fine del 2024 all'inizio del 2025, una rivoluzione silenziosa si abbatté con lo standard MCP (Model Control Protocol). Questo non è un concetto del tutto nuovo — OpenAI aveva già definito le specifiche Tool Declaration e Tool Call già nel giugno 2023 — ma MCP ha davvero portato il costo di implementazione degli strumenti al minimo.

La comunità rispose in modo esplosivo: un gran numero di API del mondo digitale venne rapidamente allineato al formato MCP, dalle operazioni GitHub all'ordinazione di cibo, dalle query di database al controllo della casa intelligente. Un vasto mercato MCP si formò all'istante. Nel frattempo, i modelli di base rappresentati da Claude dimostrarono potenti capacità di toolcall multi-step, in grado di iterare e invocare strumenti in modo autonomo per completare compiti complessi.

Le catene del Fixed Workflow furono spezzate: gli Agent non avevano più bisogno di processi rigidi preimpostati, ma potevano pianificare dinamicamente i percorsi in base agli obiettivi. I limiti di capacità e la generalizzabilità migliorarono simultaneamente, l'AGI sembrava a portata di mano.

Ma i problemi emersero presto:

- **Inondazione di pseudo-bisogni**: MCP è essenzialmente solo un wrapper di formato per le API. Per scenari con API esistenti, i costi di sviluppo sono estremamente bassi, portando alla situazione assurda in cui ci sono « più sviluppatori che utenti »
- **Allucinazione AGI**: La comunità cadde nell'illusione che « collegare abbastanza MCP potesse raggiungere l'AGI », ignorando il limite di capacità dei modelli stessi
- **Inquinamento del Context**: L'abuso piatto delle dichiarazioni di strumenti portò a catastrofi contestuali, con centinaia di definizioni di strumenti che affollavano la finestra, mettendo seriamente alla prova la capacità di Instruction Following del modello. Per attenuare questo, i framework Agent mainstream iniziarono a limitare il numero di strumenti — l'editor Cursor fissò per un periodo il limite superiore a 80

La crisi genera saggezza. L'esperienza di questa fase cambiò profondamente la filosofia di progettazione successiva:

- Gli standard unificati possono liberare l'immensa forza della comunità — la standardizzazione è la pietra angolare della prosperità dell'ecosistema
- La gestione del Context deve essere affinata — l'emergere di strategie semplici come « hide tool result » preannunciava meccanismi di uscita del Context più sistematici

![Capitolo 3](https://pic1.zhimg.com/v2-1156e8714d712477c0cb269d74bbe3da_r.jpg)

## Capitolo 4: L'ascesa degli Skills — La guerra di aumento di dimensione della gestione del Context

Quando l'esposizione piatta di MCP raggiunse il suo limite, emersero gli Skills. Non si tratta di una semplice riorganizzazione di strumenti, ma di un aumento di dimensione della strategia di gestione del Context.

Perché gli Skills sono migliori? Realizzano una tripla svolta:

- **Esposizione gerarchica**: Organizzare le liste piatte di strumenti in strutture ad albero, espandibili su richiesta, evitando l'inquinamento del Context e risparmiando prezioso spazio nella finestra di contesto
- **Context proattivo**: Il modello decide autonomamente quando e quale livello di Context acquisire, invece di ricevere passivamente tutte le informazioni
- **Istruzioni a livello SOP**: Non solo « cosa si può fare » (il « ho uno strumento XX » del MCP), ma « come farlo » — procedure operative standard dettagliate integrate, equivalenti all'applicazione di patch intelligenti agli strumenti

Ancora più dirompente, molti Skills sono completamente definiti in linguaggio naturale, senza programmazione. Questo abbassa drasticamente la barriera di partecipazione della comunità, permettendo agli esperti di business piuttosto che ai programmatori di contribuire con asset Context all'ecosistema. In un certo senso, questa è una rinascita e un superamento della seconda fase dell'Agent Workflow — usando la flessibilità del linguaggio naturale per far rivivere i vantaggi strutturali del workflow.

Ma questo pone anche nuove sfide al modello:

- **Capacità di controllo proattivo del contesto**: Può il modello ricordare ancora l'esistenza di un certo Skill inizialmente indicato dopo decine di chiamate di strumenti?
- **Capacità di memoria a lungo contesto**: Come mantenere la consapevolezza del Context di alto livello in catene di chiamate profonde?

Le lezioni sono già chiare:

- Il Context deve essere gerarchizzato + esposto proattivamente
- Ciò che la comunità co-costruisce non sono solo strumenti, ma conoscenze di processo — SOP, best practice, metodologia di dominio

![Capitolo 4](https://picx.zhimg.com/v2-3616c627dc540fb165ba03ee22003595_r.jpg)

## Tendenze in corso: L'evoluzione raffinata della gestione del Context

Dalla storia evolutiva sopra, possiamo chiaramente vedere tre fili conduttori continui:

### 1. Dal piatto al gerarchico: La vittoria della scalabilità

L'era dell'acquisizione passiva di tutto il Context sta terminando. L'esposizione gerarchizzata più raffinata, più economica e più scalabile sta diventando la norma. Questo non è solo un'ottimizzazione dell'ingegneria, ma un cambiamento di paradigma cognitivo — l'acquisizione del Context dovrebbe essere una ricerca di informazioni, non un bombardamento di informazioni.

### 2. Miglioramento continuo dell'autonomia dei modelli

La Bitter Lesson (lezione amara) continua a esercitare la sua forza qui: man mano che l'intelligenza dei modelli di base migliora e le capacità di Instruction Following progrediscono costantemente, gli sviluppatori possono definire strutture più complesse, e i modelli possono comprenderle ed eseguirle. L'Agent Workflow sta diventando « meno strutturato » — evolvendo dai processi rigidi che richiedono definizione tramite codice a Skills flessibili descritte in linguaggio naturale. Meno struttura, più intelligenza.

### 3. Abbassamento continuo delle barriere alla partecipazione della comunità

La larghezza dell'ecosistema determina l'altezza dell'intelligenza. Quando contribuire al Context non richiede più competenze di programmazione, quando gli esperti di business possono definire direttamente Skills in linguaggio naturale, la creatività della comunità viene completamente liberata. Questo processo di democratizzazione espande rapidamente i limiti di capacità dei modelli di base.

## Prossimo capitolo: Dal predefinito al nativo-contestuale

Ma la storia non è finita. Nuove tendenze stanno germogliando, e riscriveranno il modo in cui il Context viene fornito.

### Tendenza 1: Dal « predefinito » al « fornito dallo scenario »

Il Context passato era interamente predefinito: gli sviluppatori scrivevano server MCP, impacchettavano Skills, e gli utenti li selezionavano e caricavano manualmente. Il Context futuro sarà fornito proattivamente dagli scenari.

Immagina un mondo: i gestori di caffè non devono più sviluppare App o mini-programmi, ma implementano semplicemente un'« interfaccia Context » — quando l'Agent di un utente entra in una geofence o scansiona un QR code in negozio, riceve automaticamente il pacchetto Context di quello scenario. Questo Context include:

- Menu e raccomandazioni (non più GUI per gli umani, ma dati strutturati per gli Agent)
- Protocolli di ordinazione (SOP in linguaggio naturale simili agli Skills)
- Processi di pagamento
- Modelli di tempo di attesa

Dalla creazione di GUI per gli umani alla creazione di protocolli Context per gli Agent — questo è un trasferimento fondamentale del paradigma di interazione del mondo digitale.

### Tendenza 2: Dal « si entra ma non si esce » all'« uscita flessibile »

La gestione attuale del Context è fondamentalmente unidirezionale: caricare, caricare, e ricaricare ancora, fino a quando la finestra non esplode. Ciò che sarà necessario in futuro è qualcosa di simile a un gestore di contesto simile all'istruzione `with` di Python: definendo sia l'ingresso che l'uscita.

Quando un utente lascia uno scenario di caffè, l'Agent dovrebbe automaticamente:

- Archiviare log di interazione dettagliati (« ha ordinato un latte, caramello sostituito con vaniglia, poco ghiaccio »)
- Rimuovere gli MCPs/Skills di quello scenario dal Context attivo
- Conservare solo un riassunto condensato (« ha speso 35 yuan da Blue Bottle Coffee »)

Questo meccanismo di uscita del Context può sia evitare l'inquinamento a lungo termine che realizzare una memoria precisa, rendendolo una capacità essenziale per i sistemi Agent che funzionano a lungo termine.

## Una tazza di caffè per vedere il futuro

Usiamo un esempio semplice per collegare i vecchi e i nuovi mondi:

**Vecchio paradigma**:

Entrare nel caffè → Scansionare il QR code → Saltare alla pagina mini-programma/H5 → L'utente ordina e paga manualmente

**Nuovo paradigma**:

Entrare nel caffè → L'Agent scopre automaticamente il Context dello scenario → Informa proattivamente l'utente: « Ho rilevato il menu di Blue Bottle Coffee, vuoi che te lo presenti? » → L'utente in linguaggio naturale: « Un Americano con poco ghiaccio, chicchi etiopici » → L'Agent completa autonomamente la selezione, la personalizzazione, l'ordinazione, il pagamento → Predice il tempo di attesa e imposta un promemoria → Pulisce automaticamente il Context dopo la partenza, conserva solo i record di consumo

Gli utenti tornano a un'espressione di intenzione pura, tutti i processi intermedi sono completati in modo autonomo dall'Agent sotto la guida del Context contestualizzato.

## Conclusione: Verso un ecosistema intelligente nativo al Context

Dalle incantazioni al Workflow, dal MCP agli Skills, e poi al Context nativo-contestuale, vediamo un filo conduttore chiaro: il Context sta evolvendo da un allegato all'input umano a un'infrastruttura simbiotica per l'ecosistema.

La password dell'AGI non risiede nel numero di parametri di un modello proprietario, ma nella capacità della comunità di costruire un mondo digitale ricco di contesto, dinamico e contestualizzato. Quando ogni caffè, ogni biblioteca, ogni laboratorio fornirà un Context nativo per l'IA, l'intelligenza emergerà davvero.

Questa non è solo l'evoluzione della tecnologia, ma anche una rivoluzione dei paradigmi di collaborazione. Dagli sviluppatori più numerosi degli utenti, ai partecipanti di scenario più numerosi degli sviluppatori, il prossimo capitolo dell'ecosistema sarà co-scritto da tutti i manutentori degli spazi digitali.

**Il Context non è più un problema che i modelli devono gestire, ma una risposta che il mondo offre all'intelligenza.**
