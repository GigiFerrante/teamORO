import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import iconVideo from '../images/iconVideo.png';
import quoteClose from '../images/quoteClose.png';
import quoteOpen from '../images/quoteOpen.png';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40 firstSection">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-3xl xl:text-3xl font-bold leading-none">
          IL 97% DELLE PERSONE OGGI IN ITALIA È INSODDISFATTA, E TU? COSA FARESTI SE SAPESSI DI NON POTER FALLIRE?
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light text-white">
          Scopri come trasformare i tuoi sogni in obiettivi concreti e quali azioni dovrai compiere per raggiungerli</p>
          <p className="mt-8 md:mt-12 text-white">
            <Button size="lg">RICEVI ORA LA TUA CONSULENZA GRATIS</Button>
          </p>
          <p className="mt-4 text-white">Il tuo futuro dipende da te.</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>

    <section className="pt-20 md:pt-40">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl lg:text-3xl xl:text-3xl font-bold leading-none">
            TUTTO INIZIA DA QUI...
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            <img src={iconVideo} alt="video" className="centerImage" />
          </p>
          <p className="mt-4 fontSize">
            <img className="quotes" src={quoteOpen} /> 
              La vita è troppo breve per sprecarla a realizzare i sogni degli altri.  
            <img className="quotes" src={quoteClose} />
          </p>
          <p className="mt-4 fontSize">
             <span className="obbliquo"> Oscar Wilde </span>
          </p>
          <p className="mt-4"> </p>
          <p className="mt-4"></p>
        </div>
      </div>
    </section>

    <div className="sfondoBlue text-white">
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold"></h2>
          <div className="">
            <div className="">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Intrappolato in una vita che non è più la tua.</p>
                <p className="mt-4">
                  Ecco come si sente il 97% degli italiani appena alzato dal letto.
                  Apri il telefono, scrolli le notifiche dei social e desideri ardentemente vivere la vita da sogno di un altro.
                  L’amore, la famiglia, i viaggi, le esperienze, le auto, le case…
                  Osservi tutto quello che vorresti e ti convinci che tu NON puoi.
                  Perché tuttI ti hanno fatto credere che è così, che vivere una vita monotona e infelice è la normalità.
                </p>
              </Card>
            </div>
            <div className="">
              <Card className="mb-8 ">
                <p className="font-semibold text-xl">Accontentarsi è la normalità!</p>
                <p className="mt-4">
                  Ma allora perché dentro di te senti questo stimolo inspiegabile a voler crescere e migliorare?
                  Forse perché tu non sei come loro!
                </p>
              </Card>
            </div>
            <div className="">
              <Card className="mb-8 ">
                <p className="font-semibold text-xl">Tu PUOI prendere in mano la tua vita e realizzare tutto ciò che vuoi.</p>
                <p className="mt-4">
                  Vuoi sapere come fare?
                </p>
              </Card>
            </div>
          </div>
          <p className="mt-8 md:mt-12 text-white">
              <Button size="lg">RICEVI ORA LA TUA CONSULENZA GRATIS</Button>
          </p>
        </div>
      </section>
    </div>

 
    
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Passa all’azione!</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Scopri come trasformare i tuoi sogni in obiettivi concreti e quali azioni dovrai compiere per raggiungerli</p>
            <p className="mt-8 text-xl font-light leading-relaxed">✔ Conquista la tua realizzazione personale.</p>
            <p className="mt-8 text-xl font-light leading-relaxed">✔ Migliora le tue relazioni.</p>
            <p className="mt-8 text-xl font-light leading-relaxed">✔ Raggiungi i tuoi obiettivi.</p>
            <p className="mt-8 text-xl font-light leading-relaxed">✔ Ricevi ora 30 minuti di consulenza completamente gratis.</p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />


    

    {/*

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    */}
    
    {/*<section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>*/}

    <div className="sfondoBlue text-white">
      <div className="container mx-auto my-20 py-24 rounded-lg text-center ">
        <SplitSection
          id="services"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-5xl font-semibold">Ancora non l’hai fatto?</h3>
              <p className="mt-8 text-xl font-light">Sbrigati, il tuo futuro dipende da te.</p>
              <p className="mt-8 text-xl font-light">Inizia ora a realizzare i tuoi obiettivi.</p>
            </div>
          }
          secondarySlot={
            <form >
            <p className="mt-8 text-xl font-light"><label>
              <span className="lb">Nome</span>
                <input
                  type="text"
                  name="firstName"
                />
              </label>
            </p>
            <p className="mt-8 text-xl font-light"><label>
            <span className="lb">Cognome</span>
                <input
                  type="text"
                  name="lastName"
                />
              </label>
            </p>
            <p className="mt-8 text-xl font-light"><label>
            <span className="lb">Telefono</span>
                <input
                  type="text"
                  name="lastName"
                />
              </label>
            </p>

            <p className="mt-8 text-xl font-light"><label>
            <span className="lb">Email</span>
                <input
                  type="text"
                  name="lastName"
                />
              </label>
            </p>

            <p className="mt-8 md:mt-12 text-white">
              <Button size="lg">RICEVI ORA LA TUA CONSULENZA GRATIS</Button>
            </p>

            </form>

          }
        />
      </div>
    </div>



  </Layout>
);

export default Index;
