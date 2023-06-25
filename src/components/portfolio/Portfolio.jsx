import React from 'react'
import './portfolio.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PortfolioGallery from './PortfolioGallery'
import EcommerceGallery from './EcommerceGallery'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-mobile">
        <h2>&nbsp;&nbsp;Portfolio&nbsp;&nbsp;</h2>
        <Tabs>
          <TabList>
            <Tab>Blog</Tab>
            <Tab>Wiki</Tab>
            <Tab>eCommerce</Tab>
            <Tab>Other Projects</Tab>
          </TabList>

          <TabPanel className="tabpanel">
            <h3>Blog</h3>
            <p className="portfolio-text">
            I wanted to start a blog as I had done some WordPress development for clients before and I was
              pleasantly surprised with how easy the user interface was to use. It started to occur to me the 
              reason why WordPress has SO many users; it's just easy!<br/><br/>
              The difficult part of starting a blog wasn't getting it installed and configured on my server, but
              actually having to create the content! I'm sure most other developers would agree that having to put
              your thoughts into words (and think that people would want to read it), is absurd!<br/><br/>
              However, at the time I was setting up the WordPress install, I was developing a lovely little hobby...
              Building keyboards!<br/><br/>
              If you'd like to take a look over my articles, you can find my blog
              <a href="https://ademkanca.co.uk/blog" target="_blank" rel="noreferrer"> here!</a><br/><br/>
              Otherwise, feel free to read my most recent blog article below:
              <iframe src="https://ademkanca.co.uk/blog/index.php/2023/01/07/my-new-hobby/" title="blog" className="blog__frame"></iframe>
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <h3>Wiki</h3>
            <p className="portfolio-text">
              I decided to create a wiki purely for the fact that I wanted to have easy access to
              all the different, handy, snippets of code that I have created/thoroughly used during my experience as a web developer.<br/><br/>
              An added bonus was that I was able to get an understanding of how wikis worked. I settled with using
              Doku Wiki which was actually a very nifty, little open-source wiki software. The docs weren't the best, 
              but overall, it was quite intuitive and any issue I had was quickly resolved using Google-Fu!<br/><br/>
              If you'd like to take a look over the range of the snippets and tutorials I created, 
              you can find a link to my wiki <a href="https://ademkanca.co.uk/wiki" target="_blank" rel="noreferrer">here!</a>
            </p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <h3>eCommerce</h3>
            <EcommerceGallery/>
          </TabPanel>
          <TabPanel className="tabpanel">
            <h3>Other Projects</h3>
            <PortfolioGallery/>
          </TabPanel>
        </Tabs>
      </div>
      <div className="portfolio-desktop">
        <h2>&nbsp;&nbsp;Portfolio&nbsp;&nbsp;</h2>
        <Tabs>
          <TabList>
            <Tab>Blog</Tab>
            <Tab>Wiki</Tab>
            <Tab>eCommerce</Tab>
            <Tab>Other Projects</Tab>
          </TabList>

          <TabPanel className="tabpanel">
            <h3>Blog</h3>
            <p className="portfolio-text">
              I wanted to start a blog as I had done some WordPress development for clients before and I was
              pleasantly surprised with how easy the user interface was to use. It started to occur to me the 
              reason why WordPress has SO many users; it's just easy!<br/><br/>
              The difficult part of starting a blog wasn't getting it installed and configured on my server, but
              actually having to create the content! I'm sure most other developers would agree that having to put
              your thoughts into words (and think that people would want to read it), is absurd!<br/><br/>
              However, at the time I was setting up the WordPress install, I was developing a lovely little hobby...
              Building keyboards!<br/><br/>
              If you'd like to take a look over my articles, you can find my blog
              <a href="https://ademkanca.co.uk/blog" target="_blank" rel="noreferrer"> here!</a><br/><br/>
              Otherwise, feel free to read my most recent blog article below:
            </p>
            <iframe src="https://ademkanca.co.uk/blog/index.php/2023/01/07/my-new-hobby/" title="blog" className="blog__frame"></iframe>
          </TabPanel>
          <TabPanel className="tabpanel">
            <h3>Wiki</h3>
            <div className="frame__container">
              <p className="portfolio-text">
                I decided to create a wiki purely for the fact that I wanted to have easy access to
                all the different, handy, snippets of code that I have created/thoroughly used during my experience as a web developer.<br/><br/>
                An added bonus was that I was able to get an understanding of how wikis worked. I settled with using
                Doku Wiki which was actually a very nifty, little open-source wiki software. The docs weren't the best, 
                but overall, it was quite intuitive and any issue I had was quickly resolved using Google-Fu!<br/><br/>
                If you'd like to take a look over the range of the snippets and tutorials I created, 
                you can find a link to my wiki <a href="https://ademkanca.co.uk/wiki" target="_blank" rel="noreferrer">here!</a><br/><br/>
                I thought I'd just add an embed below for some quick HTML snippets:
              </p>
              <iframe src="https://ademkanca.co.uk/wiki/doku?id=html" title="wiki" className="blog__frame"></iframe>
            </div>
          </TabPanel>
          <TabPanel className="tabpanel">
            <h3>eCommerce</h3>
            <EcommerceGallery/>
          </TabPanel>
          <TabPanel className="tabpanel">
            <h3>Other Projects</h3>
            <PortfolioGallery/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Portfolio