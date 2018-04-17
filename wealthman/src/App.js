import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

import Sortable from './Sortable.js';
import myDate from './myDate.js';

import logoWhite from './img/logo.svg';
import logoBlue from './img/logo_blue.svg';
import './css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: -1,
      login: "", password: "", loginError: false,

      users: [
        {
          id: 0,
          name: "John",
          surname: "Galt"
        },
      ],
      currentPage: "requests",
      currentManager: 0,
      currentInvestor: 0,
      currentAlgorythm: 0,
      currentPortfolio: 0,
      currentRequest: 0,

      currentAccountPage: "personal",
      currentPortfoliosPage: "active",
      currentAlgorythmsPage: "uploaded",

      currentCurrency: "USD",
      currentCurrencyPrices: {
        USD: 1,
        BTC: 6848.77,
        ETH: 415.132,
        XRP: 0.491838,
        BCH: 651.954,
        LTC: 113.974,
      },

      prevousPages: [],

      loggedInvestorLinks: ["portfolios", "managers", "account", "logout"],
      loggedManagerLinks: ["requests", "portfolios", "account", "algorythms", "logout"],
      loggedSuplierLinks: ["some page"],
      unloggedLinks: ["about us", "faq", "contact", "login"],//, "login"],//, "invest"],
      footerLinks: ["about us", "legal", "contacts", "methodology", "press", "help center", "blog"],

      investors: [
        {
          type: "investor",
          id: 0,
          name: "Kisa",
          surname: "Vorobyaninov",
          img: "0.jpg",
          age: 36,
          email: "vorobyaninov@mail.ru",
          kyc: false,
          registered: "19.03.2018",
        },
        {
          type: "investor",
          id: 1,
          name: "Jim",
          surname: "Taggart",
          img: "1.jpg",
          age: 31,
          email: "jim@taggart-transcontinental.us",
          kyc: true,
          registered: "20.03.2017",
        },
        {
          type: "investor",
          id: 2,
          name: "John",
          surname: "Bolton",
          img: "2.jpg",
          age: 25,
          email: "bolton@mail.com",
          kyc: true,
          registered: "08.11.2017",
        },
      ],
      managers: [
        // {
        //   type: "manager",
        //   id: 0,
        //   name: "Ostap",
        //   surname: "Bender",
        //   age: 27,
        //   img: "0.jpg",
        //   company: 0,
        //   money: 200000,
        //   methodology: "random",
        //   biography: "was born",
        //   social: {
        //     facebook: "",
        //     linkedin: ""
        //   },
        //   terms: "u pay 10%",
        //   investors: 532,
        //
        //   rating: 9,
        //   aum: 13,
        //   assets: 2.5,
        //   profit: 7.8,
        //   initial: 9.1,
        //   output: 2.7,
        //   annual: 1.1,
        // },
        // {
        //   type: "manager",
        //   id: 1,
        //   name: "Carlos",
        //   surname: "Matos",
        //   age: 41,
        //   img: "1.jpg",
        //   company: 1,
        //   money: 43000,
        //   methodology: "random",
        //   biography: "was born",
        //   social: {
        //     facebook: "",
        //     linkedin: ""
        //   },
        //   terms: "u pay 10%",
        //   investors: 213,
        //
        //   rating: 9,
        //   aum: 13,
        //   assets: 10,
        //   profit: 5,
        //   initial: 4,
        //   output: 3.1,
        //   annual: 0.2,
        // },
        // {
        //   type: "manager",
        //   id: 2,
        //   name: "Bender",
        //   surname: "Rodríguez",
        //   age: 4,
        //   img: "2.jpg",
        //   company: 2,
        //   money: 6700,
        //   methodology: "random",
        //   biography: "was born",
        //   social: {
        //     facebook: "",
        //     linkedin: ""
        //   },
        //   terms: "u pay 10%",
        //   investors: 34,
        //
        //   rating: 9,
        //   aum: 13,
        //   assets: 3.3,
        //   profit: 3.7,
        //   initial: 7.9,
        //   output: 1.5,
        //   annual: 2,
        // },
        // {
        //   type: "manager",
        //   id: 3,
        //   name: "Sergey",
        //   surname: "Mavrodi",
        //   age: 67,
        //   img: "3.jpg",
        //   company: 3,
        //   money: 11000,
        //   methodology: "random",
        //   biography: "was born",
        //   social: {
        //     facebook: "",
        //     linkedin: ""
        //   },
        //   terms: "u pay 10%",
        //   investors: 114,
        //
        //   rating: 9,
        //   aum: 13,
        //   assets: 2,
        //   profit: 2,
        //   initial: 2,
        //   output: 2,
        //   annual: 2,
        // },
        // {
        //   type: "manager",
        //   id: 4,
        //   name: "Charles",
        //   surname: "Ponzi",
        //   age: 66,
        //   img: "4.jpg",
        //   company: 4,
        //   money: 97000,
        //   methodology: "random",
        //   biography: "was born",
        //   social: {
        //     facebook: "",
        //     linkedin: ""
        //   },
        //   terms: "u pay 10%",
        //   investors: 404,
        //
        //   rating: 9,
        //   aum: 13,
        //   assets: 2,
        //   profit: 2,
        //   initial: 2,
        //   output: 2,
        //   annual: 2,
        // },
        {
          type: "manager",
          id: 5,
          name: "Andrey",
          surname: "Morozov",
          age: 28,
          img: "5.jpg",
          company: 5,
          money: 97000,
          methodology: "VAR method",
          biography: "KEF HOLDINGS, Business Analyst. DIFC, Dubai, UAE.                                                                       September 2016 – August 2017 • Engaged in financial modeling, transaction due diligence, and investment portfolio performance tracking  • Conducted detailed due diligence on the country, market, competitive environment and financial issues • Conducted regular financial research to stay apprised about global economy and global financial markets • Represented the firm's commercial interests while leading sales, tender contract negotiations, and business development • Worked on projects covering strategy formulation, new project investments, and growth opportunities for KEF Infra GO GOODSCOUT, Executive Insurance Broker. New York, NY, USA.      April 2015 – November 2015 • Managed all aspects of business development from initial strategic and fiscal planning to final testing and delivery • Established strategic business partnerships with over 40 global program senior officials at universities in NYC • Obtained NY Life & Health and Property & Casualty insurance producer licenses INFLOT WORLDWIDE, Supervising Port Agent.  St. Petersburg, Russia.      May 2009 – July 2009 • Coordinated over 100 clearance procedures for international passenger cruise ships calling to the port of SPb • Liaised with port authorities, procured supplies, and arranged customs, immigration and quarantine clearance procedures • Organized documentation filing including submission of crew lists, cargo manifest and trading certificates • Arranged vessel mooring and handling, as well as husbandry services for various types of vessels E",
          social: {
            facebook: "",
            linkedin: ""
          },
          terms: "1,5% of AUM, monthly paid",
          investors: 404,

          rating: 9,
          aum: 13,
          assets: 2,
          profit: 2,
          initial: 2,
          output: 2,
          annual: 2,
          clients: 4,
        },
        {
          type: "manager",
          id: 6,
          name: "Andrei",
          surname: "Huseu",
          age: 28,
          img: "6.jpg",
          company: 6,
          money: 97000,
          methodology: "random",
          biography: "--",
          social: {
            facebook: "",
            linkedin: ""
          },
          terms: "1,5% of AUM, monthly paid",
          investors: 404,

          rating: 9,
          aum: 13,
          assets: 2,
          profit: 2,
          initial: 2,
          output: 2,
          annual: 2,
          clients: 4,
        },
        {
          type: "manager",
          id: 7,
          name: "Olga",
          surname: "Pershina",
          age: 28,
          img: "7.jpg",
          company: 7,
          money: 97000,
          methodology: "random",
          biography: "--",
          social: {
            facebook: "",
            linkedin: ""
          },
          terms: "1,5% of AUM, monthly paid",
          investors: 404,

          rating: 9,
          aum: 13,
          assets: 2,
          profit: 2,
          initial: 2,
          output: 2,
          annual: 2,
          clients: 4,
        },
      ],

      companies: [
        {
          id: 0,
          name: "12 chairs",
          img: "12.jpg",
          site: "https://en.wikipedia.org/wiki/The_Twelve_Chairs"
        },
        {
          id: 1,
          name: "bitconnect",
          img: "bitconnect.jpg",
          site: "https://bitconnect.co/"
        },
        {
          id: 2,
          name: "Planet Express",
          img: "planet.jpg",
          site: "https://planetexpress.com/"
        },
        {
          id: 3,
          name: "MMM",
          img: "mmm.jpg",
          site: "http://mmmglobal.support/"
        },
        {
          id: 4,
          name: "Banco Zarossi",
          img: "ponzi.jpg",
          site: "https://en.wikipedia.org/wiki/Ponzi_scheme"
        },
        {
          id: 5,
          name: "Moroz&Co",
          img: "ponzi.jpg",
          site: "https://en.wikipedia.org/wiki/Ponzi_scheme"
        },
        {
          id: 6,
          name: "Moroz&Co",
          img: "ponzi.jpg",
          site: "https://en.wikipedia.org/wiki/Ponzi_scheme"
        },
        {
          id: 7,
          name: "Mera Kapital",
          img: "mera.png",
          site: "http://www.mera-capital.com/"
        },
      ],

      algorythms: [
        {
          id: 0,
          creator: 0,
          name: "choose one chair",
          rating: 8,
          currency: "BTC"
        },
        {
          id: 1,
          creator: 3,
          name: "NNN",
          rating: 9,
          currency: "DOGE"
        },
        {
          id: 2,
          creator: 2,
          name: "blackjack",
          rating: 10,
          currency: "BTC"
        },
        {
          id: 3,
          creator: 4,
          name: "not_a_ponzi_scheme",
          rating: 6,
          currency: "BTC"
        },
        {
          id: 4,
          creator: 4,
          name: "not_a_pyramid",
          rating: 5,
          currency: "BTC"
        },
        {
          id: 5,
          creator: 2,
          name: "moon",
          rating: 7,
          currency: "ETH"
        },
        {
          id: 6,
          creator: 0,
          name: "podpolniy millionare",
          rating: 9,
          currency: "ETH"
        },
        {
          id: 7,
          creator: 0,
          name: "son of Captian Shmidt",
          rating: 6,
          currency: "ETH"
        },
        {
          id: 8,
          creator: 2,
          name: "planet express",
          rating: 5,
          currency: "ETH"
        },
        {
          id: 9,
          creator: 1,
          name: "bitconnnneeeeeeeeeeeeect",
          rating: 4,
          currency: "ETH"
        },
      ],

      staticQuestions: [
        {
          question: "What is your primary reason for investing?",
          answers: ["General Savings", "Retirement", "Colledge savings", "Other"]
        },
        {
          question: "What is your current age?",
          answers: ["18-24", "25-32", "33-46", "47-54", "55 or older"]
        },
        {
          question: "What is your pre-tax income?",
          answers: ["100-500$", "500-1000$", "1000-5000$", "5000-10000$", "10000-100000$", "100000$ or more"]
        },
        {
          question: "What of the following best describes your household?",
          answers: ["Single income, no dependents", "Single income, at least one dependent", "Dual income, no dependents", "Dual income, at least one dependent", "Retired or financially independent"]
        },
        {
          question: "What is the total value of your cash in liquid investments?",
          answers: ["100-500$", "500-1000$", "1000-5000$", "5000-10000$", "10000-100000$", "100000$ or more"]
        },
        {
          question: "When deciding how to invest your money, wich do you care about more?",
          answers: ["Maximizing gains", "Minimizing looses", "Both equally"]
        },
        {
          question: "The global stock market is often volatile. If your entire investement portfolio lost 10% of its value in a month during a market decline, what would you do?",
          answers: ["Sell all of your investments", "Sell some", "Keep all", "Buy more"]
        },
        {
          question: "What is the total value of your cash in liquid investments?",
          answers: ["100-500$", "500-1000$", "1000-5000$", "5000-10000$", "10000-100000$", "100000$ or more"]
        },
      ],
      dynamicQuestions: [
        {
          question: "Du you like this site?",
          answers: ["yes", "no"]
        },
        {
          question: "Are you rich yet?",
          answers: ["yes", "no"]
        },
      ],
      managerQuestions: [
        {
          question: "Are u ready to get rich?",
          answers: ["yes", "definitely", "absolutely!!"]
        },
        {
          question: "Will u invest more soon?",
          answers: ["yes", "definitely", "absolutely!!"]
        },
      ],
      account: {
        personalInfo: {
          firstName: "",
          lastName: "",
          day: 0,
          month: 0,
          year: 0,
          nationality: "",
        }
      },
      portfolios: [
        {
          type: "portfolio",
          id: 0,
          investor: 0,
          manager: 0,
          date: "15:16 01-02-2013",
          value: 1,
          currency: "ETH",
          alg: 0,
          profit: 12,
          cost: 0.2,
          status: "recalculating"
        },
        {
          type: "portfolio",
          id: 1,
          investor: 2,
          manager: 4,
          date: "15:16 01-02-2013",
          value: 7,
          currency: "ETH",
          alg: 1,
          profit: -247,
          cost: 0.4,
          status: "recalculated"
        },
        {
          type: "portfolio",
          id: 2,
          investor: 1,
          manager: 3,
          date: "15:16 01-02-2013",
          value: 6,
          currency: "ETH",
          alg: 2,
          profit: 164,
          cost: 0.67,
          status: "recalculated"
        },
      ],
      requests: [
        {
          type: "request",
          id: 0,
          investor: 0,
          manager: 0,
          date: "15:16 12-11-2017",
          value: 1,
          currency: "ETH",
          status: "revision",
        },
        {
          type: "request",
          id: 1,
          investor: 2,
          manager: 0,
          date: "15:16 10-04-2018",
          value: 10,
          currency: "BTC",
          status: "pending",
        },
        {
          type: "request",
          id: 2,
          investor: 0,
          manager: 2,
          date: "11:16 11-04-2018",
          value: 3,
          currency: "ETH",
          status: "declined",
        },
        {
          type: "request",
          id: 3,
          investor: 1,
          manager: 3,
          date: "19:40 01-02-2016",
          value: 4,
          currency: "ETH",
          status: "pending",
        },
      ],
      agreement: "Wealthfront Inc. is an SEC registered investment advisor.\nBy using this website, you accept our Terms of Use and Privacy Policy. Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. All securities involve risk and may result in loss. Our financial planning services were designed to aid our clients in preparing for their financial futures and allow them to personalize their assumptions for their portfolios. We do not intend to represent that our financial planning guidance is based on or meant to replace a comprehensive evaluation of a client's entire personal portfolio. While the data Wealthfront uses from third parties is believed to be reliable, Wealthfront cannot ensure the accuracy or completeness of data provided by clients or third parties. Wealthfront does not provide tax advice and does not represent in any manner that the outcomes described herein will result in any particular tax consequence. Prospective investors should confer with their personal tax advisors regarding the tax consequences based on their particular circumstances. Wealthfront assumes no responsibility for the tax consequences for any investor of any transaction. Full Disclosure\nThe Wealthfront Risk Parity Fund is managed by WFAS LLC, an SEC registered investment adviser and a wholly owned subsidiary of Wealthfront Inc. WFAS LLC receives an annual management fee equal to 0.50% of the Fund's average daily net assets. Northern Lights Distributors, LLC, a member of FINRA / SIPC, serves as the principal distributor for the Fund.\nBefore investing in the Wealthfront Risk Parity Fund, you should carefully consider the Fund's investment objectives, risks, fees and expenses. This and other information can be found in the Fund's prospectus. Please read the fund prospectus or summary prospectus carefully before investing. In order to add the Wealthfront Risk Parity Fund, we must rebalance your portfolio. As part of this process, if we sell positions at a gain, and you do not have sufficient harvested losses to offset those gains, you'll pay taxes on the net gain.\nAll investing is subject to risk, including the possible loss of the money you invest. In addition, an investment in the Wealthfront Risk Parity Fund (the \"Fund\") would also subject you to the following principal risks, among others: The Fund's principal investment strategy requires the use of derivative instruments, such as investments in total return swaps, forward and futures contracts. In general, a derivative instrument typically involves leverage, providing exposure to potential gain or loss from a change in market price of the underlying security or commodity in a notional amount that exceeds the amount of cash or assets required to establish or maintain the derivative instrument. Adverse changes in the value of the underlying asset or index, can result in a loss to the Fund substantially greater than the amount invested in the derivative itself. These derivative instruments provide the economic effect of financial leverage by creating additional investment exposure to the underlying instrument. Financial leverage will magnify, sometimes significantly, the Fund's exposure to any increase or decrease in prices associated with a particular reference asset resulting in increased volatility in the value of the Fund's portfolio. While such financial leverage has the potential to produce greater gains, it also may result in greater losses, which in some cases may cause the Fund to liquidate other portfolio investments at a loss to comply with limits on leverage and asset segregation requirements imposed by the 1940 Act or to meet redemption requests. If the Fund uses leverage through the purchase of derivative instruments, the Fund has the risk that losses may exceed the net assets of the Fund. The net asset value of the Fund while employing leverage will be more volatile and sensitive to market movements. Investments in total return swap agreements also involves the risk that the party with whom the Fund has entered into the total return swap agreements will default on its obligation to pay the Fund. The Fund's use of derivatives may cause the Fund to realize higher amounts of short-term capital gains than if the Fund had not used such instruments. The Fund may also be subject to overall equity market risk, including volatility, which may affect the value of individual instruments in which the Fund invests. Factors such as domestic and foreign economic growth and market conditions, interest rate levels, and political events affect the securities markets. Markets also tend to move in cycles, with periods of rising and falling prices. If there is a general decline in the securities and other markets, your investment in the Fund may lose value, regardless of the individual results of the securities and other instruments in which the Fund invests. When the value of the Fund's investments goes down, your investment in the Fund decreases in value and you could lose money. As a new fund, there can be no assurance that the Fund will grow to or maintain an economically viable size, in which case it could ultimately liquidate. The Fund is non-diversified under the 1940 Act and may be more susceptible than a diversified fund to being adversely affected by any single corporate, economic, political or regulatory occurrence. For more information regarding the risks of investing in the Fund, please see Principal Investment Risks section of the Fund's prospectus. Past performance is no guarantee of future results.",
    };
  }

  priceUSD(currency) {
    var fullName;
    switch(currency) {
      case "BTC":
        fullName = "bitcoin";
        break;
      case "ETH":
        fullName = "ethereum";
        break;
      case "XRP":
        fullName = "ripple";
        break;
      case "BCH":
        fullName = "bitcoin-cash";
        break;
      case "LTC":
        fullName = "litecoin";
        break;
    }
    const myFirstPromise = new Promise((resolve, reject) => {
      fetch("https://api.coinmarketcap.com/v1/ticker/" + fullName)
        .then(res => res.json())
        .then(
          (result) => {
            resolve(parseFloat(result.price_usd));
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  tryLogin(login, password) {
    if (typeof login === "undefined") {
      login = this.state.login;
      password = this.state.password;
    }

    if (password == "123" && login == "investor")
      this.setState({
        user: 0,
        currentPage: "managers"
      });
    if (password == "123" && login == "manager")
      this.setState({
        user: 1,
        currentPage: "requests"
      });
    if (password == "123" && login == "supplier")
      this.setState({
        user: 2,
        currentPage: "managers"
      });
  }
  logout() {
    this.setState({
      user: -1,
      currentPage: "managers",
      login: "",
      password: ""
    });
  }

  setPage(page, id) {
    var prevousPages = this.state.prevousPages.slice();
    prevousPages.push(this.state.currentPage);

    if (typeof id !== "undefined")
      switch (page) {
        case "manager":
          this.setState({currentManager: id})
          break;
        case "algorythm":
          this.setState({currentAlgorythm: id})
          break;
        case "portfolio":
          this.setState({currentPortfolio: id})
          break;
        case "request":
          this.setState({currentRequest: id})
          break;
      }

    this.setState({
      currentPage: page,
      prevousPages: prevousPages,
      currentAccountPage: "personal",
      currentPortfoliosPage: "active",
    });
  }
  prevousPage() {
    var prevousPages = this.state.prevousPages.slice();
    if (prevousPages.length == 0)
      return;
    var currentPage = prevousPages.pop();

    this.setState({
      currentPage: currentPage,
      prevousPages: prevousPages
    })
  }

  renderBackButton() {
    if (this.state.prevousPages.length == 0)
      return;

    var prevousPage = capitalize(this.state.prevousPages[this.state.prevousPages.length - 1]);

    return (
      <div className="third-header">
        <div className="container">
          <button className="back" onClick={() => this.prevousPage()}>Back to {prevousPage}</button>
        </div>
      </div>
    );
  }
  renderProgressBar() {
    var pages = ["register", "agreement", "static form", "dynamic form", "manager form", "kyc", "thanks2", "accept", "money"];
    var progress = pages.indexOf(this.state.currentPage.toLowerCase()) + 1;
    var total = pages.length;

    return (
      <div className="progress-bar">
        <div className="progress" style={{width: (100 / total * progress) + "%"}}></div>
      </div>
    );
  }

  renderPage() {
    return (
      <Switch>
        <Route exact path="/" render={() => (this.state.user == -1 ? this.renderManagersPage() : this.renderPortfoliosPage())}/>
        <Route path="/login" render={() => this.renderLoginPage()}/>
        <Route path="/totallydifferentlogin" render={() => this.renderLogin2Page()}/>
        <Route path="/account" render={() => this.renderAccountPage()}/>
        <Route path="/about us" render={() => this.renderAboutUsPage()}/>
        <Route path="/origin" render={() => this.renderOriginPage()}/>
        <Route path="/invest" render={() => this.renderInvestPage()}/>

        <Route path="/legal" render={() => this.renderLegalPage()}/>
        <Route path="/contacts" render={() => this.renderContactsPage()}/>
        <Route path="/methodology" render={() => this.renderMethodologyPage()}/>
        <Route path="/press" render={() => this.renderPressPage()}/>
        <Route path="/help center" render={() => this.renderHelpCenterPage()}/>
        <Route path="/blog" render={() => this.renderBlogPage()}/>

        <Route path="/manager/:id" render={({match}) => this.renderManagerPage(match)}/>
        <Route path="/algorythm/:id" render={({match}) => this.renderAlgorythmPage(match)}/>
        <Route path="/portfolio/:id" render={({match}) => this.renderPortfolioPage(match)}/>
        <Route path="/request/:id" render={({match}) => this.renderRequestPage(match)}/>

        <Route path="/portfolios" render={() => this.renderPortfoliosPage()}/>
        <Route path="/managers" render={() => this.renderManagersPage()}/>
        <Route path="/algorythms" render={() => this.renderAlgorythmsPage()}/>
        <Route path="/requests" render={() => this.renderRequestsPage()}/>

        <Route path="/static form" render={() => this.renderStaticFormPage()}/>
        <Route path="/dynamic form" render={() => this.renderDynamicFormPage()}/>
        <Route path="/agreement" render={() => this.renderAgreementPage()}/>
        <Route path="/manager form" render={() => this.renderManagerFormPage()}/>
        <Route path="/thanks" render={() => this.renderThanksPage()}/>
        <Route path="/thanks2" render={() => this.renderThanks2Page()}/>
        <Route path="/register" render={() => this.renderRegisterPage()}/>
        <Route path="/money" render={() => this.renderMoneyPage()}/>
        <Route path="/kyc" render={() => this.renderKYCPage()}/>
        <Route path="/accept" render={() => this.renderAcceptPage()}/>

        <Route path="/chat" render={() => this.renderChatPage()}/>
        <Route path="/decline" render={() => this.renderDeclinePage()}/>
        <Route path="/faq" render={() => this.renderFAQPage()}/>
        <Route path="/contacts" render={() => this.renderContactsPage()}/>
        <Route path="/user agreement" render={() => this.renderUserAgreementPage()}/>

        <Route path="/email" render={() => this.renderEmailPage()}/>
        <Route path="/logout" render={() => {return this.renderManagersPage();}}/>
      </Switch>
    );

    switch (this.state.currentPage.toLowerCase()) {
      case "login":
        return this.renderLoginPage();
      case "portfolios":
        // if (this.state.user == 0)
          return this.renderPortfoliosPage();
        // return this.renderManagerPortfoliosPage();
      case "managers":
        return this.renderManagersPage();
      case "account":
        // if (this.state.user == 0)
          return this.renderAccountPage();
        // return this.renderManagerAccountPage();
      case "about us":
        return this.renderAboutUsPage();
      case "origin":
        return this.renderOriginPage();
      case "invest":
        return this.renderInvestPage();

      case "legal":
        return this.renderLegalPage();
      case "contacts":
        return this.renderContactsPage();
      case "methodology":
        return this.renderMethodologyPage();
      case "press":
        return this.renderPressPage();
      case "help center":
        return this.renderHelpCenterPage();
      case "blog":
        return this.renderBlogPage();

      case "manager":
        return this.renderManagerPage();
      case "algorythm":
        return this.renderAlgorythmPage();

      /* FORMS */
      case "static form":
        return this.renderStaticFormPage();
      case "dynamic form":
        return this.renderDynamicFormPage();
      case "agreement":
        return this.renderAgreementPage();
      case "manager form":
        return this.renderManagerFormPage();
      case "thanks":
        return this.renderThanksPage();
      case "thanks2":
        return this.renderThanks2Page();
      case "register":
        return this.renderRegisterPage();
      case "money":
        return this.renderMoneyPage();
      case "kyc":
        return this.renderKYCPage();
      case "accept":
        return this.renderAcceptPage();

      /* INVESTOR */
      case "portfolio":
        return this.renderPortfolioPage();
      case "chat":
        return this.renderChatPage();

      /* MANAGER */
      case "requests":
        return this.renderRequestsPage();
      case "request":
        return this.renderRequestPage();
      case "algorythms":
        return this.renderAlgorythmsPage();
      case "decline":
        return this.renderDeclinePage();

      /* NEW */
      case "faq":
        return this.renderFAQPage();
      case "contact":
        return this.renderContactPage();

      default:
        return this.renderManagersPage();
    }
  }

  renderLoginPage() {
    return (
      <div>
        <LoginForm title="" tryLogin={(login, password) => this.tryLogin(login, password)} />
        {/* <LoginForm title="Log in as Manager" tryLogin={(login, password) => this.tryLogin(login, password)} />
        <LoginForm title="Log in as Data Supplier" tryLogin={(login, password) => this.tryLogin(login, password)} /> */}
      </div>
    );
    return (
      <div className="login-box">
        <h3>Welcome back</h3>
        <b>Email</b>
        <input type="text" value={this.state.login} onChange={(event) => this.setState({ login: event.target.value })} placeholder="me@example.com" />
        <b>Password</b>
        <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder="password" />
        {/* <h3>Choose your role</h3>
        <select>
          <option onClick={() => this.setState({ login: "investor", password: "123" })}>investor</option>
          <option onClick={() => this.setState({ login: "manager", password: "123" })}>manager</option>
        </select> */}
        <button className="login" onClick={() => this.tryLogin()}>Log in</button>
      </div>
    );
  }
  renderLogin2Page() {
    return (
      <div>
        <LoginForm title="Login for Experts" tryLogin={(login, password) => this.tryLogin(login, password)} />
        <div className="column-center">
          <small>Not registered yet?</small>
          <Link to={"/register"}>Register</Link>
        </div>
        {/* <LoginForm title="Log in as Manager" tryLogin={(login, password) => this.tryLogin(login, password)} />
        <LoginForm title="Log in as Data Supplier" tryLogin={(login, password) => this.tryLogin(login, password)} /> */}
      </div>
    );
    return (
      <div className="login-box">
        <h3>Welcome back</h3>
        <b>Email</b>
        <input type="text" value={this.state.login} onChange={(event) => this.setState({ login: event.target.value })} placeholder="me@example.com" />
        <b>Password</b>
        <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder="password" />
        {/* <h3>Choose your role</h3>
        <select>
          <option onClick={() => this.setState({ login: "investor", password: "123" })}>investor</option>
          <option onClick={() => this.setState({ login: "manager", password: "123" })}>manager</option>
        </select> */}
        <button className="login" onClick={() => this.tryLogin()}>Log in</button>
      </div>
    );
  }

  renderPortfoliosPage() {
    var currentPage;
    var portfolios = this.state.portfolios.map(portfolio => {
      var investor = this.state.investors[portfolio.investor];
      var manager = this.state.managers[portfolio.manager];
      var alg = this.state.algorythms[portfolio.alg];

      return {
        type: "portfolio",
        id: portfolio.id,
        number: "",
        instrument: alg.name,
        profit: portfolio.profit,
        value: (portfolio.value * this.state.currentCurrencyPrices[portfolio.currency]).toFixed(1) + " " + this.state.currentCurrency,
        status: portfolio.status,
        cost: portfolio.cost,
      };
    });
    var statistics;

    switch (this.state.currentPortfoliosPage) {
      case "active":
        currentPage = (
          <div className="box">
            <h4>Active Portfolios</h4>
            <Sortable
              listings={portfolios}
              setPage={this.setPage.bind(this)}
            />
          </div>
        );
        break;
      case "archive":
        currentPage = (
          <div className="box">
            <h4>Archived Portfolios</h4>
            <Sortable
              listings={portfolios}
              setPage={this.setPage.bind(this)}
            />
          </div>
        );
        break;
      case "statistics":
        currentPage = (
          <div className="box">
            <h4>Statistics</h4>
            {statistics}
          </div>
        );
        break;
    }

    return (
      <div>
        <div className="second-header">
          <div className="container">
            <div className="title">
              <h2>My Portfolios</h2>
              <p className="grey">Total value</p>
            </div>
            <div className="description">
              <h2>$200.00</h2>
              <select>
                <option>USD</option>
                <option>EUR</option>
                <option>CNY</option>
                <option>BTC</option>
                <option>ETH</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="first-tab">
            {currentPage}
          </div>
          <div className="second-tab">
            <div className="box">
              <button className="transactions-link" onClick={() => this.setState({ currentPortfoliosPage: "active" })}>Active Portfolios</button>
              <button className="transactions-link" onClick={() => this.setState({ currentPortfoliosPage: "archive" })}>Archived Portfolios</button>
              <button className="transactions-link" onClick={() => this.setState({ currentPortfoliosPage: "statistics" })}>Portfolios Statistics</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderManagersPage() {
    var managers = this.state.managers.map(manager => {
      return {
        type: "manager",
        id: manager.id,
        number: "",
        img: "manager/" + manager.img,
        name: manager.name + " " + manager.surname,
        rating: manager.rating,
        clients: manager.clients,

        aum: 20.1,
        assets: manager.assets,
        profit: manager.profit,
        initial: manager.initial,
        output: manager.output,
        annual: manager.annual,
      };
    });

    return (
      <div>
        <div className="long-header"></div>
        <div className="container">
          <div className="box">
            <h2 className="text-center">Marketplace</h2>
            <Sortable
              listings={managers}
              setPage={this.setPage.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }

  renderAccountPage() {
    var changed = false;
    var accountPage;
    switch (this.state.currentAccountPage) {
      case "personal":
        accountPage = (
          <div className="box">
            {/* <div className="half padding-side">
              <h3 className="high">Personal Info</h3>
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last Name"/>
              <input type="text" placeholder="day of birth"/>
              <input type="text" placeholder="month"/>
              <input type="text" placeholder="year"/>
              <input type="text" placeholder="nationality"/>
            </div> */}
            <div className="half padding-side">
              <h3 className="high">Contact information</h3>
              <input type="text" placeholder="email"/>
              <input type="text" placeholder="phone number"/>
              <h3 className="high">Change password</h3>
              <input type="password" placeholder="old password"/>
              <input type="password" placeholder="new password"/>
              <input type="password" placeholder="repeat new password"/>
            </div>
            <div className="row-padding">
              <button className={changed ? "continue" : "continue"}>Save changes</button>
            </div>
          </div>
        );
        break;
        case "detailed":
          accountPage = (
            <div className="box">
              <div className="half padding-side">
                <h3 className="high">Personal Info</h3>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="phone number"/>
                <input type="text" placeholder="day of birth"/>
                <input type="text" placeholder="month"/>
                <input type="text" placeholder="year"/>
                <input type="text" placeholder="nationality"/>
              </div>
              <div className="row-padding">
                <button className={changed ? "continue" : "continue"}>Save changes</button>
              </div>
            </div>
          );
          break;
      case "address":
        accountPage = (
          <div className="box">
            <h3>Address Information</h3>
            <input type="text" placeholder="Street Address"/>
            <input type="text" placeholder="Postal Code"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="State"/>
            <input type="text" placeholder="Country"/>
            <div className="row-padding">
              <button className={changed ? "continue" : "continue"}>Save changes</button>
            </div>
          </div>
        );
        break;
      case "ID":
        accountPage = (
          <div className="box">
            <div className="row">
              <h3>ID or Passport</h3>
              <p>Please upload a photo or a scan of the following:</p>
              <div className="document-box">
                <h3 className="text-center">ID or Passport</h3>
                <div className="row">
                  <button className="continue">UPLOAD DOCUMENT</button>
                </div>
              </div>
              <div className="document-box">
                <h3 className="text-center">Selfie holding ID or Passport</h3>
                <div className="row">
                  <button className="continue">UPLOAD DOCUMENT</button>
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case "residency":
        accountPage = (
          <div className="box">
            <h3>Residency</h3>
            <p>Please upload proof of residency: an official document showing your name and current address. Note tha the entire document has to be scanned</p>
            <h4>Accepted Documents</h4>
            <ul>
              <li>Current utility bill (e.g. gas, water, electric cable, Internet and telephone)</li>
              <li>Mortgage statement</li>
              <li>Tax bill</li>
              <li>Driver's license</li>
              <li>House of motor ensurance certificate</li>
              <li>Credit card statement</li>
              <li>Bank statement</li>
            </ul>
            <div className="row">
              <div className="document-box">
                <h3 className="text-center">Choose one of the listed</h3>
                <div className="row">
                  <button className="continue">UPLOAD DOCUMENT</button>
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case "forms":
        accountPage = (
          <div className="box">
            <h3>Some forms</h3>
          </div>
        );
        break;
      case "kyc":
        accountPage = (
          <div className="box">
            <h3>Know Your Criminals</h3>
            <p>Some managers may requre KYC documents. Please upload them here.</p>
            <div className="row">
              <div className="document-box">
                <h3 className="text-center">KYC Documents</h3>
                <div className="row">
                  <button className="continue">UPLOAD DOCUMENT</button>
                </div>
              </div>
            </div>
          </div>
        );
        break;
    }
    return (
      <div>
        {/* {this.renderBackButton()} */}
        <div className="container">
          <h1>Account</h1>
          <div className="first-tab">
            {accountPage}
          </div>
          <div className="second-tab">
            <div className="box">
              <h4>Account Info</h4>
              <button className="transactions-link" onClick={() => this.setState({ currentAccountPage: "personal" })}>Personal Info</button>
              <button className="transactions-link" onClick={() => this.setState({ currentAccountPage: "address" })}>Address details</button>
              <button className="transactions-link" onClick={() => this.setState({ currentAccountPage: "ID" })}>ID confirmation</button>
              <button className="transactions-link" onClick={() => this.setState({ currentAccountPage: "residency" })}>Residency</button>
              <button className="transactions-link" onClick={() => this.setState({ currentAccountPage: "forms" })}>Fill forms</button>
              <button className="transactions-link" onClick={() => this.setState({ currentAccountPage: "kyc" })}>Know Your Criminals</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderManagerAccountPage() {
    this.setPage("account");
  }

  renderAboutUsPage() {
    return (
      <div className="container">
        <div className="box">
          <h2>About us</h2>
          <p>whitepaper and so on</p>
        </div>
      </div>
    );
  }

  renderOriginPage() {
    return (
      <div className="container">
        <div className="box">
          <h2>Origin</h2>
          <p>well, we are ICO</p>
        </div>
      </div>
    );
  }

  renderInvestPage() {
    this.setPage("managers");
    return (
      <div>
      </div>
    );
  }

  renderLegalPage() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="text-center">Legal Documents</h2>
          <h3>Client agreements</h3>
          <p>bla-bla-bla</p>
          <h3>General</h3>
          <p>bla-bla-bla</p>
          <h3>Taxes</h3>
          <p>bla-bla-bla</p>
        </div>
      </div>
    );
  }

  renderContactsPage() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="text-center">Our contacts</h2>
        </div>
      </div>
    );
  }

  renderMethodologyPage() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="text-center">Methodology</h2>
          <p>Nobody knows for sure</p>
        </div>
      </div>
    );
  }

  renderPressPage() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="text-center">Press</h2>
          <p>Press loves us, and bitconnect</p>
        </div>
      </div>
    );
  }

  renderHelpCenterPage() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="text-center">Help</h2>
          <p>Press on Invest button and all will be well</p>
        </div>
      </div>
    );
  }

  renderBlogPage() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="text-center">Blog</h2>
        </div>
      </div>
    );
  }

  renderLandingPage() {
    return (
      <div className="container">
        <div className="box">
          <h1 className="text-center">Landing page</h1>
        </div>
      </div>
    );
  }

  renderManagerPage(match) {
    var manager = this.state.managers.find(manager => manager.id == match.params.id);
    var company = this.state.companies.find(company => company.id == manager.company);
    var companies;
    var algs = this.state.algorythms.filter(alg => {
      return alg.creator == manager.id;
    });
    // }).map(alg =>
    //   <div className="manager-listing" onClick={() => this.setPage("algorythm", alg.id)}>
    //     <h4>{alg.name}</h4>
    //     <p className="grey">rating {alg.rating}/10</p>
    //   </div>
    // );

    return (
      <div>
        {/* {this.renderBackButton()} */}
        <div className="container">
          <div className="first-tab">
            <div className="manager-box">
              <div className="cover"></div>
              <div className="info">
                <div className="circle">
                  <img src={manager.img} className="avatar" />
                </div>
                <h2 className="text-center">{manager.name} {manager.surname}</h2>
                <h4 className="text-center">Age {manager.age}</h4>
                <div className="row-padding">
                  <div className="column center">
                    {/* {this.state.user !== -1 ? (<button className="back">Contact</button>) : ""} */}
                    <Link to={"/contact"}>
                      <button className="back">Contact</button>
                    </Link>
                    <Link to="/register">
                      <button className="continue">Invest</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row-padding">
              <div className="box">
                <h4>Fees</h4>
                {/* <p>Manager will ask you to agree with</p>
                <ul>
                  <li>Condition 1</li>
                  <li>Condition 2</li>
                  <li>Condition 3</li>
                  <li>Condition 4</li>
                </ul>
                <p>and also</p>
                <ul>
                  <li>Condition 1</li>
                  <li>Condition 2</li>
                  <li>Condition 3</li>
                  <li>Condition 4</li>
                </ul> */}
                {manager.terms}
              </div>
            </div>

            <div className="row-padding">
              <div className="box margin-right row">
                <div className="third">
                  <p className="blue">Social networks:</p>
                  <button className="facebook"></button>
                  <button className="twitter"></button>
                  <button className="linkedin"></button>
                </div>
                <div className="two-third">
                  <p className="blue">Biography:</p><p> {manager.biography}</p>
                </div>
              </div>
              {/* <div className="half-box">
                <div className="circle left">
                  <img src={"companies/" + company.img} className="avatar" />
                </div>
                <div className="half">
                  <p className="blue">Company</p>
                  <h3>{company.name}</h3>
                  <a>{company.site}</a>
                </div>
                <div className="row">
                  <p className="blue">Social networks:</p>
                  <button className="facebook"></button>
                  <button className="twitter"></button>
                  <button className="linkedin"></button>
                </div>
              </div>            */}
            </div>

          </div>
          <div className="second-tab">
            <div className="box">
              <div className="circle left">
                <img src={"companies/" + company.img} className="avatar" />
              </div>
              <div className="row">
                <p className="blue">Company</p>
                <h3>{company.name}</h3>
                <div className="row tridot">
                  <a>{company.site}</a>
                </div>
              </div>
              <div className="row">
                <p className="blue">Social networks:</p>
                <button className="facebook"></button>
                <button className="twitter"></button>
                <button className="linkedin"></button>
              </div>
            </div>
            <div className="box">
              <p className="blue">Methodology:</p><p> {manager.methodology}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderAlgorythmPage(match) {
    var alg = this.state.algorythms.find(algorytm => algorytm.id == match.params.id);
    var manager = this.state.managers.find(manager => manager.id == alg.manager);
    var investButton;
    if (this.state.user == -1)
      investButton = (<Link to={"/register"} className="continue">Invest</Link>);
    else
      investButton = (<button className="continue" onClick={() => this.setPage("manager form")}>Invest</button>);

    return (
      <div>
        {/* {this.renderBackButton()} */}
        <div className="container">
          <div className="box">
            <h3>{alg.name}</h3>
            <div className="question">
              <p className="grey left">by</p>
              <button className="transactions-link left" onClick={() => this.setPage("manager", manager.id)}>{manager.name} {manager.surname}</button>
            </div>
              <p>rating {alg.rating}/10</p>
              <p>1001 users</p>
              <p>minimum investment amount: 1ETH</p>
              <p>minimum investment period: 2 month</p>
              <p>average risk: 10%</p>
              <p>estimated income: +15%</p>
              <div className="row-padding">
              {investButton}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderStaticFormPage() {
    var form = this.state.staticQuestions.map(question =>
      <div className="form-question">
        <h4>{question.question}</h4>
        {
          question.answers.map(answer =>
          <div className="answer">
            <input type="radio" id={answer} />
            <label for={answer}>{answer}</label>
          </div>
        )
      }
      </div>
    );

    return (
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <div className="container">
              <h2>Risk Tolerance Profile Questions</h2>
              <h4 className="grey">Asked once</h4>
              {form}
              <div className="row-padding">
                <Link to={"/agreement"}>
                  <button className="back" onClick={() => this.prevousPage()}>Back</button>
                </Link>
                <Link to={"/dynamic form"}>
                  <button className="continue" onClick={() => this.setPage("dynamic form")}>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderDynamicFormPage() {
    var form = this.state.dynamicQuestions.map(question =>
      <div className="form-question">
        <h4>{question.question}</h4>
        {
          question.answers.map(answer =>
          <div className="answer">
            <input type="radio" id={answer} />
            <label for={answer}>{answer}</label>
          </div>
        )
      }
      </div>
    );

    return (
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <div className="container">
              <h2>Investement Goals & Strategy Aims</h2>
              <h4 className="grey">Asked every month (or quarter/year)</h4>
              {form}
              <div className="row-padding">
                <Link to={"/static form"}>
                  <button className="back" onClick={() => this.prevousPage()}>Back</button>
                </Link>
                <Link to={"/manager form"}>
                  <button className="continue" onClick={() => this.setPage("manager form")}>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAgreementPage() {
    return (
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <h1 className="text-center">Agreement</h1>
            {/* <p>U agree with that by the way</p>
            <ul>
              <li>Condition 1</li>
              <li>Condition 2</li>
              <li>Condition 3</li>
              <li>Condition 4</li>
            </ul>
            <p>U agree with that too</p>
            <ul>
              <li>Condition 1</li>
              <li>Condition 2</li>
              <li>Condition 3</li>
              <li>Condition 4</li>
            </ul>
            <p>U agree with that also</p>
            <ul>
              <li>Condition 1</li>
              <li>Condition 2</li>
              <li>Condition 3</li>
              <li>Condition 4</li>
            </ul> */}
            {newLines(this.state.agreement)}
            <div className="row-padding">
              <Link to={"/email"}>
                <button className="back" onClick={() => this.prevousPage()}>Back</button>
              </Link>
              <Link to={"/static form"}>
                <button className="continue" onClick={() => { this.setPage("static form"); this.setState({ user: 0 }); }}>Agree</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderManagerFormPage() {
    var manager = this.state.managers[this.state.algorythms[this.state.currentAlgorythm].creator];
    var form = this.state.managerQuestions.map(question =>
      <div className="form-question">
        <h4>{question.question}</h4>
        {
          question.answers.map(answer =>
          <div className="answer">
            <input type="radio" id={answer} />
            <label for={answer}>{answer}</label>
          </div>
        )
      }
      </div>
    );

    return (
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <div className="container">
              <h2>Manager Form Questions</h2>
              <h4 className="grey">Asked by manager ({manager.name} {manager.surname})</h4>
              {form}
              <div className="row-padding">
                <Link to={"/dynamic form"}>
                  <button className="back" onClick={() => this.prevousPage()}>Back</button>
                </Link>
                <Link to={"/kyc"}>
                  <button className="continue" onClick={() => this.setPage("KYC")}>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderThanksPage() {
    return(
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <h2>Thanks for your investment</h2>
            <p>By the way, u can invest more:</p>
            <div className="row-padding">
              <Link to={"/managers"}>
                <button className="continue" onClick={() => this.setPage("managers")}>Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderThanks2Page() {
    return(
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <h2>Thanks for filling forms</h2>
            <div className="row-padding">
              <Link to={"/accept"}>
                <button className="continue" onClick={() => this.setPage("accept")}>Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderRegisterPage() {
    return(
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <h2>Registration page</h2>
            {/* <div className="row-padding">
              <b>Name</b>
              <div className="row">
                <input type="text" placeholder="John" />
              </div>
              <b>Surname</b>
              <div className="row">
                <input type="text" placeholder="Appleseed" />
              </div>
              <b>Email</b>
              <div className="row">
                <input type="text" placeholder="me@example.com" />
              </div>
              <b>Password</b>
              <div className="row">
                <input type="password" placeholder="password" />
              </div>
              <b>Repeat password</b>
              <div className="row">
                <input type="password" placeholder="repeat password" />
              </div>
            </div> */}
              <div className="row">
                <b>Email</b>
              </div>
              <div className="row">
                <input type="text" value={this.state.login} onChange={(event) => this.setState({ login: event.target.value })} placeholder="me@example.com" />
              </div>
              <div className="row">
                <b>Password</b>
              </div>
              <div className="row">
                <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder="password" />
              </div>
              <div className="row-padding">
              <Link to={("/manager" + this.state.currentManager)}>
                <button className="back" onClick={() => this.prevousPage()}>Back</button>
              </Link>
              <Link to={"/email"}>
                <button className="continue" onClick={() => this.setPage("agreement")}>Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderKYCPage() {
    return(
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <h2>Know Your Criminals</h2>
            <div className="row-padding">
              <p>by clicking send, u send this data to manager</p>
            </div>
            <div className="row-padding">
              <Link to={"/manager form"}>
                <button className="back" onClick={() => this.prevousPage()}>Back</button>
              </Link>
              <Link to={"/thanks2"}>
                <button className="continue" onClick={() => this.setPage("thanks2")}>Send to manager</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAcceptPage() {
    return(
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <h2>Portfolio Preview</h2>
            <div className="user-agreement">
              <h4>User Agreement</h4>
              <ul>
                <li>U pay 5% to site</li>
                <li>U pay 10% to manager</li>
                <li>U'll get your money back in a month</li>
                <li>All risks are on U!!!</li>
              </ul>
              <ul>
                <li>U pay 5% to site</li>
                <li>U pay 10% to manager</li>
                <li>U'll get your money back in a month</li>
                <li>All risks are on U!!!</li>
              </ul>
            </div>
            <div className="row-padding">
              <Link to={"/thanks2"}>
                <button className="back" onClick={() => this.prevousPage()}>Back</button>
              </Link>
              <Link to={"/money"}>
                <button className="continue" onClick={() => this.setPage("money")}>Accept</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderMoneyPage() {
    return (
      <div>
        {/* {this.renderBackButton()} */}
        {this.renderProgressBar()}
        <div className="container">
          <div className="box">
            <h2>Send Money</h2>
            <div className="row">
              transfer 1 ETH to this address
            </div>
            <div className="row">
              0x3a8b4013eb7bb370d2fd4e2edbdaf6fd8af6a862
            </div>
            <div className="row">
              After money is received, u can see details in your Portfolios page
            </div>
            <div className="row-padding">
              <Link to="/accept">
                <button className="back" onClick={() => this.prevousPage()}>Back</button>
              </Link>
              <Link to="/portfolios">
                <button className="continue" onClick={() => this.setPage("portfolios")}>Finish</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderManagerControlPanelPage() {
    return (
      <div className="container">
        <div className="box">
          <h2>Manager Control Panel</h2>
          <p>В разработке</p>
        </div>
      </div>
    );
  }

  renderRequestsPage() {
    var requests = this.state.requests.slice().map((request, index) => {
      var investor = this.state.investors[request.investor];
      var date = new myDate(request.date);
      var registered = new myDate(investor.registered);
      var daysInSystem = registered.pastMonths();

      return {
        type: "request",
        id: investor.id,
        number: "",
        img: "investor/" + investor.img,
        id_shown: "1000" + investor.id,
        name: investor.name + " " + investor.surname,
        date: date.getTime(),
        type_shown: daysInSystem >= 6 ? "old" : "new",
        days: registered,
        kyc: investor.kyc ? "yes" : "no",
        value: (request.value * this.state.currentCurrencyPrices[request.currency]).toFixed(1) + " " + this.state.currentCurrency,
        status: request.status,
      };
    });

    return (
      <div>
        <div className="long-header"></div>
        <div className="container">
          <div className="box">
            <h2 className="text-center">Requests</h2>
            <Sortable
              listings={requests}
              setPage={this.setPage.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
  renderRequestPage(match) {
    var request = this.state.requests.find(request => request.id == match.params.id);
    var investor = this.state.investors.find(request => request.id == request.investor);
    var name;
    var age;
    if (investor.kyc == "yes") {
      name = <h4>{investor.name} {investor.surname}</h4>;
      age = <p>{investor.age} years old</p>;
    }
    else {
      name = <h4>{investor.email}</h4>;
      age = <p>KYC unfullfilled</p>;
    }

    return (
      <div>
        {/* {this.renderBackButton()} */}
        <div className="container">
          <div className="first-tab">
            <div className="box">
              <div className="circle left">
                <img src={investor.img} className="avatar" />
              </div>
              <div className="third">
                {name}
                <p>New client. 1   days on platform</p>
                {age}
                <p>client id 50{investor.id}00{investor.id}</p>
              </div>
              <div className="third text-right">
                <p>request number 2</p>
                <p>{request.date}</p>
              </div>
              <div className="row-padding">
                <Link to={"/chat"}>
                  <button className="continue" onClick={() => this.setPage("chat")}>Start chat</button>
                </Link>
              </div>
              <p>Target value: {request.value}{request.currency}</p>
              <p>Term 4 month</p>
              <p>Risk profile: 25%</p>
              <p>Target earning rate</p>
              <div className="row-padding">
                <button className="continue right" onClick={() => this.prevousPage()}>Accept</button>
                <button className="back right" onClick={() => this.setPage("decline")}>Decline</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderPortfolioPage(match) {
    var portfolio = this.state.portfolios.find(portfolio => portfolio.id == match.params.id);
    var investor = this.state.investors.find(investor => investor.id == portfolio.investor);
    var manager = this.state.managers.find(manager => manager.id == portfolio.manager);

    return (
      <div>
        {/* {this.renderBackButton()} */}
        <div className="container">
          <div className="first-tab">
            <div className="box">
              <div className="circle left">
                <img src={"../investor/" + investor.img} className="avatar" />
              </div>
              <div className="third">
                <h4>{investor.name} {investor.surname}</h4>
                <p>New client. 1   days on platform</p>
                <p>{investor.age} years old</p>
                <p>client id 50{investor.id}00{investor.id}</p>
              </div>
              <div className="row-padding">
                <button className="continue">Start chat</button>
              </div>
              <p>Target value: {portfolio.value}{portfolio.currency}</p>
              <p>Term 4 month</p>
              <p>Risk profile: 25%</p>
              <p>Target earning rate</p>
              <div className="row-padding">
                <button className="back right" onClick={() => this.prevousPage()}>Abort</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderAlgorythmsPage() {
    var currentPage;
    switch(this.state.currentAlgorythmsPage) {
      case "uploaded":
        currentPage = (
          <div className="box">
            <h2>Current Algorythms</h2>

          </div>
        );
        break;
      case "upload":
        currentPage = (
          <div className="box">
            <h2>Upload Algorythms</h2>
            <div className="row">
              <div className="document-box">
                <h3 className="text-center">Algorythm code</h3>
                <div className="row">
                  <button className="continue">UPLOAD FILE</button>
                </div>
              </div>
            </div>
          </div>
        );
        break;
    }

    return (
      <div className="container">
        <h1>Algorythms page</h1>
        <div className="first-tab">
          {currentPage}
        </div>
        <div className="second-tab">
          <div className="box">
            <button className="transactions-link" onClick={() => this.setState({ currentAlgorythmsPage: "uploaded" })}>Current Algorythms</button>
            <button className="transactions-link" onClick={() => this.setState({ currentAlgorythmsPage: "upload" })}>Upload new</button>
          </div>
        </div>
      </div>
    );
  }

  renderFAQPage() {
    return (
      <div className="container">
        <div className="box">
          <h2>FAQ</h2>
          <p>In development</p>
        </div>
      </div>
    );
  }

  renderContactPage() {
    return (
      <div className="container">
        <div className="box">
          <h2>Contact</h2>
          <p>In development</p>
        </div>
      </div>
    );
  }

  renderDeclinePage() {
    return (
      <div>
        {/* {this.renderBackButton()} */}
        <div className="container">
          <div className="box">
            <h3>Reason for decline</h3>
            <div className="row-padding">
              <input type="checkbox" id="1" />
              <label for="1">Insufficient information</label>
            </div>
            <div className="row-padding">
              <input type="checkbox" id="2" />
              <label for="2">Information is unacceptable</label>
            </div>
            <div className="row-padding">
              <input type="checkbox" id="3" />
              <label for="3">Other</label>
            </div>
            <div className="row-padding">
              <input type="textarea" placeholder="Comment"/>
            </div>
            <div className="row-padding">
              <button className="back" onClick={() => this.prevousPage()}>Back</button>
              <button className="continue" onClick={() => this.setPage("requests")}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderChatPage() {
    return (
      <div>
        {/* {this.renderBackButton()} */}
        <div className="container">
          <div className="box">
            <h3>Chat page</h3>
          </div>
        </div>
      </div>
    );
  }
  renderUserAgreementPage() {
    return (
      <div>
        <div className="container">
          <div className="box">
            <h3>User Agreement</h3>
            {newLines(this.state.agreement)}
          </div>
        </div>
      </div>
    );
  }
  renderEmailPage() {
    return (
      <div>
        <div className="container">
          <div className="box">
            <h3>Confirm Email</h3>
            <p>(Front-end can't send emails. So here is the next step without actually confirming email)</p>
            <div className="row-padding">
              <Link to={"/register"}>
                <button className="back">Back</button>
              </Link>
              <Link to="/agreement">
                <button className="continue">Confirm email</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    document.title = "WealthMan";

    const Loading = () => <div>Loading...</div>;

    // const Home = Loadable({
    //   loader: () => import('./routes/Home.js'),
    //   loading: Loading,
    // });

    var headerLinks;
    switch(this.state.user) {
      case -1:
        headerLinks = this.state.unloggedLinks;
        break;
      case 0:
        headerLinks = this.state.loggedInvestorLinks;
        break;
      case 1:
        headerLinks = this.state.loggedManagerLinks;
        break;
      case 2:
        headerLinks = this.state.loggedSuplierLinks;
        break;
    }
    headerLinks = headerLinks.map(link =>
      <li className="link">
        <Link to={"/" + link} className={link == "login" || link == "invest" ? link : "link"} onClick={() => {(link == "logout" ? this.logout() : "")}}>
          {capitalize(link)}
        </Link>
      </li>
    );
    var logo = this.state.user == -1 ? logoBlue : logoWhite;

    var footerLinks = this.state.footerLinks.map(link =>
      <li className="link">
        <Link to={"/" + link} className="link">
          {capitalize(link)}
        </Link>
      </li>
    );

    var logButton;
    if (this.state.user !== -1)
      logButton = (
        <Link to={"/"} className="login" onClick={() => this.logout()}>
          {/* Log out */}
        </Link>
      );
    else
      logButton = (
        <Link to={"/totallydifferentlogin"} className="login" onClick={() => this.setPage("login")}>
          {capitalize("login")}
        </Link>
      );

    return (
      <Router>
        <article className="page">
          <header className={this.state.user == -1 ? "header transparent" : "header"}>
            <div className="container">
              <Link to={(this.state.user == -1 ? "/managers" : "/portfolios")}>
                <img src={logo} className="logo"/>
              </Link>
              <ul className="links right">
                {headerLinks}
              </ul>
            </div>
          </header>
          <div className="content">
            {this.renderPage()}
          </div>
          <div className={this.state.user == -1 ? "footer" : "footer"}>
            <div className="footer-container">
              <div className="z1">
                <div className="half">
                  <div className="half">
                    <h4>Documents</h4>
                    <Link to={"/user agreement"}>
                      User Agreement
                    </Link>
                    <a href="https://wealthman.io/faq/">FAQ</a>
                    <a href="https://github.com/Wealthman">GitHub</a>
                  </div>
                  <div className="half">
                    <h4>Community</h4>
                    <a className="telegram" href="https://t.me/wealthman_global">Telegram</a>
                    <a className="bitcointalk" href="https://bitcointalk.org/index.php?topic=2006205">Bitcointalk</a>
                    <a className="facebook" href="https://www.facebook.com/WealthMan.io/">Facebook</a>
                    <a className="instagram" href="https://www.instagram.com/wealthman.io/">Instagram</a>
                  </div>
                </div>
                <div className="half">
                  <div className="half">
                    <h4>Blog</h4>
                    <a className="medium" href="https://medium.com/@Wealthman">Medium</a>
                    <a className="reddit" href="https://www.reddit.com/r/Wealthman/">Reddit</a>
                    <a className="twitter" href="https://twitter.com/wealthman_io">Twitter</a>
                    <a className="linkedin" href="https://www.linkedin.com/company/wealthman-io">Linkedin</a>
                    <a className="youtube" href="https://www.youtube.com/c/wealthman">YouTube</a>
                  </div>
                  <div className="half">
                    <h4>Wealthman</h4>
                    <a href="https://wealthman.io/#about">About</a>
                    <a href="https://wealthman.io/team/">Team</a>
                    <a href="https://wealthman.io/contact/">Contact</a>
                  </div>
                </div>
              </div>
              <div className="z2">
                <h4>For experts</h4>
                {logButton}
              </div>
            </div>
            <div className="row text-center white small">
              Copyright © 2018 Wealthman. All Rights Reserved. Privacy Policy
            </div>
          </div>
        </article>
      </Router>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    }
  }

  render() {
    return (
      <div className="login-box">
        <h3>{this.props.title}</h3>
        <b>Email</b>
        <input type="text" value={this.state.login} onChange={(event) => this.setState({ login: event.target.value })} placeholder="me@example.com" />
        <b>Password</b>
        <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder="password" />
        <Link to={"/account"}>
          <button className="login" onClick={() => this.props.tryLogin(this.state.login, this.state.password)}>Log in</button>
        </Link>
      </div>
    );
  }
}

function capitalize(string) {
  if (string.toLowerCase() === "id")
    return "ID";
  if (string.toLowerCase() === "kyc")
    return "KYC";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function newLines(string) {
  var paragraphs = [];
  var prevI = 0;

  for (var i = 0; i < string.length; i++)
    if (string[i] === '\n') {
      paragraphs.push(string.slice(prevI, i));
      prevI = i;
    }
  paragraphs.push(string.slice(prevI));

  return <div>{paragraphs.map(paragraph => <p>{paragraph}</p>)}</div>;
}

export default App;
