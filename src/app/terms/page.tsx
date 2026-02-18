'use client';

import { LegalPageLayout } from '@/components/ui/LegalPageLayout';
import { useLanguage } from '@/lib/i18n';

function TermsContent() {
  const { lang } = useLanguage();

  if (lang === 'it') return <TermsIT />;
  return <TermsEN />;
}

function TermsEN() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="text-sm text-gray-400 !mt-2">Last updated: February 2026</p>

      <p>
        Welcome to Delgoo. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
        Delgoo mobile application and website (collectively, the &quot;Platform&quot;), operated by Delgoo S.r.l.
        (&quot;Delgoo,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company registered in Milan, Italy.
      </p>
      <p>
        By creating an account or using the Platform, you agree to be bound by these Terms. If you do not agree
        to these Terms, you must not use the Platform.
      </p>

      <h2>1. Nature of the Platform</h2>
      <p>
        Delgoo operates as a <strong>technology intermediary</strong> that connects individuals who wish to send
        packages within the same city (&quot;Senders&quot;) with private individuals willing to transport those
        packages along their existing routes (&quot;Riders&quot;). Delgoo is <strong>not</strong> a courier
        service, carrier, postal operator, or transportation company.
      </p>
      <p>
        Delgoo does not directly perform, guarantee, or assume responsibility for the transport of packages. The
        Platform facilitates the connection between Senders and Riders, similar to how platforms such as BlaBlaCar
        or Vinted connect their respective users. The actual transport service is provided by the Rider as a
        private individual.
      </p>

      <h2>2. Eligibility and Registration</h2>

      <h3>2.1 Eligibility</h3>
      <p>To use the Platform, you must:</p>
      <ul>
        <li>Be at least 18 years of age.</li>
        <li>Have the legal capacity to enter into a binding agreement.</li>
        <li>Not have been previously banned from the Platform.</li>
      </ul>

      <h3>2.2 Account Registration</h3>
      <p>
        To access the Platform&apos;s services, you must create an account by providing: a valid email address
        or phone number (verified via OTP), your full legal name, date of birth, and a profile photo. You are
        responsible for maintaining the accuracy of your account information and the confidentiality of your
        login credentials.
      </p>

      <h3>2.3 Identity Verification</h3>
      <p>
        All users must complete identity verification by uploading a valid government-issued identity document
        (front and back). Verification is performed through an automated third-party service. Additionally, you
        agree to complete periodic biometric verification (&quot;face check&quot;) every 7 days. If verification
        is not completed within 48 hours of being requested, your account will be suspended until verification
        is successful.
      </p>
      <p>
        Riders must also complete verification before accepting any delivery request if their most recent
        verification has expired.
      </p>

      <h2>3. User Roles</h2>
      <p>
        Delgoo uses a <strong>unified role system</strong>: every registered account can act as a Sender, a Rider,
        or a Recipient. There is no separate registration for Riders.
      </p>

      <h3>3.1 As a Sender</h3>
      <p>When acting as a Sender, you may:</p>
      <ul>
        <li>Create shipment listings specifying pickup address, delivery area, package details (size, estimated weight, fragility), and available time windows (minimum 2-hour slots).</li>
        <li>Designate a registered Recipient who must pre-approve the shipment before publication.</li>
        <li>Review Rider profiles, ratings, and delivery history before accepting a request.</li>
        <li>Communicate with Riders and Recipients via the in-app chat.</li>
        <li>Pay the delivery fee upon accepting a Rider&apos;s request.</li>
      </ul>

      <h3>3.2 As a Rider</h3>
      <p>When acting as a Rider, you:</p>
      <ul>
        <li>Must have a verified identity document and a registered payment method (for potential penalties).</li>
        <li>Must accept the Rider Code of Conduct.</li>
        <li>May browse available shipments filtered by zone, distance, package size, and time slot.</li>
        <li>May submit pickup requests with an optional introductory message.</li>
        <li>Must follow the verified pickup and delivery procedures (QR code scan, photographic documentation).</li>
        <li>Receive compensation upon confirmed delivery.</li>
        <li>Declare that any vehicle used for transport complies with applicable laws and has the required insurance coverage.</li>
      </ul>

      <h3>3.3 As a Recipient</h3>
      <p>When acting as a Recipient, you:</p>
      <ul>
        <li>Must pre-approve shipments addressed to you within 24 hours, or the listing is automatically cancelled.</li>
        <li>Receive real-time tracking updates during transit.</li>
        <li>Must verify package integrity and confirm receipt by entering a 6-digit OTP code and taking photos of the received package.</li>
        <li>May communicate with the Rider during the final delivery phase.</li>
      </ul>

      <h2>4. The Delivery Process</h2>

      <h3>4.1 Creating a Shipment</h3>
      <p>
        Senders create shipment listings with pickup and delivery details, package specifications, and available
        time windows. The delivery address is hidden from Riders until after acceptance &mdash; Riders only see
        the approximate delivery zone (neighborhood or ZIP code). The price is calculated automatically and
        displayed to the Sender before publication. No payment is required at listing creation.
      </p>

      <h3>4.2 Matching</h3>
      <p>
        Riders may submit requests for published shipments. Senders may receive multiple requests simultaneously
        but can only accept one. Upon acceptance, the payment is charged and held in escrow. Unaccepted requests
        expire after 12 hours.
      </p>

      <h3>4.3 Package Preparation</h3>
      <p>After a Rider is assigned, the Sender must:</p>
      <ul>
        <li>Photograph the package contents using the in-app camera (minimum 2 photos from different angles; gallery uploads are not permitted).</li>
        <li>Seal the package using the app-generated QR code label, covering all openings.</li>
        <li>Photograph the sealed package (minimum 4 photos, one per side, showing the intact seal).</li>
        <li>Confirm the package is ready for pickup.</li>
      </ul>

      <h3>4.4 Pickup</h3>
      <p>
        The Rider must arrive at the pickup address within the agreed time window. Upon arrival within 200 meters,
        the app detects the location automatically. The Rider scans the QR code on the package (registering
        timestamp and GPS), takes at least 2 photos of the package, and the Sender confirms handover in-app. The
        Rider then receives the full delivery address.
      </p>

      <h3>4.5 Transit and Tracking</h3>
      <p>
        During transport, the Rider&apos;s GPS location is shared in real time with both Sender and Recipient,
        with updates every 10 seconds. The Rider must keep GPS active throughout. If GPS is disabled for more
        than 5 minutes, the Sender is notified. Route deviations exceeding 2 km for more than 10 minutes are
        logged and flagged.
      </p>

      <h3>4.6 Delivery</h3>
      <p>
        The Rider must be within 200 meters of the delivery address to activate the delivery button. The Rider
        photographs the package upon delivery. The Recipient enters a 6-digit OTP code displayed on the Rider&apos;s
        device, photographs the received package (including seal condition), and confirms receipt in-app.
      </p>

      <h2>5. Pricing and Payments</h2>

      <h3>5.1 Pricing</h3>
      <p>Delivery prices are calculated dynamically based on:</p>
      <ul>
        <li><strong>Distance:</strong> calculated by road route, not straight line.</li>
        <li><strong>Package size:</strong> multipliers of x1.0 (small), x1.3 (medium), x1.6 (large).</li>
        <li><strong>Estimated weight:</strong> surcharge for packages over 5 kg.</li>
        <li><strong>Urgency:</strong> x1.5 for delivery within 2 hours, x1.3 within 4 hours, x1.0 for standard.</li>
        <li><strong>Supply and demand:</strong> dynamic variation of up to +/- 20% based on the ratio of active listings to available Riders in the area.</li>
      </ul>
      <p>
        The minimum guaranteed Rider fee is &euro;3.00 per delivery, regardless of distance. The Sender sees
        the total price before publishing, and the Rider sees their net compensation before applying.
      </p>

      <h3>5.2 Platform Commission</h3>
      <p>
        Delgoo charges a 20% commission on each delivery. For users with &quot;Expert&quot; reputation status
        (50+ deliveries with a rating of 4.7 or above), the commission is reduced to 15%.
      </p>

      <h3>5.3 Escrow and Payment Flow</h3>
      <ul>
        <li><strong>Charge:</strong> the Sender is charged when accepting a Rider&apos;s request. Funds are held in escrow by the Platform.</li>
        <li><strong>Hold:</strong> funds remain in escrow for the duration of the delivery.</li>
        <li><strong>Release:</strong> payment is released to the Rider upon confirmed delivery by the Recipient, or if the Sender is a no-show at pickup (the Rider is paid in full).</li>
        <li><strong>Refund:</strong> full refund to the Sender if the delivery is cancelled before pickup within the permitted timeframe.</li>
      </ul>

      <h3>5.4 Payment Methods</h3>
      <p>Accepted payment methods: Visa, Mastercard (credit/debit), Apple Pay, Google Pay, and the in-app Delgoo Wallet (rechargeable).</p>

      <h3>5.5 Rider Payouts</h3>
      <p>
        Rider earnings accumulate in the in-app wallet. Withdrawal to a bank account is available with a minimum
        threshold of &euro;10.00. Transfers take 2&ndash;3 business days.
      </p>

      <h2>6. Cancellations</h2>

      <h3>6.1 Sender Cancellations</h3>
      <ul>
        <li><strong>Before match:</strong> free cancellation; the listing is simply removed.</li>
        <li><strong>After match, more than 2 hours before pickup:</strong> full refund, no penalty.</li>
        <li><strong>After match, less than 2 hours before pickup:</strong> the Rider receives 50% of the fee as compensation; the Sender is refunded the remaining 50%.</li>
      </ul>

      <h3>6.2 Rider Cancellations</h3>
      <ul>
        <li><strong>More than 2 hours before pickup:</strong> no penalty; the listing returns to the marketplace.</li>
        <li><strong>Less than 2 hours before pickup:</strong> &euro;5.00 penalty deducted from wallet + automatic 1-star review.</li>
      </ul>

      <h2>7. No-Shows</h2>

      <h3>7.1 Sender No-Show at Pickup</h3>
      <p>
        If the Sender is unavailable at pickup, the Rider reports the absence after 15 minutes. The app
        contacts the Sender via push notification and SMS. If the Sender remains unreachable after a total
        of 30 minutes, the Rider may leave. The Rider receives full payment. The Sender forfeits the
        entire amount paid and receives an automatic 1-star review.
      </p>

      <h3>7.2 Recipient Unavailable at Delivery</h3>
      <p>
        The Rider attempts contact for 15 minutes via phone, chat, and intercom. If the Recipient proposes
        an alternative (doorman, neighbor, safe point), the Rider may accept, and responsibility transfers
        to the Recipient from the moment of release. If no contact is made, the Rider contacts the Sender
        to arrange return. The Rider receives an additional 50% of the original fee for the return trip.
        The Recipient receives an automatic 1-star review.
      </p>

      <h2>8. Penalties and Reputation</h2>

      <h3>8.1 Penalties</h3>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rider no-show or cancellation less than 2 hours before pickup</td>
            <td>&euro;5.00 + account suspension</td>
          </tr>
          <tr>
            <td>Sender no-show</td>
            <td>Full forfeiture of paid amount</td>
          </tr>
          <tr>
            <td>Tampered seal</td>
            <td>Immediate suspension + investigation; potential legal reporting</td>
          </tr>
          <tr>
            <td>Repeated offenses (3+ infractions)</td>
            <td>Permanent ban after team review</td>
          </tr>
        </tbody>
      </table>
      <p>
        Penalties are deducted from the Rider&apos;s in-app wallet. If the wallet balance is insufficient,
        the account remains suspended until the outstanding penalty is settled.
      </p>

      <h3>8.2 Reviews</h3>
      <p>
        After each completed delivery, parties may leave mutual reviews (1&ndash;5 stars with optional comment).
        Reviews use a blind system: they become visible only after both parties have submitted theirs, or after
        72 hours, whichever comes first. Automatic negative reviews (1 star) are generated for no-shows and
        late cancellations.
      </p>

      <h3>8.3 Reputation Levels</h3>
      <ul>
        <li><strong>New:</strong> 0&ndash;4 deliveries. No badge.</li>
        <li><strong>Reliable:</strong> 5+ deliveries with average rating &ge; 4.0. Bronze badge.</li>
        <li><strong>Top Rider/Sender:</strong> 20+ deliveries with average rating &ge; 4.5. Silver badge. Listing priority.</li>
        <li><strong>Expert:</strong> 50+ deliveries with average rating &ge; 4.7. Gold badge. Reduced commission (15%).</li>
      </ul>

      <h2>9. Prohibited Items</h2>
      <p>The following items are strictly prohibited from being shipped through the Platform:</p>
      <ul>
        <li>Illegal substances and controlled drugs.</li>
        <li>Weapons, firearms, ammunition, and explosives.</li>
        <li>Hazardous materials (explosives, flammables, corrosives).</li>
        <li>Live animals.</li>
        <li>Cash or currency.</li>
        <li>Original identity documents belonging to third parties.</li>
      </ul>
      <p>
        Violation of this prohibition results in <strong>immediate and permanent account ban</strong> and, where
        applicable, reporting to the relevant authorities.
      </p>

      <h2>10. Package Security and Chain of Custody</h2>
      <p>The QR code seal is the central element of the chain of custody for every shipment:</p>
      <ul>
        <li>A unique QR code is generated by the app for each shipment.</li>
        <li>The seal must cover all package openings.</li>
        <li>The QR code is scanned at three checkpoints: preparation (Sender), pickup (Rider), and delivery (Recipient). Each scan records who scanned, when, where (GPS), and seal status.</li>
        <li>A complete photographic dossier is automatically created for each shipment: content photos (Sender), sealed package photos (Sender), pickup photos (Rider), delivery photos (Rider), and receipt photos (Recipient).</li>
        <li>All photos are captured through the in-app camera with server-side injected EXIF metadata for integrity.</li>
      </ul>

      <h2>11. Disputes and Damaged Packages</h2>

      <h3>11.1 Damaged Package</h3>
      <ul>
        <li>If the seal is <strong>intact</strong>: responsibility lies with the Sender (inadequate packaging). The Rider is paid normally.</li>
        <li>If the seal is <strong>tampered with</strong>: the Rider is immediately suspended. An investigation is opened. The Sender is refunded.</li>
      </ul>

      <h3>11.2 Missing or Different Content</h3>
      <p>
        Our support team compares photos taken by the Sender with photos taken by the Recipient. If the seal
        is intact, responsibility falls on the Sender. Resolution occurs within 5 business days, with the
        possibility of partial or full refund to the Recipient, charged to the Sender.
      </p>

      <h3>11.3 Dispute Resolution</h3>
      <p>
        All disputes are handled by our support team, who examine the full photographic dossier and delivery
        logs. Decisions are rendered within 5 business days. Users may contest automatic decisions (penalties,
        automatic reviews) by submitting a dispute through the Platform.
      </p>

      <h2>12. Rider Status and Tax Obligations</h2>
      <p>
        Riders are <strong>not</strong> employees, contractors, or collaborators of Delgoo. They act as
        private individuals offering an occasional service. However, Riders are responsible for complying
        with all applicable tax and fiscal regulations, including but not limited to VAT registration
        obligations that may arise when activity exceeds occasional thresholds.
      </p>
      <p>
        The Platform may implement a maximum monthly delivery limit (e.g., 30 deliveries) and an annual
        earnings cap in line with prevailing fiscal thresholds. You will receive automatic notifications as
        you approach these limits. It is your sole responsibility to consult with a tax professional regarding
        your obligations.
      </p>

      <h2>13. Vehicles</h2>
      <p>
        Delgoo does not require registration of a specific vehicle. Riders are free to use any means of
        transport (on foot, bicycle, scooter, car, or other). The Platform is not responsible for the
        compliance or condition of the vehicle used. By accepting these Terms, Riders declare that any vehicle
        they use complies with applicable laws and is covered by legally required insurance.
      </p>

      <h2>14. Limitation of Liability</h2>

      <h3>14.1 Platform Role</h3>
      <p>
        Delgoo provides the technology platform that facilitates connections between users. We do not guarantee
        the completion, quality, safety, or legality of any delivery. We are not liable for the actions or
        omissions of any user.
      </p>

      <h3>14.2 Package Liability</h3>
      <ul>
        <li>The <strong>Sender</strong> is responsible for the accuracy of the package description, the quality of packaging, and the declared contents.</li>
        <li>The <strong>Rider</strong> is responsible for the physical integrity of the package during transport (as evidenced by the seal system).</li>
        <li><strong>Delgoo</strong> does not assume direct liability for package loss, damage, or theft, but manages the dispute resolution process and escrow system.</li>
      </ul>

      <h3>14.3 Maximum Liability</h3>
      <p>
        To the maximum extent permitted by applicable law, Delgoo&apos;s total aggregate liability to any user
        for any claims arising from or related to the Platform shall not exceed the total fees paid by or to
        that user through the Platform in the 12 months preceding the claim.
      </p>

      <h3>14.4 Exclusions</h3>
      <p>
        Delgoo shall not be liable for: indirect, incidental, consequential, or punitive damages; loss of
        profits or revenue; service interruptions caused by force majeure, technical failures beyond our
        reasonable control, or scheduled maintenance.
      </p>

      <h2>15. Insurance</h2>
      <p>
        Delgoo does not provide insurance coverage for shipments by default. An optional micro-insurance
        product may be offered for shipments exceeding a specified value, in partnership with a third-party
        insurance provider. Details and terms of any such insurance are governed by the insurance provider&apos;s
        separate policy.
      </p>

      <h2>16. Intellectual Property</h2>
      <p>
        All content on the Platform &mdash; including but not limited to the Delgoo name, logo, trademarks,
        software, design, text, graphics, and user interface &mdash; is the exclusive property of Delgoo S.r.l.
        or its licensors. You may not copy, modify, distribute, sell, or lease any part of the Platform or its
        content without our prior written consent.
      </p>

      <h2>17. Account Suspension and Termination</h2>
      <p>We may suspend or permanently terminate your account if you:</p>
      <ul>
        <li>Violate these Terms or applicable law.</li>
        <li>Fail to complete identity verification within the required timeframe.</li>
        <li>Ship prohibited items.</li>
        <li>Tamper with package seals.</li>
        <li>Accumulate 3 or more infractions.</li>
        <li>Engage in fraudulent, abusive, or threatening behavior.</li>
        <li>Have outstanding penalty balances that remain unpaid.</li>
      </ul>
      <p>
        You may delete your account at any time through the app settings. Account deletion does not release
        you from any pending obligations, outstanding penalties, or ongoing dispute proceedings.
      </p>

      <h2>18. Communications and Notifications</h2>
      <p>
        By using the Platform, you agree to receive transactional communications via push notifications, SMS,
        and email related to your deliveries, account security, and Platform updates. These are essential
        service communications and cannot be opted out of while using the Platform. Promotional communications
        require your separate opt-in consent.
      </p>

      <h2>19. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Delgoo, its officers, directors, employees, and agents from
        and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees)
        arising from: your use of the Platform; your violation of these Terms; your violation of any applicable
        law or regulation; or any dispute between you and another user.
      </p>

      <h2>20. Modifications to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. When we make material changes, we will notify
        you via the Platform at least 30 days before the changes take effect. Your continued use of the
        Platform after the effective date constitutes acceptance of the modified Terms. If you do not agree
        with the changes, you must discontinue use of the Platform and delete your account.
      </p>

      <h2>21. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the Italian Republic. Any
        dispute arising from or in connection with these Terms shall be subject to the exclusive jurisdiction
        of the courts of Milan, Italy, without prejudice to mandatory consumer protection provisions that may
        grant jurisdiction to the courts of the consumer&apos;s place of residence.
      </p>

      <h2>22. Severability</h2>
      <p>
        If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of
        competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid
        provision shall be modified to the minimum extent necessary to make it valid and enforceable while
        preserving its original intent.
      </p>

      <h2>23. Entire Agreement</h2>
      <p>
        These Terms, together with the Privacy Policy and any other policies referenced herein, constitute
        the entire agreement between you and Delgoo regarding the use of the Platform and supersede all
        prior agreements, understandings, and communications.
      </p>

      <h2>24. Contact</h2>
      <p>For questions or concerns about these Terms:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
        <li><strong>Legal inquiries:</strong> <a href="mailto:legal@delgoo.com">legal@delgoo.com</a></li>
      </ul>
    </>
  );
}

