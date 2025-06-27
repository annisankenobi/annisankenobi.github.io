import React from 'react';

const ContactPage = () => {
  return (
    <section style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 className="text-3xl font-bold mb-4 mt-4">Kontakt</h1>
        <p>Wir helfen Ihnen gerne weiter.</p>
        <a href="mailto:kontakt@schaetzle.com" style={{ color: '#007BFF', textDecoration: 'none' }}>
          kontakt@schaetzle.com
        </a>
      </header>

      <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
        <p className="text-xl font-bold mb-4 mt-4">Impressum</p>
        <p>schätzle & schätzle GmbH</p>
        <p>Mönchstraße 9, 70191 Stuttgart</p>
        <p>Telefon: +49 711 333333</p>
        <p className="font-bold">Mobil: +49 172 7155555</p>
        <p>Geschäftsführer: Yulia Schätzle</p>
        <p>Handelsregister: Amtsgericht Stuttgart, HRB 15512</p>
        <p>Sitz der Gesellschaft: Stuttgart, Deutschland   </p>  
      </footer>
    </section>
  );
};

export default ContactPage;
