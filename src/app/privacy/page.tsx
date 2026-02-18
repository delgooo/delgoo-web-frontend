'use client';

import { LegalPageLayout } from '@/components/ui/LegalPageLayout';
import { useLanguage } from '@/lib/i18n';

function PrivacyContent() {
  const { lang } = useLanguage();

  if (lang === 'it') return <PrivacyIT />;
  return <PrivacyEN />;
}

function PrivacyEN() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-400 !mt-2">Last updated: February 2026</p>

      <p>
        Delgoo (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Delgoo mobile application
        and website (collectively, the &quot;Platform&quot;). This Privacy Policy explains how we collect,
        use, disclose, and safeguard your personal data when you use our Platform, in compliance with the
        General Data Protection Regulation (EU) 2016/679 (&quot;GDPR&quot;), the Italian Legislative Decree
        196/2003 (as amended by Legislative Decree 101/2018), and other applicable data protection legislation.
      </p>
      <p>
        By accessing or using the Platform, you acknowledge that you have read, understood, and agree to the
        practices described in this Privacy Policy.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        The data controller responsible for your personal data is:
      </p>
      <ul>
        <li><strong>Company:</strong> Delgoo S.r.l.</li>
        <li><strong>Registered address:</strong> Milan, Italy</li>
        <li><strong>Email:</strong> support@delgoo.com</li>
        <li><strong>Data Protection Officer (DPO):</strong> support@delgoo.com</li>
      </ul>

      <h2>2. Personal Data We Collect</h2>

      <h3>2.1 Data You Provide Directly</h3>
      <ul>
        <li><strong>Account registration data:</strong> full name, email address, phone number, date of birth, and profile photo.</li>
        <li><strong>Identity verification data:</strong> government-issued identity document (front and back images), biometric facial data collected through periodic video selfie verification (face check).</li>
        <li><strong>Payment data:</strong> credit/debit card details, Apple Pay or Google Pay tokens, bank account information for payouts. Payment processing is handled by our third-party payment processor (Stripe); we do not store full card numbers.</li>
        <li><strong>Shipment data:</strong> pickup and delivery addresses, package descriptions (size, weight, fragility), scheduled pickup times, and any messages exchanged through the in-app chat.</li>
        <li><strong>Photographic evidence:</strong> photos of package contents, sealed packages, pickup confirmation, delivery confirmation, and receipt confirmation. All photos are captured exclusively through the in-app camera (not the device gallery) and include embedded metadata (timestamp and GPS coordinates).</li>
        <li><strong>Reviews and ratings:</strong> star ratings and text reviews you leave for other users.</li>
        <li><strong>Communications:</strong> in-app chat messages between senders, riders, and recipients; messages sent to our customer support team; contact form submissions.</li>
      </ul>

      <h3>2.2 Data Collected Automatically</h3>
      <ul>
        <li><strong>Geolocation data:</strong> real-time GPS location during active deliveries (updated every 10 seconds from pickup scan to delivery confirmation). Geofencing data when entering 200-meter radius zones around pickup and delivery addresses.</li>
        <li><strong>Device data:</strong> device type, operating system, unique device identifiers, IP address, browser type, and app version.</li>
        <li><strong>Usage data:</strong> pages viewed, features used, interaction timestamps, session duration, and navigation patterns.</li>
        <li><strong>QR code scan data:</strong> who scanned, when, where (GPS coordinates), and seal status at each checkpoint (preparation, pickup, delivery).</li>
        <li><strong>Route and deviation data:</strong> suggested delivery routes, actual routes taken, and any significant deviations (more than 2 km from suggested route for more than 10 minutes).</li>
      </ul>

      <h3>2.3 Data from Third Parties</h3>
      <ul>
        <li><strong>Identity verification providers:</strong> results of document authentication and facial recognition matching from our KYC provider (e.g., Onfido or Jumio).</li>
        <li><strong>Payment processor:</strong> transaction confirmation, payment status, and fraud screening results from Stripe.</li>
      </ul>

      <h2>3. Purposes and Legal Bases for Processing</h2>
      <p>We process your personal data for the following purposes:</p>

      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal Basis (GDPR Art. 6)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account creation and management</td>
            <td>Performance of contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Identity verification (KYC) and periodic face checks</td>
            <td>Legal obligation (Art. 6(1)(c)); Legitimate interest in platform security (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Facilitating the delivery matching and fulfillment process</td>
            <td>Performance of contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Processing payments and managing escrow</td>
            <td>Performance of contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Real-time GPS tracking during active deliveries</td>
            <td>Performance of contract (Art. 6(1)(b)); Legitimate interest in shipment security (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Maintaining the photographic chain of custody</td>
            <td>Legitimate interest in dispute resolution and security (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Reputation system (reviews, badges, penalty records)</td>
            <td>Legitimate interest in trust and safety (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>In-app chat and telephone communication</td>
            <td>Performance of contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Customer support and dispute resolution</td>
            <td>Legitimate interest (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Sending transactional notifications (push, SMS, email)</td>
            <td>Performance of contract (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Fraud prevention and platform security</td>
            <td>Legitimate interest (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Complying with legal and regulatory obligations</td>
            <td>Legal obligation (Art. 6(1)(c))</td>
          </tr>
          <tr>
            <td>Analytics and service improvement</td>
            <td>Legitimate interest (Art. 6(1)(f)); Consent where required (Art. 6(1)(a))</td>
          </tr>
        </tbody>
      </table>

      <h3>3.1 Special Categories of Data</h3>
      <p>
        Biometric data collected through facial verification (face check) constitutes a special category of
        personal data under GDPR Article 9. We process this data based on your explicit consent (Art. 9(2)(a)),
        which you provide during onboarding. You may withdraw this consent at any time, though this will result
        in the suspension of your account since identity verification is essential for platform safety.
      </p>

      <h2>4. How We Share Your Data</h2>

      <h3>4.1 With Other Users</h3>
      <ul>
        <li><strong>Before match:</strong> Riders see your approximate zone (neighborhood/ZIP code), package details, and pickup time window. Senders see rider profiles, average ratings, and completed deliveries count.</li>
        <li><strong>After match:</strong> Full pickup and delivery addresses are shared with the assigned rider. Phone numbers are shared between matched parties only for the duration of the delivery, optionally through an anonymized relay number.</li>
        <li><strong>After delivery:</strong> Phone numbers are obscured. Mutual reviews become visible after both parties submit or after 72 hours.</li>
      </ul>

      <h3>4.2 With Service Providers</h3>
      <p>We share data with trusted third-party service providers who process data on our behalf:</p>
      <ul>
        <li><strong>Stripe</strong> &mdash; payment processing, escrow management, and rider payouts.</li>
        <li><strong>Onfido / Jumio</strong> &mdash; identity document verification and facial recognition.</li>
        <li><strong>Google Maps / Mapbox</strong> &mdash; mapping, geocoding, route calculation, and real-time tracking.</li>
        <li><strong>Firebase Cloud Messaging</strong> &mdash; push notifications.</li>
        <li><strong>Twilio</strong> &mdash; SMS notifications and phone number anonymization.</li>
        <li><strong>AWS / Google Cloud</strong> &mdash; cloud hosting and photo storage (encrypted at rest with AES-256).</li>
      </ul>
      <p>
        All service providers are bound by data processing agreements (DPAs) that ensure compliance with GDPR
        requirements.
      </p>

      <h3>4.3 With Authorities</h3>
      <p>
        We may disclose your personal data to law enforcement or regulatory authorities when required by law,
        or when necessary to protect the safety of our users (for example, in cases involving prohibited items
        such as illegal substances, weapons, or hazardous materials).
      </p>

      <h2>5. Data Retention</h2>
      <ul>
        <li><strong>Account data:</strong> retained for the duration of your active account, plus 5 years after account deletion to comply with fiscal and legal obligations.</li>
        <li><strong>Photos and delivery logs:</strong> retained for 90 days after delivery completion, then permanently anonymized or deleted.</li>
        <li><strong>Identity documents:</strong> retained for the duration of your active account. Deleted within 30 days of account closure.</li>
        <li><strong>Biometric facial data:</strong> processed in real time for verification and not persistently stored. Verification results (pass/fail) are retained.</li>
        <li><strong>Payment records:</strong> retained for 10 years as required by Italian tax law.</li>
        <li><strong>Chat messages:</strong> retained for 90 days after delivery completion, then deleted.</li>
        <li><strong>GPS tracking data:</strong> retained for 90 days after delivery, then anonymized for analytics purposes.</li>
        <li><strong>Dispute records:</strong> retained for 2 years after resolution.</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>Under the GDPR, you have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Right of access (Art. 15):</strong> request a copy of all personal data we hold about you.</li>
        <li><strong>Right to rectification (Art. 16):</strong> correct inaccurate or incomplete data.</li>
        <li><strong>Right to erasure (Art. 17):</strong> request deletion of your data (&quot;right to be forgotten&quot;), subject to legal retention obligations.</li>
        <li><strong>Right to restriction (Art. 18):</strong> request that we restrict processing of your data in certain circumstances.</li>
        <li><strong>Right to data portability (Art. 20):</strong> receive your data in a structured, commonly used, machine-readable format.</li>
        <li><strong>Right to object (Art. 21):</strong> object to processing based on legitimate interest, including profiling.</li>
        <li><strong>Right to withdraw consent (Art. 7(3)):</strong> withdraw consent at any time for processing based on consent (e.g., biometric verification).</li>
        <li><strong>Right to lodge a complaint:</strong> file a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali) at <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at <a href="mailto:support@delgoo.com">support@delgoo.com</a>.
        We will respond within 30 days of receiving your request.
      </p>

      <h2>7. Data Security</h2>
      <p>We implement robust technical and organizational measures to protect your personal data:</p>
      <ul>
        <li><strong>Encryption in transit:</strong> all data transmitted between your device and our servers is encrypted using TLS 1.3.</li>
        <li><strong>Encryption at rest:</strong> sensitive data (identity documents, photos) is encrypted using AES-256.</li>
        <li><strong>Authentication:</strong> JWT-based authentication with refresh tokens. Optional two-factor authentication (2FA).</li>
        <li><strong>Photo integrity:</strong> EXIF metadata (timestamp and GPS) is injected server-side to prevent manipulation.</li>
        <li><strong>Access control:</strong> strict role-based access controls and audit logging for all internal access to personal data.</li>
        <li><strong>Rate limiting:</strong> anti-abuse protections on all API endpoints.</li>
      </ul>

      <h2>8. International Data Transfers</h2>
      <p>
        Your personal data is primarily processed and stored within the European Economic Area (EEA). Where data
        is transferred to service providers located outside the EEA (e.g., certain cloud infrastructure or
        notification services), we ensure appropriate safeguards are in place, including:
      </p>
      <ul>
        <li>EU Standard Contractual Clauses (SCCs).</li>
        <li>Adequacy decisions by the European Commission, where applicable.</li>
        <li>Binding Corporate Rules of the data importer, where applicable.</li>
      </ul>

      <h2>9. Cookies and Tracking Technologies</h2>
      <p>
        Our website uses cookies and similar tracking technologies to provide core functionality,
        remember your preferences (such as language selection), and analyze usage patterns.
      </p>
      <ul>
        <li><strong>Strictly necessary cookies:</strong> essential for the functioning of the Platform (e.g., session management, language preference). These do not require consent.</li>
        <li><strong>Analytics cookies:</strong> used to understand how visitors interact with our website (e.g., page views, navigation patterns). Deployed only with your explicit consent.</li>
        <li><strong>Marketing cookies:</strong> not currently used. If introduced in the future, they will require your prior consent.</li>
      </ul>
      <p>
        You can manage your cookie preferences at any time through our cookie banner or your browser settings.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        The Platform is not intended for individuals under the age of 18. We do not knowingly collect personal
        data from minors. If we become aware that we have collected data from a person under 18, we will
        promptly delete that data and terminate the associated account.
      </p>

      <h2>11. Automated Decision-Making</h2>
      <p>We use automated processes in the following areas:</p>
      <ul>
        <li><strong>Dynamic pricing:</strong> delivery prices are calculated algorithmically based on distance, package size, weight, urgency, and supply/demand. You always see the final price before confirming.</li>
        <li><strong>Automatic penalties:</strong> no-show penalties and automatic negative reviews are applied based on objective criteria (e.g., failure to appear within defined time windows). You may contest any automatic decision through our dispute resolution process.</li>
        <li><strong>Identity verification:</strong> document and facial verification is performed by automated systems. Manual review is available if the automated system produces an inconclusive result.</li>
      </ul>
      <p>
        You have the right not to be subject to a decision based solely on automated processing that produces
        legal or similarly significant effects on you (Art. 22 GDPR). Contact us to request human intervention.
      </p>

      <h2>12. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
        legal requirements, or other factors. When we make material changes, we will notify you through the
        Platform (via push notification or in-app banner) at least 30 days before the changes take effect.
        Your continued use of the Platform after the effective date constitutes acceptance of the updated policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data processing
        practices, please contact us:
      </p>
      <ul>
        <li><strong>General inquiries:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
        <li><strong>Privacy-specific requests:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
        <li><strong>Data Protection Officer:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
      </ul>
    </>
  );
}

function PrivacyIT() {
  return (
    <>
      <h1>Informativa sulla Privacy</h1>
      <p className="text-sm text-gray-400 !mt-2">Ultimo aggiornamento: Febbraio 2026</p>

      <p>
        Delgoo (&quot;noi&quot;, &quot;nostro/a&quot; o &quot;ci&quot;) gestisce l&apos;applicazione mobile Delgoo e il
        sito web (collettivamente, la &quot;Piattaforma&quot;). La presente Informativa sulla Privacy spiega come
        raccogliamo, utilizziamo, divulghiamo e proteggiamo i vostri dati personali quando utilizzate la nostra
        Piattaforma, in conformit&agrave; con il Regolamento Generale sulla Protezione dei Dati (UE) 2016/679
        (&quot;GDPR&quot;), il Decreto Legislativo italiano 196/2003 (come modificato dal Decreto Legislativo
        101/2018) e le altre normative applicabili in materia di protezione dei dati.
      </p>
      <p>
        Accedendo o utilizzando la Piattaforma, riconoscete di aver letto, compreso e accettato le pratiche
        descritte nella presente Informativa.
      </p>

      <h2>1. Titolare del Trattamento</h2>
      <p>Il titolare del trattamento responsabile dei vostri dati personali &egrave;:</p>
      <ul>
        <li><strong>Societ&agrave;:</strong> Delgoo S.r.l.</li>
        <li><strong>Sede legale:</strong> Milano, Italia</li>
        <li><strong>Email:</strong> support@delgoo.com</li>
        <li><strong>Responsabile della Protezione dei Dati (DPO):</strong> support@delgoo.com</li>
      </ul>

      <h2>2. Dati Personali che Raccogliamo</h2>

      <h3>2.1 Dati forniti direttamente dall&apos;utente</h3>
      <ul>
        <li><strong>Dati di registrazione:</strong> nome completo, indirizzo email, numero di telefono, data di nascita e foto del profilo.</li>
        <li><strong>Dati di verifica dell&apos;identit&agrave;:</strong> documento d&apos;identit&agrave; (immagini fronte e retro), dati biometrici facciali raccolti attraverso la verifica periodica tramite video selfie (face check).</li>
        <li><strong>Dati di pagamento:</strong> dati della carta di credito/debito, token Apple Pay o Google Pay, coordinate bancarie per i pagamenti ai rider. L&apos;elaborazione dei pagamenti &egrave; gestita dal nostro processore di pagamenti terzo (Stripe); non conserviamo i numeri completi delle carte.</li>
        <li><strong>Dati delle spedizioni:</strong> indirizzi di ritiro e consegna, descrizioni dei pacchi (dimensione, peso, fragilit&agrave;), orari di ritiro programmati e messaggi scambiati tramite la chat in-app.</li>
        <li><strong>Prove fotografiche:</strong> foto del contenuto del pacco, pacco sigillato, conferma di ritiro, conferma di consegna e conferma di ricezione. Tutte le foto sono scattate esclusivamente tramite la fotocamera in-app (non dalla galleria del dispositivo) e includono metadati incorporati (timestamp e coordinate GPS).</li>
        <li><strong>Recensioni e valutazioni:</strong> valutazioni in stelle e recensioni testuali lasciate ad altri utenti.</li>
        <li><strong>Comunicazioni:</strong> messaggi della chat in-app tra mittenti, rider e destinatari; messaggi inviati al nostro team di assistenza clienti; invii del modulo di contatto.</li>
      </ul>

      <h3>2.2 Dati raccolti automaticamente</h3>
      <ul>
        <li><strong>Dati di geolocalizzazione:</strong> posizione GPS in tempo reale durante le consegne attive (aggiornata ogni 10 secondi dalla scansione al ritiro alla conferma di consegna). Dati di geofencing all&apos;ingresso nelle zone di 200 metri intorno agli indirizzi di ritiro e consegna.</li>
        <li><strong>Dati del dispositivo:</strong> tipo di dispositivo, sistema operativo, identificatori univoci del dispositivo, indirizzo IP, tipo di browser e versione dell&apos;app.</li>
        <li><strong>Dati di utilizzo:</strong> pagine visualizzate, funzionalit&agrave; utilizzate, timestamp delle interazioni, durata delle sessioni e modelli di navigazione.</li>
        <li><strong>Dati di scansione QR:</strong> chi ha effettuato la scansione, quando, dove (coordinate GPS) e stato del sigillo ad ogni checkpoint (preparazione, ritiro, consegna).</li>
        <li><strong>Dati di percorso e deviazione:</strong> percorsi di consegna suggeriti, percorsi effettivi e eventuali deviazioni significative (oltre 2 km dal percorso suggerito per pi&ugrave; di 10 minuti).</li>
      </ul>

      <h3>2.3 Dati da terze parti</h3>
      <ul>
        <li><strong>Fornitori di verifica dell&apos;identit&agrave;:</strong> risultati dell&apos;autenticazione del documento e del riconoscimento facciale dal nostro fornitore KYC (es. Onfido o Jumio).</li>
        <li><strong>Processore di pagamenti:</strong> conferma della transazione, stato del pagamento e risultati dello screening antifrode da Stripe.</li>
      </ul>

      <h2>3. Finalit&agrave; e Basi Giuridiche del Trattamento</h2>
      <p>Trattiamo i vostri dati personali per le seguenti finalit&agrave;:</p>

      <table>
        <thead>
          <tr>
            <th>Finalit&agrave;</th>
            <th>Base Giuridica (Art. 6 GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Creazione e gestione dell&apos;account</td>
            <td>Esecuzione del contratto (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Verifica dell&apos;identit&agrave; (KYC) e face check periodici</td>
            <td>Obbligo legale (Art. 6(1)(c)); Interesse legittimo per la sicurezza della piattaforma (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Facilitazione del matching e del processo di consegna</td>
            <td>Esecuzione del contratto (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Elaborazione dei pagamenti e gestione dell&apos;escrow</td>
            <td>Esecuzione del contratto (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Tracking GPS in tempo reale durante le consegne attive</td>
            <td>Esecuzione del contratto (Art. 6(1)(b)); Interesse legittimo per la sicurezza delle spedizioni (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Mantenimento della catena di custodia fotografica</td>
            <td>Interesse legittimo per la risoluzione delle dispute e la sicurezza (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Sistema di reputazione (recensioni, badge, registro delle penali)</td>
            <td>Interesse legittimo per la fiducia e la sicurezza (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Chat in-app e comunicazione telefonica</td>
            <td>Esecuzione del contratto (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Assistenza clienti e risoluzione delle dispute</td>
            <td>Interesse legittimo (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Invio di notifiche transazionali (push, SMS, email)</td>
            <td>Esecuzione del contratto (Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Prevenzione delle frodi e sicurezza della piattaforma</td>
            <td>Interesse legittimo (Art. 6(1)(f))</td>
          </tr>
          <tr>
            <td>Adempimento degli obblighi legali e normativi</td>
            <td>Obbligo legale (Art. 6(1)(c))</td>
          </tr>
          <tr>
            <td>Analisi e miglioramento del servizio</td>
            <td>Interesse legittimo (Art. 6(1)(f)); Consenso ove richiesto (Art. 6(1)(a))</td>
          </tr>
        </tbody>
      </table>

      <h3>3.1 Categorie particolari di dati</h3>
      <p>
        I dati biometrici raccolti attraverso la verifica facciale (face check) costituiscono una categoria
        particolare di dati personali ai sensi dell&apos;Art. 9 del GDPR. Trattiamo questi dati sulla base del
        vostro consenso esplicito (Art. 9(2)(a)), fornito durante la registrazione. Potete revocare il consenso
        in qualsiasi momento, sebbene ci&ograve; comporti la sospensione del vostro account poich&eacute; la verifica
        dell&apos;identit&agrave; &egrave; essenziale per la sicurezza della piattaforma.
      </p>

      <h2>4. Come Condividiamo i Vostri Dati</h2>

      <h3>4.1 Con altri utenti</h3>
      <ul>
        <li><strong>Prima del match:</strong> i rider vedono la zona approssimativa (quartiere/CAP), i dettagli del pacco e la finestra oraria di ritiro. I mittenti vedono il profilo del rider, la valutazione media e il numero di consegne completate.</li>
        <li><strong>Dopo il match:</strong> gli indirizzi completi di ritiro e consegna vengono condivisi con il rider assegnato. I numeri di telefono vengono condivisi tra le parti solo per la durata della consegna, opzionalmente attraverso un numero anonimizzato.</li>
        <li><strong>Dopo la consegna:</strong> i numeri di telefono vengono oscurati. Le recensioni reciproche diventano visibili dopo che entrambe le parti le hanno inviate o dopo 72 ore.</li>
      </ul>

      <h3>4.2 Con i fornitori di servizi</h3>
      <p>Condividiamo i dati con fornitori di servizi terzi di fiducia che trattano i dati per nostro conto:</p>
      <ul>
        <li><strong>Stripe</strong> &mdash; elaborazione dei pagamenti, gestione dell&apos;escrow e pagamenti ai rider.</li>
        <li><strong>Onfido / Jumio</strong> &mdash; verifica dei documenti d&apos;identit&agrave; e riconoscimento facciale.</li>
        <li><strong>Google Maps / Mapbox</strong> &mdash; mappe, geocodifica, calcolo dei percorsi e tracking in tempo reale.</li>
        <li><strong>Firebase Cloud Messaging</strong> &mdash; notifiche push.</li>
        <li><strong>Twilio</strong> &mdash; notifiche SMS e anonimizzazione dei numeri di telefono.</li>
        <li><strong>AWS / Google Cloud</strong> &mdash; hosting cloud e archiviazione foto (crittografate a riposo con AES-256).</li>
      </ul>
      <p>
        Tutti i fornitori di servizi sono vincolati da accordi per il trattamento dei dati (DPA) che garantiscono
        la conformit&agrave; ai requisiti del GDPR.
      </p>

      <h3>4.3 Con le autorit&agrave;</h3>
      <p>
        Potremmo divulgare i vostri dati personali alle forze dell&apos;ordine o alle autorit&agrave; competenti quando
        richiesto dalla legge, o quando necessario per proteggere la sicurezza dei nostri utenti (ad esempio, in casi
        che coinvolgono articoli proibiti come sostanze illegali, armi o materiali pericolosi).
      </p>

      <h2>5. Conservazione dei Dati</h2>
      <ul>
        <li><strong>Dati dell&apos;account:</strong> conservati per la durata dell&apos;account attivo, pi&ugrave; 5 anni dopo la cancellazione per adempiere agli obblighi fiscali e legali.</li>
        <li><strong>Foto e log delle consegne:</strong> conservati per 90 giorni dopo il completamento della consegna, poi anonimizzati o eliminati permanentemente.</li>
        <li><strong>Documenti d&apos;identit&agrave;:</strong> conservati per la durata dell&apos;account attivo. Eliminati entro 30 giorni dalla chiusura dell&apos;account.</li>
        <li><strong>Dati biometrici facciali:</strong> elaborati in tempo reale per la verifica e non conservati in modo persistente. I risultati della verifica (superato/non superato) vengono conservati.</li>
        <li><strong>Registri di pagamento:</strong> conservati per 10 anni come richiesto dalla normativa fiscale italiana.</li>
        <li><strong>Messaggi chat:</strong> conservati per 90 giorni dopo il completamento della consegna, poi eliminati.</li>
        <li><strong>Dati di tracking GPS:</strong> conservati per 90 giorni dopo la consegna, poi anonimizzati per finalit&agrave; di analisi.</li>
        <li><strong>Registri delle dispute:</strong> conservati per 2 anni dopo la risoluzione.</li>
      </ul>

      <h2>6. I Vostri Diritti</h2>
      <p>Ai sensi del GDPR, avete i seguenti diritti relativi ai vostri dati personali:</p>
      <ul>
        <li><strong>Diritto di accesso (Art. 15):</strong> richiedere una copia di tutti i dati personali in nostro possesso.</li>
        <li><strong>Diritto di rettifica (Art. 16):</strong> correggere dati inesatti o incompleti.</li>
        <li><strong>Diritto alla cancellazione (Art. 17):</strong> richiedere la cancellazione dei vostri dati (&quot;diritto all&apos;oblio&quot;), fatto salvo il rispetto degli obblighi legali di conservazione.</li>
        <li><strong>Diritto alla limitazione (Art. 18):</strong> richiedere la limitazione del trattamento dei vostri dati in determinate circostanze.</li>
        <li><strong>Diritto alla portabilit&agrave; dei dati (Art. 20):</strong> ricevere i vostri dati in un formato strutturato, di uso comune e leggibile da dispositivo automatico.</li>
        <li><strong>Diritto di opposizione (Art. 21):</strong> opporsi al trattamento basato sull&apos;interesse legittimo, inclusa la profilazione.</li>
        <li><strong>Diritto di revocare il consenso (Art. 7(3)):</strong> revocare il consenso in qualsiasi momento per il trattamento basato sul consenso (es. verifica biometrica).</li>
        <li><strong>Diritto di reclamo:</strong> presentare un reclamo al Garante per la protezione dei dati personali su <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>.</li>
      </ul>
      <p>
        Per esercitare uno qualsiasi di questi diritti, contattateci all&apos;indirizzo <a href="mailto:support@delgoo.com">support@delgoo.com</a>.
        Risponderemo entro 30 giorni dal ricevimento della vostra richiesta.
      </p>

      <h2>7. Sicurezza dei Dati</h2>
      <p>Implementiamo robuste misure tecniche e organizzative per proteggere i vostri dati personali:</p>
      <ul>
        <li><strong>Crittografia in transito:</strong> tutti i dati trasmessi tra il vostro dispositivo e i nostri server sono crittografati tramite TLS 1.3.</li>
        <li><strong>Crittografia a riposo:</strong> i dati sensibili (documenti d&apos;identit&agrave;, foto) sono crittografati tramite AES-256.</li>
        <li><strong>Autenticazione:</strong> autenticazione basata su JWT con refresh token. Autenticazione a due fattori (2FA) opzionale.</li>
        <li><strong>Integrit&agrave; delle foto:</strong> i metadati EXIF (timestamp e GPS) vengono iniettati lato server per prevenire manipolazioni.</li>
        <li><strong>Controllo degli accessi:</strong> controlli di accesso basati sui ruoli e registrazione di audit per tutti gli accessi interni ai dati personali.</li>
        <li><strong>Rate limiting:</strong> protezioni anti-abuso su tutti gli endpoint API.</li>
      </ul>

      <h2>8. Trasferimenti Internazionali di Dati</h2>
      <p>
        I vostri dati personali vengono principalmente elaborati e conservati all&apos;interno dello Spazio Economico
        Europeo (SEE). Quando i dati vengono trasferiti a fornitori di servizi situati al di fuori del SEE (es.
        determinate infrastrutture cloud o servizi di notifica), garantiamo l&apos;adozione di garanzie adeguate, tra cui:
      </p>
      <ul>
        <li>Clausole Contrattuali Standard (SCC) dell&apos;UE.</li>
        <li>Decisioni di adeguatezza della Commissione Europea, ove applicabili.</li>
        <li>Norme vincolanti d&apos;impresa dell&apos;importatore dei dati, ove applicabili.</li>
      </ul>

      <h2>9. Cookie e Tecnologie di Tracciamento</h2>
      <p>
        Il nostro sito web utilizza cookie e tecnologie di tracciamento simili per fornire funzionalit&agrave; essenziali,
        ricordare le vostre preferenze (come la selezione della lingua) e analizzare i modelli di utilizzo.
      </p>
      <ul>
        <li><strong>Cookie strettamente necessari:</strong> essenziali per il funzionamento della Piattaforma (es. gestione della sessione, preferenza linguistica). Non richiedono il consenso.</li>
        <li><strong>Cookie analitici:</strong> utilizzati per comprendere come i visitatori interagiscono con il nostro sito web (es. visualizzazioni di pagina, modelli di navigazione). Attivati solo con il vostro consenso esplicito.</li>
        <li><strong>Cookie di marketing:</strong> attualmente non utilizzati. Se introdotti in futuro, richiederanno il vostro consenso preventivo.</li>
      </ul>
      <p>
        Potete gestire le vostre preferenze sui cookie in qualsiasi momento tramite il nostro banner cookie o le impostazioni del vostro browser.
      </p>

      <h2>10. Privacy dei Minori</h2>
      <p>
        La Piattaforma non &egrave; destinata a persone di et&agrave; inferiore ai 18 anni. Non raccogliamo
        consapevolmente dati personali di minori. Se venissimo a conoscenza di aver raccolto dati di una persona
        di et&agrave; inferiore ai 18 anni, provvederemo prontamente a cancellare tali dati e a chiudere l&apos;account associato.
      </p>

      <h2>11. Processi Decisionali Automatizzati</h2>
      <p>Utilizziamo processi automatizzati nelle seguenti aree:</p>
      <ul>
        <li><strong>Pricing dinamico:</strong> i prezzi delle consegne vengono calcolati algoritmicamente in base a distanza, dimensione del pacco, peso, urgenza e domanda/offerta. Il prezzo finale &egrave; sempre visibile prima della conferma.</li>
        <li><strong>Penali automatiche:</strong> le penali per mancata presentazione e le recensioni negative automatiche vengono applicate in base a criteri oggettivi (es. mancata presentazione entro le finestre temporali definite). Potete contestare qualsiasi decisione automatica tramite il nostro processo di risoluzione delle dispute.</li>
        <li><strong>Verifica dell&apos;identit&agrave;:</strong> la verifica dei documenti e facciale viene eseguita da sistemi automatizzati. La revisione manuale &egrave; disponibile se il sistema automatizzato produce un risultato inconclusivo.</li>
      </ul>
      <p>
        Avete il diritto di non essere sottoposti a una decisione basata unicamente sul trattamento automatizzato
        che produca effetti giuridici o analogamente significativi nei vostri confronti (Art. 22 GDPR).
        Contattateci per richiedere l&apos;intervento umano.
      </p>

      <h2>12. Modifiche alla Presente Informativa</h2>
      <p>
        Potremmo aggiornare la presente Informativa sulla Privacy di tanto in tanto per riflettere cambiamenti nelle
        nostre pratiche, nella tecnologia, nei requisiti legali o in altri fattori. Quando apporteremo modifiche
        sostanziali, vi informeremo tramite la Piattaforma (tramite notifica push o banner in-app) almeno 30 giorni
        prima dell&apos;entrata in vigore delle modifiche. L&apos;uso continuato della Piattaforma dopo la data di
        efficacia costituisce accettazione dell&apos;informativa aggiornata.
      </p>

      <h2>13. Contatti</h2>
      <p>
        Per qualsiasi domanda, preoccupazione o richiesta relativa alla presente Informativa sulla Privacy o alle
        nostre pratiche di trattamento dei dati, contattateci:
      </p>
      <ul>
        <li><strong>Richieste generali:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
        <li><strong>Richieste relative alla privacy:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
        <li><strong>Responsabile della Protezione dei Dati:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
      </ul>
    </>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout>
      <PrivacyContent />
    </LegalPageLayout>
  );
}