function TermsIT() {
  return (
    <>
      <h1>Termini di Servizio</h1>
      <p className="text-sm text-gray-400 !mt-2">Ultimo aggiornamento: Febbraio 2026</p>

      <p>
        Benvenuti su Delgoo. I presenti Termini di Servizio (&quot;Termini&quot;) regolano l&apos;accesso e
        l&apos;utilizzo dell&apos;applicazione mobile Delgoo e del sito web (collettivamente, la
        &quot;Piattaforma&quot;), gestiti da Delgoo S.r.l. (&quot;Delgoo&quot;, &quot;noi&quot;,
        &quot;nostro/a&quot; o &quot;ci&quot;), societ&agrave; registrata a Milano, Italia.
      </p>
      <p>
        Creando un account o utilizzando la Piattaforma, accettate di essere vincolati dai presenti Termini.
        Se non accettate i presenti Termini, non dovete utilizzare la Piattaforma.
      </p>

      <h2>1. Natura della Piattaforma</h2>
      <p>
        Delgoo opera come <strong>intermediario tecnologico</strong> che mette in contatto persone che desiderano
        spedire pacchi all&apos;interno della stessa citt&agrave; (&quot;Mittenti&quot;) con privati disposti a
        trasportare tali pacchi lungo i propri percorsi abituali (&quot;Rider&quot;). Delgoo <strong>non</strong> &egrave;
        un servizio di corriere, vettore, operatore postale o societ&agrave; di trasporto.
      </p>
      <p>
        Delgoo non esegue direttamente, non garantisce e non si assume la responsabilit&agrave; del trasporto dei
        pacchi. La Piattaforma facilita la connessione tra Mittenti e Rider, analogamente a piattaforme come
        BlaBlaCar o Vinted. Il servizio di trasporto effettivo &egrave; fornito dal Rider in qualit&agrave; di
        privato cittadino.
      </p>

      <h2>2. Requisiti e Registrazione</h2>

      <h3>2.1 Requisiti</h3>
      <p>Per utilizzare la Piattaforma, &egrave; necessario:</p>
      <ul>
        <li>Avere almeno 18 anni di et&agrave;.</li>
        <li>Avere la capacit&agrave; giuridica di stipulare un accordo vincolante.</li>
        <li>Non essere stati precedentemente banditi dalla Piattaforma.</li>
      </ul>

      <h3>2.2 Registrazione dell&apos;Account</h3>
      <p>
        Per accedere ai servizi della Piattaforma, dovete creare un account fornendo: un indirizzo email o numero
        di telefono valido (verificato tramite OTP), il vostro nome legale completo, data di nascita e una foto
        del profilo. Siete responsabili del mantenimento dell&apos;accuratezza delle informazioni del vostro
        account e della riservatezza delle vostre credenziali di accesso.
      </p>

      <h3>2.3 Verifica dell&apos;Identit&agrave;</h3>
      <p>
        Tutti gli utenti devono completare la verifica dell&apos;identit&agrave; caricando un documento d&apos;identit&agrave;
        valido rilasciato dal governo (fronte e retro). La verifica viene eseguita tramite un servizio automatizzato
        di terze parti. Inoltre, accettate di completare una verifica biometrica periodica (&quot;face check&quot;)
        ogni 7 giorni. Se la verifica non viene completata entro 48 ore dalla richiesta, il vostro account
        verr&agrave; sospeso fino al completamento della verifica.
      </p>
      <p>
        I Rider devono inoltre completare la verifica prima di accettare qualsiasi richiesta di consegna se la
        loro verifica pi&ugrave; recente &egrave; scaduta.
      </p>

      <h2>3. Ruoli degli Utenti</h2>
      <p>
        Delgoo utilizza un <strong>sistema a ruolo unico</strong>: ogni account registrato pu&ograve; agire come
        Mittente, Rider o Destinatario. Non esiste una registrazione separata per i Rider.
      </p>

      <h3>3.1 Come Mittente</h3>
      <p>Agendo come Mittente, potete:</p>
      <ul>
        <li>Creare annunci di spedizione specificando indirizzo di ritiro, zona di consegna, dettagli del pacco (dimensione, peso stimato, fragilit&agrave;) e fasce orarie disponibili (minimo 2 ore).</li>
        <li>Designare un Destinatario registrato che deve pre-approvare la spedizione prima della pubblicazione.</li>
        <li>Esaminare profili dei Rider, valutazioni e cronologia delle consegne prima di accettare una richiesta.</li>
        <li>Comunicare con Rider e Destinatari tramite la chat in-app.</li>
        <li>Pagare la tariffa di consegna al momento dell&apos;accettazione della richiesta del Rider.</li>
      </ul>

      <h3>3.2 Come Rider</h3>
      <p>Agendo come Rider:</p>
      <ul>
        <li>Dovete avere un documento d&apos;identit&agrave; verificato e un metodo di pagamento registrato (per eventuali penali).</li>
        <li>Dovete accettare il Codice di Condotta del Rider.</li>
        <li>Potete consultare le spedizioni disponibili filtrate per zona, distanza, dimensione del pacco e fascia oraria.</li>
        <li>Potete inviare richieste di presa in carico con un messaggio opzionale di presentazione.</li>
        <li>Dovete seguire le procedure verificate di ritiro e consegna (scansione QR, documentazione fotografica).</li>
        <li>Ricevete il compenso alla conferma della consegna.</li>
        <li>Dichiarate che qualsiasi veicolo utilizzato per il trasporto &egrave; conforme alle leggi applicabili e dispone delle coperture assicurative richieste.</li>
      </ul>

      <h3>3.3 Come Destinatario</h3>
      <p>Agendo come Destinatario:</p>
      <ul>
        <li>Dovete pre-approvare le spedizioni a voi destinate entro 24 ore, altrimenti l&apos;annuncio viene cancellato automaticamente.</li>
        <li>Ricevete aggiornamenti di tracking in tempo reale durante il trasporto.</li>
        <li>Dovete verificare l&apos;integrit&agrave; del pacco e confermare la ricezione inserendo un codice OTP a 6 cifre e scattando foto del pacco ricevuto.</li>
        <li>Potete comunicare con il Rider durante la fase finale della consegna.</li>
      </ul>

      <h2>4. Il Processo di Consegna</h2>

      <h3>4.1 Creazione di una Spedizione</h3>
      <p>
        I Mittenti creano annunci con dettagli di ritiro e consegna, specifiche del pacco e fasce orarie disponibili.
        L&apos;indirizzo di consegna &egrave; nascosto ai Rider fino all&apos;accettazione &mdash; i Rider vedono solo
        la zona approssimativa (quartiere o CAP). Il prezzo viene calcolato automaticamente e mostrato al Mittente
        prima della pubblicazione. Nessun pagamento &egrave; richiesto alla creazione dell&apos;annuncio.
      </p>

      <h3>4.2 Matching</h3>
      <p>
        I Rider possono inviare richieste per le spedizioni pubblicate. I Mittenti possono ricevere pi&ugrave;
        richieste contemporaneamente ma possono accettarne solo una. All&apos;accettazione, il pagamento viene
        addebitato e trattenuto in escrow. Le richieste non accettate scadono dopo 12 ore.
      </p>

      <h3>4.3 Preparazione del Pacco</h3>
      <p>Dopo l&apos;assegnazione del Rider, il Mittente deve:</p>
      <ul>
        <li>Fotografare il contenuto del pacco tramite la fotocamera in-app (minimo 2 foto da angolazioni diverse; il caricamento dalla galleria non &egrave; consentito).</li>
        <li>Sigillare il pacco utilizzando l&apos;etichetta QR generata dall&apos;app, coprendo tutte le aperture.</li>
        <li>Fotografare il pacco sigillato (minimo 4 foto, una per lato, mostrando il sigillo integro).</li>
        <li>Confermare che il pacco &egrave; pronto per il ritiro.</li>
      </ul>

      <h3>4.4 Ritiro</h3>
      <p>
        Il Rider deve arrivare all&apos;indirizzo di ritiro nella finestra oraria concordata. All&apos;arrivo
        entro 200 metri, l&apos;app rileva automaticamente la posizione. Il Rider scannerizza il QR code sul
        pacco (registrando timestamp e GPS), scatta almeno 2 foto del pacco e il Mittente conferma la consegna
        in-app. Il Rider riceve quindi l&apos;indirizzo completo di consegna.
      </p>

      <h3>4.5 Trasporto e Tracking</h3>
      <p>
        Durante il trasporto, la posizione GPS del Rider viene condivisa in tempo reale con Mittente e
        Destinatario, con aggiornamenti ogni 10 secondi. Il Rider deve mantenere il GPS attivo per tutta la
        durata. Se il GPS viene disattivato per pi&ugrave; di 5 minuti, il Mittente viene notificato. Le
        deviazioni dal percorso superiori a 2 km per pi&ugrave; di 10 minuti vengono registrate e segnalate.
      </p>

      <h3>4.6 Consegna</h3>
      <p>
        Il Rider deve trovarsi entro 200 metri dall&apos;indirizzo di consegna per attivare il pulsante di
        consegna. Il Rider fotografa il pacco alla consegna. Il Destinatario inserisce un codice OTP a 6
        cifre mostrato sul dispositivo del Rider, fotografa il pacco ricevuto (incluso lo stato del sigillo)
        e conferma la ricezione in-app.
      </p>

      <h2>5. Prezzi e Pagamenti</h2>

      <h3>5.1 Prezzi</h3>
      <p>I prezzi delle consegne vengono calcolati dinamicamente in base a:</p>
      <ul>
        <li><strong>Distanza:</strong> calcolata sul percorso stradale, non in linea d&apos;aria.</li>
        <li><strong>Dimensione del pacco:</strong> moltiplicatori di x1,0 (piccolo), x1,3 (medio), x1,6 (grande).</li>
        <li><strong>Peso stimato:</strong> supplemento per pacchi oltre 5 kg.</li>
        <li><strong>Urgenza:</strong> x1,5 per consegna entro 2 ore, x1,3 entro 4 ore, x1,0 per standard.</li>
        <li><strong>Domanda e offerta:</strong> variazione dinamica fino a +/- 20% basata sul rapporto tra annunci attivi e Rider disponibili nella zona.</li>
      </ul>
      <p>
        La tariffa minima garantita al Rider &egrave; di &euro;3,00 per consegna, indipendentemente dalla distanza.
        Il Mittente vede il prezzo totale prima della pubblicazione e il Rider vede il proprio compenso netto
        prima di candidarsi.
      </p>

      <h3>5.2 Commissione della Piattaforma</h3>
      <p>
        Delgoo applica una commissione del 20% su ogni consegna. Per gli utenti con stato di reputazione
        &quot;Esperto&quot; (50+ consegne con valutazione di 4,7 o superiore), la commissione &egrave; ridotta al 15%.
      </p>

      <h3>5.3 Escrow e Flusso dei Pagamenti</h3>
      <ul>
        <li><strong>Addebito:</strong> il Mittente viene addebitato al momento dell&apos;accettazione della richiesta del Rider. I fondi vengono trattenuti in escrow dalla Piattaforma.</li>
        <li><strong>Trattenimento:</strong> i fondi restano in escrow per tutta la durata della consegna.</li>
        <li><strong>Rilascio:</strong> il pagamento viene rilasciato al Rider alla conferma della consegna da parte del Destinatario, o in caso di mancata presenza del Mittente al ritiro (il Rider viene pagato interamente).</li>
        <li><strong>Rimborso:</strong> rimborso completo al Mittente se la consegna viene cancellata prima del ritiro nei tempi consentiti.</li>
      </ul>

      <h3>5.4 Metodi di Pagamento</h3>
      <p>Metodi di pagamento accettati: Visa, Mastercard (credito/debito), Apple Pay, Google Pay e il Wallet Delgoo in-app (ricaricabile).</p>

      <h3>5.5 Pagamenti ai Rider</h3>
      <p>
        I compensi dei Rider si accumulano nel wallet in-app. Il prelievo verso conto bancario &egrave; disponibile
        con una soglia minima di &euro;10,00. I trasferimenti richiedono 2&ndash;3 giorni lavorativi.
      </p>

      <h2>6. Cancellazioni</h2>

      <h3>6.1 Cancellazioni del Mittente</h3>
      <ul>
        <li><strong>Prima del match:</strong> cancellazione gratuita; l&apos;annuncio viene semplicemente rimosso.</li>
        <li><strong>Dopo il match, pi&ugrave; di 2 ore prima del ritiro:</strong> rimborso completo, nessuna penale.</li>
        <li><strong>Dopo il match, meno di 2 ore prima del ritiro:</strong> il Rider riceve il 50% della tariffa come indennizzo; il Mittente riceve il rimborso del restante 50%.</li>
      </ul>

      <h3>6.2 Cancellazioni del Rider</h3>
      <ul>
        <li><strong>Pi&ugrave; di 2 ore prima del ritiro:</strong> nessuna penale; l&apos;annuncio torna disponibile.</li>
        <li><strong>Meno di 2 ore prima del ritiro:</strong> penale di &euro;5,00 detratta dal wallet + recensione automatica negativa di 1 stella.</li>
      </ul>

      <h2>7. Mancata Presentazione</h2>

      <h3>7.1 Mancata Presentazione del Mittente al Ritiro</h3>
      <p>
        Se il Mittente non &egrave; disponibile al ritiro, il Rider segnala l&apos;assenza dopo 15 minuti.
        L&apos;app contatta il Mittente tramite notifica push e SMS. Se il Mittente resta irraggiungibile dopo
        un totale di 30 minuti, il Rider pu&ograve; andarsene. Il Rider riceve il pagamento completo. Il
        Mittente perde l&apos;intero importo pagato e riceve una recensione automatica negativa di 1 stella.
      </p>

      <h3>7.2 Destinatario Non Disponibile alla Consegna</h3>
      <p>
        Il Rider tenta il contatto per 15 minuti tramite telefono, chat e citofono. Se il Destinatario propone
        un&apos;alternativa (portiere, vicino, punto sicuro), il Rider pu&ograve; accettare e la responsabilit&agrave;
        passa al Destinatario dal momento del rilascio. Se non si stabilisce alcun contatto, il Rider contatta il
        Mittente per organizzare la restituzione. Il Rider riceve un compenso aggiuntivo del 50% della tariffa
        originale per il viaggio di ritorno. Il Destinatario riceve una recensione automatica negativa di 1 stella.
      </p>

      <h2>8. Penali e Reputazione</h2>

      <h3>8.1 Penali</h3>
      <table>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Penale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mancata presentazione o cancellazione del Rider a meno di 2 ore dal ritiro</td>
            <td>&euro;5,00 + sospensione dell&apos;account</td>
          </tr>
          <tr>
            <td>Mancata presentazione del Mittente</td>
            <td>Perdita completa dell&apos;importo pagato</td>
          </tr>
          <tr>
            <td>Sigillo manomesso</td>
            <td>Sospensione immediata + indagine; possibile segnalazione legale</td>
          </tr>
          <tr>
            <td>Infrazioni ripetute (3+ violazioni)</td>
            <td>Ban permanente dopo revisione del team</td>
          </tr>
        </tbody>
      </table>
      <p>
        Le penali vengono detratte dal wallet in-app del Rider. Se il saldo del wallet &egrave; insufficiente,
        l&apos;account resta sospeso fino al saldo della penale in sospeso.
      </p>

      <h3>8.2 Recensioni</h3>
      <p>
        Dopo ogni consegna completata, le parti possono lasciare recensioni reciproche (1&ndash;5 stelle con
        commento opzionale). Le recensioni utilizzano un sistema cieco: diventano visibili solo dopo che entrambe
        le parti hanno inviato la propria, o dopo 72 ore, a seconda di quale evento si verifica per primo.
        Recensioni negative automatiche (1 stella) vengono generate per mancate presentazioni e cancellazioni tardive.
      </p>

      <h3>8.3 Livelli di Reputazione</h3>
      <ul>
        <li><strong>Nuovo:</strong> 0&ndash;4 consegne. Nessun badge.</li>
        <li><strong>Affidabile:</strong> 5+ consegne con valutazione media &ge; 4,0. Badge bronzo.</li>
        <li><strong>Top Rider/Mittente:</strong> 20+ consegne con valutazione media &ge; 4,5. Badge argento. Priorit&agrave; nella visibilit&agrave;.</li>
        <li><strong>Esperto:</strong> 50+ consegne con valutazione media &ge; 4,7. Badge oro. Commissione ridotta (15%).</li>
      </ul>

      <h2>9. Oggetti Proibiti</h2>
      <p>I seguenti articoli sono severamente vietati dalla spedizione tramite la Piattaforma:</p>
      <ul>
        <li>Sostanze illegali e droghe controllate.</li>
        <li>Armi, armi da fuoco, munizioni ed esplosivi.</li>
        <li>Materiali pericolosi (esplosivi, infiammabili, corrosivi).</li>
        <li>Animali vivi.</li>
        <li>Denaro contante o valuta.</li>
        <li>Documenti d&apos;identit&agrave; originali appartenenti a terzi.</li>
      </ul>
      <p>
        La violazione di questo divieto comporta il <strong>ban immediato e permanente dell&apos;account</strong> e,
        ove applicabile, la segnalazione alle autorit&agrave; competenti.
      </p>

      <h2>10. Sicurezza del Pacco e Catena di Custodia</h2>
      <p>Il sigillo con QR code &egrave; l&apos;elemento centrale della catena di custodia per ogni spedizione:</p>
      <ul>
        <li>Un QR code univoco viene generato dall&apos;app per ogni spedizione.</li>
        <li>Il sigillo deve coprire tutte le aperture del pacco.</li>
        <li>Il QR code viene scannerizzato in tre checkpoint: preparazione (Mittente), ritiro (Rider) e consegna (Destinatario). Ogni scansione registra chi ha scannerizzato, quando, dove (GPS) e lo stato del sigillo.</li>
        <li>Un dossier fotografico completo viene creato automaticamente per ogni spedizione: foto del contenuto (Mittente), foto del pacco sigillato (Mittente), foto al ritiro (Rider), foto alla consegna (Rider) e foto alla ricezione (Destinatario).</li>
        <li>Tutte le foto vengono scattate tramite la fotocamera in-app con metadati EXIF iniettati lato server per l&apos;integrit&agrave;.</li>
      </ul>

      <h2>11. Dispute e Pacchi Danneggiati</h2>

      <h3>11.1 Pacco Danneggiato</h3>
      <ul>
        <li>Se il sigillo &egrave; <strong>integro</strong>: la responsabilit&agrave; ricade sul Mittente (imballaggio inadeguato). Il Rider viene pagato normalmente.</li>
        <li>Se il sigillo &egrave; <strong>manomesso</strong>: il Rider viene sospeso immediatamente. Si apre un&apos;indagine. Il Mittente viene rimborsato.</li>
      </ul>

      <h3>11.2 Contenuto Mancante o Diverso</h3>
      <p>
        Il nostro team di assistenza confronta le foto scattate dal Mittente con le foto scattate dal Destinatario.
        Se il sigillo &egrave; integro, la responsabilit&agrave; ricade sul Mittente. La risoluzione avviene entro
        5 giorni lavorativi, con possibilit&agrave; di rimborso parziale o totale al Destinatario, a carico del Mittente.
      </p>

      <h3>11.3 Risoluzione delle Dispute</h3>
      <p>
        Tutte le dispute vengono gestite dal nostro team di assistenza, che esamina il dossier fotografico completo
        e i log della consegna. Le decisioni vengono emesse entro 5 giorni lavorativi. Gli utenti possono contestare
        le decisioni automatiche (penali, recensioni automatiche) presentando una disputa tramite la Piattaforma.
      </p>

      <h2>12. Status del Rider e Obblighi Fiscali</h2>
      <p>
        I Rider <strong>non sono</strong> dipendenti, collaboratori o consulenti di Delgoo. Agiscono come privati
        che offrono un servizio occasionale. Tuttavia, i Rider sono responsabili del rispetto di tutte le
        normative fiscali applicabili, inclusi gli obblighi di registrazione IVA che possono sorgere quando
        l&apos;attivit&agrave; supera le soglie di occasionalit&agrave;.
      </p>
      <p>
        La Piattaforma pu&ograve; implementare un limite massimo di consegne mensili (es. 30) e un tetto di
        guadagno annuale in linea con le soglie fiscali vigenti. Riceverete notifiche automatiche quando vi
        avvicinerete a questi limiti. &Egrave; vostra esclusiva responsabilit&agrave; consultare un professionista
        fiscale in merito ai vostri obblighi.
      </p>

      <h2>13. Veicoli</h2>
      <p>
        Delgoo non richiede la registrazione di un veicolo specifico. I Rider sono liberi di utilizzare qualsiasi
        mezzo di trasporto (a piedi, bicicletta, scooter, auto o altro). La Piattaforma non &egrave; responsabile
        della conformit&agrave; o delle condizioni del veicolo utilizzato. Accettando i presenti Termini, i Rider
        dichiarano che qualsiasi veicolo utilizzato &egrave; conforme alle leggi applicabili e dispone delle
        coperture assicurative richieste dalla legge.
      </p>

      <h2>14. Limitazione di Responsabilit&agrave;</h2>

      <h3>14.1 Ruolo della Piattaforma</h3>
      <p>
        Delgoo fornisce la piattaforma tecnologica che facilita le connessioni tra utenti. Non garantiamo il
        completamento, la qualit&agrave;, la sicurezza o la legalit&agrave; di alcuna consegna. Non siamo
        responsabili per le azioni o le omissioni di alcun utente.
      </p>

      <h3>14.2 Responsabilit&agrave; per il Pacco</h3>
      <ul>
        <li>Il <strong>Mittente</strong> &egrave; responsabile dell&apos;accuratezza della descrizione del pacco, della qualit&agrave; dell&apos;imballaggio e del contenuto dichiarato.</li>
        <li>Il <strong>Rider</strong> &egrave; responsabile dell&apos;integrit&agrave; fisica del pacco durante il trasporto (come evidenziato dal sistema di sigillo).</li>
        <li><strong>Delgoo</strong> non si assume responsabilit&agrave; diretta per perdita, danneggiamento o furto del pacco, ma gestisce il processo di risoluzione delle dispute e il sistema di escrow.</li>
      </ul>

      <h3>14.3 Responsabilit&agrave; Massima</h3>
      <p>
        Nella misura massima consentita dalla legge applicabile, la responsabilit&agrave; complessiva di Delgoo
        nei confronti di qualsiasi utente per qualsiasi reclamo derivante o correlato alla Piattaforma non
        superer&agrave; l&apos;importo totale delle tariffe pagate da o a tale utente tramite la Piattaforma nei
        12 mesi precedenti il reclamo.
      </p>

      <h3>14.4 Esclusioni</h3>
      <p>
        Delgoo non sar&agrave; responsabile per: danni indiretti, incidentali, consequenziali o punitivi; perdita
        di profitti o ricavi; interruzioni del servizio causate da forza maggiore, guasti tecnici al di fuori
        del nostro ragionevole controllo o manutenzione programmata.
      </p>

      <h2>15. Assicurazione</h2>
      <p>
        Delgoo non fornisce copertura assicurativa per le spedizioni per impostazione predefinita. Un prodotto
        di micro-assicurazione opzionale potr&agrave; essere offerto per spedizioni che superano un valore
        specificato, in collaborazione con un fornitore assicurativo terzo. I dettagli e le condizioni di tale
        assicurazione sono regolati dalla polizza separata del fornitore assicurativo.
      </p>

      <h2>16. Propriet&agrave; Intellettuale</h2>
      <p>
        Tutti i contenuti della Piattaforma &mdash; inclusi, a titolo esemplificativo, il nome Delgoo, il logo,
        i marchi, il software, il design, il testo, la grafica e l&apos;interfaccia utente &mdash; sono di
        propriet&agrave; esclusiva di Delgoo S.r.l. o dei suoi licenzianti. Non &egrave; consentito copiare,
        modificare, distribuire, vendere o concedere in licenza alcuna parte della Piattaforma o dei suoi
        contenuti senza il nostro previo consenso scritto.
      </p>

      <h2>17. Sospensione e Chiusura dell&apos;Account</h2>
      <p>Possiamo sospendere o chiudere permanentemente il vostro account se:</p>
      <ul>
        <li>Violate i presenti Termini o la legge applicabile.</li>
        <li>Non completate la verifica dell&apos;identit&agrave; nei tempi richiesti.</li>
        <li>Spedite oggetti proibiti.</li>
        <li>Manomettete i sigilli dei pacchi.</li>
        <li>Accumulate 3 o pi&ugrave; infrazioni.</li>
        <li>Vi impegnate in comportamenti fraudolenti, abusivi o minacciosi.</li>
        <li>Avete saldi di penali in sospeso non pagati.</li>
      </ul>
      <p>
        Potete eliminare il vostro account in qualsiasi momento tramite le impostazioni dell&apos;app. La
        cancellazione dell&apos;account non vi esonera da obblighi pendenti, penali in sospeso o procedimenti
        di disputa in corso.
      </p>

      <h2>18. Comunicazioni e Notifiche</h2>
      <p>
        Utilizzando la Piattaforma, accettate di ricevere comunicazioni transazionali tramite notifiche push,
        SMS ed email relative alle vostre consegne, alla sicurezza dell&apos;account e agli aggiornamenti della
        Piattaforma. Queste sono comunicazioni essenziali del servizio e non &egrave; possibile disattivarle
        durante l&apos;utilizzo della Piattaforma. Le comunicazioni promozionali richiedono il vostro consenso
        separato.
      </p>

      <h2>19. Manleva</h2>
      <p>
        Accettate di manlevare e tenere indenne Delgoo, i suoi funzionari, dirigenti, dipendenti e agenti da
        qualsiasi reclamo, danno, perdita, responsabilit&agrave; e spesa (incluse le ragionevoli spese legali)
        derivanti da: il vostro utilizzo della Piattaforma; la vostra violazione dei presenti Termini; la
        vostra violazione di qualsiasi legge o regolamento applicabile; o qualsiasi disputa tra voi e un
        altro utente.
      </p>

      <h2>20. Modifiche ai Presenti Termini</h2>
      <p>
        Ci riserviamo il diritto di modificare i presenti Termini in qualsiasi momento. Quando apporteremo
        modifiche sostanziali, vi informeremo tramite la Piattaforma almeno 30 giorni prima dell&apos;entrata
        in vigore delle modifiche. L&apos;uso continuato della Piattaforma dopo la data di efficacia costituisce
        accettazione dei Termini modificati. Se non accettate le modifiche, dovete interrompere l&apos;utilizzo
        della Piattaforma e cancellare il vostro account.
      </p>

      <h2>21. Legge Applicabile e Foro Competente</h2>
      <p>
        I presenti Termini sono regolati e interpretati in conformit&agrave; con le leggi della Repubblica
        Italiana. Qualsiasi controversia derivante da o in relazione ai presenti Termini sar&agrave; soggetta
        alla giurisdizione esclusiva del Tribunale di Milano, fatto salvo il rispetto delle disposizioni
        imperative in materia di tutela dei consumatori che possano attribuire la competenza al foro del
        luogo di residenza del consumatore.
      </p>

      <h2>22. Clausola di Salvaguardia</h2>
      <p>
        Se una qualsiasi disposizione dei presenti Termini viene ritenuta invalida, illegale o inapplicabile
        da un tribunale competente, le restanti disposizioni continueranno ad avere piena efficacia. La
        disposizione invalida sar&agrave; modificata nella misura minima necessaria per renderla valida e
        applicabile, preservandone l&apos;intento originale.
      </p>

      <h2>23. Accordo Integrale</h2>
      <p>
        I presenti Termini, unitamente all&apos;Informativa sulla Privacy e alle altre policy qui richiamate,
        costituiscono l&apos;intero accordo tra voi e Delgoo riguardo all&apos;utilizzo della Piattaforma e
        sostituiscono tutti i precedenti accordi, intese e comunicazioni.
      </p>

      <h2>24. Contatti</h2>
      <p>Per domande o dubbi sui presenti Termini:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@delgoo.com">support@delgoo.com</a></li>
        <li><strong>Richieste legali:</strong> <a href="mailto:legal@delgoo.com">legal@delgoo.com</a></li>
      </ul>
    </>
  );
}

export default function TermsPage() {
  return (
    <LegalPageLayout>
      <TermsContent />
    </LegalPageLayout>
  );
}
